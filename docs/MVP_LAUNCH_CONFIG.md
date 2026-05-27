# MVP Launch Configuration (Locked)

## URLs (no custom domain)

| Service | Host | Example |
|---------|------|---------|
| Web | Vercel | `https://reposignal.vercel.app` |
| API | Render | `https://reposignal-api.onrender.com` |
| Worker | Render | `https://reposignal-worker.onrender.com` |

## OAuth callbacks

- **Auth.js:** `https://<vercel-host>/api/auth/callback/github`
- **GitHub webhook:** `https://<render-api>/webhooks/github`
- **LinkedIn:** `https://<render-api>/integrations/linkedin/callback`

## Policies

- Default automation: `REVIEW_REQUIRED`
- Default repos: selected public only; private opt-in + always review
- Max posts: 3/week/user
- Scheduling: v1.1
- Profile Edit API: disabled
- Retention: 90 days webhooks/evidence; audit + published posts until delete

## Auth

- Auth.js (GitHub provider) on Vercel
- API trusts signed internal headers from web BFF proxy (`INTERNAL_API_SECRET`)

## Database (first deploy)

- Vercel build runs `pnpm db:push` (see root `vercel.json`) so Auth.js Prisma tables exist in Neon `public` schema.
- Or run manually once: `DATABASE_URL=... pnpm db:push`

Fill secrets using root `.env.example`, then reply **env ready**.
