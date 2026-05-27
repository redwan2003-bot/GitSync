# AI Agent Instructions For GitSync

This project builds a compliant GitHub-to-LinkedIn visibility tool.

## Non-Negotiable Rules

- Do not implement LinkedIn scraping.
- Do not implement browser automation against LinkedIn.
- Do not use unofficial LinkedIn internal APIs.
- Do not build auto-like, auto-comment, auto-connect, auto-message, or engagement manipulation features.
- Use official LinkedIn OAuth and official LinkedIn APIs only.
- Automatic LinkedIn Projects section editing must be behind `LINKEDIN_PROFILE_EDIT_ENABLED` and must not be implemented unless approved API credentials exist.
- GitHub webhooks must verify `X-Hub-Signature-256`.
- Tokens must be encrypted at rest and never logged.
- Private repository content must be minimized, redacted, and review-only by default.

## Architecture Commitments

- TypeScript-first monorepo.
- Domain logic belongs in `packages/domain`.
- External API clients belong in `packages/integrations`.
- UI components belong in `packages/ui`.
- App-specific routes/controllers belong in `apps/web`, `apps/api`, and `apps/worker`.
- Signal scoring must be pure functions with fixtures.
- AI generation must output structured JSON before visible text.
- Every publish action must create an audit log.

## Product Commitments

- The product publishes meaningful project progress, not commit spam.
- Human review is the default.
- Autopilot requires explicit user opt-in, score thresholds, and rate limits.
- Generated claims must be evidence-backed.
- The LinkedIn Projects section is assisted manually in MVP.

## Implementation Priorities

1. Safety and API compliance.
2. Accurate GitHub evidence extraction.
3. Useful review workflow.
4. Reliable LinkedIn publishing.
5. Project card assistant.
6. Autopilot only after trust is earned.

## Testing Expectations

Every feature should include:

- Unit tests for domain logic.
- Integration tests for external API boundaries with mocks.
- Error path tests.
- Permission tests if user/workspace data is touched.
- UI tests for critical publish and copy flows.

