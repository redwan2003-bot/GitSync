import { NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { auth } from '../../../../../auth';
import { prisma } from '@GitSync/db';
import { base64Url, getBaseUrl, getLinkedInSecret, signLinkedInState } from '../../../../../lib/linkedin-oauth';

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.redirect(new URL('/sign-in?callbackUrl=/dashboard/settings', getBaseUrl()));
  }

  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;

  if (!clientId || !redirectUri || !getLinkedInSecret()) {
    return NextResponse.redirect(new URL('/dashboard/settings?linkedin=missing_config', getBaseUrl()));
  }

  const membership = await prisma.workspaceMember.findFirst({
    where: { userId: session.user.id },
    select: { workspaceId: true },
  });

  if (!membership) {
    return NextResponse.redirect(new URL('/dashboard/settings?linkedin=workspace_missing', getBaseUrl()));
  }

  const statePayload = base64Url(JSON.stringify({
    workspaceId: membership.workspaceId,
    userId: session.user.id,
    nonce: randomBytes(16).toString('hex'),
    ts: Date.now(),
  }));
  const state = `${statePayload}.${signLinkedInState(statePayload)}`;

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'openid profile email w_member_social',
    state,
  });

  return NextResponse.redirect(`https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`);
}
