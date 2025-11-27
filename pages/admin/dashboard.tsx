import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const res = await axios.get("/api/admin/analytics");
    setStats(res.data);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {!stats ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card><CardBody>
              <h2 className="text-xl font-semibold">Total Candidates</h2>
              <p className="text-3xl">{stats.totalCandidates}</p>
            </CardBody></Card>

            <Card><CardBody>
              <h2 className="text-xl font-semibold">New Today</h2>
              <p className="text-3xl">{stats.newToday}</p>
            </CardBody></Card>

            <Card><CardBody>
              <h2 className="text-xl font-semibold">Avg Experience</h2>
              <p className="text-3xl">{stats.avgExp} yrs</p>
            </CardBody></Card>
          </div>
        )}

        <div className="mt-10">
          <Link href="/admin/upload">
            <Button className="bg-[#2F6BFF] text-white rounded-lg">
              Upload Candidates CSV
            </Button>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
