import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function AdminNav() {
  const router = useRouter();
  const path = router.pathname || '';

  const items = [
      { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/analytics', label: 'Analytics' },
    { href: '/admin/profile-views', label: 'Profile Views' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-6">
            <div className="text-lg font-bold">Admin</div>
            <div className="flex items-center gap-2">
              {items.map((it) => {
                const active = path === it.href || (it.href !== '/admin' && path.startsWith(it.href));
                return (
                  <Link key={it.href} href={it.href} className={`px-3 py-2 rounded text-sm ${active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                    {it.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="text-sm text-gray-500">Signed in as Admin</div>
        </div>
      </div>
    </nav>
  );
}
