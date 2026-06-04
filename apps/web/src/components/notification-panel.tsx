'use client';

import { useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';

interface NotificationPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NotificationPanel({ open, onOpenChange }: NotificationPanelProps) {
  const panelRef = useRef<HTMLElement>(null);

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

  if (!open) return null;

  return (
    <section
      ref={panelRef}
      className="bg-[#0f1115] border border-border rounded-lg shadow-2xl overflow-hidden min-h-64 z-50"
      aria-label="Notifications"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-border bg-[#1a1d24] flex items-center gap-2">
        <Bell aria-hidden="true" size={18} className="text-muted flex-shrink-0" />
        <h2 className="text-sm font-semibold text-text">Notifications</h2>
      </div>

      {/* Empty State */}
      <div className="px-4 py-12 text-center">
        <Bell aria-hidden="true" size={40} className="mx-auto text-muted/30 mb-3" />
        <p className="text-sm font-medium text-muted">No notifications yet.</p>
        <p className="text-xs text-muted/70 mt-2">
          You&apos;ll see activity here when there&apos;s something new.
        </p>
      </div>
    </section>
  );
}
