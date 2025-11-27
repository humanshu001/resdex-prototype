import React, { useEffect, useState } from "react";
import Head from "next/head";
import AdminLayout from "@/components/admin/AdminLayout";

interface ViewItem {
  id: string;
  viewer_id?: string | null;
  candidate_id: string;
  viewed_at: string;
  resume_viewed: boolean;
  resume_viewed_at?: string | null;
  viewer?: any | null;
  candidate?: any | null;
}

export default function AdminProfileViewsPage() {
  const [items, setItems] = useState<ViewItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [viewerFilter, setViewerFilter] = useState("");
  const [candidateFilter, setCandidateFilter] = useState("");
  const [resumeFilter, setResumeFilter] = useState("");

  const load = () => {
    setLoading(true);
    const params = new URLSearchParams();
    params.set("page", String(page));
    if (viewerFilter) params.set("viewer", viewerFilter);
    if (candidateFilter) params.set("candidate", candidateFilter);
    if (resumeFilter) params.set("resume_viewed", resumeFilter);

    fetch(`/api/admin/profile-views?${params.toString()}`, { credentials: "include" })
      .then((r) => r.json())
      .then((data) => setItems(data.items || []))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, [page]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Admin — Profile Views</title>
      </Head>
      <AdminLayout>
        <h1 className="text-2xl font-bold mb-4">Profile Views</h1>

        <div className="mb-4 flex gap-2">
        <input aria-label="Filter by viewer" placeholder="Viewer email or name" value={viewerFilter} onChange={(e) => setViewerFilter(e.target.value)} className="px-2 py-1 border rounded" />
        <input aria-label="Filter by candidate" placeholder="Candidate name" value={candidateFilter} onChange={(e) => setCandidateFilter(e.target.value)} className="px-2 py-1 border rounded" />
        <select aria-label="Filter by resume viewed" value={resumeFilter} onChange={(e) => setResumeFilter(e.target.value)} className="px-2 py-1 border rounded">
          <option value="">All</option>
          <option value="yes">Resume Viewed</option>
          <option value="no">Not Viewed</option>
        </select>
        <button onClick={() => { setPage(1); load(); }} className="px-3 py-1 bg-blue-600 text-white rounded">Filter</button>
        <button onClick={() => {
          // CSV export
          if (!items || items.length === 0) return;
          const rows = items.map(it => ({
            viewed_at: it.viewed_at,
            viewer: it.viewer ? (it.viewer.full_name || it.viewer.email) : (it.viewer_id || 'Anonymous'),
            candidate: it.candidate ? (it.candidate.full_name || it.candidate.email) : it.candidate_id,
            resume_viewed: it.resume_viewed ? 'Yes' : 'No',
            resume_viewed_at: it.resume_viewed_at || '',
          }));
          const csv = [Object.keys(rows[0]).join(','), ...rows.map(r => Object.values(r).map(v => `"${String(v).replace(/"/g,'""')}"`).join(','))].join('\n');
          const blob = new Blob([csv], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `profile_views_page_${page}.csv`;
          a.click();
          URL.revokeObjectURL(url);
        }} className="px-3 py-1 bg-gray-800 text-white rounded">Export CSV</button>
        </div>

        {loading ? (
          <p>Loading…</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded shadow p-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500">
                <th className="px-3 py-2">When</th>
                <th className="px-3 py-2">Viewer</th>
                <th className="px-3 py-2">Candidate</th>
                <th className="px-3 py-2">Resume Viewed</th>
                <th className="px-3 py-2">Resume Viewed At</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.id} className="border-t">
                  <td className="px-3 py-2 align-top">{new Date(it.viewed_at).toLocaleString()}</td>
                  <td className="px-3 py-2 align-top">{it.viewer ? it.viewer.full_name || it.viewer.email : it.viewer_id || 'Anonymous'}</td>
                  <td className="px-3 py-2 align-top">{it.candidate ? it.candidate.full_name || it.candidate.email : it.candidate_id}</td>
                  <td className="px-3 py-2 align-top">{it.resume_viewed ? 'Yes' : 'No'}</td>
                  <td className="px-3 py-2 align-top">{it.resume_viewed_at ? new Date(it.resume_viewed_at).toLocaleString() : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 flex justify-between items-center">
            <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 bg-gray-100 rounded">Prev</button>
            <div>Page {page}</div>
            <button onClick={() => setPage((p) => p + 1)} className="px-3 py-1 bg-gray-100 rounded">Next</button>
          </div>
          </div>
        )}
      </AdminLayout>
    </div>
  );
}
