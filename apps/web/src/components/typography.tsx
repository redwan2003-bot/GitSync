import React from 'react';

export function H1({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-3xl font-bold text-text ${className}`}>
      {children}
    </h1>
  );
}

export function H2({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-2xl font-bold text-text ${className}`}>
      {children}
    </h2>
  );
}

export function H3({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-lg font-semibold text-text ${className}`}>
      {children}
    </h3>
  );
}

export function Body({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-sm text-text ${className}`}>{children}</p>;
}

export function Caption({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xs text-muted ${className}`}>{children}</p>
  );
}

export function Code({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <code className={`text-xs font-mono bg-surface-soft px-2 py-1 rounded text-cyan ${className}`}>
      {children}
    </code>
  );
}

export function PixelStatusBadge({
  status,
  className = '',
}: {
  status: 'READY' | 'SYNCING' | 'REVIEW' | 'FAILED' | 'PUBLISHED';
  className?: string;
}) {
  const statusColors: Record<typeof status, string> = {
    READY: 'bg-signal/10 text-signal',
    SYNCING: 'bg-cyan/10 text-cyan',
    REVIEW: 'bg-commit/10 text-commit',
    FAILED: 'bg-danger/10 text-danger',
    PUBLISHED: 'bg-signal/10 text-signal',
  };

  return (
    <span className={`status-badge px-2 py-1 rounded ${statusColors[status]} ${className}`}>
      {status}
    </span>
  );
}
