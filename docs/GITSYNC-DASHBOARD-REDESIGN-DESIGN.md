# GitSync Dashboard Redesign — Design Specification

**Date:** 2025-05-30  
**Scope:** Premium dark "Signal Orbit" command-center dashboard UI redesign  
**Status:** Design Approved, Ready for Implementation

---

## 1. Overview

This specification describes the complete visual and architectural redesign of the GitSync SaaS dashboard. The goal is to transform the current fragmented UI (scattered empty 3D area, duplicate branding, placeholder Settings/Audit pages, low information density) into a cohesive, premium dark technical command-center using 21st.dev-inspired component patterns.

### Success Criteria
- ✅ Premium dark aesthetic (technical cockpit, not generic SaaS blue)
- ✅ High information density (no giant empty hero sections)
- ✅ 21st.dev-compatible components (Aceternity sidebar, bento grid, animated cards)
- ✅ Consistent typography and color system
- ✅ All routes functional and production-ready
- ✅ No placeholder or "Coming Soon" pages
- ✅ Responsive layout (desktop sidebar, mobile drawer)
- ✅ Accessibility and performance standards met

---

## 2. Design System

### 2.1 Color Tokens

| Token | Value | Purpose | Usage |
|-------|-------|---------|-------|
| `--bg` | `#0E1116` | Page background | Main viewport |
| `--surface` | `#151A21` | Primary surface | Topbar, sidebar, modals |
| `--surface-soft` | `#1E242D` | Soft surface | Card backgrounds, panels |
| `--text` | `#F5F7FA` | Primary text | All body text, headings |
| `--muted` | `#A7B0BE` | Muted text | Secondary text, hints, metadata |
| `--border` | `#2A323D` | Border color | Card borders, dividers, lines |
| `--signal` | `#32D583` | Signal/Success | Connected, synced, published, ready |
| `--commit` | `#F5B544` | Commit/Pending | Review pending, in progress, warnings |
| `--cyan` | `#37D5FF` | Cyan/Active | Active, highlighted, AI-generated, syncing |
| `--linkedin` | `#0A66C2` | LinkedIn blue | LinkedIn actions, publishing CTAs |
| `--danger` | `#F97066` | Danger/Error | Errors, failed, disconnected |

### 2.2 Typography

| Role | Font | Weight | Size | Usage |
|------|------|--------|------|-------|
| **Headings** | Space Grotesk | 600–700 | 32px–14px | All h1, h2, h3, h4 |
| **Body/UI** | Plus Jakarta Sans | 400–500 | 16px–12px | Body text, labels, buttons, forms |
| **Code/Logs** | JetBrains Mono | 400–500 | 13px–12px | Commit hashes, code snippets, audit logs |
| **Status Badges** | Pixelify Sans | 700 | 10px | Status labels ONLY (SYNCED, REVIEW, FAILED, etc.) |

**Pixelify Sans Restriction:** ONLY for status badge labels. Do NOT use for body text, forms, buttons, navigation, or settings.

### 2.3 Spacing & Layout Grid
- **Base unit:** 8px (Tailwind default)
- **Card padding:** 16px–24px
- **Gap between cards:** 16px
- **Sidebar width:** 240px (fixed)
- **Topbar height:** 56px (fixed)

---

## 3. Layout Architecture

### 3.1 Shared Dashboard Shell

All dashboard routes share a consistent layout:

```
┌─ Topbar (56px) ────────────────────────────────────────┐
├─ Sidebar (240px) │ Main Content (responsive bento)    │
│                  │                                     │
│ • GitSync Logo   │ Page title + dynamic content       │
│ • Nav Routes     │                                     │
│ • Active state   │                                     │
│ • Integration    │                                     │
│   Health         │                                     │
└──────────────────┴─────────────────────────────────────┘
```

**Topbar (56px height, `--surface` background):**
- Page title (left)
- Workspace context + user menu (right)
- No duplicate GitSync brand

**Sidebar (240px fixed, `--surface` background):**
- GitSync logo/brand (top)
- 6 nav routes with lucide-react icons + active state
- Integration health cards (bottom)
- Mobile: collapsed to drawer with hamburger trigger

**Main Content Area:**
- Responsive CSS grid (3-col desktop → 2-col tablet → 1-col mobile)
- Padding: 24px from edges
- Gap: 16px between cards

---

## 4. Dashboard Pages

### 4.1 `/dashboard` — Command Center (Bento Grid)

**Layout:** 7 cards arranged as:

```
Signal Orbit (2x2) │ Metrics 1 (1x1)
                   │ Metrics 2 (1x1)
                   │ Metrics 3 (1x1)
                   │ Metrics 4 (1x1)
────────────────────────────────────
Pipeline (2x1)     │ Recent Signals (1x1)
                   │ Pending Drafts (1x1)
                   │ Integration Health (1x1)
```

**Card 1: Signal Orbit Panel (2x2 span)**
- Visual representation: GitHub activity → AI draft → LinkedIn publishing
- Implementation: 3D (three.js + lazy-loaded) with SVG fallback
- Fixed aspect ratio: 1:1 to prevent layout shift
- Fallback: High-quality static SVG when WebGL unavailable

**Cards 2–5: Metric Cards (1x1 each)**
- Active Repositories (count + icon)
- Drafts Awaiting Review (count + icon)
- Published Posts (count + icon)
- Failed Sync Events (count + icon)
- Value: `--cyan` color, icon: lucide-react

**Card 6: Pipeline Status Tracker (2x1 span)**
- 5 sequential stages: Tracked → Logged → Draft Created → Review → Published
- Horizontal flow with connecting lines
- Colors: `--signal` = complete, `--commit` = pending, `--cyan` = active

**Card 7: Recent Signals (1x1)**
- Latest repo events (max 5 rows)
- Format: Icon + Event type + Repo name + Timestamp
- No data: Placeholder explanation

**Card 8: Pending Drafts (1x1)**
- Latest 3–4 drafts awaiting review
- Format: Repo name + Preview text + Status badge
- CTA: "View All Drafts" → `/dashboard/drafts`

**Card 9: Integration Health (1x1)**
- GitHub, LinkedIn, OpenAI, Database status
- Status: CONNECTED / DISCONNECTED
- CTA: "View Settings" → `/dashboard/settings`

---

### 4.2 `/dashboard/repositories` — Repo Management

**Layout:** Search header + 2-column card grid

- Search input (Plus Jakarta Sans)
- Each repo card shows:
  - Repo name (Space Grotesk, 14px)
  - Visibility badge (PUBLIC / PRIVATE)
  - Status badge (ACTIVE / DISABLED)
  - Signal Score (big `--cyan` number)
  - Last activity timestamp
  - Draft count
- CTA: Enable/Disable toggle
- Empty state: "No repositories connected"

---

### 4.3 `/dashboard/drafts` — Draft Review Queue

**Layout:** Tabs (All / Pending / Approved / Rejected) + draft cards

- Status tabs with underline animation
- Each draft card:
  - Repo name + source
  - Preview text (max 4 lines)
  - Status badge (color-coded)
  - Created date
  - CTAs: Review / Approve / Reject / Publish
- Empty state: "No drafts yet" with explanation

---

### 4.4 `/dashboard/project-cards` — LinkedIn Project Assistant

**Layout:** Split panel (list left, preview right)

- **Left:** Searchable project card list with titles + character counts + tags
- **Right:** LinkedIn preview + copy-to-clipboard actions per field
- Empty state: "No project cards"

---

### 4.5 `/dashboard/settings` — Configuration

**Layout:** 2-column card grid

**Cards (no "Coming Soon"):**
1. GitHub Connection (status + account + last sync + buttons)
2. LinkedIn Connection (status + profile + last publish + buttons)
3. OpenAI Configuration (status + model + update button)
4. Posting Policy (rate limit "3 posts/week" + toggles)
5. Private Repo Policy (include/exclude toggle)
6. System Status (Database, Queue, Webhooks, API — all with status badges)

---

### 4.6 `/dashboard/audit` — Audit Logs

**Layout:** Terminal-style monospace log with search/filter

- Search input + filter tabs (All / Publish / Review / Sync / Error)
- Log display: JetBrains Mono, 12px, `[HH:MM:SS] [ACTION] message`
- Color-coded by action type
- Empty state: "No logs yet" with placeholder row structure

---

## 5. Component Library

| Component | Purpose |
|-----------|---------|
| **DashboardShell** | Shared layout wrapper |
| **DashboardSidebar** | Navigation + integration health |
| **DashboardTopbar** | Page title + workspace context |
| **BentoCard** | Flexible card container |
| **AnimatedMetricCard** | Stat card with icon + value |
| **SignalOrbitPanel** | 3D/SVG activity visualization |
| **SignalOrbitFallback** | Static SVG fallback |
| **PipelineStatusTracker** | 5-stage flow visualization |
| **PixelStatusBadge** | Status label (Pixelify Sans) |
| **IntegrationStatusCard** | Mini integration status |
| **RepoSignalCard** | Repository card |
| **DraftQueueCard** | Draft item card |
| **EmptyState** | Empty state with icon + text |
| **AuditTerminal** | Monospace log line |

---

## 6. Motion & Interactions

- **Sidebar active state:** Smooth underline slide (300ms)
- **Tab underline:** Slide to new tab (200ms)
- **Card hover:** Subtle border highlight (100ms)
- **Metric value change:** Fade + slide (300ms)
- **Respects `prefers-reduced-motion`:** All animations converted to instant

---

## 7. Responsive Behavior

| Breakpoint | Sidebar | Topbar | Grid | Content |
|-----------|---------|--------|------|---------|
| **Desktop** (1025px+) | Persistent (240px) | Fixed 56px | 3-column | Max-width 1400px |
| **Tablet** (641–1024px) | Drawer | Fixed 56px | 2-column | Full width |
| **Mobile** (0–640px) | Drawer | Fixed 48px | 1-column | Full width |

---

## 8. Performance Requirements

- Signal Orbit 3D: Lazy-loaded with `ssr: false`
- Suspense boundary: Wraps 3D with SVG fallback
- Canvas dimensions: Fixed (400×400px) to prevent layout shift
- Route-level code splitting: Each page in separate chunk
- No global animation loops

---

## 9. Verification Plan

**Automated:**
```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm test
```

**Manual:**
```bash
pnpm dev
# Open http://localhost:3000/dashboard
```

**Desktop checks:**
- [ ] Sidebar visible, nav routes clickable
- [ ] Topbar shows page title
- [ ] All 8 dashboard cards render
- [ ] Signal Orbit loads or SVG fallback shown
- [ ] Hover states subtle and intentional

**Mobile checks (640px):**
- [ ] Sidebar hidden, hamburger trigger visible
- [ ] Cards stack 1-column
- [ ] Text readable

**Reduced-motion:**
- [ ] Animations disabled
- [ ] Navigation functional

---

## 10. Implementation Order

1. DashboardShell + Sidebar + Topbar
2. BentoCard + AnimatedMetricCard
3. Dashboard page with all 8 cards
4. Repositories, Drafts, Project Cards
5. Settings, Audit
6. Polish, animations, responsive adjustments
7. Testing + build validation

---

## Summary

Production-ready SaaS dashboard redesign. All pages fully specified. No placeholders. Responsive, accessible, performant.

**Next step:** Implementation planning with writing-plans skill.
