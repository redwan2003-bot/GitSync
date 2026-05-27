# Project Skills To Encode Into The Repo

These are not marketplace skills. They are project-specific capabilities and rules that should be documented for Cursor, Antigravity, or any AI coding agent working in this codebase.

## 1. LinkedIn Policy Skill

Purpose: prevent unsafe LinkedIn implementation choices.

Rules:

- Use official LinkedIn APIs only.
- Do not scrape LinkedIn.
- Do not automate browser clicks on LinkedIn.
- Do not use unofficial Voyager endpoints.
- Do not implement auto-like, auto-comment, auto-connect, auto-message, or engagement manipulation.
- Project section auto-sync requires explicit approved Profile Edit API access and feature flag.

Files to own:

- `packages/integrations/linkedin/*`
- `docs/linkedin-policy.md`
- `apps/api/src/linkedin/*`

## 2. GitHub Ingestion Skill

Purpose: safely turn GitHub events into internal events.

Rules:

- Verify webhook signatures before parsing business logic.
- Store delivery IDs for idempotency.
- Process events async through queue.
- Use GitHub App installation tokens, not personal access tokens.
- Use least-privilege permissions.

Files to own:

- `apps/api/src/github/webhook.controller.ts`
- `packages/integrations/github/*`
- `apps/worker/src/github-event.processor.ts`

## 3. Project Signal Skill

Purpose: decide whether something is worth posting.

Rules:

- No post for raw commit noise.
- Require evidence and quality score.
- Prefer releases, major PRs, README/demo additions, and stable milestones.
- Keep scoring pure and tested with fixtures.

Files to own:

- `packages/domain/signals/*`
- `packages/testing/fixtures/github/*`

## 4. Evidence And Accuracy Skill

Purpose: prevent hallucinated posts.

Rules:

- Every generated claim must trace to GitHub evidence or user input.
- Flag claims without evidence.
- Never invent metrics, clients, users, revenue, hiring outcomes, or production usage.
- Redact secrets and sensitive names.

Files to own:

- `packages/domain/evidence/*`
- `packages/prompts/evidence-map.ts`

## 5. Content Generation Skill

Purpose: create credible developer-brand content.

Rules:

- Generate structured JSON first.
- Render LinkedIn text second.
- Avoid generic AI phrases.
- Keep posts specific, technical, and proof-backed.
- Support multiple styles without changing the evidence.

Files to own:

- `packages/prompts/*`
- `packages/domain/content/*`

## 6. Human Review Skill

Purpose: keep user control clear.

Rules:

- No default autopublish during MVP.
- Approval should be explicit.
- User edits create draft versions.
- Publishing creates audit logs.
- Private repos require manual review unless user changes the setting.

Files to own:

- `apps/web/src/features/drafts/*`
- `apps/api/src/drafts/*`

## 7. Publishing Reliability Skill

Purpose: publish safely and recover from API failures.

Rules:

- Use queued publish jobs.
- Store LinkedIn post URN after success.
- Handle validation, duplicate, throttle, and permission errors.
- Retry only safe transient failures.
- Never retry a potentially successful publish without idempotency checks.

Files to own:

- `apps/worker/src/publish.processor.ts`
- `packages/integrations/linkedin/publisher.ts`

## 8. Privacy And Security Skill

Purpose: protect user code, tokens, and identity.

Rules:

- Encrypt tokens at rest.
- Never log secrets.
- Minimize private repo content retention.
- Support account deletion and data export.
- Add RBAC before team features.

Files to own:

- `packages/security/*`
- `apps/api/src/audit/*`
- `apps/api/src/privacy/*`

## 9. UX Dashboard Skill

Purpose: make the app feel like a calm developer cockpit.

Rules:

- Prioritize status clarity over decorative UI.
- Use tables, queues, side panels, and previews.
- Show why content was generated.
- Keep copy controls obvious for Project Cards.
- Make failure states actionable.

Files to own:

- `apps/web/src/app/*`
- `apps/web/src/features/*`
- `packages/ui/*`

## 10. Observability Skill

Purpose: make automation debuggable.

Rules:

- Every webhook, signal, draft, and publish job has a trace ID.
- Every failed external API call has structured error metadata.
- Publish activity is auditable by user and workspace.
- Dashboards track webhook success, queue latency, draft generation latency, and publish success.

Files to own:

- `packages/observability/*`
- `apps/api/src/health/*`
- `apps/worker/src/*`

