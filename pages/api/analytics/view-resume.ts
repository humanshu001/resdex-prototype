import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Accept PATCH for lightweight idempotent logging from client
  if (req.method !== "PATCH") return res.status(405).json({ message: "Method not allowed" });

  const { candidateId } = req.body;
  const viewerId = req.cookies?.user ?? null;

  if (!candidateId) return res.status(400).json({ message: "candidateId required" });

  try {
    await prisma.profile_views.create({
      data: {
        viewer_id: viewerId,
        candidate_id: candidateId,
        resume_viewed: true,
        resume_viewed_at: new Date(),
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to log resume view", err);
    return res.status(500).json({ message: "Failed to log" });
  }
}
