import { auth } from "@/auth";
import { UserMenu } from "@/components/user-menu";
import Link from "next/link";
import { Github, Linkedin, CheckCircle2, AlertCircle, FileText } from "lucide-react";

import { prisma } from "@GitSync/db";

export default async function DashboardPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const session = await auth();
  const searchParams = await props.searchParams;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

  let githubConnected = false;
  let linkedinConnected = searchParams.linkedin === 'connected';

  if (session?.user?.id) {
    const membership = await prisma.workspaceMember.findFirst({
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
      
      if (githubInstall) githubConnected = true;

      // 2. Check or Save LinkedIn Connection
      let linkedinToken = await prisma.tokenVaultEntry.findFirst({
        where: { workspaceId: membership.workspaceId, provider: "LINKEDIN" },
      });

      if (!linkedinToken && searchParams.linkedin === 'connected') {
        linkedinToken = await prisma.tokenVaultEntry.create({
          data: {
            workspaceId: membership.workspaceId,
            provider: "LINKEDIN",
            encryptedToken: "dummy_token_pending_exchange",
            iv: "dummy_iv",
            tag: "dummy_tag",
          },
        });
      }

      if (linkedinToken) linkedinConnected = true;
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold tracking-tight text-white">
            GitSync
          </h1>
          <Link
            href="/dashboard/drafts"
            className="text-sm text-slate-400 hover:text-white flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4" />
            Drafts
          </Link>
        </div>
        <UserMenu email={session?.user?.email} />
      </header>

      <main className="max-w-4xl mx-auto p-6 mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Connections
          </h2>
          <p className="text-slate-500 mt-1 text-sm">
            Connect GitHub for events and LinkedIn for publishing. Default mode
            is review-required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub App</h3>
                  <p className="text-sm text-slate-500">Source events</p>
                </div>
              </div>
              {githubConnected ? (
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-950 px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Connected
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-medium text-amber-400 bg-amber-950 px-2 py-1 rounded-full">
                  <AlertCircle className="w-3.5 h-3.5" /> Required
                </span>
              )}
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Install the GitSync GitHub App on selected public repositories.
            </p>
            <a 
              href={process.env.NEXT_PUBLIC_GITHUB_APP_INSTALL_URL || "#"}
              className="block w-full text-center py-2 px-4 rounded-lg bg-white text-slate-900 font-medium text-sm hover:bg-slate-100 transition-colors"
            >
              Install GitHub App
            </a>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-950 text-blue-400 rounded-lg">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <p className="text-sm text-slate-500">Publish destination</p>
                </div>
              </div>
              {linkedinConnected ? (
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-950 px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Connected
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-medium text-amber-400 bg-amber-950 px-2 py-1 rounded-full">
                  <AlertCircle className="w-3.5 h-3.5" /> Required
                </span>
              )}
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Official OAuth only. Profile Projects editing stays manual in v1.
            </p>
            <a
              href={`${apiUrl}/integrations/linkedin/connect`}
              className="block w-full text-center py-2 px-4 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors"
            >
              Connect with LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
