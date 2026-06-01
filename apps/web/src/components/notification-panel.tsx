'use client';

import { useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';

interface NotificationPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NotificationPanel({ open, onOpenChange }: NotificationPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
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

  return (
    <div ref={panelRef} className="relative">
      {open && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-surface border border-border rounded-lg shadow-lg z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <Bell size={18} className="text-muted" />
              <h2 className="text-sm font-semibold text-text">Notifications</h2>
            </div>
          </div>

          {/* Empty State */}
          <div className="px-4 py-8 text-center">
            <Bell size={40} className="mx-auto text-muted/30 mb-4" />
            <p className="text-sm text-muted">No notifications yet.</p>
            <p className="text-xs text-muted/70 mt-2">
              You'll see activity here when there's something new.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
