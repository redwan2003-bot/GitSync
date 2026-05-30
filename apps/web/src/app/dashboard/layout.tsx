import { DashboardShell } from '@/components/dashboard-shell';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell pageTitle="Dashboard" pageDescription="Signal Orbit Command Center">
      {children}
    </DashboardShell>
  );
}
