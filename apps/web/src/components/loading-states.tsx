'use client';

import { ReactNode } from 'react';

export interface LoadingSkeletonProps {
  count?: number;
  height?: string;
}

export function LoadingSkeleton({ count = 3, height = 'h-32' }: LoadingSkeletonProps) {
  return (
    <div className="space-y-4 animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div key={i} className={`${height} bg-surface-soft rounded-lg`} />
      ))}
    </div>
  );
}

export interface ErrorBoundaryProps {
  error: string;
  onRetry?: () => void;
}

export function ErrorBoundary({ error, onRetry }: ErrorBoundaryProps) {
  return (
    <div className="p-4 bg-danger/10 border border-danger/20 rounded-lg space-y-3">
      <div className="text-sm font-medium text-danger">Error</div>
      <p className="text-sm text-danger/80">{error}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="text-xs text-danger hover:text-danger/80 font-medium underline"
        >
          Try again
        </button>
      )}
    </div>
  );
}

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="text-center py-12 space-y-4">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <div>
        <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
        {description && <p className="text-sm text-muted max-w-md mx-auto">{description}</p>}
      </div>
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="inline-block px-4 py-2 bg-signal text-white rounded-lg hover:bg-signal/90 transition-colors text-sm font-medium mt-4"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
