# GitHub App Installation Debug Report

## Current Architecture Overview

### ✅ What's Working

1. **GitHub App Install Link** - Now uses correct external link:
   ```
   https://github.com/apps/gitsync-engine/installations/new
   ```
   This opens the GitHub App installation page correctly. ✓

2. **Database Model** - `GitHubInstallation` exists in schema with fields:
   - `id` (cuid)
   - `workspaceId` (FK to Workspace)
   - `installationId` (BigInt, unique)
   - `accountLogin` (String)
   - `accountType` (String)
   - `createdAt` / `updatedAt`

3. **Integration Status API** - `/api/GitSync/integration-status` correctly queries:
   ```ts
   const github = await prisma.gitHubInstallation.findFirst({
     where: { workspaceId: workspace.workspaceId }
   });
   
   return {
     github: {
       connected: !!github,  // ✓ True if installation record exists
       configured: process.env.GITHUB_APP_ID ? true : false
     }
   }
   ```

4. **GitHub Repos API** - `/api/GitSync/github-repos` correctly checks:
   ```ts
   const githubInstallations = await prisma.gitHubInstallation.findMany({
     where: { workspaceId: workspace.workspaceId }
   });
   return { hasGitHub: !!githubInstallations.length }
   ```

### 🔴 CRITICAL MISSING PIECE - GitHub App Callback Handler

**Problem:** After user installs GitHub App, GitHub redirects back with `installation_id`, but the frontend **does NOT pass the `state` parameter** (workspaceId) to GitHub.

#### Expected Flow:
1. User clicks "Install GitHub App"
2. User redirected to: `https://github.com/apps/gitsync-engine/installations/new?state=WORKSPACE_ID`
3. User authorizes the app ✓
4. GitHub redirects to setup URL with callback params
5. Backend callback handler receives `installation_id` and `state`
6. Backend creates `GitHubInstallation` record
7. UI refreshes and shows "Connected" ✗ (currently not happening)

#### Backend Callback Handler EXISTS
File: `apps/api/src/routes/github-app.ts` (lines 16-85)

The handler is implemented correctly:
```ts
githubAppRouter.get("/callback", async (c) => {
  const installationId = c.req.query("installation_id");
  const setupAction = c.req.query("setup_action");
  const state = c.req.query("state"); // workspaceId we passed in install URL
  
  // Validates state exists
  if (!state) {
    return c.redirect(`${webUrl}/dashboard?github=error&message=missing_workspace_state`);
  }
  
  // Creates GitHubInstallation record
  await prisma.gitHubInstallation.create({
    data: {
      workspaceId: state,
      installationId: BigInt(installationId),
      accountLogin: owner?.name || owner?.email || "User",
      accountType: "User",
    },
  });
  
  return c.redirect(`${webUrl}/dashboard?github=connected`);
});
```

**Status:** Route is implemented but GitHub can't call it because:
1. Frontend doesn't pass `state` parameter
2. GitHub App settings may not have Setup URL configured

### 🚨 Why Status Not Showing After Install

**Step-by-step failure scenario:**

1. User clicks "Install GitHub App" button
2. Opens: `https://github.com/apps/gitsync-engine/installations/new` (without state)
3. User authorizes app ✓
4. GitHub tries to redirect to Setup URL:
   - URL from GitHub Settings: unknown/not-configured/wrong
   - Should be: `https://reposignal-api.gitsync.workers.dev/integrations/github/callback`
5. **Result:** Without `state` parameter, backend callback can't store installation

### ✅ Fix Required - Frontend Implementation

**Current (broken):**
```tsx
<a
  href={process.env.NEXT_PUBLIC_GITHUB_APP_INSTALL_URL ?? "https://github.com/apps/gitsync-engine/installations/new"}
  target="_blank"
  rel="noreferrer"
>
  Install GitHub App
</a>
```

**Needs to be (fixed):**
```tsx
const workspaceId = membership?.workspaceId;
const githubInstallUrl = `https://github.com/apps/gitsync-engine/installations/new?state=${encodeURIComponent(workspaceId)}`;

<a
  href={githubInstallUrl}
  target="_blank"
  rel="noreferrer"
>
  Install GitHub App
</a>
```

**Why?**
- GitHub passes `state` parameter back to callback URL unchanged
- Backend callback needs `state` to know which workspace to associate installation with
- Without `state`, callback handler rejects with "missing_workspace_state" error

### 📋 Complete End-to-End Flow

#### 1. GitHub App Settings (Verify)
Go to: https://github.com/settings/apps/gitsync-engine

**Required configuration:**
- App Name: `gitsync-engine` ✓
- Public: Yes ✓
- Permissions:
  - Repository: Contents (read) ✓
  - Organization: Members (read) if needed
- Webhook URL: `https://reposignal-api.gitsync.workers.dev/webhooks/github`
- Setup URL / Post-Installation: NOT SET (GitHub uses default) OR
  - Set to: `https://reposignal-api.gitsync.workers.dev/integrations/github/callback`

#### 2. Frontend Links (Need Fix)
Files to update:
- `apps/web/src/components/dashboard-content.tsx`
- `apps/web/src/app/dashboard/settings/page.tsx`
- `apps/web/src/app/dashboard/repositories/page.tsx`

Change from:
```tsx
href={NEXT_PUBLIC_GITHUB_APP_INSTALL_URL}
```

To:
```tsx
const githubInstallUrl = `https://github.com/apps/gitsync-engine/installations/new?state=${encodeURIComponent(workspaceId)}`;
<a href={githubInstallUrl} target="_blank" rel="noreferrer">
```

#### 3. Backend Callback (✓ Already Implemented)
- Route: `GET /integrations/github/callback`
- Location: `apps/api/src/routes/github-app.ts`
- Handler:
  1. Receives `installation_id`, `state` (workspaceId), `setup_action`
  2. Creates `GitHubInstallation` record in DB
  3. Redirects to `https://gitsyncweb.vercel.app/dashboard?github=connected`

#### 4. Status Query API (✓ Already Works)
- Endpoint: `GET /api/GitSync/integration-status`
- Queries: `GitHubInstallation` table
- Response:
  ```json
  {
    "github": {
      "connected": true,
      "configured": true
    }
  }
  ```

#### 5. UI Display (✓ Already Works)
- Settings page calls `integration-status` on load
- Displays "Connected" badge if `github.connected === true`
- Shows "Install GitHub App" button if `github.connected === false`

### 🔧 Missing Pieces Summary

| Component | Status | Action Required |
|-----------|--------|-----------------|
| GitHub App Install Link | ❌ Incomplete | **Add `state=workspaceId` parameter** |
| GitHub App Setup URL Config | ⚠️ Unknown | **Verify in GitHub Developer Settings** |
| Backend Callback Handler | ✅ Exists | None - already implemented |
| Database Model | ✅ Ready | None - already exists |
| Integration Status API | ✅ Works | None - already correct |
| Status Display UI | ✅ Works | None - already correct |

### 🎯 Implementation Steps

**Step 1: Update Frontend Links (3 files)**

Files:
- `apps/web/src/components/dashboard-content.tsx`
- `apps/web/src/app/dashboard/settings/page.tsx`
- `apps/web/src/app/dashboard/repositories/page.tsx`

Pattern to implement:
```tsx
// Get workspaceId from membership or session
const workspaceId = membership?.workspaceId || '';

// Build GitHub App install URL with state parameter
const githubInstallUrl = `https://github.com/apps/gitsync-engine/installations/new?state=${encodeURIComponent(workspaceId)}`;

// Render as external link
<a
  href={githubInstallUrl}
  target="_blank"
  rel="noreferrer"
  className="...button classes..."
>
  Install GitHub App
</a>
```

**Step 2: Verify GitHub App Settings**

1. Go to https://github.com/settings/apps/gitsync-engine
2. Under "Post-Installation":
   - Leave Setup URL empty (GitHub will use Callback Registration URL)
   - OR set to: `https://reposignal-api.gitsync.workers.dev/integrations/github/callback`
3. Ensure "Redirect on update" is enabled
4. Verify Webhook URL is set

**Step 3: Test End-to-End**

1. After deployment, click "Install GitHub App" on Settings page
2. Complete GitHub authorization
3. Should see redirect to dashboard
4. Refresh the page or wait 2 seconds
5. Status should change to "Connected"
6. GitHub App should appear in installed apps at https://github.com/settings/installations

### 📊 Status Check Commands

**Check if installation record was created:**
```sql
SELECT * FROM "GitHubInstallation" WHERE workspaceId = 'YOUR_WORKSPACE_ID';
```

**Check integration status API:**
```bash
curl -H "Cookie: authjs.session-token=YOUR_TOKEN" \
  https://gitsyncweb.vercel.app/api/GitSync/integration-status
```

**Expected response when connected:**
```json
{
  "github": {
    "connected": true,
    "configured": true
  },
  "linkedin": {...},
  "aiProvider": {...}
}
```

