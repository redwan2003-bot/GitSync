# Dashboard API Integration Implementation Plan (Gemini AI)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) to implement this plan task-by-task.

**Goal:** Remove all hardcoded mock data and OpenAI references from production dashboard pages and wire them to real APIs (GitHub, Postgres, Prisma ORM, Gemini AI) with proper loading, error, and empty states.

**Architecture:** Create a data-fetching layer using Next.js server components and API routes that fetch real data from the backend. Each dashboard page will replace MOCK_* constants with real API calls. Replace all OpenAI references with Gemini 3.5 Flash. A NEXT_PUBLIC_DEMO_MODE flag gates optional mock data for local testing.

**Tech Stack:** Next.js server components, Prisma ORM, Auth.js sessions, React Suspense, Gemini AI (gemini-3.5-flash).

**Important:** Gemini 3.5 Flash is the active AI provider. OpenAI has been fully removed from the project.

---

## 14 Core Tasks

### Task 1: Create API Client Utility
Create: `src/lib/api-client.ts`
- Write error-safe API client with typed responses
- Support GET/POST/PUT/DELETE methods
- Handle auth headers for server-side API calls
- Commit: 'feat(api): add API client utility'

### Task 2: Create Dashboard Data-Fetching Functions
Create: `src/lib/dashboard-data.ts`
- Implement getDashboardMetrics() using Prisma queries
- Implement getPendingDrafts() from contentDraft table
- Implement getRecentSignals() from auditLog table
- Gate mock data behind NEXT_PUBLIC_DEMO_MODE flag
- Commit: 'feat(data): add dashboard data-fetching functions'

### Task 3: Create Dashboard Metrics API Route
Create: `src/app/api/GitSync/dashboard/metrics/route.ts`
- Aggregate stats from Prisma tables (repos, drafts, published, failed syncs)
- Require authenticated session
- Return JSON with all metrics
- Commit: 'feat(api): add dashboard metrics'

### Task 4: Create Audit Logs API Route
Create: `src/app/api/GitSync/audit-logs/route.ts`
- Fetch auditLog records by workspaceId
- Support query params for filtering and limit
- Return array of audit logs with createdAt, action, metadata
- Commit: 'feat(api): add audit logs endpoint'

### Task 5: Create GitHub Repos API Route
Create: `src/app/api/GitSync/github-repos/route.ts`
- Check GitHubInstallation existence for workspace
- Return hasGitHub flag and installation count
- Note: Full repo list requires backend GitHub API call (not implemented in this phase)
- Commit: 'feat(api): add GitHub repos check'

### Task 6: Create Integration Status API Route
Create: `src/app/api/GitSync/integration-status/route.ts`
- **IMPORTANT:** Replace OpenAI with Gemini
- Query GitHub installations, LinkedIn tokens, Gemini tokens from Prisma
- Return schema:
  ```json
  {
    github: { connected: boolean },
    linkedin: { connected: boolean },
    aiProvider: {
      provider: "gemini",
      model: "gemini-3.5-flash",
      configured: boolean
    }
  }
  ```
- Commit: 'feat(api): add integration status with Gemini provider'

### Task 7: Wire Dashboard Page
Modify: `src/app/dashboard/page.tsx`
- Remove all MOCK_* constants
- Add Suspense wrapper with loading state
- Call real API functions for metrics, drafts, signals
- Show EmptyState on error
- Do NOT reference OpenAI anywhere
- Commit: 'feat(dashboard): wire to real metrics, remove OpenAI refs'

### Task 8: Wire Repositories Page
Modify: `src/app/dashboard/repositories/page.tsx`
- Remove all MOCK_REPOS
- Check auth and workspace membership
- Show GitHub install CTA if not connected
- Show GitHub status message if connected
- Commit: 'feat(repositories): show real GitHub status'

### Task 9: Wire Settings Page (Gemini Focus)
Modify: `src/app/dashboard/settings/page.tsx`
- **CRITICAL:** Remove all OpenAI/gpt-4o-mini references
- Remove fake user names, emails, follower counts, timestamps
- Fetch and display real integration status
- Show FOUR integration cards ONLY:
  1. GitHub App
  2. LinkedIn OAuth
  3. **Gemini 3.5 Flash** (not OpenAI)
  4. Database/Queue (if available)
- Show real user email from session.user.email
- Wire button handlers: Connect GitHub → GitHub OAuth flow, Connect LinkedIn → LinkedIn OAuth flow
- For Gemini: Show "Update Gemini Key" button ONLY if key management API exists; otherwise show "Connected" read-only status
- Commit: 'feat(settings): wire real integration status, remove OpenAI, add Gemini'

### Task 10: Wire Audit Page
Modify: `src/app/dashboard/audit/page.tsx`
- Remove MOCK_LOGS constant (likely defined as const MOCK_LOGS = [...])
- Fetch real audit logs from /api/GitSync/audit-logs endpoint
- Add filter dropdown by action type (PUBLISHED, ACCOUNT_DELETED, etc.)
- Add search input for description text (client-side filtering)
- Show empty state: "No activity yet. Create a draft and publish it." if no logs
- Maintain JetBrains Mono font and terminal-style layout
- Commit: 'feat(audit): wire real logs, remove mock data'

### Task 11: Wire Project Cards Page
Modify: `src/app/dashboard/project-cards/page.tsx`
- Determine data source: Is there a Prisma model for project cards?
- If Prisma model exists: Query and display real project cards
- If no model: Create placeholder message: "Project Cards feature requires backend implementation"
- Keep split layout (sidebar list + preview panel)
- Keep copy-to-clipboard functionality
- Show empty state: "No project cards yet. Create your first one." if empty
- Commit: 'feat(project-cards): wire real data or show placeholder'

### Task 12: Wire Button Handlers
Modify: `src/app/dashboard/settings/page.tsx` & other pages
- Install GitHub App → POST to /api/auth/github or GitHub App installation flow
- Connect LinkedIn → POST to /api/auth/linkedin or LinkedIn OAuth flow
- Disconnect GitHub → DELETE /api/integrations/github (if endpoint exists, else disable with tooltip)
- Disconnect LinkedIn → DELETE /api/integrations/linkedin (if endpoint exists, else disable with tooltip)
- Update Gemini Key → POST to /api/integrations/gemini/update-key (if endpoint exists, else disable)
- **Do NOT add "Update OpenAI Key"** or any OpenAI-related buttons
- Show tooltip on disabled buttons: "Backend endpoint not yet implemented"
- Commit: 'feat(buttons): wire real handlers, remove OpenAI buttons'

### Task 13: Add Error & Loading States
Modify: All dashboard pages
- Add Suspense wrappers with loading states for async data
- Add Error Boundary for API failures
- Show honest empty states for no data
- Loading state: "Loading..." or skeleton (optional)
- Error state: "Failed to load data. Refresh to retry."
- Empty state: Context-appropriate message with optional CTA
- Commit: 'feat(states): add loading/error/empty states'

### Task 14: Final QA & Deployment
- Run: `pnpm typecheck` → 0 errors
- Run: `pnpm lint` → 0 errors
- Run: `pnpm build` → success
- Search codebase for OpenAI/gpt-4o-mini refs and document what remains (if anything)
- Test locally: `pnpm dev` → verify:
  - Dashboard shows real metrics (not MOCK values)
  - Settings shows Gemini, not OpenAI
  - No fake user data visible
  - All buttons functional or disabled with tooltip
  - Real data or honest empty states
  - No OpenAI labels in UI
- Push to GitHub: `git add . && git commit -m 'feat(complete): dashboard API integration with Gemini AI'`
- Verify live at https://gitsyncweb.vercel.app/dashboard:
  - Dashboard shows real data
  - Settings page shows ONLY Gemini for AI provider (no OpenAI)
  - Audit page shows real logs
  - Repositories page shows GitHub status
  - No fake placeholder data
  - No OpenAI anywhere
- Document all changes in checkpoint

---

## Success Criteria

- [ ] No MOCK_* constants in production code
- [ ] No fake data (names, emails, timestamps) visible
- [ ] **ALL OpenAI references removed from UI/Settings/Docs**
- [ ] **Gemini 3.5 Flash shown as AI provider in Settings**
- [ ] All pages have loading + error states
- [ ] All empty states are honest and helpful
- [ ] Session check on all protected pages
- [ ] Workspace membership check on all workspace-scoped operations
- [ ] TypeScript: 0 errors | Build: 0 errors | Lint: 0 warnings
- [ ] Live deployment shows real data + Gemini (no OpenAI)

---

## Environment Variables (Gemini Only)

Required in `.env` / Vercel:
- `GEMINI_API_KEY` - Gemini API key
- `GEMINI_MODEL=gemini-3.5-flash` - Model version
- `NEXT_PUBLIC_API_URL` - Backend API base URL
- `NEXT_PUBLIC_DEMO_MODE=false` - Gate mock data (default false)
- Other existing: `GITHUB_*`, `LINKEDIN_*`, `AUTH_SECRET`, database URLs, etc.

Do NOT use:
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- Any OpenAI-related variables

