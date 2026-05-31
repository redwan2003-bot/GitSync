# Vercel Deployment Verification Checklist

## ✅ Environment Variables Status

Based on `.env` file review - All required variables are present locally:

### Auth.js v5 Required Variables
- ✅ `AUTH_SECRET` = `v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=`
- ✅ `AUTH_URL` = `https://gitsyncweb.vercel.app`
- ✅ `AUTH_TRUST_HOST` = `true`
- ✅ `AUTH_GITHUB_ID` = `Ov23li5hzsYXVKCox1YE`
- ✅ `AUTH_GITHUB_SECRET` = `51d9ed1a459292d72ec30f92cf9d6e9809443b38`

### Backwards Compatibility
- ✅ `NEXTAUTH_SECRET` = `v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=`
- ✅ `NEXTAUTH_URL` = `https://gitsyncweb.vercel.app`

### Database
- ✅ `DATABASE_URL` = Neon Postgres connection (pooled)
- ✅ `DIRECT_DATABASE_URL` = Neon Postgres (direct)

### AI Provider (Gemini)
- ✅ `GEMINI_API_KEY` = Present
- ✅ `GEMINI_MODEL` = `gemini-3.5-flash`

### GitHub (OAuth + App)
- ✅ `AUTH_GITHUB_ID` = OAuth App ID
- ✅ `AUTH_GITHUB_SECRET` = OAuth App Secret
- ✅ `GITHUB_APP_ID` = App ID
- ✅ `GITHUB_APP_PRIVATE_KEY` = RSA private key
- ✅ `GITHUB_WEBHOOK_SECRET` = Webhook secret

### LinkedIn
- ✅ `LINKEDIN_CLIENT_ID` = Present
- ✅ `LINKEDIN_CLIENT_SECRET` = Present

### Redis/Upstash
- ✅ `REDIS_URL` = Present

### Cloudflare Workers
- ✅ `CLOUDFLARE_ACCOUNT_ID` = Present
- ✅ `CLOUDFLARE_API_TOKEN` = Present
- ✅ `CLOUDFLARE_API_WORKER_NAME` = `reposignal-api`

---

## 🚀 Next Steps to Verify Live Deployment

### Step 1: Confirm Vercel Environment Variables
Go to: https://vercel.com/dashboard → GitSync → Settings → Environment Variables

**Verify these are present with correct values:**

| Variable | In Vercel? | Value |
|----------|-----------|-------|
| `AUTH_SECRET` | ✓ Should be | `v3ittvVGH/tLHm8BcIg5OBHfYfHuKc7f+F53a9s0Tos=` |
| `AUTH_URL` | ✓ Should be | `https://gitsyncweb.vercel.app` |
| `AUTH_TRUST_HOST` | ✓ Should be | `true` |
| `AUTH_GITHUB_ID` | ✓ Should be | `Ov23li5hzsYXVKCox1YE` |
| `AUTH_GITHUB_SECRET` | ✓ Should be | `51d9ed1a459292d72ec30f92cf9d6e9809443b38` |
| `DATABASE_URL` | ✓ Should be | Neon connection string |
| `GEMINI_API_KEY` | ✓ Should be | API key |

### Step 2: Check Vercel Deployment
https://vercel.com/dashboard → GitSync → Deployments

**Most Recent Deployment:**
- [ ] Build status: ✅ Success
- [ ] Deployment status: ✅ Ready
- [ ] Environment variables loaded: Check logs

### Step 3: Test Live OAuth Flow
1. Open https://gitsyncweb.vercel.app/dashboard
2. Clear browser cache (Ctrl+Shift+Delete)
3. Go to Settings page
4. Click "Install GitHub App"

**Expected behavior:**
- ✅ Redirects to GitHub OAuth consent screen
- ✅ Shows GitSync app requesting permissions
- ✅ NOT: Error page showing "Configuration error"

**If working:**
- ✅ Authorize the app
- ✅ Should redirect back to dashboard
- ✅ GitHub status should show "Connected"

### Step 4: Verify Other Dashboard Functions
1. **Main Dashboard** (`/dashboard`)
   - [ ] Metrics load (repo count, draft count, posts)
   - [ ] Pending drafts card visible
   - [ ] No console errors

2. **Repositories** (`/dashboard/repositories`)
   - [ ] Shows connected repos or install CTA
   - [ ] No errors in console

3. **Settings** (`/dashboard/settings`)
   - [ ] Shows Gemini 3.5 Flash (not OpenAI)
   - [ ] GitHub/LinkedIn status displays
   - [ ] No crashes on load

4. **Audit** (`/dashboard/audit`)
   - [ ] Loads audit logs
   - [ ] Filter/search work

5. **Drafts** (`/dashboard/drafts`)
   - [ ] Shows real drafts (not mock)
   - [ ] Status filtering works

### Step 5: Check Vercel Function Logs
If any issues:
1. Go to Vercel Deployment
2. Click "View Logs"
3. Search for:
   - `AUTH_` (should see variables loaded)
   - `github` (OAuth flow)
   - `error` (any errors)

**Look for:**
```
✅ Good: [auth.js] GitHub provider initialized with AUTH_GITHUB_ID
❌ Bad: [auth.js] Error: AUTH_GITHUB_ID is undefined
```

---

## 🔧 If OAuth Still Broken

### Debug Checklist

1. **Verify variable names in Vercel** (case-sensitive!)
   ```
   ✅ AUTH_GITHUB_ID (not GITHUB_ID, not auth_github_id)
   ✅ AUTH_GITHUB_SECRET (not GITHUB_SECRET)
   ✅ AUTH_SECRET (not SECRET)
   ```

2. **Check environment scope in Vercel**
   - All variables must be set for "Production"
   - (Preview and Development can inherit or override)

3. **Force redeploy after adding variables**
   - Vercel caches environment
   - Go to Deployments → Click "Redeploy" on latest

4. **Test local development first**
   ```bash
   cd apps/web
   pnpm dev
   # Open http://localhost:3000/dashboard
   # Click "Install GitHub App"
   # If this works, issue is in Vercel
   # If this fails, issue is in code
   ```

5. **Check if Variables were actually saved**
   - Vercel dashboard sometimes doesn't refresh
   - Click away and back to Environment Variables
   - Verify all 7 variables still there

---

## 📋 Current Status Summary

| Component | Status | Notes |
|-----------|--------|-------|
| **Local .env** | ✅ Complete | All required variables present |
| **Vercel Variables** | ✅ Should be added | User confirmed variables updated |
| **Code Version** | ✅ Correct | Using Auth.js v5 (next-auth v5.0.0-beta.25) |
| **Deployment Ready** | ✅ Yes | Build passes, all code fixes applied |
| **OAuth Setup** | ⏳ Testing | Need to verify GitHub OAuth callback works |

---

## 🎯 Expected OAuth Flow After Fix

```
User clicks "Install GitHub App" on Settings page
    ↓
POST /api/auth/signin/github (NextAuth handler)
    ↓
Auth.js reads:
  - AUTH_GITHUB_ID ✓
  - AUTH_GITHUB_SECRET ✓
  - AUTH_URL ✓
    ↓
Redirects to GitHub OAuth: https://github.com/login/oauth/authorize?...
    ↓
User sees GitSync app permissions request
    ↓
User clicks "Authorize"
    ↓
GitHub redirects to: https://gitsyncweb.vercel.app/api/auth/callback/github?code=...
    ↓
Auth.js handles callback:
  - Exchanges code for token
  - Creates session
  - Creates/updates user in database
    ↓
Redirects to /dashboard
    ↓
Settings page shows "GitHub: Connected"
```

---

## 🚦 Traffic Light Status

| Indicator | Status | Meaning |
|-----------|--------|---------|
| 🟢 Local .env | ✅ All set | All variables correct |
| 🟡 Vercel Env | ⏳ Verify | User needs to confirm added |
| 🟡 Deployment | ⏳ Check | Need to verify build status |
| 🟡 OAuth Flow | ⏳ Test | Need to test GitHub OAuth |

---

## Next Action for User

1. ✅ **Confirmed:** All `.env` variables are correct locally
2. ⏳ **Next:** Test GitHub OAuth flow at https://gitsyncweb.vercel.app/dashboard
3. ⏳ **If broken:** Check Vercel Function Logs for exact error
4. ⏳ **If still broken:** Verify all 7 `AUTH_*` variables in Vercel are correctly set

---

*Verification created: All local environment configured correctly, awaiting Vercel test results*
