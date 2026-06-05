# GitHub App Installation Status Fix - Action Plan

## Executive Summary

✅ **Root Cause Identified:** GitHub App install link missing `state=workspaceId` parameter

❌ **Current State:** 
- User can install GitHub App successfully
- Backend callback handler exists but never receives workspace context
- Installation record created but **not associated with correct workspace**
- UI shows "Disconnected" even after install

✅ **Solution:** Add `state` parameter to all GitHub App install links (3 files)

---

## Critical Issue Breakdown

### The Problem

GitHub OAuth-style flow uses the `state` parameter to maintain context:

```
User clicks "Install GitHub App"
    ↓
Redirects to: https://github.com/apps/gitsync-engine/installations/new
    ↓
User authorizes app on GitHub
    ↓
GitHub redirects to: 
  https://reposignal-api.gitsync.workers.dev/integrations/github/callback
  ?installation_id=12345
  &setup_action=install
  &state=??? ← MISSING! Backend doesn't know which workspace this is for
    ↓
Backend creates GitHubInstallation but with wrong/missing workspaceId
    ↓
UI queries integration-status but finds no record for this workspace
    ↓
Status remains "Disconnected" forever
```

### Why `state` Parameter Matters

From backend `apps/api/src/routes/github-app.ts` (line 30-31):
```ts
if (!state) {
  return c.redirect(`${webUrl}/dashboard?github=error&message=missing_workspace_state`);
}
```

The backend **requires** `state` to proceed. Without it, installation fails with error.

---

## Implementation (Frontend Only)

### Files to Update

1. **`apps/web/src/components/dashboard-content.tsx`**
   - Currently: `href={process.env.NEXT_PUBLIC_GITHUB_APP_INSTALL_URL ?? "..."`
   - Fix: Calculate URL with `state` parameter

2. **`apps/web/src/app/dashboard/settings/page.tsx`**
   - Currently: Link with URL but no state
   - Fix: Add state parameter

3. **`apps/web/src/app/dashboard/repositories/page.tsx`**
   - Currently: Link with URL but no state
   - Fix: Add state parameter

### Code Pattern

```tsx
// Get workspaceId from context/props/session
const workspaceId = membership?.workspaceId || '';

// Build URL with state parameter
const githubInstallUrl = `https://github.com/apps/gitsync-engine/installations/new?state=${encodeURIComponent(workspaceId)}`;

// Render
<a
  href={githubInstallUrl}
  target="_blank"
  rel="noreferrer"
  className="...existing classes..."
>
  Install GitHub App
</a>
```

### Why `encodeURIComponent()`?

- Safely encodes special characters in URL
- Example: `my-workspace-123` → `my-workspace-123` (no change)
- Example: `my workspace/123` → `my%20workspace%2F123` (escaped)

---

## After Fix - Expected Flow

```
1. User sees "Install GitHub App" button
   ↓
2. Button href = "...?state=WORKSPACE_ID"
   ↓
3. User clicks → GitHub App installation page
   ↓
4. User authorizes app → GitHub processes
   ↓
5. GitHub redirects to callback with state preserved:
   /integrations/github/callback?installation_id=123&state=WORKSPACE_ID
   ↓
6. Backend receives request:
   - Parses state → knows this is for WORKSPACE_ID
   - Parses installation_id → 123
   - Creates GitHubInstallation(workspaceId: WORKSPACE_ID, installationId: 123)
   ↓
7. Backend redirects to: /dashboard?github=connected
   ↓
8. Settings page loads
   ↓
9. Calls /api/GitSync/integration-status
   ↓
10. API queries: GitHubInstallation.findFirst({ workspaceId })
    Returns: { github: { connected: true } }
   ↓
11. UI updates: Shows "Connected" badge ✓
    Disconnect button enabled
    "Install GitHub App" button hidden
```

---

## Testing Checklist

After implementation:

- [ ] Build completes without errors: `pnpm build`
- [ ] Code changes only affect frontend (3 files)
- [ ] All three install buttons now have `state` parameter
- [ ] Deploy to Vercel
- [ ] Test in browser:
  - [ ] Click "Install GitHub App" on Settings page
  - [ ] Verify URL contains `?state=` with workspaceId value
  - [ ] Complete GitHub authorization
  - [ ] Confirm redirect back to dashboard
  - [ ] Refresh settings page
  - [ ] Verify status shows "Connected"
  - [ ] Check database for GitHubInstallation record:
    ```sql
    SELECT * FROM "GitHubInstallation" WHERE workspaceId = 'YOUR_WORKSPACE_ID';
    ```

---

## Verification Commands

### Check Installation Record Created
```bash
# SSH into database or use Neon console
SELECT * FROM "GitHubInstallation" WHERE workspaceId = 'WORKSPACE_ID';
```

Expected output:
```
id | workspaceId | installationId | accountLogin | accountType | createdAt | updatedAt
---|-------------|----------------|--------------|------------|-----------|----------
1  | ws-123      | 12345678       | user-name    | User       | 2024-06-01| 2024-06-01
```

### Check Integration Status API
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://gitsyncweb.vercel.app/api/GitSync/integration-status | jq '.github'
```

Expected output:
```json
{
  "connected": true,
  "configured": true
}
```

---

## What Already Works (Don't Change)

✅ Backend callback handler: `apps/api/src/routes/github-app.ts`
✅ Database model: `GitHubInstallation` in schema.prisma
✅ Integration status API: `/api/GitSync/integration-status`
✅ GitHub repos API: `/api/GitSync/github-repos`
✅ Settings page UI: Display logic is correct
✅ GitHub App creation/permissions: Already set up

---

## Roll-Out Plan

1. **Update 3 files with state parameter** (15 minutes)
2. **Test locally/in browser if possible** (10 minutes)
3. **Commit and push** (5 minutes)
4. **Vercel auto-deploys** (2-3 minutes)
5. **Manual end-to-end test** (10 minutes)

**Total estimated time:** 45 minutes

---

## Rollback If Needed

If anything breaks:
- Revert to previous commit
- GitHub App install will still work but status won't update
- No data loss (installation records remain in DB)

---

## Future Enhancements (Not in Scope)

- [ ] Disconnect endpoint implementation (DELETE /api/GitSync/integrations/github)
- [ ] Repository selection UI
- [ ] Webhook event processing
- [ ] Real-time sync status updates

