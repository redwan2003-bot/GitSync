'use client';

import { useEffect, useRef, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { LogOut, Settings, LayoutDashboard } from 'lucide-react';

interface ProfileDropdownProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProfileDropdown({ open, onOpenChange }: ProfileDropdownProps) {
  const { data: session } = useSession();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onOpenChange(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [open, onOpenChange]);

  const handleSignOut = async () => {
    onOpenChange(false);
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className="bg-surface border border-border rounded-lg shadow-xl overflow-hidden"
      role="menu"
      aria-orientation="vertical"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-surface-soft/30">
        <p className="text-sm font-semibold text-text truncate">
          {session?.user?.name || 'Signed in'}
        </p>
        <p className="text-xs text-muted mt-1 truncate">
          {session?.user?.email || ''}
        </p>
      </div>

      {/* Menu Items */}
      <div className="py-1">
        {/* Dashboard Link */}
        <Link
          href="/dashboard"
          onClick={() => onOpenChange(false)}
          className="flex items-center gap-3 px-4 py-2 text-sm text-text hover:bg-surface-soft transition-colors focus:outline-none focus:bg-surface-soft"
          role="menuitem"
        >
          <LayoutDashboard size={16} className="flex-shrink-0" />
          <span>Dashboard</span>
        </Link>

        {/* Settings Link */}
        <Link
          href="/dashboard/settings"
          onClick={() => onOpenChange(false)}
          className="flex items-center gap-3 px-4 py-2 text-sm text-text hover:bg-surface-soft transition-colors focus:outline-none focus:bg-surface-soft"
          role="menuitem"
        >
          <Settings size={16} className="flex-shrink-0" />
          <span>Settings</span>
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Sign Out */}
      <button
        onClick={handleSignOut}
        className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-danger hover:bg-danger/5 transition-colors focus:outline-none focus:bg-danger/5"
        role="menuitem"
      >
        <LogOut size={16} className="flex-shrink-0" />
        <span>Sign out</span>
      </button>
    </div>
  );
}
