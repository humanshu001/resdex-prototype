import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET and require admin cookie (middleware protects pages but API is public by default)
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  const isAdmin = req.cookies?.admin_auth === "valid";
  if (!isAdmin) return res.status(403).json({ message: "Forbidden" });

  const page = parseInt((req.query.page as string) || "1", 10);
  const perPage = parseInt((req.query.perPage as string) || "20", 10);
  const skip = Math.max(0, (page - 1) * perPage);

  // Filters
  const viewerQuery = (req.query.viewer as string) || "";
  const candidateQuery = (req.query.candidate as string) || "";
  const resumeViewed = (req.query.resume_viewed as string) || ""; // 'yes' | 'no' | ''
  const dateFrom = (req.query.date_from as string) || "";
  const dateTo = (req.query.date_to as string) || "";

  try {
    const where: any = {};

    // resume_viewed filter
    if (resumeViewed === "yes") where.resume_viewed = true;
    if (resumeViewed === "no") where.resume_viewed = false;

    // date range
    if (dateFrom || dateTo) {
      where.viewed_at = {};
      if (dateFrom) where.viewed_at.gte = new Date(dateFrom);
      if (dateTo) where.viewed_at.lte = new Date(dateTo);
    }

    // viewer / candidate filters: resolve to ids first
    if (viewerQuery) {
      const matched = await prisma.users.findMany({ where: { OR: [ { email: { contains: viewerQuery, mode: 'insensitive' } }, { full_name: { contains: viewerQuery, mode: 'insensitive' } } ] }, select: { id: true } });
      const ids = matched.map((m) => m.id);
      if (ids.length === 0) return res.status(200).json({ items: [], page, perPage, total: 0 });
      where.viewer_id = { in: ids };
    }

    if (candidateQuery) {
      const matched = await prisma.candidates.findMany({ where: { full_name: { contains: candidateQuery, mode: 'insensitive' } }, select: { id: true } });
      const ids = matched.map((m) => m.id);
      if (ids.length === 0) return res.status(200).json({ items: [], page, perPage, total: 0 });
      where.candidate_id = { in: ids };
    }

    const [views, total] = await Promise.all([
      prisma.profile_views.findMany({ where, orderBy: { viewed_at: "desc" }, skip, take: perPage }),
      prisma.profile_views.count({ where }),
    ]);

    // Collect ids to batch-load related records
    const viewerIds = Array.from(new Set(views.map((v) => v.viewer_id).filter(Boolean))) as string[];
    const candidateIds = Array.from(new Set(views.map((v) => v.candidate_id))) as string[];

    const [viewers, candidates] = await Promise.all([
      viewerIds.length ? prisma.users.findMany({ where: { id: { in: viewerIds } } }) : Promise.resolve([]),
      candidateIds.length ? prisma.candidates.findMany({ where: { id: { in: candidateIds } } }) : Promise.resolve([]),
    ]);

    const viewerMap = new Map(viewers.map((u) => [u.id, u]));
    const candidateMap = new Map(candidates.map((c) => [c.id, c]));

    const items = views.map((v) => ({
      ...v,
      viewer: v.viewer_id ? viewerMap.get(v.viewer_id) ?? null : null,
      candidate: candidateMap.get(v.candidate_id) ?? null,
    }));

    return res.status(200).json({ items, page, perPage, total });
  } catch (err) {
    console.error("Failed to fetch profile views", err);
    return res.status(500).json({ message: "Server error" });
  }
}
