import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    keywords,     // "Java,React" (From the top search bar)
    location,     // "Panipat" (From sidebar)
    experience,   // "0-1,1-3" (From sidebar)
    skills,       // "Java,Python" (From sidebar checkboxes) <-- THIS WAS MISSING
    sort = "recent",
    
    // Other filters
    gender,
    portal,
    notice_period,
    company,
  } = req.query;

  // 1. Initialize the master AND array
  // This ensures that (Skills) AND (Location) must BOTH be true
  const andConditions: any[] = [];

  // Helper to split string into array safely
  const toArr = (val: any) => (typeof val === "string" ? val.split(",").filter(Boolean) : []);

  // --- A. Handle Specific Skills Filter (Sidebar) ---
  // Logic: (Skill A OR Skill B) found in either 'skills_raw' OR 'top_skills'
  const skillList = toArr(skills);
  if (skillList.length > 0) {
    const skillOrConditions = skillList.map((skill) => ({
      OR: [
        { skills_raw: { contains: skill, mode: "insensitive" } },
        { top_skills: { contains: skill, mode: "insensitive" } }
      ]
    }));

    // Add this group to the master AND
    andConditions.push({ OR: skillOrConditions });
  }

  // --- B. Handle Keywords (Top Search Bar) ---
  // Logic: Match Tag 1 in ANY field OR Match Tag 2 in ANY field
  const keywordList = toArr(keywords);
  if (keywordList.length > 0) {
    const keywordOrConditions = keywordList.map((kw) => ({
      OR: [
        { full_name: { contains: kw, mode: "insensitive" } },
        { skills_raw: { contains: kw, mode: "insensitive" } },
        { top_skills: { contains: kw, mode: "insensitive" } },
        { current_company: { contains: kw, mode: "insensitive" } },
        { remark: { contains: kw, mode: "insensitive" } },
        { qualification: { contains: kw, mode: "insensitive" } },
      ],
    }));

    andConditions.push({ OR: keywordOrConditions });
  }

  // --- C. Handle Location ---
  const locList = toArr(location);
  if (locList.length > 0) {
    const locationOrConditions = locList.map((loc) => ({
      location: { contains: loc, mode: "insensitive" },
    }));
    
    andConditions.push({ OR: locationOrConditions });
  }

  // --- D. Handle Company (Sidebar) ---
  const compList = toArr(company);
  if (compList.length > 0) {
    const compOrConditions = compList.map((comp) => ({
      current_company: { contains: comp, mode: "insensitive" },
    }));
    
    andConditions.push({ OR: compOrConditions });
  }

  // --- E. Handle Experience ---
  const expList = toArr(experience);
  if (expList.length > 0) {
    const expMap: Record<string, [number, number]> = {
      "0-1": [0, 1],
      "1-3": [1, 3],
      "3-5": [3, 5],
      "5-10": [5, 10],
      "10+": [10, 50],
    };

    const ranges = expList.map((k) => expMap[k]).filter(Boolean);
    
    if (ranges.length > 0) {
      const expOrConditions = ranges.map(([min, max]) => ({
        total_experience: { gte: min, lte: max },
      }));
      
      andConditions.push({ OR: expOrConditions });
    }
  }

  // --- F. Other Exact Match Filters ---
  const portals = toArr(portal);
  if (portals.length > 0) {
    andConditions.push({ source_portal: { in: portals } });
  }

  const notices = toArr(notice_period);
  if (notices.length > 0) {
    andConditions.push({ notice_period: { in: notices } });
  }

  const genders = toArr(gender);
  if (genders.length > 0) {
    andConditions.push({ gender: { in: genders } });
  }

  // --- Sorting ---
  const orderBy: any = sort === "oldest" ? { portal_date: "asc" } : { portal_date: "desc" };

  try {
    const whereClause = andConditions.length > 0 ? { AND: andConditions } : {};

    const candidates = await prisma.candidates.findMany({
      where: whereClause,
      orderBy,
    });

    return res.json(candidates);
  } catch (error) {
    console.error("Search API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}