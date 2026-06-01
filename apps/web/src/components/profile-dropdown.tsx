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

  return (
    <div ref={dropdownRef} className="relative">
      {open && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-lg z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-medium text-text">
              {session?.user?.name || 'Signed in'}
            </p>
            <p className="text-xs text-muted mt-1">
              {session?.user?.email || 'No email'}
            </p>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {/* Dashboard Link */}
            <Link
              href="/dashboard"
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm text-text hover:bg-surface-soft transition-colors"
            >
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </Link>

            {/* Settings Link */}
            <Link
              href="/dashboard/settings"
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-3 px-4 py-2 text-sm text-text hover:bg-surface-soft transition-colors"
            >
              <Settings size={16} />
              <span>Settings</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-danger hover:bg-danger/5 transition-colors"
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </div>
      )}
    </div>
  );
}
