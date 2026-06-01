'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  GitBranch,
  FileText,
  Layers,
  Settings,
  Activity,
  ChevronRight,
  X,
} from 'lucide-react';

interface IntegrationStatus {
  github: { connected: boolean };
  linkedin: { connected: boolean };
  aiProvider: { configured: boolean };
}

interface DashboardSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/repositories', label: 'Repositories', icon: GitBranch },
  { href: '/dashboard/drafts', label: 'Drafts', icon: FileText },
  { href: '/dashboard/project-cards', label: 'Project Cards', icon: Layers },
  { href: '/dashboard/audit', label: 'Audit', icon: Activity },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardSidebar({ open, onOpenChange }: DashboardSidebarProps) {
  const pathname = usePathname();
  const [integrations, setIntegrations] = useState<IntegrationStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIntegrations = async () => {
      try {
        const res = await fetch('/api/GitSync/integration-status');
        if (res.ok) {
          const response = await res.json();
          // Extract data from standardized API response
          setIntegrations(response.data || response);
        }
      } catch (err) {
        console.error('Failed to load integrations:', err);
      } finally {
        setLoading(false);
      }
    };

    loadIntegrations();
  }, []);

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static left-0 top-0 h-screen w-60 bg-surface border-r border-border z-50 transform transition-transform duration-300 lg:transform-none ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-signal flex items-center justify-center">
              <span className="text-xs font-bold text-bg">GS</span>
            </div>
            <span className="text-lg font-bold text-text">GitSync</span>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close sidebar menu"
            className="lg:hidden p-1 hover:bg-surface-soft rounded"
          >
            <X size={20} className="text-muted" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-signal/10 text-signal border border-signal/20'
                        : 'text-muted hover:text-text hover:bg-surface-soft'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                    {isActive && (
                      <ChevronRight size={16} className="ml-auto" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Integration Health Footer */}
        <div className="p-4 border-t border-border space-y-3">
          <div className="text-xs font-semibold text-muted uppercase tracking-wide">
            Integrations
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">GitHub</span>
              <div className={`w-2 h-2 rounded-full ${
                !loading && integrations?.github?.connected
                  ? 'bg-signal'
                  : 'bg-muted/30'
              }`} />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">LinkedIn</span>
              <div className={`w-2 h-2 rounded-full ${
                !loading && integrations?.linkedin?.connected
                  ? 'bg-signal'
                  : 'bg-muted/30'
              }`} />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">Gemini</span>
              <div className={`w-2 h-2 rounded-full ${
                !loading && integrations?.aiProvider?.configured
                  ? 'bg-signal'
                  : 'bg-muted/30'
              }`} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
