import React from 'react';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Settings className="w-8 h-8" />
          Settings
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Configure workspace preferences and account settings.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
          <h3 className="font-semibold text-white mb-4">Workspace Settings</h3>
          <p className="text-slate-400">Settings panel coming soon.</p>
        </div>
      </div>
    </div>
  );
}
