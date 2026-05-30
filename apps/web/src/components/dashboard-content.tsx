'use client';

import { Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import DynamicOrbit from './dynamic-orbit';

interface DashboardContentProps {
  githubConnected: boolean;
  linkedinConnected: boolean;
  membership: { workspaceId: string } | null;
  apiUrl: string;
}

export default function DashboardContent({
  githubConnected,
  linkedinConnected,
  membership,
  apiUrl,
}: DashboardContentProps) {
  return (
    <>
      <DynamicOrbit />
      <main className="max-w-4xl mx-auto p-6 mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Connections
          </h2>
          <p className="text-slate-500 mt-1 text-sm">
            Connect GitHub for events and LinkedIn for publishing. Default mode
            is review-required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub App</h3>
                  <p className="text-sm text-slate-500">Source events</p>
                </div>
              </div>
              {githubConnected ? (
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-950 px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Connected
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-medium text-amber-400 bg-amber-950 px-2 py-1 rounded-full">
                  <AlertCircle className="w-3.5 h-3.5" /> Required
                </span>
              )}
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Install the GitSync GitHub App on selected public repositories.
            </p>
            <a 
              href={`${apiUrl}/integrations/github/connect?workspaceId=${membership?.workspaceId || ""}`}
              className="block w-full text-center py-2 px-4 rounded-lg bg-white text-slate-900 font-medium text-sm hover:bg-slate-100 transition-colors"
            >
              Install GitHub App
            </a>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-950 text-blue-400 rounded-lg">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <p className="text-sm text-slate-500">Publish destination</p>
                </div>
              </div>
              {linkedinConnected ? (
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-950 px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Connected
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-medium text-amber-400 bg-amber-950 px-2 py-1 rounded-full">
                  <AlertCircle className="w-3.5 h-3.5" /> Required
                </span>
              )}
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Official OAuth only. Profile Projects editing stays manual in v1.
            </p>
            <a
              href={`${apiUrl}/integrations/linkedin/connect?workspaceId=${membership?.workspaceId || ""}`}
              className="block w-full text-center py-2 px-4 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors"
            >
              Connect with LinkedIn
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
