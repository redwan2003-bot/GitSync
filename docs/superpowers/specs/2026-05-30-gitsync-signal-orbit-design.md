# Signal Orbit Redesign Specification - GitSync

This document outlines the visual identity, routing structures, and component architecture for the premium redesign of the GitSync platform under the theme **"Signal Orbit"**.

---

## 1. Vision & Aesthetics

GitSync is a futuristic space cockpit for developers where repository signals and activities flow seamlessly into high-value LinkedIn updates. The platform uses a high-performance dark premium aesthetic with active glowing indicators, subtle grid patterns, and technical typography. 

---

## 2. Typography & Design Tokens

Theme tokens are implemented in `apps/web/src/app/globals.css` using the TailwindCSS v4 `@theme` directive, utilizing Next.js Font loaders:

### Color Palette
- **Background (`--bg`):** `#0E1116` (Deep technical void)
- **Surface (`--surface`):** `#151A21` (Cockpit control panel)
- **Surface Soft (`--surface-soft`):** `#1E242D` (Workspace card surface)
- **Border (`--border`):** `#2A323D` (Subtle UI framing)
- **Text (`--text`):** `#F5F7FA` (Primary technical readout)
- **Muted (`--muted`):** `#A7B0BE` (Secondary telemetry data)
- **LinkedIn Blue (`--linkedin`):** `#0A66C2` (Used only for official LinkedIn actions)
- **Signal Green (`--signal`):** `#32D583` (Successful connection/ready/watched)
- **Commit Amber (`--commit`):** `#F5B544` (Needs review/waiting actions)
- **Cyan (`--cyan`):** `#37D5FF` (AI processing & active network beams)
- **Danger Red (`--danger`):** `#F97066` (Connection errors / disabled states)

### Font System
- **Headings (`Space Grotesk`):** Premium, slightly wide geometry. Used for page titles, card headers, and stats indicators.
- **Body & UI (`Plus Jakarta Sans`):** Clean, standard sans-serif font optimized for readability in editors, tables, forms, and general UI.
- **Evidence & Log Console (`JetBrains Mono`):** Clean, readable monospaced font. Used for code, evidence mappings, metadata, timestamps, and terminal traces.
- **Telemetry Labels (`Pixelify Sans`):** Pixel-font restricted strictly to signal badges (e.g., `"SIGNAL ACTIVE"`, `"SYNCING"`, `"READY"`, `"OFFLINE"`), tiny orbit scene tags, and terminal system status signals. It is **never** used for reading blocks, forms, editor texts, preview content, or primary controls.

---

## 3. Route & Page Architectures

The app uses distinct Next.js pages with standard routing to support deep linking, loading boundaries, and auth state retention.

### Dashboard Shared Layout Shell
Every page under `/dashboard/*` shares a standard master dashboard shell:
- **Left Sidebar Navigation:**
  - Standard product branding with active cyan telemetry icon (`Zap`).
  - Route options utilizing lucide-react icons only (no emojis):
    - `Telemetry Cockpit` (`/dashboard`)
    - `Repositories` (`/dashboard/repositories`)
    - `Drafts Queue` (`/dashboard/drafts`)
    - `Project Cards` (`/dashboard/project-cards`)
    - `Integrations & Settings` (`/dashboard/settings`)
    - `Audit Log` (`/dashboard/audit`)
  - Bottom indicator showing live system health (Database, GitHub, and LinkedIn connected badges).
- **Persistent Header:**
  - Interactive page title in `font-heading`.
  - Profile dropdown (`UserMenu`) displaying logged-in credentials.

---

## 4. Premium Components & Features

### A. SignalOrbitScene (Dashboard Only)
- Renders an interactive 3D Canvas dynamically loaded (`ssr: false`) to avoid server-side build conflicts.
- Visualizes GitHub repositories orbiting the central workspace, emitting active signal rings (cyan curves) toward a mockup LinkedIn card.
- **WebGL Fallback:** In cases of WebGL issues, `prefers-reduced-motion` settings, or loading states, the system displays a vector CSS/SVG Orbital Grid with smooth glowing keyframe animations. It uses a fixed aspect-ratio container (`aspect-[21/9]` or `h-[300px]`) to completely prevent layout shifting.

### B. Pipeline Status Tracker
- Interactive horizontal trace flow mapping live state:
  `REPOSITORY DETECTED` ➔ `ACTIVITY LOGGED` ➔ `AI DRAFT CREATED` ➔ `LINKEDIN PUBLISHED`.

### C. Telemetry Statistics (Metrics Panel)
- Displays 4 key statistics in monospaced readability:
  1. **Active Repositories** (Count of active connected repos)
  2. **Drafts Queue** (Pending review content)
  3. **Published Posts** (Successfully shared via LinkedIn)
  4. **Active Event Streams** (Count of webhook signals processed)

### D. Project-Card Builder Assistant
- Clean LinkedIn-inspired (non-pixel-perfect copy) template displaying titles, descriptions, tools used, and links.
- Copy buttons with interactive telemetry response alerts (`"COPIED!"` in Pixelify badge).

### E. EvidenceFlowPanel (Draft Editor Sidebar)
- Monospaced panel containing precise JSON webhooks and commits related to the draft.
- Animated dynamic indicator lines visually pointing out what commit triggered specific paragraphs.

---

## 5. Verification & Testing Constraints

- Verify using `pnpm lint`, `pnpm typecheck`, and production builds.
- Include CSS-only reduced-motion fallbacks for all key components.
- Retain all database relations and API contracts.
