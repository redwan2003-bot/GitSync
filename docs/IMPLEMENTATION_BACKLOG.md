# Implementation Backlog

## Build Strategy

Build in thin, verified slices. The first shippable product should connect GitHub, detect one meaningful event, generate one high-quality draft, and let the user publish a LinkedIn post through official APIs.

Do not begin with full automation. Begin with trust.

## Phase 0: Foundation

Goal: create the repo foundation.

Tasks:

- Create pnpm Turborepo.
- Add Next.js web app.
- Add NestJS API app.
- Add shared TypeScript package.
- Add Prisma and Postgres.
- Add Redis and BullMQ.
- Add lint, format, typecheck, test scripts.
- Add `.env.example`.
- Add `AGENTS.md` and Cursor rules.

Acceptance:

- `pnpm install` works.
- `pnpm typecheck` works.
- `pnpm test` works.
- Web and API boot locally.

## Phase 1: Auth And Account Linking

Goal: users can sign in and connect accounts.

Tasks:

- Implement user auth.
- Add workspace model.
- Add GitHub App install flow.
- Add LinkedIn OAuth connect flow.
- Store tokens encrypted.
- Add account connection status UI.

Acceptance:

- User can connect GitHub and LinkedIn.
- Token values never appear in logs.
- Disconnect removes tokens.

## Phase 2: GitHub Event Ingestion

Goal: receive and store GitHub events safely.

Tasks:

- Implement webhook endpoint.
- Verify `X-Hub-Signature-256`.
- Store delivery IDs.
- Add idempotency.
- Process `installation`, `installation_repositories`, `push`, `pull_request`, `release`, `repository`.
- Sync repositories.
- Add webhook delivery dashboard.

Acceptance:

- Invalid signature is rejected.
- Duplicate delivery does not create duplicate work.
- Push event creates a repo event row.

## Phase 3: Signal Scoring

Goal: detect whether a repo/event deserves content.

Tasks:

- Fetch repo metadata.
- Fetch README.
- Fetch languages.
- Fetch recent commits and PRs.
- Implement quality score.
- Implement noise filters.
- Implement project card threshold.
- Implement post draft threshold.

Acceptance:

- Toy repo with one commit does not generate post.
- Repo with README, demo, release, and meaningful PR generates draft.
- Score explanation is visible in UI.

## Phase 4: AI Draft Generation

Goal: produce accurate LinkedIn-ready drafts.

Tasks:

- Create evidence snapshot schema.
- Build structured prompt pipeline.
- Generate JSON output first.
- Generate post text from JSON.
- Generate project card fields.
- Add hallucination guard: every claim maps to evidence or is marked user-provided.
- Add banned phrase filter.
- Add regeneration controls.

Acceptance:

- Draft includes evidence map.
- Draft does not invent metrics.
- User can edit and save draft versions.

## Phase 5: Review And Publishing

Goal: user can approve and publish official LinkedIn posts.

Tasks:

- Build draft queue.
- Build editor.
- Build LinkedIn preview.
- Implement publish endpoint.
- Handle LinkedIn errors.
- Store LinkedIn post URN.
- Add schedule flow.
- Add publish audit log.

Acceptance:

- User can publish a text post.
- Duplicate post errors are handled.
- Published draft cannot be silently modified without version record.

## Phase 6: Project Card Assistant

Goal: support LinkedIn Projects section without unsafe automation.

Tasks:

- Build project card generator.
- Add copy buttons for each field.
- Add generated image/media export.
- Add manual checklist.
- Add "marked added manually" status.
- Add partner adapter interface, defaulting to manual.

Acceptance:

- User can prepare a complete LinkedIn project entry in under 2 minutes.
- No browser automation exists.
- Partner adapter is disabled by default.

## Phase 7: Autopilot Controls

Goal: controlled automation for trusted users.

Tasks:

- Add automation mode per workspace and repo.
- Add frequency caps.
- Add quiet hours.
- Add minimum score threshold.
- Add "never post this repo" and "always review private repos."
- Add dry-run mode.

Acceptance:

- Autopilot cannot publish below threshold.
- Private repos require review by default.
- User can see why an autopilot post happened.

## Phase 8: Analytics And Learning

Goal: improve over time without unsafe scraping.

Tasks:

- Track internal product metrics.
- Track user edits.
- Learn brand voice settings.
- Add content performance fields only when official API access allows.
- Add exportable activity report.

Acceptance:

- User sees accepted drafts and learned preferences.
- User can clear style memory.
- No unauthorized LinkedIn metrics scraping.

## Suggested Folder Structure

```text
reposignal/
  apps/
    web/
    api/
    worker/
  packages/
    config/
    db/
    domain/
    integrations/
    ui/
    prompts/
    testing/
  prisma/
  docs/
  scripts/
  .cursor/
    rules/
  AGENTS.md
  pnpm-workspace.yaml
  turbo.json
```

## Testing Strategy

Unit tests:

- Signal scoring.
- Content rendering.
- Token encryption helpers.
- LinkedIn payload creation.
- GitHub signature validation.

Integration tests:

- Webhook endpoint with valid and invalid signatures.
- Repo event to draft generation.
- Publish job with mocked LinkedIn API.
- Token refresh/reconnect paths.

End-to-end tests:

- Onboarding.
- Connect accounts.
- Generate draft.
- Edit draft.
- Publish mock post.
- Generate project card.

Security tests:

- Secret redaction.
- Private repo privacy mode.
- Authorization checks.
- Rate limits.

Visual tests:

- Dashboard desktop/mobile.
- Draft editor desktop/mobile.
- Project card copy flow.

## MVP Scope

Must have:

- GitHub App connection.
- LinkedIn OAuth connection.
- Webhook ingestion.
- Repo scoring.
- Draft generation.
- Review queue.
- Official LinkedIn text post publishing.
- Project card generation.
- Audit logs.

Should have:

- Image post support.
- Scheduling.
- Brand voice memory.
- Post templates.
- Manual project checklist.

Could have:

- Multi-image/document posts.
- Team workspaces.
- Analytics.
- Browser extension for copy helper only if it does not automate LinkedIn actions.

Will not have:

- LinkedIn scraping.
- Auto-commenting.
- Auto-liking.
- Browser automation to edit LinkedIn profile.
- Fake engagement.

## Cursor/Antigravity Build Order

Use this order for AI coding agents:

1. Scaffold monorepo and health checks.
2. Create Prisma schema and migrations.
3. Implement auth and workspace model.
4. Implement GitHub webhook verification in isolation with tests.
5. Implement repository sync.
6. Implement signal scoring as pure functions with fixtures.
7. Implement content generation contracts with mocked AI provider.
8. Build draft queue UI.
9. Implement LinkedIn publisher with mocked API.
10. Add real LinkedIn OAuth and publishing.
11. Add project card assistant.
12. Add observability, logs, and security pass.

## Definition Of Done

Every feature must include:

- Data model changes if needed.
- API endpoint or worker.
- UI state if user-facing.
- Tests for success and failure path.
- Audit log if it changes publishing, integration, or privacy state.
- Documentation update.

