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

  const handleNotificationClick = () => {
    setNotificationsOpen(!notificationsOpen);
    setProfileOpen(false);
  };

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
    setNotificationsOpen(false);
  };

  return (
    <header className="h-14 border-b border-border bg-surface flex items-center justify-between px-6 relative z-40">
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
            onClick={handleNotificationClick}
            aria-label="View notifications"
            aria-haspopup="menu"
            aria-expanded={notificationsOpen}
            className="p-1 hover:bg-surface-soft rounded transition-colors"
          >
            <Bell size={18} className="text-muted" />
          </button>
          {notificationsOpen && (
            <div className="absolute right-0 top-full mt-2 z-[100] w-72 max-w-[calc(100vw-2rem)] md:w-80">
              <NotificationPanel
                open={notificationsOpen}
                onOpenChange={setNotificationsOpen}
              />
            </div>
          )}
        </div>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={handleProfileClick}
            aria-label="Open user profile menu"
            aria-haspopup="menu"
            aria-expanded={profileOpen}
            className="p-1 hover:bg-surface-soft rounded transition-colors"
          >
            <User size={18} className="text-muted" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 z-[100] w-56 max-w-[calc(100vw-2rem)]">
              <ProfileDropdown
                open={profileOpen}
                onOpenChange={setProfileOpen}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
