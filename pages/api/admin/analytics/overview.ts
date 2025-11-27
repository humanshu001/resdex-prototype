import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

// Simple in-memory cache for the analytics overview response.
// Note: this is process-local and works well for a single-instance server or dev mode.
// For multi-instance production, replace with Redis or another shared cache.
let cachedOverview: { data: any; expiresAt: number } | null = null;
const CACHE_TTL_SECONDS = 30; // tune as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  const isAdmin = req.cookies?.admin_auth === "valid";
  if (!isAdmin) return res.status(403).json({ message: "Forbidden" });

  // Return cached response when available and not expired
  if (cachedOverview && Date.now() < cachedOverview.expiresAt) {
    res.setHeader('X-Cache', 'HIT')
    // advise clients to cache briefly as well
    res.setHeader('Cache-Control', `private, max-age=${Math.max(0, Math.floor((cachedOverview.expiresAt - Date.now()) / 1000))}`)
    return res.status(200).json(cachedOverview.data);
  }

  try {
    // Total counts
    const totalProfileViews = await prisma.profile_views.count({ where: { resume_viewed: false } });
    const totalResumeViews = await prisma.profile_views.count({ where: { resume_viewed: true } });

    // Last 30 days views per day (uses raw SQL for grouping)
    const viewsByDay: Array<{ day: string; count: number }> = await prisma.$queryRaw`
      SELECT to_char(date_trunc('day', viewed_at), 'YYYY-MM-DD') AS day, COUNT(*)::int as count
      FROM profile_views
      WHERE viewed_at >= NOW() - INTERVAL '29 days'
      GROUP BY day
      ORDER BY day
    `;

    // Top 10 candidates by views
    const topCandidatesRaw: Array<{ candidate_id: string; cnt: number }> = await prisma.$queryRaw`
      SELECT candidate_id, COUNT(*)::int AS cnt
      FROM profile_views
      GROUP BY candidate_id
      ORDER BY cnt DESC
      LIMIT 10
    `;

    const candidateIds = topCandidatesRaw.map((r) => r.candidate_id);
    const candidates = candidateIds.length
      ? await prisma.candidates.findMany({ where: { id: { in: candidateIds } }, select: { id: true, full_name: true } })
      : [];

    const candidateMap = new Map(candidates.map((c) => [c.id, c]));

    const topCandidates = topCandidatesRaw.map((r) => ({
      candidate_id: r.candidate_id,
      name: candidateMap.get(r.candidate_id)?.full_name ?? r.candidate_id,
      count: r.cnt,
    }));

    // Top viewers by views (limit 10)
    const topViewersRaw: Array<{ viewer_id: string | null; cnt: number }> = await prisma.$queryRaw`
      SELECT viewer_id, COUNT(*)::int AS cnt
      FROM profile_views
      WHERE viewer_id IS NOT NULL
      GROUP BY viewer_id
      ORDER BY cnt DESC
      LIMIT 10
    `;

    const viewerIds = topViewersRaw.map((r) => r.viewer_id as string).filter(Boolean);
    const viewers = viewerIds.length
      ? await prisma.users.findMany({ where: { id: { in: viewerIds } }, select: { id: true, full_name: true, email: true } })
      : [];

    const viewerMap = new Map(viewers.map((v) => [v.id, v]));

    const topViewers = topViewersRaw.map((r) => ({
      viewer_id: r.viewer_id,
      name: r.viewer_id ? (viewerMap.get(r.viewer_id as string)?.full_name ?? viewerMap.get(r.viewer_id as string)?.email ?? r.viewer_id) : 'Anonymous',
      count: r.cnt,
    }));

    // Viewers summary: profile vs resume counts per user (limit 50)
    const viewersSummaryRaw: Array<{ viewer_id: string; profile_count: number; resume_count: number }> = await prisma.$queryRaw`
      SELECT
        viewer_id,
        SUM(CASE WHEN resume_viewed = false THEN 1 ELSE 0 END)::int AS profile_count,
        SUM(CASE WHEN resume_viewed = true THEN 1 ELSE 0 END)::int AS resume_count
      FROM profile_views
      WHERE viewer_id IS NOT NULL
      GROUP BY viewer_id
      ORDER BY (SUM(CASE WHEN resume_viewed = false THEN 1 ELSE 0 END) + SUM(CASE WHEN resume_viewed = true THEN 1 ELSE 0 END)) DESC
      LIMIT 50
    `;

    const viewerIdsSummary = viewersSummaryRaw.map((r) => r.viewer_id);
    const viewersForSummary = viewerIdsSummary.length
      ? await prisma.users.findMany({ where: { id: { in: viewerIdsSummary } }, select: { id: true, full_name: true, email: true } })
      : [];
    const viewerSummaryMap = new Map(viewersForSummary.map((v) => [v.id, v]));

    const viewersSummary = viewersSummaryRaw.map((r) => ({
      viewer_id: r.viewer_id,
      name: viewerSummaryMap.get(r.viewer_id)?.full_name ?? viewerSummaryMap.get(r.viewer_id)?.email ?? r.viewer_id,
      profile_count: r.profile_count,
      resume_count: r.resume_count,
    }));

    const payload = {
      totals: {
        profileViews: totalProfileViews,
        resumeViews: totalResumeViews,
      },
      viewsByDay,
      topCandidates,
      topViewers,
      viewersSummary,
    };

    // populate cache
    cachedOverview = {
      data: payload,
      expiresAt: Date.now() + CACHE_TTL_SECONDS * 1000,
    };

    res.setHeader('X-Cache', 'MISS')
    res.setHeader('Cache-Control', `private, max-age=${CACHE_TTL_SECONDS}`)
    return res.status(200).json(payload);
  } catch (err) {
    console.error('Failed to compute analytics overview', err);
    return res.status(500).json({ message: 'Server error' });
  }
}
