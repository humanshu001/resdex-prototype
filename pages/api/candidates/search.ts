import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    keywords,
    experience, // "0-1,1-3"
    sort = "recent",
    gender,
    portal,       // "Naukri,Indeed"
    notice_period, // "15 Days,Immediate"
    location,     // "Delhi,Panipat"
    company,
    skills,      // "JavaScript,React"
  } = req.query;

  const where: any = {};

  // Helper to split comma strings into array
  const toArr = (val: any) => (typeof val === "string" ? val.split(",").filter(Boolean) : []);

  // --- Multi-Select Filters (Using 'in') ---
  
  const portals = toArr(portal);
  if (portals.length > 0) {
    where.source_portal = { in: portals, mode: 'insensitive' }; // Note: mode insensitive might not work with 'in' depending on prisma version, usually 'in' is case sensitive. If issues, remove mode.
  }

  const notices = toArr(notice_period); // Note: frontend sends 'notice', map correctly
  if (notices.length > 0) where.notice_period = { in: notices };

  const locs = toArr(location);
  if (locs.length > 0) {
    // Partial matching for multiple locations is tricky. 
    // Usually checkboxes imply exact matches from the list.
    // If you want "contains" logic for multiple items, you need OR logic.
    where.OR = locs.map(l => ({ location: { contains: l, mode: "insensitive" } }));
  }

  const comps = toArr(company);
  if (comps.length > 0) {
     // Similar logic for companies, check if it's in current OR raw list
     where.AND = [ // Use AND to combine with previous filters
       {
         OR: comps.flatMap(c => [
           { current_company: { contains: c, mode: "insensitive" } },
           { companies_raw: { contains: c, mode: "insensitive" } }
         ])
       }
     ];
  }

  const skillsArr = toArr(skills);
  if (skillsArr.length > 0) {
    where.OR = [
      ...(where.OR || []),
      ...skillsArr.map(skill => ({
        OR: [
          { skills_raw: { contains: skill, mode: "insensitive" } },
          { top_skills: { contains: skill, mode: "insensitive" } }
        ]
      }))
    ];
  }

  // --- Experience Filter (Handling Multiple Ranges) ---
  const exps = toArr(experience);
  if (exps.length > 0) {
    const map: any = {
      "0-1": [0, 1],
      "1-3": [1, 3],
      "3-5": [3, 5],
      "5-10": [5, 10],
      "10+": [10, 50],
    };
    
    // Construct OR query for ranges: (0-1) OR (3-5)
    const ranges = exps.map(k => map[k]).filter(Boolean);
    if (ranges.length > 0) {
      const expConditions = ranges.map(([min, max]: number[]) => ({
        total_experience: { gte: min, lte: max }
      }));
      
      // Merge into existing OR or create new AND group
      if (where.OR) {
        // If OR already exists (from location), we need to be careful.
        // Prisma doesn't support mixing root-level AND/OR easily without explicit structure.
        // Safer to wrap everything in AND if mixing complex logic.
        // For simplicity here, let's assume we add to a specialized structure:
        const existingOR = where.OR;
        delete where.OR;
        where.AND = [
            ...(where.AND || []),
            { OR: existingOR },
            { OR: expConditions }
        ];
      } else {
         where.OR = expConditions;
      }
    }
  }

  // --- Global Keyword Search ---
  if (keywords) {
    const kw = String(keywords).toLowerCase();
    const searchCondition = {
      OR: [
        { full_name: { contains: kw, mode: "insensitive" } },
        { skills_raw: { contains: kw, mode: "insensitive" } },
        { top_skills: { contains: kw, mode: "insensitive" } },
        { feedback: { contains: kw, mode: "insensitive" } },
        { remark: { contains: kw, mode: "insensitive" } },
        { qualification: { contains: kw, mode: "insensitive" } },
        { location: { contains: kw, mode: "insensitive" } }, // Allow free text search too
      ],
    };

    // Push to AND array to ensure it works *with* filters
    where.AND = [...(where.AND || []), searchCondition];
  }

  // --- Sorting ---
  const orderBy: any = sort === "oldest" ? { portal_date: "asc" } : { portal_date: "desc" };

  try {
    const candidates = await prisma.candidates.findMany({
      where,
      orderBy,
    });
    return res.json(candidates);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}