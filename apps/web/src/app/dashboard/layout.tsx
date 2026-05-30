import React from 'react';
import DashboardSidebar from '@/components/dashboard-sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200">
      <DashboardSidebar />
      <div className="flex flex-col flex-1">
        <header className="border-b border-slate-800 px-4 py-3 flex items-center justify-between bg-slate-900">
          <h1 className="text-xl font-bold">GitSync</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
