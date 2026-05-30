'use client';

import React from 'react';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: { label: string; onClick: () => void };
}

export function EmptyState({ icon, title, description, cta }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-4xl mb-4 text-muted/40">{icon}</div>
      <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
      <p className="text-sm text-muted max-w-xs">{description}</p>
      {cta && (
        <button
          onClick={cta.onClick}
          className="mt-6 px-4 py-2 rounded-lg bg-signal text-bg font-medium text-sm hover:bg-signal/90 transition-colors"
        >
          {cta.label}
        </button>
      )}
    </div>
  );
}
