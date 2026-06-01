'use client';

import React, { useState } from 'react';
import { Menu, Bell, User } from 'lucide-react';
import { ProfileDropdown } from './profile-dropdown';
import { NotificationPanel } from './notification-panel';

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
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="h-14 border-b border-border bg-surface flex items-center justify-between px-6">
      {/* Left: Menu + Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          aria-label="Toggle sidebar menu"
          className="lg:hidden p-1 hover:bg-surface-soft rounded transition-colors"
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
        
        {/* Notifications Button */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="View notifications"
            className="p-1 hover:bg-surface-soft rounded transition-colors"
          >
            <Bell size={18} className="text-muted" />
          </button>
          <NotificationPanel
            open={notificationsOpen}
            onOpenChange={setNotificationsOpen}
          />
        </div>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            aria-label="Open user profile menu"
            className="p-1 hover:bg-surface-soft rounded transition-colors"
          >
            <User size={18} className="text-muted" />
          </button>
          <ProfileDropdown
            open={profileOpen}
            onOpenChange={setProfileOpen}
          />
        </div>
      </div>
    </header>
  );
}
