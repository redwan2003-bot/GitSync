'use client';

import { H1 } from '@/components/typography';
import { Search, Filter, Calendar } from 'lucide-react';
import { useState } from 'react';

// Mock audit logs
const MOCK_LOGS = [
  {
    id: '1',
    timestamp: '2024-05-31T12:34:56Z',
    action: 'PUBLISHED',
    actor: 'redwan',
    resource: 'Draft #42 (gitflow)',
    details: 'Posted to LinkedIn',
  },
  {
    id: '2',
    timestamp: '2024-05-31T11:20:30Z',
    action: 'SYNCED',
    actor: 'system',
    resource: 'Repository (ui-kit)',
    details: 'Fetched 3 commits',
  },
  {
    id: '3',
    timestamp: '2024-05-31T10:15:22Z',
    action: 'CREATED',
    actor: 'ai-engine',
    resource: 'Draft (api-core)',
    details: 'Generated from commit activity',
  },
  {
    id: '4',
    timestamp: '2024-05-31T09:45:10Z',
    action: 'FAILED',
    actor: 'system',
    resource: 'Webhook (mobile-app)',
    details: 'Connection timeout after 30s',
  },
  {
    id: '5',
    timestamp: '2024-05-31T08:30:45Z',
    action: 'UPDATED',
    actor: 'redwan',
    resource: 'Integration (LinkedIn)',
    details: 'Refreshed auth token',
  },
];

const ACTION_COLORS: Record<string, string> = {
  PUBLISHED: 'text-signal',
  SYNCED: 'text-cyan',
  CREATED: 'text-signal',
  FAILED: 'text-danger',
  UPDATED: 'text-commit',
  DELETED: 'text-danger',
};

const AuditRow = ({
  timestamp,
  action,
  actor,
  resource,
  details,
}: {
  timestamp: string;
  action: string;
  actor: string;
  resource: string;
  details: string;
}) => {
  const date = new Date(timestamp).toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="px-4 py-3 border-b border-surface-soft hover:bg-surface-soft/30 transition-colors">
      <div className="flex items-start gap-4 font-jetbrains-mono text-xs">
        <span className="text-muted w-12 shrink-0">{date}</span>
        <span className={`${ACTION_COLORS[action] || 'text-text'} font-medium w-20 shrink-0`}>
          {action}
        </span>
        <span className="text-cyan w-20 shrink-0">{actor}</span>
        <span className="text-text flex-1">{resource}</span>
        <span className="text-muted">{details}</span>
      </div>
    </div>
  );
};

export default function AuditPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('All');
  const [filteredLogs, setFilteredLogs] = useState(MOCK_LOGS);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    let filtered = MOCK_LOGS;

    // Filter by action
    if (actionFilter !== 'All') {
      filtered = filtered.filter((log) => log.action === actionFilter);
    }

    // Filter by search term
    if (term) {
      filtered = filtered.filter(
        (log) =>
          log.resource.toLowerCase().includes(term) ||
          log.actor.toLowerCase().includes(term) ||
          log.details.toLowerCase().includes(term)
      );
    }

    setFilteredLogs(filtered);
  };

  const handleActionFilter = (action: string) => {
    setActionFilter(action);

    let filtered = MOCK_LOGS;

    // Filter by action
    if (action !== 'All') {
      filtered = filtered.filter((log) => log.action === action);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (log) =>
          log.resource.toLowerCase().includes(searchTerm) ||
          log.actor.toLowerCase().includes(searchTerm) ||
          log.details.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredLogs(filtered);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <H1>Audit Log</H1>
        <p className="text-sm text-muted mt-2">
          View system activities, integrations, and publishing history.
        </p>
      </div>

      {/* Filter/Search Header */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-3">
        {/* Date Range Stub */}
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-muted" />
          <input
            type="date"
            className="px-3 py-2 rounded-lg bg-surface border border-border text-sm text-text focus:outline-none focus:border-signal"
          />
          <span className="text-muted">to</span>
          <input
            type="date"
            className="px-3 py-2 rounded-lg bg-surface border border-border text-sm text-text focus:outline-none focus:border-signal"
          />
        </div>

        {/* Action Filter */}
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-muted" />
          <select
            value={actionFilter}
            onChange={(e) => handleActionFilter(e.target.value)}
            className="px-3 py-2 rounded-lg bg-surface border border-border text-sm text-text focus:outline-none focus:border-signal"
          >
            <option>All</option>
            <option>PUBLISHED</option>
            <option>SYNCED</option>
            <option>CREATED</option>
            <option>FAILED</option>
            <option>UPDATED</option>
            <option>DELETED</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="flex-1 flex items-center gap-2">
          <Search size={18} className="text-muted" />
          <input
            type="text"
            placeholder="Search by repo, user, or action..."
            value={searchTerm}
            onChange={handleSearch}
            className="flex-1 px-3 py-2 rounded-lg bg-surface border border-border text-sm text-text placeholder-muted/50 focus:outline-none focus:border-signal"
          />
        </div>
      </div>

      {/* Terminal-Style Audit Log */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        {/* Terminal Header */}
        <div className="px-4 py-3 border-b border-surface-soft bg-surface-soft/50">
          <div className="flex items-center gap-2 font-jetbrains-mono text-xs text-muted">
            <span>~/gitsync</span>
            <span>$</span>
            <span className="ml-2 animate-pulse">audit</span>
          </div>
        </div>

        {/* Logs or Empty State */}
        {filteredLogs.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            {filteredLogs.map((log) => (
              <AuditRow
                key={log.id}
                timestamp={log.timestamp}
                action={log.action}
                actor={log.actor}
                resource={log.resource}
                details={log.details}
              />
            ))}
          </div>
        ) : (
          <div className="px-4 py-8">
            <div className="font-jetbrains-mono text-sm space-y-2">
              <div className="text-muted">$ audit filter applied</div>
              <div className="text-muted">no logs matching criteria</div>
              <div className="text-muted mt-4">placeholder row structure:</div>
              <div className="text-muted mt-2 opacity-50">12:34:56 ACTION actor resource details</div>
              <div className="text-muted opacity-50">12:34:56 ACTION actor resource details</div>
              <div className="text-muted opacity-50">12:34:56 ACTION actor resource details</div>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="bg-surface-soft/50 border border-border rounded-lg p-4">
        <div className="text-xs font-medium text-text mb-3">Action Key</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-jetbrains-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-signal">●</span>
            <span>PUBLISHED, CREATED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan">●</span>
            <span>SYNCED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-commit">●</span>
            <span>UPDATED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-danger">●</span>
            <span>FAILED, DELETED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
