# GitSync

> Turn meaningful GitHub activity into reviewed, professional LinkedIn updates.

![GitHub stars](https://img.shields.io/github/stars/redwan2003-bot/GitSync?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/redwan2003-bot/GitSync?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/redwan2003-bot/GitSync?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/redwan2003-bot/GitSync?style=for-the-badge&logo=github) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Key Dependencies](#key-dependencies)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Contributing](#contributing)

## 📝 Description

GitSync is a compliant, human-in-the-loop publishing assistant designed to bridge the gap between technical development activity on GitHub and professional visibility on LinkedIn. Instead of broadcasting low-value automated commit streams, the platform analyzes repository events to generate high-quality drafts, ensuring users maintain manual control and review capability before any update is published.

The system is built as a TypeScript monorepo utilizing a Next.js web application for the frontend interface and a Hono-powered API server for backend services. The backend architecture leverages Prisma for database operations, integrates with Redis for queuing operations, accepts real-time GitHub App webhooks, and connects to OpenAI or OpenRouter models to process repository event payloads into natural, polished LinkedIn drafts.

## ✨ Key Features

- **✍️ Human-in-the-Loop Drafting** — Ensures complete control over professional branding by requiring manual approval and editing of all AI-generated draft updates.
- **🤖 AI-Powered Event Synthesis** — Leverages OpenAI or OpenRouter to translate technical commits, pulls, and issues into engaging professional summaries.
- **🔐 Secure OAuth Integrations** — Authenticates and authorizes GitHub and LinkedIn accounts using secure, encrypted API tokens.
- **⚡ Webhook-Driven Architecture** — Processes GitHub repository activity immediately through automated webhook events managed securely within Hono.
- **🗄️ Prisma Database Management** — Utilizes Prisma ORM to organize, query, and persist user credentials, drafted posts, and activity history.

## 🎯 Use Cases

- Software developers looking to consistently build a professional LinkedIn presence from their public or private GitHub contributions without manual writing effort.
- Open-source maintainers who want to automatically draft announcements for new features, merged pull requests, or project milestones.
- Technical teams seeking to streamline social advocacy by reviewing and sharing their daily or weekly engineering progress updates.

## 🛠️ Tech Stack

- 🐳 **Docker**
- ⬢ **Node.js**
- 🔷 **Prisma**
- 🌬️ **Tailwind CSS**
- 📘 **TypeScript**

## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/redwan2003-bot/GitSync.git

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env   # then fill in the values

# 4. Start the dev server
npm run dev
```

## 🔑 Environment Variables

The following environment variables are required (see `.env.example`):

```bash
NODE_ENV=
DATABASE_URL=
REDIS_URL=
TOKEN_ENCRYPTION_KEY=
AUTH_SECRET=
AUTH_URL=
AUTH_TRUST_HOST=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
NEXT_PUBLIC_API_URL=
INTERNAL_API_SECRET=
PORT=
WEB_APP_URL=
GITHUB_APP_ID=
GITHUB_APP_PRIVATE_KEY=
GITHUB_WEBHOOK_SECRET=
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
LINKEDIN_REDIRECT_URI=
OPENROUTER_API_KEY=
OPENROUTER_MODEL=
OPENROUTER_ALLOW_PRIVATE_REPO_DRAFTING=
LINKEDIN_PROFILE_EDIT_ENABLED=
DEFAULT_MAX_POSTS_PER_WEEK=
WEBHOOK_RETENTION_DAYS=
EVIDENCE_RETENTION_DAYS=
```

## 📦 Key Dependencies

```
@neondatabase/serverless: 0.10.0
@prisma/adapter-neon: ^5.10.0
```

## 🚀 Available Scripts

- **build** — `npm run build`
- **dev** — `npm run dev`
- **build:packages** — `npm run build:packages`
- **dev:api** — `npm run dev:api`
- **dev:worker** — `npm run dev:worker`
- **dev:web** — `npm run dev:web`
- **lint** — `npm run lint`
- **test** — `npm run test`
- **typecheck** — `npm run typecheck`
- **format** — `npm run format`
- **db:push** — `npm run db:push`
- **db:studio** — `npm run db:studio`

## 🌐 API Endpoints

Detected endpoints (best-effort scan):

```
/api/GitSync/[...path]
/api/GitSync/audit-logs
/api/GitSync/dashboard/metrics
/api/GitSync/dashboard/pending-drafts
/api/GitSync/drafts/[id]
/api/GitSync/github-repos
/api/GitSync/github/debug-installation
/api/GitSync/github/installations/sync
/api/GitSync/github/repositories/sync
/api/GitSync/integration-status
/api/GitSync/linkedin/callback/complete
/api/GitSync/linkedin/callback
/api/GitSync/linkedin/connect
/api/GitSync/project-cards
/api/GitSync/workspace-id
/api/auth/[...nextauth]
/api/reposignal/[...path]
GET /
```

## 📁 Project Structure

```
.
├── .env.example
├── .superpowers
│   └── brainstorm
│       └── 1723122729-1780184178.25699
│           ├── content
│           │   ├── dashboard-structure.html
│           │   ├── design-summary.html
│           │   ├── drafts-page.html
│           │   ├── layout-approaches.html
│           │   ├── project-cards-page.html
│           │   ├── repositories-page.html
│           │   └── settings-audit-pages.html
│           └── state
│               ├── server-info
│               └── server-info.json
├── AGENTS.md
├── ANALYSIS_SUMMARY.md
├── AUTH_CONFIG_FIX.md
├── BUTTON_AUDIT_REPORT.md
├── DEPLOYMENT_STATUS.md
├── DEPLOYMENT_SUMMARY.md
├── DOCUMENTATION_INDEX.md
├── FINAL_DEPLOYMENT_CHECKLIST.md
├── GITHUB_APP_DEBUG_GUIDE.md
├── GITHUB_APP_FIX_PLAN.md
├── GITHUB_APP_IMPLEMENTATION_COMPLETE.md
├── GITHUB_APP_INSTALLATION_DEBUG.md
├── GitSync.code-workspace
├── KNOWN_ISSUES_AND_GAPS.md
├── OAUTH_ROOT_CAUSE.md
├── OAUTH_VERIFICATION_COMPLETE.md
├── PHASES_8-12_COMPLETION_REPORT.md
├── PRODUCTION_READINESS_REPORT.md
├── QUICK_REFERENCE.md
├── RESILIENCE_REVIEW.md
├── VERCEL_DEPLOYMENT_CHECKLIST.md
├── Vercel_Fix_Report.md
├── apps
│   ├── api
│   │   ├── .wrangler
│   │   │   └── state
│   │   │       └── v3
│   │   │           └── ...
│   │   ├── eslint.config.mjs
│   │   ├── nest-cli.json
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── auth
│   │   │   │   └── middleware.ts
│   │   │   ├── index.ts
│   │   │   ├── lib
│   │   │   │   ├── encryption.ts
│   │   │   │   └── validation.ts
│   │   │   ├── posthog.ts
│   │   │   └── routes
│   │   │       ├── account.ts
│   │   │       ├── drafts.ts
│   │   │       ├── github-app.ts
│   │   │       ├── github.ts
│   │   │       └── linkedin.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   ├── tsconfig.build.json
│   │   ├── tsconfig.json
│   │   └── wrangler.toml
│   └── web
│       ├── AGENTS.md
│       ├── CLAUDE.md
│       ├── eslint.config.mjs
│       ├── lint-results.txt
│       ├── next.config.ts
│       ├── package.json
│       ├── playwright.config.ts
│       ├── postcss.config.mjs
│       ├── public
│       │   ├── file.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   └── window.svg
│       ├── src
│       │   ├── app
│       │   │   ├── api
│       │   │   │   └── ...
│       │   │   ├── dashboard
│       │   │   │   └── ...
│       │   │   ├── error.tsx
│       │   │   ├── favicon.ico
│       │   │   ├── globals.css
│       │   │   ├── layout.tsx
│       │   │   ├── loading.tsx
│       │   │   ├── page.tsx
│       │   │   └── sign-in
│       │   │       └── ...
│       │   ├── auth.config.ts
│       │   ├── auth.ts
│       │   ├── components
│       │   │   ├── DashboardSidebar.tsx
│       │   │   ├── DashboardTopBar.tsx
│       │   │   ├── animated-metric-card.tsx
│       │   │   ├── bento-card.tsx
│       │   │   ├── dashboard-content.tsx
│       │   │   ├── dashboard-shell.tsx
│       │   │   ├── dashboard-sidebar.tsx
│       │   │   ├── dashboard-topbar.tsx
│       │   │   ├── dynamic-orbit.tsx
│       │   │   ├── empty-state.tsx
│       │   │   ├── error-boundary.tsx
│       │   │   ├── generative-art-scene.tsx
│       │   │   ├── hero-section.tsx
│       │   │   ├── integration-status-card.tsx
│       │   │   ├── loading-states.tsx
│       │   │   ├── notification-panel.tsx
│       │   │   ├── pipeline-status-tracker.tsx
│       │   │   ├── profile-dropdown.tsx
│       │   │   ├── project-card-generator.tsx
│       │   │   ├── project-score-ring.tsx
│       │   │   ├── repo-signal-card.tsx
│       │   │   ├── session-provider.tsx
│       │   │   ├── signal-orbit-fallback.tsx
│       │   │   ├── signal-orbit-panel.tsx
│       │   │   ├── signal-orbit-scene.tsx
│       │   │   ├── typography.tsx
│       │   │   └── user-menu.tsx
│       │   ├── consumer.ts
│       │   ├── dlq_handler.ts
│       │   ├── lib
│       │   │   ├── GitSync-api.ts
│       │   │   ├── api-client.ts
│       │   │   ├── api-response.ts
│       │   │   ├── api-sign.ts
│       │   │   ├── dashboard-data.ts
│       │   │   ├── design-tokens.ts
│       │   │   ├── linkedin-oauth.ts
│       │   │   ├── rate-limit.ts
│       │   │   └── reposignal-api.ts
│       │   ├── middleware.ts
│       │   └── types
│       │       └── next-auth.d.ts
│       ├── tailwind.config.ts
│       ├── tests
│       │   └── e2e
│       │       ├── accessibility.spec.ts
│       │       ├── auth.spec.ts
│       │       ├── navigation.spec.ts
│       │       └── ui-elements.spec.ts
│       └── tsconfig.json
├── docker-compose.yml
├── docs
│   ├── ARCHITECTURE.md
│   ├── GITSYNC-DASHBOARD-REDESIGN-DESIGN.md
│   ├── IMPLEMENTATION_BACKLOG.md
│   ├── KOYEB_SETUP.md
│   ├── MVP_LAUNCH_CONFIG.md
│   ├── PRODUCT_SPEC.md
│   ├── PROJECT_SKILLS.md
│   └── superpowers
│       ├── plans
│       │   ├── 2026-05-30-gitsync-signal-orbit.md
│       │   ├── 2026-05-31-gitsync-dashboard-redesign.md
│       │   └── dashboard-api-integration-plan.md
│       └── specs
│           └── 2026-05-30-gitsync-signal-orbit-design.md
├── domain-ts.txt
├── domain-typecheck.txt
├── image.png
├── infra
│   └── modules
│       ├── GitSync-core
│       │   ├── examples
│       │   │   └── basic
│       │   │       └── ...
│       │   ├── main.tf
│       │   ├── outputs.tf
│       │   ├── providers.tf
│       │   ├── variables.tf
│       │   └── versions.tf
│       └── reposignal-core
│           ├── examples
│           │   └── basic
│           │       └── ...
│           ├── main.tf
│           ├── outputs.tf
│           ├── providers.tf
│           ├── variables.tf
│           └── versions.tf
├── integrations-ts.txt
├── integrations-typecheck.txt
├── package.json
├── packages
│   ├── ai
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── __tests__
│   │   │   │   └── ai.service.spec.ts
│   │   │   ├── ai.service.ts
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├── config
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── env.ts
│   │   │   └── index.ts
│   │   ├── tsconfig.build.json
│   │   └── tsconfig.json
│   ├── db
│   │   ├── package.json
│   │   ├── prisma
│   │   │   └── schema.prisma
│   │   ├── src
│   │   │   ├── generated
│   │   │   │   └── client
│   │   │   │       └── ...
│   │   │   └── index.ts
│   │   ├── test-prisma.js
│   │   ├── test.js
│   │   └── tsconfig.json
│   ├── domain
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── __tests__
│   │   │   │   ├── encryption.spec.ts
│   │   │   │   └── signals.spec.ts
│   │   │   ├── auth
│   │   │   │   ├── encryption.ts
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   └── signals
│   │   │       ├── fixtures.ts
│   │   │       ├── index.ts
│   │   │       ├── scorers.ts
│   │   │       └── types.ts
│   │   └── tsconfig.json
│   ├── integrations
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── github
│   │   │   │   ├── client.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── sync.ts
│   │   │   ├── index.ts
│   │   │   └── linkedin
│   │   │       ├── index.ts
│   │   │       └── publisher.ts
│   │   └── tsconfig.json
│   ├── prompts
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── index.ts
│   │   │   ├── schemas.ts
│   │   │   └── templates
│   │   │       ├── evidence-check.hbs
│   │   │       ├── project-card.hbs
│   │   │       ├── project-update.hbs
│   │   │       ├── release-notes.hbs
│   │   │       └── summary.hbs
│   │   ├── summary.txt
│   │   └── tsconfig.json
│   ├── testing
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   └── ui
│       ├── package.json
│       ├── src
│       │   └── index.ts
│       └── tsconfig.json
├── pnpm-workspace.yaml
├── scripts
│   └── load-env.ps1
├── skills-lock.json
├── testing-ts.txt
├── testing-typecheck.txt
├── turbo.json
├── ui-ts.txt
├── ui-typecheck.txt
└── wrangler.jsonc.backup
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above

### Docker
1. `docker build -t my-app .`
2. `docker run -p 3000:3000 my-app`

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/redwan2003-bot/GitSync.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

---
*This README was generated with ❤️ by [ReadmeBuddy](https://readmebuddy.com)*
