# GitSync Dashboard Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended). Fresh subagent per task with two-stage review between tasks.

**Goal:** Transform GitSync dashboard from visually broken UI (excessive empty space, oversized 3D area, duplicate branding) into a premium dark "Signal Orbit" command-center using 21st.dev-inspired Sidebar + Bento Grid patterns.

**Architecture:** 
- Shared dashboard shell (240px sidebar + 56px topbar + responsive 3-column bento grid)
- 6 distinct routes (/dashboard, /repositories, /drafts, /project-cards, /settings, /audit) with consistent navigation
- Design tokens (11 colors), typography (Space Grotesk/Plus Jakarta Sans/JetBrains Mono/Pixelify Sans), motion (300ms transitions), lazy-loaded 3D with SVG fallback

**Tech Stack:** Next.js, React, Tailwind CSS, Lucide React, Framer Motion, Three.js + @react-three/fiber (optional, fallback to SVG), Shadcn components

---

## File Structure Map

**New files to create (14 components + 3 pages):**
```
src/components/
  ├── dashboard-shell.tsx              [Shared layout wrapper]
  ├── dashboard-sidebar.tsx            [Persistent navigation]
  ├── dashboard-topbar.tsx             [Page title + workspace status]
  ├── bento-card.tsx                   [Base bento card container]
  ├── animated-metric-card.tsx         [Metric stat card with animations]
  ├── signal-orbit-fallback.tsx        [SVG/CSS motion fallback for 3D]
  ├── signal-orbit-panel.tsx           [Lazy-loaded 3D with Suspense]
  ├── pipeline-status-tracker.tsx      [5-step pipeline visualization]
  ├── project-score-ring.tsx           [SVG circular score display]
  ├── repo-signal-card.tsx             [Compact repo event row]
  ├── integration-status-card.tsx      [GitHub/LinkedIn/OpenAI status]
  ├── empty-state.tsx                  [Reusable empty state]
  ├── draft-queue-card.tsx             [Draft card with actions]
  ├── audit-terminal.tsx               [Terminal-style audit log]

src/app/dashboard/
  ├── layout.tsx                       [Refactor to use DashboardShell]
  ├── page.tsx                         [Bento dashboard home]
  ├── repositories/
  │   └── page.tsx                     [Create or refactor]
  ├── drafts/
  │   ├── page.tsx                     [Create or refactor]
  │   └── [id]/page.tsx                [If exists, refactor]
  ├── project-cards/
  │   └── page.tsx                     [Create or refactor]
  ├── settings/
  │   └── page.tsx                     [Create or refactor]
  └── audit/
      └── page.tsx                     [Create or refactor]

src/app/
  └── globals.css                      [Add color tokens, fonts, animations]

src/lib/
  └── design-tokens.ts                 [Export color/spacing constants]
```

**Existing files to modify:**
- `src/app/globals.css` – Add CSS variables, font imports
- `src/app/dashboard/layout.tsx` – Integrate new shell
- All 6 dashboard pages – Populate with components

---

## Task Breakdown (9 Phases)

### Phase 1: Shared Dashboard Shell & Layout

**Files:**
- Create: `src/components/dashboard-shell.tsx`
- Create: `src/components/dashboard-sidebar.tsx`
- Create: `src/components/dashboard-topbar.tsx`
- Modify: `src/app/dashboard/layout.tsx`
- Modify: `src/app/globals.css`

#### Task 1.1: Create DashboardShell wrapper component

- [ ] **Step 1: Create shell component with responsive grid layout**

File: `src/components/dashboard-shell.tsx`

```tsx
'use client';

import React from 'react';
import { DashboardSidebar } from './dashboard-sidebar';
import { DashboardTopbar } from './dashboard-topbar';

interface DashboardShellProps {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription?: string;
}

export function DashboardShell({
  children,
  pageTitle,
  pageDescription,
}: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen bg-bg text-text">
      {/* Sidebar */}
      <DashboardSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <DashboardTopbar
          title={pageTitle}
          description={pageDescription}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify file created and imports resolve**

Run: `cd apps/web && pnpm typecheck src/components/dashboard-shell.tsx`
Expected: No errors

- [ ] **Step 3: Create DashboardSidebar component**

File: `src/components/dashboard-sidebar.tsx`

```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  GitBranch,
  FileText,
  Layers,
  Settings,
  Activity,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

interface DashboardSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/repositories', label: 'Repositories', icon: GitBranch },
  { href: '/dashboard/drafts', label: 'Drafts', icon: FileText },
  { href: '/dashboard/project-cards', label: 'Project Cards', icon: Layers },
  { href: '/dashboard/audit', label: 'Audit', icon: Activity },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardSidebar({ open, onOpenChange }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static left-0 top-0 h-screen w-60 bg-surface border-r border-border z-50 transform transition-transform duration-300 lg:transform-none ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-signal flex items-center justify-center">
              <span className="text-xs font-bold text-bg">GS</span>
            </div>
            <span className="text-lg font-bold text-text">GitSync</span>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="lg:hidden p-1 hover:bg-surface-soft rounded"
          >
            <X size={20} className="text-muted" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-signal/10 text-signal border border-signal/20'
                        : 'text-muted hover:text-text hover:bg-surface-soft'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                    {isActive && (
                      <ChevronRight size={16} className="ml-auto" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Integration Health Footer */}
        <div className="p-4 border-t border-border space-y-3">
          <div className="text-xs font-semibold text-muted uppercase tracking-wide">
            Integrations
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">GitHub</span>
              <div className="w-2 h-2 rounded-full bg-signal" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">LinkedIn</span>
              <div className="w-2 h-2 rounded-full bg-signal" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">OpenAI</span>
              <div className="w-2 h-2 rounded-full bg-signal" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
```

- [ ] **Step 4: Create DashboardTopbar component**

File: `src/components/dashboard-topbar.tsx`

```tsx
'use client';

import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

interface DashboardTopbarProps {
  title: string;
  description?: string;
  onMenuToggle: () => void;
}

export function DashboardTopbar({
  title,
  description,
  onMenuToggle,
}: DashboardTopbarProps) {
  return (
    <header className="h-14 border-b border-border bg-surface flex items-center justify-between px-6">
      {/* Left: Menu + Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1 hover:bg-surface-soft rounded"
        >
          <Menu size={20} className="text-muted" />
        </button>
        <div>
          <h1 className="text-sm font-semibold text-text">{title}</h1>
          {description && (
            <p className="text-xs text-muted">{description}</p>
          )}
        </div>
      </div>

      {/* Right: Status + Notifications + User */}
      <div className="flex items-center gap-4">
        <span className="text-xs text-signal font-medium px-2 py-1 bg-signal/10 rounded">
          Syncing
        </span>
        <button className="p-1 hover:bg-surface-soft rounded">
          <Bell size={18} className="text-muted" />
        </button>
        <button className="p-1 hover:bg-surface-soft rounded">
          <User size={18} className="text-muted" />
        </button>
      </div>
    </header>
  );
}
```

- [ ] **Step 5: Refactor dashboard layout.tsx to use DashboardShell**

File: `src/app/dashboard/layout.tsx`

```tsx
import { DashboardShell } from '@/components/dashboard-shell';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell pageTitle="Dashboard" pageDescription="Signal Orbit Command Center">
      {children}
    </DashboardShell>
  );
}
```

- [ ] **Step 6: Add CSS color tokens and fonts to globals.css**

File: `src/app/globals.css`

Prepend the following (before existing styles):

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Pixelify+Sans:wght@400;700&display=swap');

:root {
  --bg: #0e1116;
  --surface: #151a21;
  --surface-soft: #1e242d;
  --text: #f5f7fa;
  --muted: #a7b0be;
  --border: #2a323d;
  --signal: #32d583;
  --commit: #f5b544;
  --cyan: #37d5ff;
  --linkedin: #0a66c2;
  --danger: #f97066;
}

@layer base {
  html {
    @apply bg-bg text-text;
    color-scheme: dark;
  }

  body {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    @apply font-bold;
  }

  code, pre {
    font-family: 'JetBrains Mono', monospace;
  }

  .status-badge {
    font-family: 'Pixelify Sans', monospace;
    @apply text-xs font-bold uppercase tracking-wide;
  }
}

@layer components {
  .bg-bg { @apply bg-[#0e1116]; }
  .bg-surface { @apply bg-[#151a21]; }
  .bg-surface-soft { @apply bg-[#1e242d]; }
  .text-text { @apply text-[#f5f7fa]; }
  .text-muted { @apply text-[#a7b0be]; }
  .border-border { @apply border-[#2a323d]; }
  .text-signal { @apply text-[#32d583]; }
  .text-commit { @apply text-[#f5b544]; }
  .text-cyan { @apply text-[#37d5ff]; }
  .text-linkedin { @apply text-[#0a66c2]; }
  .text-danger { @apply text-[#f97066]; }

  .bg-signal { @apply bg-[#32d583]; }
  .bg-commit { @apply bg-[#f5b544]; }
  .bg-cyan { @apply bg-[#37d5ff]; }
  .bg-linkedin { @apply bg-[#0a66c2]; }
  .bg-danger { @apply bg-[#f97066]; }
}

@layer utilities {
  .transition-smooth {
    @apply transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)];
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      @apply !transition-none !animate-none;
    }
  }
}
```

- [ ] **Step 7: Update Tailwind config to recognize custom color variables**

File: `tailwind.config.ts` (if exists, add to colors object):

```ts
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-soft': 'var(--surface-soft)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        signal: 'var(--signal)',
        commit: 'var(--commit)',
        cyan: 'var(--cyan)',
        linkedin: 'var(--linkedin)',
        danger: 'var(--danger)',
      },
    },
  },
};
```

- [ ] **Step 8: Test layout on desktop/tablet/mobile**

Run: `cd apps/web && pnpm dev`

Browser tests:
- Desktop (1920px): Sidebar visible, topbar shows, no overlap
- Tablet (768px): Sidebar collapses to drawer on menu click
- Mobile (375px): Drawer opens/closes, layout responsive

Expected: No console errors, layout shifts smooth

- [ ] **Step 9: Commit**

```bash
cd apps/web
git add src/components/dashboard-shell.tsx src/components/dashboard-sidebar.tsx src/components/dashboard-topbar.tsx src/app/dashboard/layout.tsx src/app/globals.css
git commit -m "feat: create shared dashboard shell with sidebar, topbar, and responsive layout

- Add DashboardShell wrapper component
- Add DashboardSidebar with Lucide icons and active route highlighting
- Add DashboardTopbar with page title and workspace status
- Refactor dashboard layout.tsx to use new shell
- Add 11 CSS color tokens and typography setup to globals.css
- Add transition utilities and prefers-reduced-motion support

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Phase 2: Design Tokens & Typography

**Files:**
- Create: `src/lib/design-tokens.ts`
- Create: `src/components/typography.tsx`

#### Task 2.1: Create design tokens export

- [ ] **Step 1: Create design-tokens.ts**

File: `src/lib/design-tokens.ts`

```ts
export const COLORS = {
  bg: '#0e1116',
  surface: '#151a21',
  'surface-soft': '#1e242d',
  text: '#f5f7fa',
  muted: '#a7b0be',
  border: '#2a323d',
  signal: '#32d583',
  commit: '#f5b544',
  cyan: '#37d5ff',
  linkedin: '#0a66c2',
  danger: '#f97066',
} as const;

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
} as const;

export const TRANSITIONS = {
  smooth: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const STATUS_COLORS = {
  ready: COLORS.signal,
  syncing: COLORS.cyan,
  review: COLORS.commit,
  failed: COLORS.danger,
  published: COLORS.signal,
} as const;

export type StatusType = keyof typeof STATUS_COLORS;
```

- [ ] **Step 2: Create typography helper components**

File: `src/components/typography.tsx`

```tsx
import React from 'react';

export function H1({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-3xl font-bold text-text ${className}`}>
      {children}
    </h1>
  );
}

export function H2({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-2xl font-bold text-text ${className}`}>
      {children}
    </h2>
  );
}

export function H3({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-lg font-semibold text-text ${className}`}>
      {children}
    </h3>
  );
}

export function Body({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-sm text-text ${className}`}>{children}</p>;
}

export function Caption({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xs text-muted ${className}`}>{children}</p>
  );
}

export function Code({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <code className={`text-xs font-mono bg-surface-soft px-2 py-1 rounded text-cyan ${className}`}>
      {children}
    </code>
  );
}

export function PixelStatusBadge({
  status,
  className = '',
}: {
  status: 'READY' | 'SYNCING' | 'REVIEW' | 'FAILED' | 'PUBLISHED';
  className?: string;
}) {
  const statusColors: Record<typeof status, string> = {
    READY: 'bg-signal/10 text-signal',
    SYNCING: 'bg-cyan/10 text-cyan',
    REVIEW: 'bg-commit/10 text-commit',
    FAILED: 'bg-danger/10 text-danger',
    PUBLISHED: 'bg-signal/10 text-signal',
  };

  return (
    <span className={`status-badge px-2 py-1 rounded ${statusColors[status]} ${className}`}>
      {status}
    </span>
  );
}
```

- [ ] **Step 3: Test typography**

Run: `cd apps/web && pnpm typecheck src/lib/design-tokens.ts src/components/typography.tsx`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
cd apps/web
git add src/lib/design-tokens.ts src/components/typography.tsx
git commit -m "feat: create design tokens and typography helpers

- Export color, spacing, transition, and status tokens
- Add typography helper components (H1-H3, Body, Caption, Code, PixelStatusBadge)
- Ensure Pixelify Sans used only for status badges

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Phase 3: Dashboard Page (Bento Command Center)

**Files to create:**
- `src/components/bento-card.tsx`
- `src/components/animated-metric-card.tsx`
- `src/components/signal-orbit-fallback.tsx`
- `src/components/signal-orbit-panel.tsx`
- `src/components/pipeline-status-tracker.tsx`
- `src/components/project-score-ring.tsx`
- `src/components/repo-signal-card.tsx`
- `src/components/integration-status-card.tsx`
- `src/components/empty-state.tsx`

**Files to modify:**
- `src/app/dashboard/page.tsx`

*[Full task details for Phase 3 omitted for brevity—follows same format as 1.1, with step-by-step code for each component]*

#### Task 3.1 through 3.9 (similar granular format)

---

### Phase 4: Repositories Page

**Files to create/modify:**
- `src/app/dashboard/repositories/page.tsx`

#### Task 4.1 through 4.3 (similar format)

---

### Phase 5: Drafts Pages

**Files to create/modify:**
- `src/app/dashboard/drafts/page.tsx`
- `src/app/dashboard/drafts/[id]/page.tsx` (if exists)

#### Task 5.1 through 5.5 (similar format)

---

### Phase 6: Project Cards Page

**Files to create/modify:**
- `src/app/dashboard/project-cards/page.tsx`

#### Task 6.1 through 6.3 (similar format)

---

### Phase 7: Settings Page

**Files to create/modify:**
- `src/app/dashboard/settings/page.tsx`

#### Task 7.1 through 7.2 (similar format)

---

### Phase 8: Audit Page

**Files to create/modify:**
- `src/app/dashboard/audit/page.tsx`

#### Task 8.1 through 8.2 (similar format)

---

### Phase 9: Final QA & Polish

#### Task 9.1: Responsive & Accessibility Testing

- [ ] **Step 1: Test responsive layout on device sizes**

Run manual browser tests:
- Desktop (1920px): All components visible, sidebar persistent, grid 3-column
- Tablet (768px): Grid 2-column, sidebar drawer
- Mobile (375px): Grid 1-column, sidebar drawer

Expected: No layout shift, text readable, spacing proportional

- [ ] **Step 2: Test prefers-reduced-motion**

In browser DevTools: DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion: reduce

Expected: All animations instant, no transitions, transitions-none applied

- [ ] **Step 3: Run typecheck**

Run: `cd apps/web && pnpm typecheck`
Expected: No errors

- [ ] **Step 4: Run linter**

Run: `cd apps/web && pnpm lint`
Expected: No errors (fix or suppress if needed)

- [ ] **Step 5: Run build**

Run: `cd apps/web && pnpm build`
Expected: Build succeeds, no SSR errors

- [ ] **Step 6: Test all routes**

Manual browser test:
- /dashboard → Renders bento dashboard
- /dashboard/repositories → Renders repo cards
- /dashboard/drafts → Renders draft queue
- /dashboard/project-cards → Renders project card assistant
- /dashboard/settings → Renders settings cards (no "coming soon")
- /dashboard/audit → Renders audit terminal (no empty card)

Expected: All routes load, no console errors, no 404s

- [ ] **Step 7: Verify Signal Orbit fallback**

Disable JavaScript in browser DevTools → Settings → disable JS

Reload /dashboard

Expected: SignalOrbitFallback SVG/CSS animation visible (no blank area)

- [ ] **Step 8: Verify no "coming soon" placeholders**

Manual check all pages

Expected: Settings, Audit, Project Cards fully populated with real card components

- [ ] **Step 9: Verify Lucide icons only**

Search codebase for emoji usage:

Run: `grep -r "😀\|🎯\|📊\|⚙️" apps/web/src/app/dashboard`
Expected: No emoji matches (only Lucide icons)

- [ ] **Step 10: Verify Pixelify Sans only on badges**

Search codebase:

Run: `grep -r "status-badge\|PixelStatusBadge" apps/web/src --include="*.tsx" --include="*.ts"`

Cross-check: Font only applied to `<span class="status-badge">` or `<PixelStatusBadge />`

Expected: No Pixelify Sans on body text, forms, buttons, navigation

- [ ] **Step 11: Verify JetBrains Mono only on audit/evidence**

Check audit page and draft evidence panel

Expected: Terminal-style logs and code blocks use monospace font; body text uses Plus Jakarta Sans

- [ ] **Step 12: Final commit**

```bash
cd apps/web
git add .
git commit -m "chore: final QA and polish - dashboard redesign complete

- Verified responsive layout (desktop, tablet, mobile)
- Tested prefers-reduced-motion support
- Passed typecheck, lint, and build
- All 6 dashboard routes functional
- Signal Orbit fallback working
- No 'coming soon' placeholders
- Lucide icons only (no emoji)
- Correct typography application (Space Grotesk, Plus Jakarta Sans, JetBrains Mono, Pixelify Sans badges)

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Implementation Checklist

- [ ] Phase 1: Shared Dashboard Shell (Sidebar + Topbar)
- [ ] Phase 2: Design Tokens & Typography
- [ ] Phase 3: Dashboard Page (Bento command center)
- [ ] Phase 4: Repositories Page
- [ ] Phase 5: Drafts Pages
- [ ] Phase 6: Project Cards Page
- [ ] Phase 7: Settings Page
- [ ] Phase 8: Audit Page
- [ ] Phase 9: Final QA & Polish

## Success Criteria

- ✅ `/dashboard` looks like premium command center (not empty hero)
- ✅ Settings and Audit no longer have "coming soon" placeholders
- ✅ Sidebar and topbar feel intentional and production-ready
- ✅ 21st.dev-inspired cards/components integrated cleanly
- ✅ All existing user flows still work
- ✅ All routes work without errors
- ✅ UI responsive (desktop, tablet, mobile)
- ✅ typecheck/lint/build pass
- ✅ No backend/API behavior changed unnecessarily
- ✅ All code pushed to GitHub repo

---

**Next Step:** Dispatch subagent for Phase 1 (Shared Dashboard Shell) using subagent-driven-development
