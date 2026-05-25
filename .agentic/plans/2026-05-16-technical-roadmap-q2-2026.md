# Technical Roadmap Q2 2026

**Date**: 2026-05-16
**Type**: architecture
**Status**: draft
**Affected**: Full Project
**Author**: Antigravity

## Context

The FinTrack application has moved from a local-only demo to a Supabase-backed cloud-synced app. While basic user isolation has been implemented in the frontend, the project needs a more robust foundation in terms of security (RLS), testing (coverage), and infrastructure (local development) to be production-ready.

## Goals

- [x] Integrate Google Sign-Up and dynamic button labels.
- [ ] Verify and implement strict Row Level Security (RLS) on all Supabase tables.
- [ ] Achieve 70% code coverage for core financial calculations and auth logic.
- [ ] Initialize local Supabase CLI and Docker environment for migration management.
- [ ] Complete a WCAG 2.1 accessibility audit and remediation.
- [ ] Enhance Optimistic UI for better offline/low-bandwidth performance.

## Approach

The strategy focuses on "Security First," ensuring that the database itself enforces user isolation (RLS). Following this, "Reliability" is addressed by adding tests to prevent regressions. We've also prioritized a user-friendly onboarding experience by integrating Google OAuth.

## Steps

1.  **Authentication & Isolation**: (IN PROGRESS) Real email/password auth implemented; Google OAuth integrated with contextual labels.
2.  **Security Audit**: Verify RLS for `transactions`, `budgets`, and `portfolio_accounts` tables (SQL schema provided in `supabase/schema.sql`).
3.  **Test Implementation**: Use `add-tests` skill to cover stores.
4.  **Infra Setup**: Install Supabase CLI.
5.  **Accessibility**: WCAG audit.

## Risks & Open Questions

- **Google OAuth Config**: User must manually enable Google Provider in the Supabase Dashboard and provide client ID/Secret.
- **Supabase CLI**: Requires Docker.

## Outcome

(Pending execution)
