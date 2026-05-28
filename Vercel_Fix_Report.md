# Vercel Deployment Fix Report

## Root Cause
The Vercel project is deploying the wrong root directory or using the wrong framework preset. Since this is a Turborepo monorepo, Vercel is likely building the root folder `GitSync-main` instead of the Next.js frontend in `apps/web`. When Vercel deploys the root directory with the "Other" framework preset, it simply serves static files without `.next` output, resulting in a Vercel 404 error when visiting the `gitsyncweb.vercel.app` domain. 

## Files Changed
No code changes are necessary in the repository. The Next.js frontend compiles successfully locally. The issue is purely with the Vercel Dashboard project configuration.

## Commands Run
- `pnpm install` (Completed successfully)
- `pnpm --filter web run build` (Completed successfully, verified Next.js compiles page routes `[/, /dashboard, /sign-in, etc.]` correctly)

## Verification Result
The Next.js application builds correctly in the monorepo context. The `/` route exists and generates static/dynamic HTML. The Vercel 404 is a platform-level routing issue due to misconfiguration of the project settings.

## Vercel Settings to Check (Exact Production Deployment Fix)

### Next Deploy Steps (Manual Vercel Dashboard Action Required):
Please log in to your Vercel Dashboard and follow these exact steps for the `git_sync_web` project:

1. **Go to Settings > General**:
   - **Framework Preset**: Must be set to `Next.js` (If it says "Other", Next.js won't serve correctly).
   - **Root Directory**: Must be set to `GitSync-main/apps/web` (or just `apps/web` depending on how your GitHub repo is connected). If your repo root is `GitSync-main`, then the Vercel Root Directory should be `apps/web`.

2. **Build & Development Settings**:
   - **Build Command**: `pnpm run build` (This uses the `build` script in `apps/web/package.json` which runs `pnpm --filter db run generate && next build`).
   - **Output Directory**: `.next` (Should be automatically set when Framework Preset is Next.js).
   - **Install Command**: `pnpm install` (Vercel will run this at the root to resolve workspace dependencies).

3. **Domains**:
   - Navigate to **Settings > Domains** in the `git_sync_web` project.
   - Verify that `gitsyncweb.vercel.app` is added here. If it is attached to a different project (like the API or root monorepo project), you must remove it from the other project and add it to this one.

Once you have updated the **Root Directory** and **Framework Preset**, you must trigger a **new deployment** in Vercel for the changes to take effect.
