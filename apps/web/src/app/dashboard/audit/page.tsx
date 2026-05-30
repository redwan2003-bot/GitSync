import React from 'react';
import { ClipboardList } from 'lucide-react';

export default function AuditPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <ClipboardList className="w-8 h-8" />
          Audit Log
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          View workspace activity and system events.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">No audit events yet.</p>
        </div>
      </div>
    </div>
  );
}
