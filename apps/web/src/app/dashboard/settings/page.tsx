'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BentoCard } from '@/components/bento-card';
import { H1 } from '@/components/typography';
import {
  Github,
  Linkedin,
  Zap,
  Shield,
  Activity,
  User,
  CheckCircle2,
} from 'lucide-react';

interface IntegrationStatus {
  github: { connected: boolean; configured: boolean };
  linkedin: { connected: boolean; configured: boolean };
  aiProvider: {
    provider: string;
    model: string;
    configured: boolean;
  };
  database: { connected: boolean };
  queue: { connected: boolean };
}

const DEFAULT_INTEGRATIONS: IntegrationStatus = {
  github: { connected: false, configured: false },
  linkedin: { connected: false, configured: false },
  aiProvider: {
    provider: 'gemini',
    model: 'gemini-3.5-flash',
    configured: false,
  },
  database: { connected: false },
  queue: { connected: false },
};

const SettingCard = ({
  title,
  description,
  status,
  icon: Icon,
  children,
}: {
  title: string;
  description: string;
  status: 'connected' | 'disconnected' | 'healthy' | 'warning' | 'error';
  icon: React.ComponentType<{ size: number; className: string }>;
  children?: React.ReactNode;
}) => {
  const statusColors = {
    connected: 'bg-signal/10 text-signal',
    disconnected: 'bg-danger/10 text-danger',
    healthy: 'bg-signal/10 text-signal',
    warning: 'bg-commit/10 text-commit',
    error: 'bg-danger/10 text-danger',
  };

  const statusLabels = {
    connected: 'Connected',
    disconnected: 'Disconnected',
    healthy: 'Healthy',
    warning: 'Warning',
    error: 'Error',
  };

  return (
    <BentoCard className="flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-surface-soft">
            <Icon size={24} className="text-muted" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text">{title}</h3>
            <p className="text-sm text-muted mt-1">{description}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {statusLabels[status]}
        </div>
      </div>

      {children && <div className="pt-2 border-t border-border">{children}</div>}
    </BentoCard>
  );
};

export default function SettingsPage() {
  const [integrations, setIntegrations] = useState<IntegrationStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<{
    workspace?: { id: string; name: string };
    installations?: { forThisWorkspace: Array<{ installationId: string; accountLogin: string }> };
    integrationStatus?: { github: { connected: boolean; accountLogin?: string } };
  } | null>(null);
  const [syncing, setSyncing] = useState(false);
  const searchParams = useSearchParams();

  const loadIntegrations = async () => {
    try {
      const res = await fetch('/api/GitSync/integration-status');
      
      if (!res.ok) throw new Error('Failed to fetch integration status');
      
      const response = await res.json();
      // Extract data from standardized API response
      setIntegrations(response.data || response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load integrations');
      setIntegrations(DEFAULT_INTEGRATIONS);
      console.error('Integration status error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      await loadIntegrations();
    };
    loadInitialData();
  }, []);

  useEffect(() => {
    async function loadWorkspaceId() {
      try {
        const res = await fetch('/api/GitSync/workspace-id');
        
        if (!res.ok) throw new Error('Failed to fetch workspace ID');
        
        const data = await res.json();
        setWorkspaceId(data.workspaceId || null);
      } catch (err) {
        console.error('Workspace ID error:', err);
        setWorkspaceId(null);
      }
    }

    loadWorkspaceId();
  }, []);

  // Load debug info
  useEffect(() => {
    async function loadDebugInfo() {
      try {
        const res = await fetch('/api/GitSync/github/debug-installation');
        if (res.ok) {
          const data = await res.json();
          setDebugInfo(data);
        }
      } catch (err) {
        console.error('Debug info error:', err);
      }
    }

    loadDebugInfo();
  }, []);

  // Refresh integrations when returning from GitHub install
  useEffect(() => {
    const githubParam = searchParams.get('github');
    const installationIdParam = searchParams.get('installation_id');
    
    if (githubParam === 'connected' || installationIdParam) {
      // Give backend a moment to process
      const timer = setTimeout(() => {
        loadIntegrations();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handleViewLogs = () => {
    window.location.href = '/dashboard/audit';
  };

  const handleSyncInstallation = async () => {
    setSyncing(true);
    try {
      const res = await fetch('/api/GitSync/github/repositories/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const error = await res.json();
        alert(`Sync failed: ${error.message || JSON.stringify(error)}`);
        return;
      }

      const data = await res.json();
      alert(`Successfully synced ${data.syncedCount} public repositories.`);
      
      // Reload debug info and integration status
      const debugRes = await fetch('/api/GitSync/github/debug-installation');
      if (debugRes.ok) setDebugInfo(await debugRes.json());
      
      await loadIntegrations();
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setSyncing(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <H1>Settings</H1>
        <div className="animate-pulse space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-32 bg-surface-soft rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <H1>Settings</H1>
        <div className="p-4 bg-danger/10 text-danger rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <H1>Settings</H1>
        <p className="text-sm text-muted mt-2">
          Manage integrations, policies, and system preferences.
        </p>
      </div>

      {/* DEBUG PANEL - Development only */}
      {process.env.NODE_ENV !== 'production' && debugInfo && (
        <div className="p-4 rounded-lg border border-slate-700 bg-slate-950">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-sm font-semibold text-slate-300">Debug: GitHub Installation</h3>
            <code className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">
              {(debugInfo.installations?.forThisWorkspace?.length ?? 0) > 0 ? '✓ Found' : '✗ Missing'}
            </code>
          </div>
          
          <div className="space-y-2 text-xs text-slate-400 mb-4">
            <div>Workspace: <code className="text-slate-300">{debugInfo.workspace?.id}</code></div>
            <div>Installation ID: <code className="text-slate-300">
              {debugInfo.installations?.forThisWorkspace?.[0]?.installationId || 'not found'}
            </code></div>
            <div>Connected: <code className="text-slate-300">
              {debugInfo.integrationStatus?.github?.connected ? '✓ true' : '✗ false'}
            </code></div>
            <div>Account: <code className="text-slate-300">
              {debugInfo.integrationStatus?.github?.accountLogin || 'not linked'}
            </code></div>
          </div>

          {!debugInfo.installations?.forThisWorkspace?.length && (
            <button
              onClick={handleSyncInstallation}
              disabled={syncing}
              className="w-full px-3 py-2 rounded bg-signal/20 text-signal font-medium text-xs hover:bg-signal/30 disabled:opacity-50 transition-colors"
            >
              {syncing ? 'Syncing...' : 'Repair: Sync Installation 137189045'}
            </button>
          )}
        </div>
      )}

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. GitHub Connection */}
        <SettingCard
          title="GitHub Connection"
          description="Authenticate with GitHub to sync repositories"
          status={integrations?.github.connected ? 'connected' : 'disconnected'}
          icon={Github}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Status</span>
              <span className="text-sm font-medium text-text">
                {integrations?.github.connected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            {integrations?.github.connected && (
              <>
                <button
                  onClick={handleSyncInstallation}
                  disabled={syncing}
                  className="w-full mt-4 px-4 py-2 rounded-lg bg-surface border border-border text-text font-medium text-sm hover:bg-surface-soft transition-colors disabled:opacity-50"
                >
                  {syncing ? 'Syncing...' : 'Sync public repositories'}
                </button>
                <div className="mt-2 text-center">
                  <span className="inline-block px-2 py-1 rounded text-xs bg-surface-soft text-muted">
                    Private repository sync - v2
                  </span>
                </div>
              </>
            )}
            {!integrations?.github.connected && (
              workspaceId ? (
                <a
                  href={`${process.env.NEXT_PUBLIC_GITHUB_APP_INSTALL_URL ?? "https://github.com/apps/gitsync-engine/installations/new"}?state=${encodeURIComponent(workspaceId)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full mt-4 px-4 py-2 rounded-lg bg-signal text-white font-medium text-sm hover:bg-signal/90 transition-colors inline-block text-center"
                >
                  Install GitHub App
                </a>
              ) : (
                <button
                  disabled
                  title="Workspace not ready. Refresh or sign in again."
                  className="w-full mt-4 px-4 py-2 rounded-lg bg-slate-700 text-slate-300 font-medium text-sm opacity-50 cursor-not-allowed text-center"
                >
                  Install GitHub App
                </button>
              )
            )}
          </div>
        </SettingCard>

        {/* 2. LinkedIn Connection */}
        <SettingCard
          title="LinkedIn Connection"
          description="Authenticate with LinkedIn to publish posts"
          status={integrations?.linkedin.connected ? 'connected' : 'disconnected'}
          icon={Linkedin}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Status</span>
              <span className="text-sm font-medium text-text">
                {integrations?.linkedin.connected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            {integrations?.linkedin.connected && (
              <button
                disabled
                title="Disconnect feature coming soon"
                className="w-full mt-4 px-4 py-2 rounded-lg bg-surface border border-border text-text font-medium text-sm opacity-50 cursor-not-allowed hover:bg-surface-soft"
              >
                Disconnect (Coming Soon)
              </button>
            )}
            {!integrations?.linkedin.connected && (
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_CONNECT_URL ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="w-full mt-4 px-4 py-2 rounded-lg bg-linkedin text-white font-medium text-sm hover:bg-linkedin/90 transition-colors inline-block text-center"
              >
                Connect LinkedIn
              </a>
            )}
          </div>
        </SettingCard>

        {/* 3. Gemini AI Configuration */}
        <SettingCard
          title="Gemini 3.5 Flash Configuration"
          description="Manage AI model settings for draft generation"
          status={integrations?.aiProvider.configured ? 'connected' : 'disconnected'}
          icon={Zap}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Provider</span>
              <span className="text-sm font-medium text-text">{integrations?.aiProvider.provider}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Model</span>
              <span className="text-sm font-medium text-text">{integrations?.aiProvider.model}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Status</span>
              <span className={`flex items-center gap-1 text-sm ${integrations?.aiProvider.configured ? 'text-signal' : 'text-danger'}`}>
                <CheckCircle2 size={14} />
                {integrations?.aiProvider.configured ? 'Active' : 'Inactive'}
              </span>
            </div>
            <button
              disabled={!integrations?.aiProvider.configured}
              className="w-full mt-4 px-4 py-2 rounded-lg bg-signal text-white font-medium text-sm hover:bg-signal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Key
            </button>
          </div>
        </SettingCard>

        {/* 4. Posting Policy */}
        <SettingCard
          title="Posting Policy"
          description="Control how GitSync publishes content"
          status="healthy"
          icon={Shield}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Approval Required</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked readOnly className="rounded" />
                <span className="text-sm text-text">Enabled</span>
              </label>
            </div>
            <button
              disabled
              className="w-full mt-4 px-4 py-2 rounded-lg border border-border text-text font-medium text-sm hover:bg-surface-soft transition-colors disabled:opacity-50"
            >
              Edit Policies (Coming Soon)
            </button>
          </div>
        </SettingCard>

        {/* 5. System Status */}
        <SettingCard
          title="System Status"
          description="Monitor system health and infrastructure"
          status={integrations?.queue.connected ? 'healthy' : 'warning'}
          icon={Activity}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Queue</span>
              <span className={`flex items-center gap-1 text-sm ${integrations?.queue.connected ? 'text-signal' : 'text-danger'}`}>
                <CheckCircle2 size={14} />
                {integrations?.queue.connected ? 'Operational' : 'Offline'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Database</span>
              <span className={`flex items-center gap-1 text-sm ${integrations?.database.connected ? 'text-signal' : 'text-danger'}`}>
                <CheckCircle2 size={14} />
                {integrations?.database.connected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            <button
              onClick={handleViewLogs}
              className="w-full mt-4 px-4 py-2 rounded-lg border border-border text-text font-medium text-sm hover:bg-surface-soft transition-colors"
            >
              View Logs
            </button>
          </div>
        </SettingCard>

        {/* 6. Profile/Workspace */}
        <SettingCard
          title="Profile & Workspace"
          description="Manage your account and workspace settings"
          status="healthy"
          icon={User}
        >
          <div className="space-y-3">
            <button
              disabled
              className="w-full mt-4 px-4 py-2 rounded-lg bg-signal text-white font-medium text-sm hover:bg-signal/90 transition-colors disabled:opacity-50"
            >
              Edit Profile (Coming Soon)
            </button>
          </div>
        </SettingCard>
      </div>
    </div>
  );
}
