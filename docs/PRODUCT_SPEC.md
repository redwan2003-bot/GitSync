# Product Specification

## Product Name

Working name: RepoSignal

Tagline: Turn real GitHub progress into credible LinkedIn visibility.

## Product Thesis

Developers already do the hard work in GitHub. The missing layer is storytelling, selection, formatting, and publishing. RepoSignal should detect meaningful project progress, generate professional LinkedIn posts, prepare LinkedIn Projects section content, and publish only when the user has approved the automation level.

## Platform Reality

The system has two LinkedIn capability modes:

1. Official MVP mode:
   - Create LinkedIn posts on behalf of an authenticated member with `w_member_social`.
   - Generate project-section-ready content for manual add/update.
   - Give the user a copy button, media asset, and step-by-step checklist for the LinkedIn Projects section.

2. Partner-approved mode:
   - If LinkedIn grants access to Profile Edit API, create/update/delete Projects section entries programmatically.
   - Keep this behind a feature flag named `LINKEDIN_PROFILE_EDIT_ENABLED`.

Browser automation mode is explicitly out of scope.

## Users

### Primary Users

- Junior developers building job visibility.
- Students and bootcamp graduates with GitHub projects but weak LinkedIn presence.
- Freelancers who need public proof of work.
- Open-source maintainers who want to share meaningful releases.
- Founders building in public from GitHub.

### Secondary Users

- Developer advocates.
- Engineering teams sharing release work.
- Career coaches managing visibility workflows for cohorts.

## Jobs To Be Done

- When I push or release a real project, I want a polished LinkedIn post drafted automatically so I can stay visible without wasting time.
- When a repo becomes portfolio-worthy, I want LinkedIn Projects section content prepared so I can update my profile quickly.
- When I work on many commits, I want the system to decide what is worth sharing so I do not spam my network.
- When AI writes about my work, I want it to sound credible, specific, and technically accurate.

## Core Features

### 1. Onboarding

User connects:

- GitHub account or installs GitHub App.
- LinkedIn account through OAuth.
- Optional portfolio URL, target role, seniority, tone, and preferred posting frequency.

Required user choices:

- Automation mode: Manual, Review Required, Autopilot.
- Repo scope: all repos, selected repos, public repos only, or organization repos.
- Content style: concise builder, technical deep dive, hiring-focused, founder/public-build.

### 2. GitHub Project Detection

Signals to ingest:

- Repository created or made public.
- Push to default branch.
- Pull request merged.
- Release published.
- README changed.
- Package/deployment/config added.
- Stars/forks threshold crossed.
- Topics/languages changed.
- GitHub Pages or deployment URL added.

Project-quality score inputs:

- README exists and has meaningful content.
- Description is not empty.
- Demo/live URL exists.
- License exists.
- Tests exist.
- CI exists.
- At least one release/tag exists.
- Screenshots or docs exist.
- Recent meaningful commits exceed threshold.
- Repo is not a toy, fork-only, or dependency update noise.

### 3. Content Drafting

Generate:

- LinkedIn text post.
- LinkedIn article/link post payload.
- Project card for LinkedIn Projects section.
- Short project summary for portfolio/resume.
- Optional image/card graphic with project name, stack, outcome, and GitHub URL.

The draft must cite evidence from GitHub:

- Commit messages.
- PR titles.
- README sections.
- Release notes.
- File tree and language data.
- Demo URL.

### 4. Review Queue

Draft statuses:

- Detected
- Drafting
- Needs Evidence
- Ready For Review
- Scheduled
- Published
- Skipped
- Failed

Review actions:

- Edit text.
- Change tone.
- Regenerate hook.
- Add/remove hashtags.
- Attach media.
- Schedule.
- Publish now.
- Mark as never post this repo.
- Save as project card only.

### 5. LinkedIn Publishing

Default behavior:

- Use official LinkedIn OAuth.
- Use Posts API for text, image, video, document, article, multi-image, poll, or celebration post types where allowed.
- Store returned LinkedIn post URN.
- Do not auto-like, auto-comment, auto-share, scrape metrics, or manipulate engagement.

Publishing policies:

- User consent is required.
- Daily and weekly caps.
- Duplicate content detection.
- Minimum score threshold.
- No posting from test accounts to real profiles.
- No hidden engagement automation.

### 6. Project Section Assistant

Because the LinkedIn Projects section cannot be assumed writable by normal apps, the MVP should generate a project card:

- Project title.
- Associated role/occupation.
- Start date and optional end date.
- Description.
- Contributors/collaborators.
- GitHub repository link.
- Demo link.
- Media image or screenshot.
- Skills/technologies.
- Suggested one-line headline.

The UI should provide:

- Copy buttons per field.
- "Open LinkedIn profile" link.
- Manual checklist.
- Generated media asset to upload through LinkedIn "Add media".
- Status tracking: Not Added, Added Manually, Auto Added if partner API is enabled.

### 7. Style Memory

Learn from user edits:

- Preferred post length.
- Favorite opening style.
- Banned words and phrases.
- Technical depth.
- Audience.
- Hashtag style.
- CTA preference.

Never learn from private repository content for global model training. Treat style memory as user-owned configuration.

## LinkedIn Post Structure

Recommended post format:

1. Hook:
   One specific sentence about the project outcome.

2. Problem:
   What issue the project solves.

3. Build:
   What was implemented, using concrete technical details.

4. Decisions:
   Why key tools, architecture, or tradeoffs were chosen.

5. Proof:
   Link to GitHub, demo, release, screenshot, or measurable result.

6. Reflection:
   What the user learned or improved.

7. CTA:
   Soft, non-engagement-bait ask such as "Code and notes are here."

8. Hashtags:
   3 to 5 relevant tags, not a wall of generic tags.

Hard rules:

- Never invent metrics, users, companies, benchmarks, or collaborators.
- Never claim production usage unless evidence exists.
- Never expose secrets, private code, client names, or NDA content.
- Never post raw commit noise.
- Never use spammy hooks like "I am thrilled to announce" unless the user explicitly wants that style.

## LinkedIn Project Card Structure

Recommended fields:

- Title: short, specific project name.
- Role: user's actual contribution.
- Dates: start from first meaningful commit or user-provided date.
- Description: 2 to 4 sentences.
- Members: only user-confirmed collaborators.
- Media: GitHub repo, demo URL, screenshot, or project image.
- Technologies: 5 to 8 concrete tools.

Description template:

```
Built [project name], a [category] that helps [audience] [outcome].
My role: [specific contribution].
Key technical work included [architecture/detail 1], [detail 2], and [detail 3].
Repo/demo: [link]
```

## UI Layout

### Information Architecture

- Dashboard
- Repositories
- Draft Queue
- Editor
- Project Cards
- Publishing Calendar
- Analytics
- Brand Voice
- Settings
- Audit Log

### Dashboard

Purpose: show what needs attention.

Sections:

- Connected accounts status.
- This week's publish capacity.
- Repos with new signals.
- Drafts waiting for review.
- Scheduled posts.
- Recently published posts.
- Warnings: token expiry, failed webhook, LinkedIn API errors.

### Repositories Page

Table columns:

- Repo
- Visibility
- Last meaningful event
- Project score
- Auto-post mode
- LinkedIn project status
- Last post

Actions:

- Enable/disable.
- Change rules.
- Generate project card.
- Generate post.
- Ignore repo.

### Draft Queue

Kanban or list layout:

- Needs Evidence
- Ready
- Scheduled
- Published
- Failed

Each draft card:

- Repo name.
- Trigger event.
- Quality score.
- Suggested post type.
- Risk flags.
- Preview excerpt.

### Editor

Two-column layout:

- Left: generated post editor.
- Right: evidence panel from GitHub.

Controls:

- Tone segmented control.
- Length selector.
- Hashtag chips.
- Media picker.
- LinkedIn preview.
- Project card preview.
- Publish/schedule buttons.

### Project Cards

Grid/list of profile-ready projects:

- Project status.
- Field-by-field copy controls.
- GitHub proof links.
- Media preview.
- Manual LinkedIn add checklist.
- Partner API sync status if enabled.

### Settings

- GitHub installation.
- LinkedIn account.
- Automation mode.
- Posting frequency.
- Repo rules.
- Token and privacy controls.
- Data export/delete.
- Team/workspace settings.

## Visual Theme Options

Because design taste should be confirmed before implementation, treat these as options.

### Recommended: Quiet Developer Cockpit

- Feel: precise, calm, technical, trustworthy.
- Palette: off-white or dark graphite base, neutral grays, green success, amber review, red failure, electric cyan/blue only for focus.
- Typography: system sans for UI, optional monospace for repo/event evidence.
- Layout: dense but readable dashboard, tables, split editors, logs.
- Motion: subtle status transitions, no decorative motion.

### Alternative: Editorial Builder Brand

- Feel: creator tool for developers.
- Palette: warm neutral base, black text, one strong accent.
- Typography: expressive headings, very readable body text.
- Layout: more spacious, content cards, writing focus.

### Alternative: DevOps Console

- Feel: automation and reliability.
- Palette: dark UI, terminal-inspired evidence panels, bright status colors.
- Typography: system sans plus monospace.
- Layout: event streams, queues, logs, monitors.

## Product Metrics

Activation:

- GitHub connected.
- LinkedIn connected.
- First repo selected.
- First draft generated.
- First post published or first project card copied.

Quality:

- Draft acceptance rate.
- Average edits per draft.
- Regeneration rate.
- User-reported accuracy.
- False positive project detections.

Reliability:

- Webhook success rate.
- Queue latency.
- LinkedIn publish success rate.
- Token refresh failure rate.

Business:

- Weekly active connected repos.
- Published posts per active user.
- Project cards created.
- Paid conversion after first published post.

