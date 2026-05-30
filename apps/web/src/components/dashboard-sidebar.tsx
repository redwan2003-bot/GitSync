'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, GitBranch, FileText, LayoutTemplate, Settings, ClipboardList } from 'lucide-react';
import React from 'react';

export default function DashboardSidebar() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Repositories', href: '/dashboard/repositories', icon: GitBranch },
    { name: 'Drafts', href: '/dashboard/drafts', icon: FileText },
    { name: 'Project Cards', href: '/dashboard/project-cards', icon: LayoutTemplate },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Audit', href: '/dashboard/audit', icon: ClipboardList },
  ];

  return (
    <aside className="flex flex-col w-64 h-full bg-slate-900 text-slate-200 border-r border-slate-800 p-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-white">GitSync</h1>
      </div>
      <nav className="flex-1 space-y-2">
        <ul>
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${isActive ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                >
                  <Icon className="w-5 h-5" />
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
