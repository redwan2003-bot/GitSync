# GitSync: GitHub to LinkedIn Project Visibility Tool

GitSync is a proposed SaaS tool that watches a user's GitHub activity, detects when a repository becomes worth sharing, creates LinkedIn-ready project and post content, and publishes approved posts through official LinkedIn APIs.

The product must be designed around one hard constraint: normal public LinkedIn API access can create posts with user permission, but automatic editing of the LinkedIn profile Projects section is not a safe assumption for a public SaaS. The MVP should support official LinkedIn post publishing and generate a profile-project-ready card that the user can add manually. A fully automated Projects section writer should exist only behind a feature flag for customers/apps with explicit LinkedIn Profile Edit API approval.

## Executive Decision

Build the product as a compliant, human-in-the-loop GitHub-to-LinkedIn publishing assistant first.

Do not build browser automation, scraping, unofficial Voyager API calls, or extensions that simulate clicks on LinkedIn. LinkedIn explicitly prohibits third-party crawlers, bots, browser extensions, and unauthorized automation that access or automate activity on LinkedIn's website.

## What Exists In The Market

Existing tools cover parts of this idea:

- GitLinked claims GitHub-to-LinkedIn auto-posting for commits and repositories.
- DevJourney turns commits into auto-generated LinkedIn posts and includes a VS Code extension.
- Make, Zapier, and n8n can connect GitHub events to LinkedIn post actions.
- Hypefury, Buffer-style tools, and social schedulers can publish or schedule LinkedIn content.
- RepoView-style tools focus on turning code changes into social posts across multiple platforms.

The gap: most tools treat GitHub activity as "content to post." They do not deeply model whether a repo is a real project, how it should appear in a LinkedIn profile project section, how to avoid noisy low-value posts, or how to keep the automation inside official platform boundaries.

## Differentiation

GitSync should be unique in five ways:

1. Project-quality detection, not commit spam.
   The tool should publish only when a repo hits meaningful milestones such as first stable release, live demo added, README complete, test coverage added, deployment URL added, or significant feature PR merged.

2. LinkedIn project-card generation.
   The tool should create a structured project card with title, role, description, dates, collaborators, tech stack, GitHub link, demo link, media, and manual LinkedIn add instructions.

3. Policy-safe automation.
   The default product posts through LinkedIn OAuth and official Posts API only. Profile Projects automation is a partner-approved adapter, not a hidden browser bot.

4. Human review with controlled autopilot.
   Users can choose Manual, Review Required, or Autopilot. Autopilot still needs rate limits, quality gates, duplicate detection, and rollback logs.

5. Developer-brand memory.
   The system learns the user's style, seniority, audience, preferred tone, banned phrases, and target roles from accepted edits.

## Recommended Tech Stack

Use a TypeScript-first monorepo:

- Monorepo: pnpm, Turborepo
- Web: Next.js App Router, React, TypeScript
- UI: Tailwind CSS, shadcn/ui, lucide-react, TanStack Query, React Hook Form, Zod
- API: NestJS with Fastify adapter, TypeScript
- Database: PostgreSQL with Prisma
- Queue/workflows: Redis plus BullMQ for MVP, Temporal or Inngest for scale
- GitHub: GitHub App, Octokit, webhooks, installation tokens
- LinkedIn: OAuth 2.0/OpenID Connect, official Posts API, optional Profile Edit API adapter only if approved
- AI: provider abstraction for content generation, repo summarization, style memory, and safety checks
- Storage: S3-compatible object storage for generated images/media
- Observability: OpenTelemetry, Sentry, structured logs, uptime checks
- Analytics: PostHog or similar product analytics
- Deployment: Vercel for web, Fly.io/Render/AWS ECS for API workers, Neon/Supabase/RDS for Postgres, Upstash/Redis Cloud for Redis

## Suggested Product Theme

Recommended direction: "quiet developer cockpit."

The UI should feel like a precise developer operations console, not a loud marketing scheduler. Use restrained neutral surfaces, clear status states, small charts, diff-like content previews, and strong editorial controls. The emotional promise is calm control: "Your work becomes visible without you becoming a content machine."

Alternative themes are documented in `docs/PRODUCT_SPEC.md`.

## Documentation Map

- `docs/PRODUCT_SPEC.md`: users, requirements, workflows, content rules, UI layout, theme options
- `docs/ARCHITECTURE.md`: system design, data flow, modules, database model, APIs, security
- `docs/IMPLEMENTATION_BACKLOG.md`: build phases, epics, acceptance criteria, test strategy
- `docs/PROJECT_SKILLS.md`: skills and capabilities to encode into Cursor, Antigravity, or project agents
- `AGENTS.md`: AI coding assistant rules for this project

## Primary Sources Checked

- LinkedIn API access and open permissions: https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access
- LinkedIn Posts API: https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api
- LinkedIn profile sections and Projects UI: https://www.linkedin.com/help/learning/answer/a540837
- LinkedIn prohibited software and automation: https://www.linkedin.com/help/linkedin/answer/a1341387/prohibited-software-and-extensions
- LinkedIn Profile Edit API for Projects: https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-edit-api/projects
- GitHub App webhooks: https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps
- GitHub webhook signature validation: https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries
- GitHub webhook events and push event: https://docs.github.com/en/webhooks/webhook-events-and-payloads
- Zapier LinkedIn app limitations: https://help.zapier.com/hc/en-us/articles/8495987891853-How-to-get-started-with-LinkedIn-on-Zapier
- n8n GitHub and LinkedIn integration: https://n8n.io/integrations/github/and/linkedin/
- DevJourney market reference: https://www.devjourney.ai/
- Make GitHub and LinkedIn integration: https://www.make.com/en/integrations/linkedin/github

