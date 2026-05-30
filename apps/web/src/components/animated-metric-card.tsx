'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface AnimatedMetricCardProps {
  icon: keyof typeof LucideIcons;
  value: number;
  label: string;
  secondary: string;
  color: 'signal' | 'commit' | 'danger' | 'cyan';
}

const colorClasses = {
  signal: 'text-signal',
  commit: 'text-commit',
  danger: 'text-danger',
  cyan: 'text-cyan',
};

export function AnimatedMetricCard({
  icon,
  value,
  label,
  secondary,
  color,
}: AnimatedMetricCardProps) {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<{ size: number; className: string }>;

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg bg-${color}/10`}>
          <Icon size={24} className={colorClasses[color]} />
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold text-text">{value}</div>
        <div className="text-sm font-medium text-muted">{label}</div>
        <div className="text-xs text-muted/60 mt-1">{secondary}</div>
      </div>
    </div>
  );
}
