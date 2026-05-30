import { auth } from "@/auth";
import DashboardTopBar from "@/components/DashboardTopBar";
import DashboardContent from "@/components/dashboard-content";

import { prisma } from "@GitSync/db";

export default async function DashboardPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const session = await auth();
  const searchParams = await props.searchParams;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

  let githubConnected = false;
  let linkedinConnected = false;

  let membership = null;

  if (session?.user?.id) {
    membership = await prisma.workspaceMember.findFirst({
      where: { userId: session.user.id },
      select: { workspaceId: true },
    });

    if (membership?.workspaceId) {
      // 1. Check or Save GitHub Installation
      let githubInstall = await prisma.gitHubInstallation.findFirst({
        where: { workspaceId: membership.workspaceId },
      });

      if (!githubInstall && searchParams.installation_id) {
        githubInstall = await prisma.gitHubInstallation.create({
          data: {
            workspaceId: membership.workspaceId,
            installationId: BigInt(searchParams.installation_id as string),
            accountLogin: session.user.name || session.user.email || "User",
            accountType: "User",
          },
        });
      }
      
      if (githubInstall || searchParams.github === 'connected') githubConnected = true;

      // 2. Check LinkedIn Connection
      let linkedinToken = await prisma.tokenVaultEntry.findFirst({
        where: { workspaceId: membership.workspaceId, provider: "LINKEDIN" },
      });

      if (linkedinToken || searchParams.linkedin === 'connected') linkedinConnected = true;
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <DashboardTopBar title="Dashboard" />
      <DashboardContent githubConnected={githubConnected} linkedinConnected={linkedinConnected} membership={membership} apiUrl={apiUrl} />
    </div>
  );
}
