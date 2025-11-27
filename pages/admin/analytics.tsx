import React, { useEffect, useState } from "react";
import Head from "next/head";
import AdminLayout from "@/components/admin/AdminLayout";

type DayPoint = { day: string; count: number };

function PieChart({ a, b }: { a: number; b: number }) {
  const total = a + b || 1;
  const aPerc = (a / total) * 100;
  const bPerc = (b / total) * 100;
  const aOffset = 100 - aPerc;
  return (
    <svg viewBox="0 0 32 32" width={140} height={140} className="mx-auto">
      <circle r="16" cx="16" cy="16" fill="#E6F0FF" />
      <circle r="10" cx="16" cy="16" fill="transparent" stroke="#3B82F6" strokeWidth="10" strokeDasharray={`${aPerc} ${100 - aPerc}`} strokeDashoffset={25} transform="rotate(-90 16 16)" />
      <circle r="10" cx="16" cy="16" fill="transparent" stroke="#9CA3AF" strokeWidth="10" strokeDasharray={`${bPerc} ${100 - bPerc}`} strokeDashoffset={25 - aPerc} transform="rotate(-90 16 16)" />
      <text x="16" y="17" textAnchor="middle" fontSize="6" fill="#111">{a} / {total}</text>
    </svg>
  );
}

function LineChart({ points }: { points: DayPoint[] }) {
  if (!points || points.length === 0) return <div className="text-sm text-gray-500">No data</div>;
  const max = Math.max(...points.map((p) => p.count), 1);
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1 || 1)) * 100;
    const y = 100 - (p.count / max) * 100;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 100 100" width="100%" height={120} className="bg-white rounded">
      <polyline fill="none" stroke="#3B82F6" strokeWidth={1.5} points={coords} />
      {points.map((p, i) => (
        <circle key={p.day} cx={`${(i / (points.length - 1 || 1)) * 100}`} cy={`${100 - (p.count / max) * 100}`} r={1.2} fill="#1D4ED8" />
      ))}
    </svg>
  );
}

function Bars({ items }: { items: { name: string; count: number }[] }) {
  const max = Math.max(...items.map((i) => i.count), 1);
  return (
    <div className="space-y-2">
      {items.map((it) => (
        <div key={it.name} className="flex items-center gap-3">
          <div className="w-36 text-sm text-gray-700 truncate">{it.name}</div>
          <div className="flex-1 h-5 bg-gray-100 rounded overflow-hidden">
            <div style={{ width: `${(it.count / max) * 100}%` }} className="h-5 bg-blue-500"></div>
          </div>
          <div className="w-12 text-sm text-right">{it.count}</div>
        </div>
      ))}
    </div>
  );
}

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/admin/analytics/overview', { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Admin Analytics</title>
      </Head>
      <AdminLayout>
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>
        {loading ? <p>Loading…</p> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Profile vs Resume Views</h3>
            <div className="mt-3 flex items-center justify-center">
              <PieChart a={data?.totals?.profileViews ?? 0} b={data?.totals?.resumeViews ?? 0} />
            </div>
            <div className="mt-3 text-sm text-gray-600 text-center">Profile views: {data?.totals?.profileViews ?? 0} — Resume views: {data?.totals?.resumeViews ?? 0}</div>
          </div>

          <div className="md:col-span-2 bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Views (last 30 days)</h3>
            <div className="mt-3">
              <LineChart points={(data?.viewsByDay ?? []).map((p: any) => ({ day: p.day, count: Number(p.count) }))} />
            </div>
          </div>

          <div className="md:col-span-1 bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Top Candidates</h3>
            <div className="mt-3">
              <Bars items={(data?.topCandidates ?? []).map((t: any) => ({ name: t.name, count: t.count }))} />
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Top Viewers</h3>
            <div className="mt-3">
              <Bars items={(data?.topViewers ?? []).map((t: any) => ({ name: t.name, count: t.count }))} />
            </div>
          </div>
          
          <div className="md:col-span-3 bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Viewer Summary (profile vs resume)</h3>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-gray-500">
                    <th className="px-3 py-2">Viewer</th>
                    <th className="px-3 py-2">Profile Views</th>
                    <th className="px-3 py-2">Resume Views</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.viewersSummary ?? []).map((v: any) => (
                    <tr key={v.viewer_id} className="border-t">
                      <td className="px-3 py-2 align-top">{v.name}</td>
                      <td className="px-3 py-2 align-top">{v.profile_count}</td>
                      <td className="px-3 py-2 align-top">{v.resume_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        )}
      </AdminLayout>
    </div>
  );
}
