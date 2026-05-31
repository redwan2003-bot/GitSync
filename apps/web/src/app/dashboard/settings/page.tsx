'use client';

import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
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

  useEffect(() => {
    async function loadIntegrations() {
      try {
        const res = await fetch('/api/GitSync/integration-status');
        
        if (!res.ok) throw new Error('Failed to fetch integration status');
        
        const data = await res.json();
        setIntegrations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load integrations');
        console.error('Integration status error:', err);
      } finally {
        setLoading(false);
      }
    }

    loadIntegrations();
  }, []);

  const handleDisconnect = async (service: string) => {
    console.log(`Disconnect ${service} - endpoint not yet implemented`);
  };

  const handleInstallGithub = async () => {
    // Use NextAuth signIn - this redirects to GitHub OAuth
    await signIn('github', { redirect: true, callbackUrl: '/dashboard' });
  };

  const handleConnectLinkedin = async () => {
    // Use NextAuth signIn - this redirects to LinkedIn OAuth
    await signIn('linkedin', { redirect: true, callbackUrl: '/dashboard' });
  };

  const handleViewLogs = () => {
    window.location.href = '/dashboard/audit';
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
              <button
                onClick={() => handleDisconnect('github')}
                className="w-full mt-4 px-4 py-2 rounded-lg border border-danger text-danger font-medium text-sm hover:bg-danger/5 transition-colors"
              >
                Disconnect
              </button>
            )}
            {!integrations?.github.connected && (
              <button
                onClick={handleInstallGithub}
                className="w-full mt-4 px-4 py-2 rounded-lg bg-signal text-white font-medium text-sm hover:bg-signal/90 transition-colors"
              >
                Install GitHub App
              </button>
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
                onClick={() => handleDisconnect('linkedin')}
                className="w-full mt-4 px-4 py-2 rounded-lg border border-danger text-danger font-medium text-sm hover:bg-danger/5 transition-colors"
              >
                Disconnect
              </button>
            )}
            {!integrations?.linkedin.connected && (
              <button
                onClick={handleConnectLinkedin}
                className="w-full mt-4 px-4 py-2 rounded-lg bg-linkedin text-white font-medium text-sm hover:bg-linkedin/90 transition-colors"
              >
                Connect LinkedIn
              </button>
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
          status="healthy"
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
