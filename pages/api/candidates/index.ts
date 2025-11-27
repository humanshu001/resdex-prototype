import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const filters = req.query;

    const candidates = await prisma.candidates.findMany({
      where: {
        full_name: filters.name
          ? { contains: String(filters.name), mode: "insensitive" }
          : undefined,
        location: filters.location
          ? { contains: String(filters.location), mode: "insensitive" }
          : undefined,
      },
    });

    return res.status(200).json(candidates);
  }

  if (req.method === "POST") {
    const candidate = await prisma.candidates.create({
      data: req.body,
    });
    return res.status(201).json(candidate);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
