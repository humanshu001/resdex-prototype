import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // 1. Fetch distinct values for dropdowns
    const [
      portals,
      noticePeriods,
      employmentTypes,
      genders,
      locations,
      companies,
      roles,
      preferredLocations,
      qualifications, // Added qualifications
      skillsRaw,
    ] = await Promise.all([
      prisma.candidates.findMany({
        distinct: ["source_portal"],
        select: { source_portal: true },
        where: { source_portal: { not: null } }
      }),
      prisma.candidates.findMany({
        distinct: ["notice_period"],
        select: { notice_period: true },
        where: { notice_period: { not: null } }
      }),
      prisma.candidates.findMany({
        distinct: ["employment_type"],
        select: { employment_type: true },
        where: { employment_type: { not: null } }
      }),
      prisma.candidates.findMany({
        distinct: ["gender"],
        select: { gender: true },
        where: { gender: { not: null } }
      }),
      prisma.candidates.findMany({
        distinct: ["location"],
        select: { location: true },
        where: { location: { not: null } }
      }),
      prisma.candidates.findMany({
        distinct: ["current_company"],
        select: { current_company: true },
        where: { current_company: { not: null } }
      }),
      // For arrays, we fetch all non-empty rows and flatten later
      // (Prisma distinct on arrays finds unique *sets*, not unique items)
      prisma.candidates.findMany({
        select: { preferred_roles: true },
        where: { preferred_roles: { isEmpty: false } },
        take: 1000, // Limit to avoid performance hit on large DBs
      }),
      prisma.candidates.findMany({
        select: { preferred_locations: true },
        where: { preferred_locations: { isEmpty: false } },
        take: 1000,
      }),
      prisma.candidates.findMany({
        distinct: ["qualification"],
        select: { qualification: true },
        where: { qualification: { not: null } }
      }),
      prisma.candidates.findMany({
        distinct: ["skills_raw", "top_skills"],
        select: { skills_raw: true, top_skills: true },
        where: { skills_raw: { not: null }, top_skills: { not: null } }
      }),
    ]);

    // 2. Build experience counts (Using 'total_experience' Decimal field)
    const expRangeMap: Record<string, [number, number]> = {
      "0-1": [0, 1],
      "1-3": [1, 3],
      "3-5": [3, 5],
      "5-10": [5, 10],
      "10+": [10, 50],
    };

    const expLabels: Record<string, string> = {
      "0-1": "0 - 1 years",
      "1-3": "1 - 3 years",
      "3-5": "3 - 5 years",
      "5-10": "5 - 10 years",
      "10+": "10+ years",
    };

    const expCounts = await Promise.all(
      Object.entries(expRangeMap).map(async ([key, [min, max]]) => {
        const count = await prisma.candidates.count({
          where: { 
            total_experience: { gte: min, lte: max } 
          },
        });
        return { key, count };
      })
    );

    const experienceOptions = expCounts
      .filter((e) => e.count > 0)
      .map((e) => ({ key: e.key, label: expLabels[e.key] }));

    // 3. Flatten and Deduplicate Arrays
    const flatRoles = roles.flatMap((r) => r.preferred_roles);
    const uniqueRoles = Array.from(new Set(flatRoles));

    const flatPrefLocs = preferredLocations.flatMap((l) => l.preferred_locations);
    const uniquePrefLocs = Array.from(new Set(flatPrefLocs));

    res.json({
      portals: Array.from(new Set(portals.map((x) => x.source_portal))).sort(),
      noticePeriods: Array.from(new Set(noticePeriods.map((x) => x.notice_period))).sort(),
      employmentTypes: Array.from(new Set(employmentTypes.map((x) => x.employment_type))).sort(),
      locations: Array.from(new Set(locations.map((x) => x.location))).sort(),
      companies: Array.from(new Set(companies.map((x) => x.current_company))).sort(),
      qualifications: Array.from(new Set(qualifications.map((x) => x.qualification))).sort(),
      preferredRoles: Array.from(new Set(uniqueRoles)).sort(),
      preferredLocations: Array.from(new Set(uniquePrefLocs)).sort(),
      experienceOptions,
      skills: Array.from(new Set(skillsRaw.map((x) => x.skills_raw?.split(",")).flat().filter(Boolean))).sort(),
    });

  } catch (err: any) {
    console.error("Filter API Error:", err);
    return res.status(500).json({ message: "Failed to load filters", error: err.message });
  }
}