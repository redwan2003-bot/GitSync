# Koyeb Setup (API + Worker)

This project keeps the web app on Vercel and moves backend workloads to Koyeb:

- `reposignal-api` (web service)
- `reposignal-worker` (worker service)

## 1) Create API service on Koyeb

- **Service type:** Web Service
- **Source:** GitHub repo + `main` branch
- **Build command:**
  - `pnpm install --prod=false && pnpm -w run build:packages && pnpm --filter api run build`
- **Run command:**
  - `pnpm --filter api run start:prod`
- **HTTP Port:**
  - `3001`
- **Health check path:**
  - `/health`

### API env vars

Set these in Koyeb for the API service:

- `NODE_ENV=production`
- `PORT=3001`
- `DATABASE_URL` (Neon/Postgres URL)
- `REDIS_URL`
- `TOKEN_ENCRYPTION_KEY`
- `AUTH_SECRET`
- `INTERNAL_API_SECRET`
- `GITHUB_WEBHOOK_SECRET`
- `GITHUB_APP_ID`
- `GITHUB_APP_PRIVATE_KEY`
- `LINKEDIN_CLIENT_ID`
- `LINKEDIN_CLIENT_SECRET`
- `LINKEDIN_REDIRECT_URI`
- `WEB_APP_URL` (Vercel web URL, e.g. `https://git-sync-web.vercel.app`)
- `GEMINI_API_KEY`
- `GEMINI_MODEL=gemini-3.5-flash`
- `GEMINI_ALLOW_PRIVATE_REPO_DRAFTING=false`
- `LINKEDIN_PROFILE_EDIT_ENABLED=false`
- `DEFAULT_MAX_POSTS_PER_WEEK=3`
- `WEBHOOK_RETENTION_DAYS=90`
- `EVIDENCE_RETENTION_DAYS=90`

## 2) Create Worker service on Koyeb

- **Service type:** Worker Service
- **Source:** same GitHub repo + `main` branch
- **Build command:**
  - `pnpm install --prod=false && pnpm -w run build:packages && pnpm --filter worker run build`
- **Run command:**
  - `pnpm --filter worker run start:prod`

### Worker env vars

Set these in Koyeb for the worker service:

- `NODE_ENV=production`
- `DATABASE_URL`
- `REDIS_URL`
- `TOKEN_ENCRYPTION_KEY`
- `GEMINI_API_KEY`
- `GEMINI_MODEL=gemini-3.5-flash`
- `GEMINI_ALLOW_PRIVATE_REPO_DRAFTING=false`

## 3) Update Vercel env to point web to Koyeb API

In Vercel (`git-sync-web`), set:

- `NEXT_PUBLIC_API_URL=https://<your-koyeb-api-domain>`
- `INTERNAL_API_SECRET` (must exactly match API service value)
- `AUTH_URL=https://git-sync-web.vercel.app`
- `AUTH_TRUST_HOST=true`
- keep existing auth/db vars

## 4) GitHub and LinkedIn callbacks

- GitHub OAuth callback:
  - `https://git-sync-web.vercel.app/api/auth/callback/github`
- GitHub App webhook URL:
  - `https://<your-koyeb-api-domain>/webhooks/github`
- LinkedIn redirect URI:
  - `https://<your-koyeb-api-domain>/integrations/linkedin/callback`

## 5) Smoke test checklist

1. Open `https://<api-domain>/health` -> expect `{ "status": "ok" ... }`
2. Sign in on Vercel web with GitHub.
3. Trigger `devSync` draft generation and verify worker processes queue jobs.

