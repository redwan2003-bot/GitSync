import React from 'react';
import { GitBranch } from 'lucide-react';

export default function RepositoriesPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <GitBranch className="w-8 h-8" />
          Repositories
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Manage connected GitHub repositories and their sync settings.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400">No repositories connected yet.</p>
        </div>
      </div>
    </div>
  );
}
