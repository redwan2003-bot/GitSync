import { createCipheriv, createHash, createHmac, randomBytes } from 'crypto';

export type LinkedInState = {
  workspaceId: string;
  userId: string;
  nonce: string;
  ts: number;
};

export type LinkedInTokenResponse = {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
};

export type LinkedInUserInfo = {
  sub?: string;
  name?: string;
};

export function getBaseUrl() {
  return process.env.AUTH_URL || process.env.NEXTAUTH_URL || 'http://localhost:3000';
}

export function getLinkedInSecret() {
  return process.env.TOKEN_ENCRYPTION_KEY || process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || '';
}

export function base64Url(input: string | Buffer) {
  return Buffer.from(input).toString('base64url');
}

export function signLinkedInState(payload: string) {
  return createHmac('sha256', getLinkedInSecret()).update(payload).digest('base64url');
}

export function verifyLinkedInState(state: string): LinkedInState | null {
  const [payload, signature] = state.split('.');
  if (!payload || !signature || signature !== signLinkedInState(payload)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as LinkedInState;
    const isFresh = typeof parsed.ts === 'number' && Date.now() - parsed.ts < 15 * 60 * 1000;
    return parsed.workspaceId && parsed.userId && isFresh ? parsed : null;
  } catch {
    return null;
  }
}

export function encryptLinkedInToken(token: string) {
  const key = createHash('sha256').update(getLinkedInSecret()).digest();
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  let encrypted = cipher.update(token, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return {
    encryptedToken: encrypted,
    iv: iv.toString('hex'),
    tag: cipher.getAuthTag().toString('hex'),
  };
}
