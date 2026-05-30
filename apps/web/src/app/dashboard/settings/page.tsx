'use client';

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
          status="connected"
          icon={Github}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Status</span>
              <span className="text-sm font-medium text-text">Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Account</span>
              <span className="text-sm font-medium text-text">redwan2003</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Scopes</span>
              <span className="text-xs text-cyan">repos, user, workflow</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Last Sync</span>
              <span className="text-sm font-medium text-text">2 minutes ago</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-lg border border-danger text-danger font-medium text-sm hover:bg-danger/5 transition-colors">
              Disconnect
            </button>
          </div>
        </SettingCard>

        {/* 2. LinkedIn Connection */}
        <SettingCard
          title="LinkedIn Connection"
          description="Authenticate with LinkedIn to publish posts"
          status="connected"
          icon={Linkedin}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Status</span>
              <span className="text-sm font-medium text-text">Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Profile</span>
              <span className="text-sm font-medium text-text">Redwan Ahmmed</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Followers</span>
              <span className="text-sm font-medium text-text">1,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Last Sync</span>
              <span className="text-sm font-medium text-text">1 hour ago</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-lg border border-danger text-danger font-medium text-sm hover:bg-danger/5 transition-colors">
              Disconnect
            </button>
          </div>
        </SettingCard>

        {/* 3. OpenAI Status */}
        <SettingCard
          title="OpenAI Configuration"
          description="Manage AI model settings for draft generation"
          status="connected"
          icon={Zap}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">API Key</span>
              <span className="text-xs font-mono bg-surface-soft px-2 py-1 rounded text-text">
                sk-***...***
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Model</span>
              <select className="px-2 py-1 rounded bg-surface-soft border border-border text-sm text-text">
                <option>gpt-4</option>
                <option>gpt-3.5-turbo</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Status</span>
              <span className="flex items-center gap-1 text-sm text-signal">
                <CheckCircle2 size={14} />
                Valid
              </span>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-lg bg-signal text-bg font-medium text-sm hover:bg-signal/90 transition-colors">
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
              <span className="text-sm text-muted">Rate Limit</span>
              <span className="text-sm font-medium text-text">3 posts per week</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Private Repos</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked readOnly className="rounded" />
                <span className="text-sm text-text">Excluded</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Approval Required</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked readOnly className="rounded" />
                <span className="text-sm text-text">Enabled</span>
              </label>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-lg border border-border text-text font-medium text-sm hover:bg-surface-soft transition-colors">
              Edit Policies
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
              <span className="flex items-center gap-1 text-sm text-signal">
                <CheckCircle2 size={14} />
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Webhooks</span>
              <span className="flex items-center gap-1 text-sm text-signal">
                <CheckCircle2 size={14} />
                Active
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Database</span>
              <span className="flex items-center gap-1 text-sm text-signal">
                <CheckCircle2 size={14} />
                Connected
              </span>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-lg border border-border text-text font-medium text-sm hover:bg-surface-soft transition-colors">
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
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Email</span>
              <span className="text-sm font-medium text-text">redwan@example.com</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Workspace</span>
              <span className="text-sm font-medium text-text">GitSync Dev</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Member Since</span>
              <span className="text-sm font-medium text-text">Jan 2024</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-lg bg-signal text-bg font-medium text-sm hover:bg-signal/90 transition-colors">
              Edit Profile
            </button>
          </div>
        </SettingCard>
      </div>
    </div>
  );
}
