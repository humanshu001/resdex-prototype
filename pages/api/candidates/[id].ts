import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const updated = await prisma.candidates.update({
      where: { id: String(id) },
      data: req.body,
    });

    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    await prisma.candidates.delete({
      where: { id: String(id) },
    });

    return res.status(204).end();
  }

  return res.status(405).json({ message: "Method not allowed" });
}
