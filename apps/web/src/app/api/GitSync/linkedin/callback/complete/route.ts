import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../../../auth';
import { prisma } from '@GitSync/db';
import {
  encryptLinkedInToken,
  getBaseUrl,
  getLinkedInSecret,
  LinkedInTokenResponse,
  LinkedInUserInfo,
  verifyLinkedInState,
} from '../../../../../../lib/linkedin-oauth';

async function readCallbackPayload(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const body = (await request.json()) as { code?: string; state?: string };
    return { ...body, prefersRedirect: false };
  }

  const formData = await request.formData();
  return {
    code: String(formData.get('code') || ''),
    state: String(formData.get('state') || ''),
    prefersRedirect: true,
  };
}

function resultResponse(
  prefersRedirect: boolean,
  key: string,
  status = 200,
) {
  if (!prefersRedirect) {
    if (key === 'connected') return NextResponse.json({ ok: true });
    return NextResponse.json({ error: key }, { status });
  }

  const settingsUrl = new URL('/dashboard/settings', getBaseUrl());
  settingsUrl.searchParams.set('linkedin', key);
  return NextResponse.redirect(settingsUrl);
}

export async function POST(request: NextRequest) {
  let prefersRedirect = false;

  try {
    const payload = await readCallbackPayload(request);
    prefersRedirect = payload.prefersRedirect;

    const session = await auth();
    if (!session?.user?.id) {
      if (prefersRedirect) {
        const signInUrl = new URL('/sign-in', getBaseUrl());
        signInUrl.searchParams.set('callbackUrl', '/dashboard/settings');
        signInUrl.searchParams.set('error', 'auth_required');
        return NextResponse.redirect(signInUrl);
      }
      return resultResponse(false, 'auth_required', 401);
    }

    const { code, state } = payload;
    if (!code || !state) {
      return resultResponse(prefersRedirect, 'missing_code', 400);
    }

    const parsedState = verifyLinkedInState(state);
    if (!parsedState || parsedState.userId !== session.user.id) {
      return resultResponse(prefersRedirect, 'invalid_state', 400);
    }

    const clientId = process.env.LINKEDIN_CLIENT_ID;
    const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
    const redirectUri = process.env.LINKEDIN_REDIRECT_URI;

    if (!clientId || !clientSecret || !redirectUri || !getLinkedInSecret()) {
      return resultResponse(prefersRedirect, 'missing_config', 500);
    }

    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    const tokenJson = (await tokenResponse.json()) as LinkedInTokenResponse;
    if (!tokenResponse.ok || !tokenJson.access_token) {
      console.error('LinkedIn token exchange failed:', {
        status: tokenResponse.status,
        error: tokenJson.error,
        description: tokenJson.error_description,
      });
      return resultResponse(prefersRedirect, 'token_error', 502);
    }

    const userInfoResponse = await fetch('https://api.linkedin.com/v2/userinfo', {
      cache: 'no-store',
      headers: { Authorization: `Bearer ${tokenJson.access_token}` },
    });
    const userInfo = userInfoResponse.ok
      ? ((await userInfoResponse.json()) as LinkedInUserInfo)
      : {};
    const authorUrn = userInfo.sub ? `urn:li:person:${userInfo.sub}` : null;

    const encrypted = encryptLinkedInToken(tokenJson.access_token);
    await prisma.tokenVaultEntry.upsert({
      where: {
        workspaceId_provider: {
          workspaceId: parsedState.workspaceId,
          provider: 'LINKEDIN',
        },
      },
      update: {
        ...encrypted,
        authorUrn,
        expiresAt: tokenJson.expires_in
          ? new Date(Date.now() + tokenJson.expires_in * 1000)
          : null,
      },
      create: {
        workspaceId: parsedState.workspaceId,
        provider: 'LINKEDIN',
        ...encrypted,
        authorUrn,
        expiresAt: tokenJson.expires_in
          ? new Date(Date.now() + tokenJson.expires_in * 1000)
          : null,
      },
    });

    await prisma.auditLog
      .create({
        data: {
          workspaceId: parsedState.workspaceId,
          userId: session.user.id,
          action: 'LINKEDIN_CONNECTED',
          resourceType: 'integration',
          metadata: {
            provider: 'linkedin',
            authorUrn,
            memberName: userInfo.name || null,
          },
        },
      })
      .catch((auditError: unknown) => {
        console.error('LinkedIn audit log failed:', auditError);
      });

    return resultResponse(prefersRedirect, 'connected');
  } catch (callbackError) {
    console.error('LinkedIn callback completion error:', callbackError);
    return resultResponse(prefersRedirect, 'callback_error', 500);
  }
}
