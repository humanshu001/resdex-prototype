import React from 'react';
import AdminNav from './AdminNav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <main className="p-6 max-w-6xl mx-auto">{children}</main>
    </div>
  );
}
