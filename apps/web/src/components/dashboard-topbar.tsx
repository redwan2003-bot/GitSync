'use client';

import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface DashboardTopbarProps {
  title: string;
  description?: string;
  onMenuToggle: () => void;
}

export function DashboardTopbar({
  title,
  description,
  onMenuToggle,
}: DashboardTopbarProps) {
  return (
    <header className="h-14 border-b border-border bg-surface flex items-center justify-between px-6">
      {/* Left: Menu + Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1 hover:bg-surface-soft rounded"
        >
          <Menu size={20} className="text-muted" />
        </button>
        <div>
          <h1 className="text-sm font-semibold text-text">{title}</h1>
          {description && (
            <p className="text-xs text-muted">{description}</p>
          )}
        </div>
      </div>

      {/* Right: Status + Notifications + User */}
      <div className="flex items-center gap-4">
        <span className="text-xs text-signal font-medium px-2 py-1 bg-signal/10 rounded">
          Syncing
        </span>
        <button className="p-1 hover:bg-surface-soft rounded">
          <Bell size={18} className="text-muted" />
        </button>
        <button className="p-1 hover:bg-surface-soft rounded">
          <User size={18} className="text-muted" />
        </button>
      </div>
    </header>
  );
}
