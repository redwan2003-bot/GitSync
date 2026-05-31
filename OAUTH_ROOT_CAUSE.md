# OAuth Configuration Error: Root Cause & Fix

## Issue
```
/api/auth/signin/github → /api/auth/error?error=Configuration
```

## Root Cause Identified
✅ **Verified in codebase:**

| Component | Finding |
|-----------|---------|
| **Package Version** | `next-auth` v5.0.0-beta.25 (= Auth.js v5) |
| **Auth Config** | Uses `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` |
| **Expected Env Vars** | `AUTH_SECRET`, `AUTH_URL`, `AUTH_TRUST_HOST` |
| **Vercel Status** | ❌ Missing `AUTH_*` variables |
| **Has Instead** | ✓ NEXTAUTH_* variables (NextAuth v4 naming) |

---

## The Mismatch

**Auth.js v5 (what the code uses):**
```typescript
// src/auth.config.ts
providers: [
  GitHub({
    clientId: process.env.AUTH_GITHUB_ID!,        // ← Expects AUTH_GITHUB_ID
    clientSecret: process.env.AUTH_GITHUB_SECRET!,// ← Expects AUTH_GITHUB_SECRET
  }),
],

// src/auth.ts
trustHost: process.env.AUTH_TRUST_HOST === "true", // ← Expects AUTH_TRUST_HOST
```

**NextAuth v4 (old naming):**
Uses `NEXTAUTH_GITHUB_ID`, `NEXTAUTH_GITHUB_SECRET`, etc.

**Vercel has:** `NEXTAUTH_SECRET`, `NEXTAUTH_URL`  
**Vercel is missing:** `AUTH_SECRET`, `AUTH_URL`, `AUTH_TRUST_HOST`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`

---

## Solution

### Step 1: Add to Vercel Environment Variables

**Settings → Environment Variables:**

Add these 7 variables (all environments):

| Key | Value |
|-----|-------|
| `AUTH_SECRET` | `v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=` |
| `AUTH_URL` | `https://gitsyncweb.vercel.app` |
| `AUTH_TRUST_HOST` | `true` |
| `AUTH_GITHUB_ID` | `Ov23li5hzsYXVKCox1YE` |
| `AUTH_GITHUB_SECRET` | `51d9ed1a459292d72ec30f92cf9d6e9809443b38` |
| `NEXTAUTH_SECRET` | `v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=` |
| `NEXTAUTH_URL` | `https://gitsyncweb.vercel.app` |

### Step 2: Redeploy

1. Go to https://vercel.com/dashboard → GitSync → Deployments
2. Click "Redeploy" on the latest deployment
3. Wait for build to complete

**OR** via Git:
```bash
git commit --allow-empty -m "chore: trigger vercel redeploy"
git push origin main
```

### Step 3: Test

1. Clear browser cache
2. Go to https://gitsyncweb.vercel.app/dashboard
3. Click "Install GitHub App"
4. **Expected:** Redirects to GitHub login
5. **Wrong:** Redirects to `/api/auth/error?error=Configuration`

---

## Why This Happened

1. **Local development** has `.env` with both `AUTH_*` and `NEXTAUTH_*` (works fine)
2. **Vercel** was missing the `AUTH_*` variables
3. **Auth.js v5** looks for `AUTH_GITHUB_ID`, doesn't find it
4. **Falls back to undefined** → causes "Configuration" error
5. **Callback fails** → redirects to error page

---

## Documentation Created

**File:** `AUTH_CONFIG_FIX.md`  
**Location:** Repository root  
**Contains:**
- Detailed version analysis
- Step-by-step Vercel configuration
- Debugging checklist
- Testing instructions
- References to Auth.js docs

---

## Verification Checklist

Before redeploy:
- [ ] Vercel Settings → Environment Variables open
- [ ] All 7 variables listed above added
- [ ] Correct values copied (no typos)
- [ ] All variables set for "Production" environment

After redeploy:
- [ ] Build completed successfully
- [ ] Browser cache cleared
- [ ] GitHub OAuth button clicked
- [ ] Redirects to GitHub (not error page)
- [ ] Authorization works end-to-end

If still broken:
- [ ] Check Vercel Function Logs for exact error
- [ ] Search logs for "AUTH_" or "Configuration"
- [ ] Verify env vars loaded by runtime
- [ ] Test local dev first (has working .env)

---

## File References

**Code using these variables:**
- `apps/web/src/auth.config.ts` - GitHub provider config
- `apps/web/src/auth.ts` - Auth.js initialization
- `apps/web/src/app/api/auth/[...nextauth]/route.ts` - OAuth handler

**Local .env example:**
- `apps/web/.env` (lines 24-31) - Has working AUTH_* values

**Vercel config guide:**
- `AUTH_CONFIG_FIX.md` (newly created)

---

## Next Steps

1. ✅ **Identified root cause** - Auth.js v5 needs AUTH_* vars
2. ⏳ **Add to Vercel** - Copy 7 variables to environment
3. ⏳ **Redeploy** - Trigger fresh build
4. ⏳ **Test** - Verify OAuth flow works
5. ⏳ **Monitor logs** - Check for any remaining errors

---

*Root cause analysis completed. Guide created and pushed to GitHub.*
*Commit: 9128561*
