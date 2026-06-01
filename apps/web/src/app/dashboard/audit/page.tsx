'use client';

import { H1 } from '@/components/typography';
import { Search, Filter, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  actor?: string;
  resource?: string;
  details?: string;
}

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
  actor?: string;
  resource?: string;
  details?: string;
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
        <span className="text-cyan w-20 shrink-0">{actor || 'system'}</span>
        <span className="text-text flex-1">{resource || 'N/A'}</span>
        <span className="text-muted">{details || ''}</span>
      </div>
    </div>
  );
};

export default function AuditPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('All');
  const [filteredLogs, setFilteredLogs] = useState<AuditLog[]>([]);

  useEffect(() => {
    async function loadLogs() {
      try {
        const res = await fetch('/api/GitSync/audit-logs?limit=100');
        
        if (!res.ok) throw new Error('Failed to fetch logs');
        
        const data = await res.json();
        setLogs(data.logs || []);
        setFilteredLogs(data.logs || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load audit logs');
      } finally {
        setLoading(false);
      }
    }

    loadLogs();
  }, []);

  useEffect(() => {
    let filtered = logs;

    // Filter by action
    if (actionFilter !== 'All') {
      filtered = filtered.filter((log) => log.action === actionFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (log) =>
          (log.resource?.toLowerCase().includes(searchTerm)) ||
          (log.actor?.toLowerCase().includes(searchTerm)) ||
          (log.details?.toLowerCase().includes(searchTerm))
      );
    }

    setFilteredLogs(filtered);
  }, [searchTerm, actionFilter, logs]);

  if (loading) {
    return (
      <div className="space-y-6">
        <H1>Audit Log</H1>
        <div className="bg-surface border border-border rounded-lg p-8 animate-pulse h-96" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <H1>Audit Log</H1>
        <div className="p-4 bg-danger/10 text-danger rounded-lg">{error}</div>
      </div>
    );
  }

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
            onChange={(e) => setActionFilter(e.target.value)}
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
            onChange={(e) => setSearchTerm(e.target.value)}
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
              {logs.length === 0 ? (
                <>
                  <div className="text-muted">$ audit --all</div>
                  <div className="text-muted">no audit events recorded yet</div>
                </>
              ) : (
                <>
                  <div className="text-muted">$ audit filter applied</div>
                  <div className="text-muted">no logs matching criteria</div>
                </>
              )}
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
