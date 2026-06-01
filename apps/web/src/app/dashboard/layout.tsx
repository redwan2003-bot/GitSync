'use client';

import { DashboardShell } from '@/components/dashboard-shell';
import { ErrorBoundary } from '@/components/error-boundary';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <DashboardShell pageTitle="Dashboard" pageDescription="Signal Orbit Command Center">
        {children}
      </DashboardShell>
    </ErrorBoundary>
  );
}
