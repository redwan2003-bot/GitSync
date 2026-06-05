# GitHub App Installation: Debug & Troubleshooting Guide

## Quick Verification Steps

### 1. Check Debug Endpoint

While logged in, visit:
```
https://gitsyncweb.vercel.app/api/GitSync/github/debug-installation
```

You should see:
```json
{
  "debug": {
    "timestamp": "2026-06-01T18:xx:xxZ",
    "environment": "production"
  },
  "user": {
    "id": "user-id",
    "email": "your-email@example.com"
  },
  "workspace": {
    "id": "workspace-id",
    "name": "workspace-name"
  },
  "database": {
    "host": "ep-xxx.neon.tech",
    "name": "neondb"
  },
  "installations": {
    "forThisWorkspace": [
      {
        "id": "installation-id",
        "workspaceId": "workspace-id",
        "installationId": 137189045,
        "accountLogin": "your-github-username",
        "accountType": "User",
        "createdAt": "2026-06-01T18:xx:xxZ",
        "updatedAt": "2026-06-01T18:xx:xxZ"
      }
    ],
    "globalLatest10": [...]
  },
  "integrationStatus": {
    "github": {
      "connected": true,
      "configured": true,
      "installationId": "137189045",
      "accountLogin": "your-github-username",
      "accountType": "User"
    },
    ...
  }
}
```

**Key fields to verify:**
- ✅ `installations.forThisWorkspace` is NOT empty
- ✅ `installationId` = 137189045 (or latest installation ID)
- ✅ `accountLogin` = your GitHub username
- ✅ `integrationStatus.github.connected` = true

---

### 2. If Installation is Missing

**Problem:** `installations.forThisWorkspace` is empty, but you installed the app in GitHub.

**Cause:** GitHub App callback never fired or failed.

**Solution A - Manual Repair:**

Call the sync endpoint:
```bash
curl -X POST https://gitsyncweb.vercel.app/api/GitSync/github/installations/sync \
  -H "Content-Type: application/json" \
  -d '{
    "installationId": 137189045,
    "accountLogin": "your-github-username",
    "accountType": "User"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Installation synced successfully",
  "installation": {
    "id": "generated-id",
    "workspaceId": "workspace-id",
    "installationId": "137189045",
    "accountLogin": "your-github-username",
    "accountType": "User",
    "createdAt": "2026-06-01T18:xx:xxZ",
    "updatedAt": "2026-06-01T18:xx:xxZ"
  }
}
```

Then verify the debug endpoint again.

**Solution B - Reinstall with Full Callback:**

1. Go to GitHub → Settings → Applications → Installed GitHub Apps
2. Click GitSync Engine → Uninstall
3. Navigate to settings or repositories page
4. Click "Install GitHub App" button
5. Complete GitHub OAuth + repository selection
6. GitHub redirects back with `?github=connected`
7. UI auto-refreshes integration status
8. Run debug endpoint again

---

### 3. Check Integration Status Directly

```bash
curl https://gitsyncweb.vercel.app/api/GitSync/integration-status
```

Should return:
```json
{
  "github": {
    "connected": true,
    "configured": true,
    "installationId": "137189045",
    "accountLogin": "your-github-username",
    "accountType": "User"
  },
  ...
}
```

---

### 4. Verify Repositories Are Accessible

```bash
curl https://gitsyncweb.vercel.app/api/GitSync/github-repos
```

Should return array of repositories:
```json
{
  "repos": [
    {
      "id": "repo-id",
      "name": "repo-name",
      "visibility": "public",
      "status": "READY",
      "score": 42,
      "lastActivity": "2026-06-01T18:00:00Z"
    }
  ]
}
```

If empty, repositories may not be synced yet or GitHub App lacks access.

---

### 5. Check UI Reflects Connection

After repair or reinstall:

1. **Settings Page:** Should show "GitHub Connected"
2. **Repositories Page:** Should show list of repos (not install CTA)
3. **Dashboard:** GitHub section should show Connected badge

If UI still shows disconnected after manual repair:
- Clear browser cache (Cmd/Ctrl + Shift + Delete)
- Refresh page (Cmd/Ctrl + R)
- Check debug endpoint again

---

## Troubleshooting Matrix

| Issue | Check First | Then Try |
|-------|------------|----------|
| Debug endpoint shows empty `forThisWorkspace` | Verify GitHub App is actually installed | Use sync endpoint to repair |
| `integrationStatus.connected` = false | Check `installations.forThisWorkspace` | Run sync endpoint if not empty |
| API returns `connected: true` but UI shows disconnected | Clear browser cache | Hard refresh page |
| Repositories list is empty | Verify `connected: true` | Check if repos synced to DB |
| Sync endpoint returns error | Check `workspaceId` is valid | Contact support with error message |

---

## Debug Information Available

The `/api/GitSync/github/debug-installation` endpoint provides:

- **User & Workspace:** Current authenticated user and active workspace
- **Database Host:** Verifies correct database connection
- **All Installations:** For this workspace and globally (latest 10, redacted)
- **Full Status:** Integration status including all connection details

This is **protected by authentication** and safe to use. It does not expose secrets.

---

## Manual Sync Endpoint

**Endpoint:** `POST /api/GitSync/github/installations/sync`

**Authentication:** Required (session must be active)

**Body:**
```json
{
  "installationId": 137189045,
  "accountLogin": "your-github-username",
  "accountType": "User"
}
```

**Response:** Upser result with created/updated installation record

**Purpose:** If GitHub App callback failed, this repairs the connection by manually linking the installation to your workspace.

---

## Next Steps

1. ✅ **Verify:** Run debug endpoint and confirm installation exists
2. ✅ **If Missing:** Use sync endpoint to repair
3. ✅ **If Still Broken:** Check Cloudflare Worker logs for callback errors
4. ✅ **Refresh UI:** Hard refresh browser, verify GitHub shows Connected
5. ✅ **Test Repositories:** Verify repos list populates
