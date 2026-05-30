import React from 'react';
import { LayoutTemplate } from 'lucide-react';

export default function ProjectCardsPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <LayoutTemplate className="w-8 h-8" />
          Project Cards
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Create and manage project cards for displaying metrics and insights.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">No project cards created yet.</p>
        </div>
      </div>
    </div>
  );
}
