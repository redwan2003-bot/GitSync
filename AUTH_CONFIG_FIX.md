# Auth.js v5 Configuration Fix for Vercel

## Problem
GitHub OAuth failing with: `/api/auth/signin/github` → `/api/auth/error?error=Configuration`

## Root Cause
Vercel environment variables are using NextAuth v4 naming (`NEXTAUTH_*`), but the codebase uses **Auth.js v5** which expects `AUTH_*` variables.

---

## Version Check

**Current Stack:**
- `next-auth`: v5.0.0-beta.25 (this is Auth.js v5)
- `@auth/prisma-adapter`: v2.8.0

**Auth.js v5 uses:** `AUTH_*` prefix  
**NextAuth v4 used:** `NEXTAUTH_*` prefix

---

## Required Environment Variables for Vercel

### Core Auth Variables (REQUIRED)
These are the Auth.js v5 names that **MUST** exist in Vercel:

```
AUTH_SECRET=v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=
AUTH_URL=https://gitsyncweb.vercel.app
AUTH_TRUST_HOST=true
AUTH_GITHUB_ID=Ov23li5hzsYXVKCox1YE
AUTH_GITHUB_SECRET=51d9ed1a459292d72ec30f92cf9d6e9809443b38
```

### Backwards Compatibility (OPTIONAL but Recommended)
For backwards compatibility and debugging:

```
NEXTAUTH_SECRET=v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=
NEXTAUTH_URL=https://gitsyncweb.vercel.app
```

---

## Step-by-Step Fix

### 1. Check Current Vercel Env Vars
Go to: https://vercel.com/dashboard → GitSync project → Settings → Environment Variables

**Delete or Disable:** Any `NEXTAUTH_*` variables (optional)  
**Verify Present:** `AUTH_SECRET`, `AUTH_URL`, `AUTH_TRUST_HOST`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`

### 2. Add/Update Environment Variables in Vercel

Copy each line below and add to Vercel (or update if already present):

```
Key: AUTH_SECRET
Value: v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=
Environments: Production, Preview, Development

Key: AUTH_URL
Value: https://gitsyncweb.vercel.app
Environments: Production, Preview, Development

Key: AUTH_TRUST_HOST
Value: true
Environments: Production, Preview, Development

Key: AUTH_GITHUB_ID
Value: Ov23li5hzsYXVKCox1YE
Environments: Production, Preview, Development

Key: AUTH_GITHUB_SECRET
Value: 51d9ed1a459292d72ec30f92cf9d6e9809443b38
Environments: Production, Preview, Development

Key: NEXTAUTH_SECRET
Value: v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=
Environments: Production, Preview, Development

Key: NEXTAUTH_URL
Value: https://gitsyncweb.vercel.app
Environments: Production, Preview, Development
```

### 3. Trigger Redeploy

**Option A: Manual Redeploy**
1. Go to https://vercel.com/dashboard → GitSync
2. Click "Redeploy"
3. Wait for build to complete

**Option B: Redeploy via Git**
```bash
git commit --allow-empty -m "chore: trigger vercel redeploy"
git push origin main
```

### 4. Verify in Function Logs

After redeploy:
1. Go to Vercel dashboard → GitSync → Deployments
2. Click latest deployment
3. Go to "Logs" tab
4. Look for `/api/auth/signin/github` request
5. Should see successful auth flow (no Configuration error)

---

## How Auth.js v5 Reads These Variables

**In `src/auth.config.ts`:**
```typescript
providers: [
  GitHub({
    clientId: process.env.AUTH_GITHUB_ID!,        // ← Uses AUTH_GITHUB_ID
    clientSecret: process.env.AUTH_GITHUB_SECRET!,// ← Uses AUTH_GITHUB_SECRET
  }),
],
```

**In `src/auth.ts`:**
```typescript
trustHost: process.env.AUTH_TRUST_HOST === "true", // ← Uses AUTH_TRUST_HOST
```

**Automatically by Auth.js:**
- `AUTH_SECRET` for signing tokens
- `AUTH_URL` for callback URL validation

---

## Expected Behavior After Fix

### Before (Broken)
```
User clicks "Install GitHub App"
  → POST /api/auth/signin/github
  → Auth.js reads ENV → Missing AUTH_GITHUB_ID
  → Redirects to /api/auth/error?error=Configuration
```

### After (Fixed)
```
User clicks "Install GitHub App"
  → POST /api/auth/signin/github
  → Auth.js reads AUTH_GITHUB_ID, AUTH_GITHUB_SECRET
  → Redirects to GitHub OAuth login
  → User authorizes
  → Redirects back to /api/auth/callback/github?code=...
  → Auth.js validates & creates session
  → Redirects to /dashboard
```

---

## Testing After Fix

1. **Clear browser cache** (Ctrl+Shift+Delete)
2. **Go to:** https://gitsyncweb.vercel.app/dashboard
3. **Click:** "Install GitHub App" button in Settings
4. **Expected:** Redirects to GitHub login (NOT error page)
5. **After auth:** Returns to dashboard with GitHub status "Connected"

---

## Debugging if Still Broken

### Check 1: Verify Vercel has the variables
```bash
# In Vercel Function Logs, look for:
[auth.js] Loading AUTH_GITHUB_ID...
[auth.js] Loading AUTH_SECRET...
```

If variables don't load:
- Check if they were added to correct environment (Production vs Preview)
- Check for typos in variable names (exact case matters)
- Redeploy after adding variables

### Check 2: Check Vercel Logs for exact error
1. Go to Vercel deployment
2. Click "View Logs"
3. Search for "Configuration" or "AUTH_"
4. Look for stack trace

### Check 3: Local testing
```bash
# In local development (has .env):
pnpm dev
# Open http://localhost:3000/dashboard
# Click "Install GitHub App"
# Should work if .env is correct
```

---

## Environment Variable Checklist

- [ ] `AUTH_SECRET` = base64 string from `.env`
- [ ] `AUTH_URL` = `https://gitsyncweb.vercel.app`
- [ ] `AUTH_TRUST_HOST` = `true` (string)
- [ ] `AUTH_GITHUB_ID` = GitHub OAuth App ID
- [ ] `AUTH_GITHUB_SECRET` = GitHub OAuth App Secret
- [ ] `NEXTAUTH_SECRET` = same as `AUTH_SECRET` (backwards compat)
- [ ] `NEXTAUTH_URL` = same as `AUTH_URL` (backwards compat)
- [ ] All variables set for "Production" environment
- [ ] Vercel redeployed after adding variables
- [ ] No typos in variable names

---

## References

- Auth.js v5 Docs: https://authjs.dev/
- NextAuth v5 Migration: https://authjs.dev/guides/upgrade-to-v5
- Environment Variables: https://authjs.dev/concepts/faq#environment-variables

---

*This guide applies to next-auth v5.0.0-beta.25 with Auth.js v5 backend*
