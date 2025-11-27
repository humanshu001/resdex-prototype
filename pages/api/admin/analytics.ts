import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const totalCandidates = await prisma.candidates.count();

  const newToday = await prisma.candidates.count({
    where: {
      created_at: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
    },
  });

  const avgExpData = await prisma.candidates.aggregate({
    _avg: { experience_years: true },
  });

  res.json({
    totalCandidates,
    newToday,
    avgExp: Number(avgExpData._avg.experience_years || 0).toFixed(1),
  });
}
