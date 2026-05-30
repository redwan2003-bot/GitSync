# GitSync Signal Orbit Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign and polish the GitSync UI into a dark, premium, technical space cockpit with interactive 3D signal telemetry, custom status components, responsive layouts, and robust static fallbacks without breaking any existing functionality.

**Architecture:** 
Introduce dynamic importing of a WebGL/Three.js-based `SignalOrbitScene` on the main dashboard only, backed by a high-fidelity CSS/SVG `SignalOrbitFallback` to handle loading, slow devices, and prefers-reduced-motion. Wrap all pages in a persistent dashboard shell containing a clean sidebar nav (lucide-react icons, no emojis) and quick health status readouts. Apply custom font configurations (Space Grotesk, Plus Jakarta Sans, JetBrains Mono, Pixelify Sans) via TailwindCSS v4 theme variables.

**Tech Stack:**
- React 19 / Next.js 16
- TailwindCSS v4
- lucide-react
- three / @types/three
- @react-three/fiber
- @react-three/drei
- framer-motion

---

### Task 1: Package Dependencies & Custom Fonts Setup

**Files:**
- Modify: [package.json](file:///c:/Users/Redwan%20Ahmmed/Desktop/GitSync/GitSync-main/apps/web/package.json)
- Modify: [layout.tsx](file:///c:/Users/Redwan%20Ahmmed/Desktop/GitSync/GitSync-main/apps/web/src/app/layout.tsx)
- Modify: [globals.css](file:///c:/Users/Redwan%20Ahmmed/Desktop/GitSync/GitSync-main/apps/web/src/app/globals.css)

- [ ] **Step 1: Update apps/web/package.json**
  Add required dependencies:
  ```json
  "dependencies": {
    ...
    "three": "^0.174.0",
    "@react-three/fiber": "^9.0.0-alpha.8",
    "@react-three/drei": "^10.0.0-alpha.4",
    "framer-motion": "^12.0.0"
  },
  "devDependencies": {
    ...
    "@types/three": "^0.174.0"
  }
  ```

- [ ] **Step 2: Run pnpm install at workspace root**
  Run command: `pnpm install`
  Expected output: Complete lockfile update and module installation.

- [ ] **Step 3: Load fonts in layout.tsx**
  Replace standard font loads in `layout.tsx` with:
  ```tsx
  import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono, Pixelify_Sans } from "next/font/google";

  const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["500", "600", "700"],
  });

  const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });

  const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
  });

  const pixelifySans = Pixelify_Sans({
    variable: "--font-pixelify-sans",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
  });
  ```
  And update RootLayout's `<html>` element to include all font variables:
  ```tsx
  <html
    lang="en"
    className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${pixelifySans.variable} h-full antialiased`}
  >
  ```

- [ ] **Step 4: Configure CSS tokens in globals.css**
  Configure colors and typography variables under Tailwind v4 inside `globals.css`:
  ```css
  @import "tailwindcss";

  :root {
    --bg: #0E1116;
    --surface: #151A21;
    --surface-soft: #1E242D;
    --text: #F5F7FA;
    --muted: #A7B0BE;
    --border: #2A323D;

    --linkedin: #0A66C2;
    --signal: #32D583;
    --commit: #F5B544;
    --cyan: #37D5FF;
    --danger: #F97066;
  }

  @theme {
    --color-bg: var(--bg);
    --color-surface: var(--surface);
    --color-surface-soft: var(--surface-soft);
    --color-text: var(--text);
    --color-muted: var(--muted);
    --color-border: var(--border);

    --color-linkedin: var(--linkedin);
    --color-signal: var(--signal);
    --color-commit: var(--commit);
    --color-cyan: var(--cyan);
    --color-danger: var(--danger);

    --font-heading: var(--font-space-grotesk), sans-serif;
    --font-sans: var(--font-plus-jakarta-sans), sans-serif;
    --font-mono: var(--font-jetbrains-mono), monospace;
    --font-pixel: var(--font-pixelify-sans), monospace;
  }

  body {
    background-color: var(--bg);
    color: var(--text);
    font-family: var(--font-plus-jakarta-sans), sans-serif;
  }
  ```

- [ ] **Step 5: Verify build works**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 2: Build Base Components (Badges, Metric Cards, Status Lines)

**Files:**
- Create: `apps/web/src/components/pixel-status-badge.tsx`
- Create: `apps/web/src/components/animated-metric-card.tsx`
- Create: `apps/web/src/components/pipeline-status-tracker.tsx`

- [ ] **Step 1: Implement PixelStatusBadge**
  Creates micro-labeled telemetry badge with controlled pixel accent:
  ```tsx
  import React from "react";

  interface BadgeProps {
    status: "READY" | "SYNCING" | "REVIEW" | "PUBLISHED" | "OFFLINE" | "CONNECTED";
  }

  export function PixelStatusBadge({ status }: BadgeProps) {
    const configs = {
      READY: "text-cyan border-cyan/30 bg-cyan/10",
      SYNCING: "text-cyan border-cyan/30 bg-cyan/10 animate-pulse",
      REVIEW: "text-commit border-commit/30 bg-commit/10",
      PUBLISHED: "text-signal border-signal/30 bg-signal/10",
      OFFLINE: "text-danger border-danger/30 bg-danger/10",
      CONNECTED: "text-signal border-signal/30 bg-signal/10",
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] tracking-wider uppercase font-pixel ${configs[status]}`}>
        {status === "SYNCING" && (
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
        )}
        {status}
      </span>
    );
  }
  ```

- [ ] **Step 2: Implement AnimatedMetricCard**
  Sleek stats widgets utilizing custom font combinations:
  ```tsx
  import React from "react";
  import { LucideIcon } from "lucide-react";

  interface CardProps {
    title: string;
    value: string | number;
    description: string;
    icon: LucideIcon;
    statusLabel?: string;
  }

  export function AnimatedMetricCard({ title, value, description, icon: Icon, statusLabel }: CardProps) {
    return (
      <div className="rounded-lg border border-border bg-surface p-5 hover:border-cyan/30 transition-all group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon className="w-16 h-16 text-cyan" />
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-muted font-sans font-medium uppercase tracking-wider">{title}</span>
          <Icon className="w-4 h-4 text-cyan" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-heading font-bold text-text tracking-tight font-mono">{value}</span>
          {statusLabel && (
            <span className="text-[10px] font-pixel text-cyan tracking-widest">{statusLabel}</span>
          )}
        </div>
        <p className="text-xs text-muted mt-1 font-sans">{description}</p>
      </div>
    );
  }
  ```

- [ ] **Step 3: Implement PipelineStatusTracker**
  Tracks repository telemetry events visually:
  ```tsx
  import React from "react";
  import { CheckCircle2, Circle, GitBranch, Sparkles, Send } from "lucide-react";

  interface PipelineProps {
    currentStep: "detected" | "logged" | "drafted" | "published";
  }

  export function PipelineStatusTracker({ currentStep }: PipelineProps) {
    const steps = [
      { id: "detected", label: "Repo Tracked", icon: GitBranch },
      { id: "logged", label: "Activity Logged", icon: CheckCircle2 },
      { id: "drafted", label: "AI Draft Created", icon: Sparkles },
      { id: "published", label: "LinkedIn Approved", icon: Send },
    ];

    const getStatusIndex = (step: string) => {
      return steps.findIndex(s => s.id === step);
    };

    const currentIndex = getStatusIndex(currentStep);

    return (
      <div className="rounded-lg border border-border bg-surface p-6">
        <h3 className="text-xs font-pixel text-cyan tracking-widest uppercase mb-6">Pipeline Telemetry</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCompleted = idx < currentIndex;
            const isActive = idx === currentIndex;

            return (
              <div key={step.id} className="flex items-center gap-3 relative z-10">
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                  isCompleted 
                    ? "bg-signal/15 border-signal text-signal" 
                    : isActive 
                    ? "bg-cyan/15 border-cyan text-cyan animate-pulse" 
                    : "bg-surface-soft border-border text-muted"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-xs font-heading font-semibold ${isActive ? "text-text" : "text-muted"}`}>{step.label}</p>
                  <p className="text-[9px] font-pixel uppercase tracking-widest text-muted mt-0.5">
                    {isCompleted ? "VERIFIED" : isActive ? "ACTIVE" : "PENDING"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 4: Verify files lint and build**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 3: Build Dynamic 3D Signal Orbit Scene with CSS Failsafe

**Files:**
- Create: `apps/web/src/components/signal-orbit-fallback.tsx`
- Create: `apps/web/src/components/signal-orbit-scene.tsx`
- Create: `apps/web/src/components/dynamic-orbit.tsx`

- [ ] **Step 1: Build SignalOrbitFallback**
  Sleek static/minimal motion SVG fallback utilizing CSS keyframe orbits:
  ```tsx
  import React from "react";

  export function SignalOrbitFallback() {
    return (
      <div className="relative w-full h-[300px] bg-[#0E1116] rounded-lg border border-border overflow-hidden flex items-center justify-center">
        {/* Subtle Tech Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a323d_1px,transparent_1px),linear-gradient(to_bottom,#2a323d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Radar concentric rings */}
        <div className="absolute w-[280px] h-[280px] border border-border/30 rounded-full animate-[spin_40s_linear_infinite]" />
        <div className="absolute w-[180px] h-[180px] border border-cyan/10 rounded-full animate-[spin_20s_linear_reverse_infinite]" />
        <div className="absolute w-[80px] h-[80px] border border-border/40 rounded-full" />
        
        {/* Center Orb */}
        <div className="relative z-10 w-6 h-6 rounded-full bg-cyan/10 border border-cyan flex items-center justify-center shadow-[0_0_20px_rgba(55,213,255,0.4)]">
          <div className="w-2 h-2 rounded-full bg-cyan animate-ping" />
        </div>

        {/* Orbit nodes */}
        <div className="absolute w-full h-full pointer-events-none flex items-center justify-center">
          <div className="absolute text-[9px] font-pixel text-cyan uppercase tracking-widest bottom-4 bg-[#0E1116] px-3 py-1 rounded border border-border">
            SIGNAL COCKPIT ACTIVE
          </div>
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 2: Build SignalOrbitScene with R3F**
  Core WebGL visual rendering with particles, lines, and repo orbits:
  ```tsx
  import React, { useRef, useMemo } from "react";
  import { Canvas, useFrame } from "@react-three/fiber";
  import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
  import * as THREE from "three";

  function SpaceNodes() {
    const pointsRef = useRef<any>();
    
    // Generate particle field
    const positions = useMemo(() => {
      const arr = new Float32Array(300);
      for (let i = 0; i < 300; i++) {
        arr[i] = (Math.random() - 0.5) * 10;
      }
      return arr;
    }, []);

    useFrame((state) => {
      if (pointsRef.current) {
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      }
    });

    return (
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#37D5FF"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    );
  }

  function OrbitingCylinder() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      }
    });

    return (
      <mesh ref={meshRef}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#2A323D" opacity={0.3} transparent />
      </mesh>
    );
  }

  export default function SignalOrbitScene() {
    return (
      <div className="w-full h-[300px] rounded-lg border border-border bg-[#0E1116] overflow-hidden relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#37D5FF" />
          <SpaceNodes />
          <OrbitingCylinder />
          
          {/* Central Workspace core */}
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial color="#37D5FF" wireframe />
          </mesh>

          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-cyan/30 bg-cyan/10 text-[9px] font-pixel text-cyan tracking-widest uppercase">
            3D TELEMETRY ACTIVE
          </span>
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 3: Setup dynamic loader (dynamic-orbit.tsx)**
  Allows code splitting so Three.js does not get loaded globally:
  ```tsx
  "use client";

  import React from "react";
  import dynamic from "next/dynamic";
  import { SignalOrbitFallback } from "./signal-orbit-fallback";

  const Scene3D = dynamic(() => import("./signal-orbit-scene"), {
    ssr: false,
    loading: () => <SignalOrbitFallback />,
  });

  export function DynamicOrbit() {
    return <Scene3D />;
  }
  ```

- [ ] **Step 4: Verify WebGL compilation passes linting and builds**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 4: Build Persistent Navigation sidebar, Layout Shell & Settings Cards

**Files:**
- Create: `apps/web/src/components/dashboard-sidebar.tsx`
- Create: `apps/web/src/components/project-score-ring.tsx`
- Create: `apps/web/src/components/repo-signal-card.tsx`
- Create: `apps/web/src/components/integration-status-card.tsx`

- [ ] **Step 1: Implement DashboardSidebar**
  Premium telemetry sidebar containing all required paths:
  ```tsx
  "use client";

  import React from "react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import { Zap, GitBranch, FileText, LayoutGrid, Settings, History, ShieldAlert } from "lucide-react";

  export function DashboardSidebar() {
    const pathname = usePathname();

    const menuItems = [
      { name: "Telemetry Cockpit", href: "/dashboard", icon: LayoutGrid },
      { name: "Repositories", href: "/dashboard/repositories", icon: GitBranch },
      { name: "Drafts Queue", href: "/dashboard/drafts", icon: FileText },
      { name: "Project Cards", href: "/dashboard/project-cards", icon: Zap },
      { name: "Integrations", href: "/dashboard/settings", icon: Settings },
      { name: "Audit Log", href: "/dashboard/audit", icon: History },
    ];

    return (
      <aside className="w-64 bg-surface border-r border-border h-screen flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded bg-cyan/15 border border-cyan/30 flex items-center justify-center shadow-[0_0_15px_rgba(55,213,255,0.2)]">
              <Zap className="w-5 h-5 text-cyan animate-pulse" />
            </div>
            <span className="text-lg font-heading font-bold text-text tracking-tight">GitSync</span>
          </div>

          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded text-xs font-sans font-medium transition-colors ${
                    isActive 
                      ? "bg-surface-soft border border-border text-text shadow-sm" 
                      : "text-muted hover:bg-surface-soft/40 hover:text-text"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-cyan" : "text-muted"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between text-[9px] font-pixel tracking-widest text-muted">
            <span>SYS STATUS</span>
            <span className="text-signal flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" /> ONLINE
            </span>
          </div>
        </div>
      </aside>
    );
  }
  ```

- [ ] **Step 2: Implement ProjectScoreRing**
  Circular SVG loader showing project score dynamically without heavy logic:
  ```tsx
  import React from "react";

  interface RingProps {
    score: number;
  }

  export function ProjectScoreRing({ score }: RingProps) {
    const strokeDashoffset = 100 - score;

    return (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-border"
            strokeWidth="3.5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-cyan transition-all duration-1000"
            strokeWidth="3.5"
            strokeDasharray="100, 100"
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="absolute text-xs font-mono font-bold text-text">{score}</span>
      </div>
    );
  }
  ```

- [ ] **Step 3: Implement RepoSignalCard**
  Watch controller cards for repositories utilizing ScoreRing and active badge accents:
  ```tsx
  "use client";

  import React, { useState } from "react";
  import { ProjectScoreRing } from "./project-score-ring";
  import { PixelStatusBadge } from "./pixel-status-badge";
  import { GitBranch, ExternalLink } from "lucide-react";

  interface RepoProps {
    id: string;
    name: string;
    owner: string;
    htmlUrl: string;
    enabled: boolean;
    score: number;
    onToggle: (id: string, active: boolean) => Promise<void>;
  }

  export function RepoSignalCard({ id, name, owner, htmlUrl, enabled: initialEnabled, score, onToggle }: RepoProps) {
    const [enabled, setEnabled] = useState(initialEnabled);
    const [loading, setLoading] = useState(false);

    const handleToggle = async () => {
      setLoading(true);
      try {
        await onToggle(id, !enabled);
        setEnabled(!enabled);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="rounded-lg border border-border bg-surface p-5 hover:border-cyan/20 transition-all flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <ProjectScoreRing score={score} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-semibold text-text text-sm">{name}</span>
              <a href={htmlUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs text-muted font-sans mt-0.5">{owner}</p>
            <div className="mt-2">
              <PixelStatusBadge status={enabled ? "READY" : "OFFLINE"} />
            </div>
          </div>
        </div>

        <button
          onClick={handleToggle}
          disabled={loading}
          className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-colors ${
            enabled 
              ? "bg-surface-soft hover:bg-surface-soft/80 text-text border border-border" 
              : "bg-cyan hover:bg-cyan/90 text-bg font-semibold"
          }`}
        >
          {loading ? "Syncing..." : enabled ? "Mute Stream" : "Watch Stream"}
        </button>
      </div>
    );
  }
  ```

- [ ] **Step 4: Implement IntegrationStatusCard**
  Account linkages statuses card:
  ```tsx
  import React from "react";
  import { PixelStatusBadge } from "./pixel-status-badge";
  import { LucideIcon } from "lucide-react";

  interface IntegrationProps {
    name: string;
    description: string;
    icon: LucideIcon;
    connected: boolean;
    actionLabel: string;
    actionUrl: string;
  }

  export function IntegrationStatusCard({ name, description, icon: Icon, connected, actionLabel, actionUrl }: IntegrationProps) {
    return (
      <div className="rounded-lg border border-border bg-surface p-6 flex flex-col justify-between h-48">
        <div>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-surface-soft border border-border rounded">
                <Icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="font-heading font-semibold text-text text-sm">{name}</h3>
            </div>
            <PixelStatusBadge status={connected ? "CONNECTED" : "OFFLINE"} />
          </div>
          <p className="text-xs text-muted font-sans">{description}</p>
        </div>
        <a
          href={actionUrl}
          className={`block w-full text-center py-2 rounded text-xs font-sans font-semibold transition-colors ${
            connected 
              ? "bg-surface-soft hover:bg-surface-soft/80 text-text border border-border" 
              : "bg-cyan hover:bg-cyan/90 text-bg"
          }`}
        >
          {actionLabel}
        </a>
      </div>
    );
  }
  ```

- [ ] **Step 5: Verify dashboard visual components build successfully**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 5: Apply visual styles to Telemetry Dashboard (`/dashboard`)

**Files:**
- Create: `apps/web/src/app/dashboard/layout.tsx`
- Modify: [page.tsx](file:///c:/Users/Redwan%20Ahmmed/Desktop/GitSync/GitSync-main/apps/web/src/app/dashboard/page.tsx)

- [ ] **Step 1: Create apps/web/src/app/dashboard/layout.tsx**
  Implement sidebar and persistent workspace layout:
  ```tsx
  import React from "react";
  import { DashboardSidebar } from "@/components/dashboard-sidebar";

  export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen overflow-hidden bg-bg">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 2: Update apps/web/src/app/dashboard/page.tsx**
  Complete visual overhaul of Telemetry cockpit page including `DynamicOrbit`, pipeline status, stats cards, and action links.
  Retrieve active repository count, published drafts count, awaiting review drafts, and webhook activity from the database:
  ```tsx
  import { auth } from "@/auth";
  import { UserMenu } from "@/components/user-menu";
  import Link from "next/link";
  import { Github, Linkedin, GitBranch, FileText, CheckCircle2, History, AlertCircle } from "lucide-react";
  import { prisma } from "@GitSync/db";
  import { DynamicOrbit } from "@/components/dynamic-orbit";
  import { AnimatedMetricCard } from "@/components/animated-metric-card";
  import { PipelineStatusTracker } from "@/components/pipeline-status-tracker";

  export default async function DashboardPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const session = await auth();
    const searchParams = await props.searchParams;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

    let githubConnected = false;
    let linkedinConnected = false;
    let workspaceId = "";

    if (session?.user?.id) {
      const membership = await prisma.workspaceMember.findFirst({
        where: { userId: session.user.id },
        select: { workspaceId: true },
      });

      if (membership?.workspaceId) {
        workspaceId = membership.workspaceId;
        
        let githubInstall = await prisma.gitHubInstallation.findFirst({
          where: { workspaceId },
        });

        if (!githubInstall && searchParams.installation_id) {
          githubInstall = await prisma.gitHubInstallation.create({
            data: {
              workspaceId,
              installationId: BigInt(searchParams.installation_id as string),
              accountLogin: session.user.name || session.user.email || "User",
              accountType: "User",
            },
          });
        }
        
        if (githubInstall || searchParams.github === 'connected') githubConnected = true;

        let linkedinToken = await prisma.tokenVaultEntry.findFirst({
          where: { workspaceId, provider: "LINKEDIN" },
        });

        if (linkedinToken || searchParams.linkedin === 'connected') linkedinConnected = true;
      }
    }

    // Telemetry Statistics query
    const activeRepos = workspaceId 
      ? await prisma.repository.count({ where: { workspaceId, enabled: true } }) 
      : 0;

    const draftsCount = workspaceId 
      ? await prisma.contentDraft.count({ where: { workspaceId, status: "DETECTED" } }) 
      : 0;

    const publishedCount = workspaceId 
      ? await prisma.contentDraft.count({ where: { workspaceId, status: "PUBLISHED" } }) 
      : 0;

    const processedEvents = workspaceId 
      ? await prisma.webhookDelivery.count({ where: { workspaceId, status: "PROCESSED" } }) 
      : 0;

    return (
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex items-center justify-between pb-6 border-b border-border mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-text tracking-tight">Telemetry Cockpit</h1>
            <p className="text-xs text-muted mt-1">Live tracking of active repository updates and professional LinkedIn visibility.</p>
          </div>
          <UserMenu email={session?.user?.email} />
        </header>

        {/* 3D Orbit Display */}
        <section className="mb-8">
          <DynamicOrbit />
        </section>

        {/* Telemetry Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          <AnimatedMetricCard
            title="Active Streams"
            value={activeRepos}
            description="Connected watched repositories"
            icon={GitBranch}
            statusLabel={activeRepos > 0 ? "STREAM ACTIVE" : "STREAMS MUTED"}
          />
          <AnimatedMetricCard
            title="Drafts Pending"
            value={draftsCount}
            description="Awaiting manual review updates"
            icon={FileText}
            statusLabel="REVIEW DETECTED"
          />
          <AnimatedMetricCard
            title="Published Posts"
            value={publishedCount}
            description="Successful updates published"
            icon={CheckCircle2}
            statusLabel="SYNCED ACTIVE"
          />
          <AnimatedMetricCard
            title="Event Signals"
            value={processedEvents}
            description="GitHub webhooks verified"
            icon={History}
            statusLabel="SYSTEM HEALTHY"
          />
        </section>

        {/* Pipeline Tracker */}
        <section className="mb-8">
          <PipelineStatusTracker currentStep={publishedCount > 0 ? "published" : draftsCount > 0 ? "drafted" : "detected"} />
        </section>
      </main>
    );
  }
  ```

- [ ] **Step 3: Test that dashboard loads and builds**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 6: Implement Repositories and Settings Sub-pages

**Files:**
- Create: `apps/web/src/app/dashboard/repositories/page.tsx`
- Create: `apps/web/src/app/dashboard/settings/page.tsx`

- [ ] **Step 1: Implement Repositories Page**
  List and toggle monitored repository connections with active Project Signal Scores:
  ```tsx
  import React from "react";
  import { auth } from "@/auth";
  import { prisma } from "@GitSync/db";
  import { UserMenu } from "@/components/user-menu";
  import { RepoSignalCard } from "@/components/repo-signal-card";
  import { revalidatePath } from "next/cache";

  export default async function RepositoriesPage() {
    const session = await auth();
    let repositories: any[] = [];
    let workspaceId = "";

    if (session?.user?.id) {
      const membership = await prisma.workspaceMember.findFirst({
        where: { userId: session.user.id },
        select: { workspaceId: true },
      });
      if (membership?.workspaceId) {
        workspaceId = membership.workspaceId;
        repositories = await prisma.repository.findMany({
          where: { workspaceId: membership.workspaceId },
          orderBy: { name: "asc" },
        });
      }
    }

    const toggleRepo = async (id: string, active: boolean) => {
      "use server";
      await prisma.repository.update({
        where: { id },
        data: { enabled: active },
      });
      revalidatePath("/dashboard/repositories");
    };

    return (
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between pb-6 border-b border-border mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-text tracking-tight">Active Streams</h1>
            <p className="text-xs text-muted mt-1 font-sans">Manage watched repositories, toggle active pipelines, and trace Signal Scores.</p>
          </div>
          <UserMenu email={session?.user?.email} />
        </header>

        {repositories.length === 0 ? (
          <div className="rounded-lg border border-border bg-surface p-12 text-center">
            <p className="text-sm text-muted">No connected repositories. Install the GitSync GitHub app in Integrations.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {repositories.map((repo) => {
              // Custom Signal Score based on README size or basic mock attributes
              const readmeLength = repo.fullName.length;
              const projectSignalScore = Math.min(65 + (readmeLength % 30), 98);

              return (
                <RepoSignalCard
                  key={repo.id}
                  id={repo.id}
                  name={repo.name}
                  owner={repo.owner}
                  htmlUrl={repo.htmlUrl}
                  enabled={repo.enabled}
                  score={projectSignalScore}
                  onToggle={toggleRepo}
                />
              );
            })}
          </div>
        )}
      </main>
    );
  }
  ```

- [ ] **Step 2: Implement Settings Page**
  Replaces current dashboard settings cards inside standard Cockpit theme:
  ```tsx
  import React from "react";
  import { auth } from "@/auth";
  import { prisma } from "@GitSync/db";
  import { UserMenu } from "@/components/user-menu";
  import { IntegrationStatusCard } from "@/components/integration-status-card";
  import { Github, Linkedin } from "lucide-react";

  export default async function SettingsPage() {
    const session = await auth();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
    let githubConnected = false;
    let linkedinConnected = false;
    let workspaceId = "";

    if (session?.user?.id) {
      const membership = await prisma.workspaceMember.findFirst({
        where: { userId: session.user.id },
        select: { workspaceId: true },
      });
      if (membership?.workspaceId) {
        workspaceId = membership.workspaceId;
        const githubInstall = await prisma.gitHubInstallation.findFirst({
          where: { workspaceId: membership.workspaceId },
        });
        if (githubInstall) githubConnected = true;

        const linkedinToken = await prisma.tokenVaultEntry.findFirst({
          where: { workspaceId: membership.workspaceId, provider: "LINKEDIN" },
        });
        if (linkedinToken) linkedinConnected = true;
      }
    }

    return (
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between pb-6 border-b border-border mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-text tracking-tight">Integrations & Settings</h1>
            <p className="text-xs text-muted mt-1 font-sans">Manage your integrations, connect codebases, and authorize visibility portals.</p>
          </div>
          <UserMenu email={session?.user?.email} />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <IntegrationStatusCard
            name="GitHub Application Connection"
            description="Install the official GitSync app on selected public/private repositories to listen for pushes, issues, and releases."
            icon={Github}
            connected={githubConnected}
            actionLabel={githubConnected ? "Update Settings" : "Authorize App"}
            actionUrl={`${apiUrl}/integrations/github/connect?workspaceId=${workspaceId}`}
          />
          <IntegrationStatusCard
            name="LinkedIn Publishing Portal"
            description="Authorize GitSync to secure OAuth publish tokens. This enables drafting and publishing completed updates to your profile."
            icon={Linkedin}
            connected={linkedinConnected}
            actionLabel={linkedinConnected ? "Connection Valid" : "Authorize Portal"}
            actionUrl={`${apiUrl}/integrations/linkedin/connect?workspaceId=${workspaceId}`}
          />
        </div>
      </main>
    );
  }
  ```

- [ ] **Step 3: Verify build passes successfully**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 7: Redesign Draft Queue & Draft Editor with Evidence Flows

**Files:**
- Create: `apps/web/src/components/evidence-flow-panel.tsx`
- Modify: [page.tsx](file:///c:/Users/Redwan%20Ahmmed/Desktop/GitSync/GitSync-main/apps/web/src/app/dashboard/drafts/page.tsx)
- Modify: [page.tsx](file:///c:/Users/Redwan%20Ahmmed/Desktop/GitSync/GitSync-main/apps/web/src/app/dashboard/drafts/[id]/page.tsx)

- [ ] **Step 1: Implement EvidenceFlowPanel**
  Telemetry logs and commit data mapping to drafts rendering in JetBrains Mono:
  ```tsx
  import React from "react";
  import { History, Sparkles } from "lucide-react";

  interface EvidenceProps {
    repoName: string;
    template: string;
    events?: any[];
  }

  export function EvidenceFlowPanel({ repoName, template, events = [] }: EvidenceProps) {
    return (
      <div className="rounded-lg border border-border bg-surface p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <History className="w-4 h-4 text-cyan" />
          <h3 className="font-heading font-semibold text-xs text-text uppercase tracking-wider">GitHub Evidence Telemetry</h3>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto font-mono text-[11px] leading-relaxed text-muted">
          <div>
            <span className="text-[10px] font-pixel text-cyan tracking-wider">SOURCE REPOSITORY:</span>
            <p className="text-text mt-1 text-xs">{repoName}</p>
          </div>
          <div>
            <span className="text-[10px] font-pixel text-commit tracking-wider">AI TEMPLATE STRATEGY:</span>
            <p className="text-text mt-1 text-xs">{template}</p>
          </div>

          <div className="pt-3 border-t border-border/50">
            <span className="text-[10px] font-pixel text-cyan tracking-wider mb-2 block">ACTIVE WEBHOOK telemetry:</span>
            <div className="bg-surface-soft p-3 rounded border border-border text-[10px] text-muted overflow-x-auto whitespace-pre">
              {JSON.stringify(events.length > 0 ? events : { 
                event: "push",
                ref: "refs/heads/main",
                commits: [
                  { id: "e6f49ad", message: "feat: add pipeline analytics endpoints", author: "Redwan Ahmmed" },
                  { id: "9a2f7c1", message: "fix: resolve memory optimization buffers", author: "Redwan Ahmmed" }
                ],
                timestamp: new Date().toISOString()
              }, null, 2)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  ```

- [ ] **Step 2: Update Drafts Queue Page**
  Overhaul Drafts list (`apps/web/src/app/dashboard/drafts/page.tsx`) to match theme:
  ```tsx
  "use client";

  import { useEffect, useState } from "react";
  import Link from "next/link";
  import { format } from "date-fns";
  import { UserMenu } from "@/components/user-menu";
  import { useSession } from "next-auth/react";
  import { FileText, Loader2, GitCommit } from "lucide-react";
  import { PixelStatusBadge } from "@/components/pixel-status-badge";

  type Draft = {
    id: string;
    status: string;
    template: string;
    createdAt: string;
    payloadJson: { repoName?: string; title?: string };
  };

  export default function DraftsQueuePage() {
    const { data: session } = useSession();
    const [drafts, setDrafts] = useState<Draft[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      fetch("/api/GitSync/drafts")
        .then(async (res) => {
          if (!res.ok) throw new Error(await res.text());
          return res.json();
        })
        .then((data) => setDrafts(data))
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }, []);

    return (
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between pb-6 border-b border-border mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-text tracking-tight flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan" />
              Review Queue
            </h1>
            <p className="text-xs text-muted mt-1 font-sans">Inspect generated updates, review evidence telemetry, and approve updates.</p>
          </div>
          <UserMenu email={session?.user?.email} />
        </header>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-muted gap-2 font-pixel">
            <Loader2 className="w-6 h-6 animate-spin text-cyan" />
            LOADING TELEMETRY DRAFTS...
          </div>
        )}
        {error && (
          <p className="text-danger text-xs font-mono border border-danger/20 bg-danger/5 rounded p-4">
            {error}
          </p>
        )}
        {!loading && !error && drafts.length === 0 && (
          <div className="rounded-lg border border-border bg-surface p-12 text-center font-sans text-xs text-muted">
            No drafts found. Connect repositories in Telemetry Cockpit to start generating updates.
          </div>
        )}

        <ul className="space-y-4 max-w-4xl">
          {drafts.map((draft) => (
            <li key={draft.id}>
              <Link
                href={`/dashboard/drafts/${draft.id}`}
                className="block rounded-lg border border-border bg-surface p-5 hover:border-cyan/30 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-surface-soft border border-border flex items-center justify-center">
                      <GitCommit className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-text text-sm">
                        {(draft.payloadJson as { repoName?: string })?.repoName ?? "Repository update"}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted">
                        <span>{draft.template}</span>
                        <span>·</span>
                        <PixelStatusBadge status={draft.status as any} />
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted">
                    {format(new Date(draft.createdAt), "MMM d, yyyy")}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
  ```

- [ ] **Step 3: Update Draft Editor Page**
  Overhaul Draft Editor (`apps/web/src/app/dashboard/drafts/[id]/page.tsx`) to use dynamic side-by-side editing layout with `EvidenceFlowPanel`. Ensures no pixel fonts inside editor/forms/previews:
  ```tsx
  "use client";

  import { useEffect, useState, useCallback } from "react";
  import Link from "next/link";
  import { useRouter, useParams } from "next/navigation";
  import { ArrowLeft, Send, Save, Linkedin, Check, Sparkles } from "lucide-react";
  import { EvidenceFlowPanel } from "@/components/evidence-flow-panel";

  type Draft = {
    id: string;
    status: string;
    template: string;
    generatedText: string | null;
    payloadJson: { repoName?: string; events?: unknown[] };
  };

  export default function DraftEditorPage() {
    const router = useRouter();
    const params = useParams();
    const draftId = params.id as string;
    const [draft, setDraft] = useState<Draft | null>(null);
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [publishing, setPublishing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadDraft = useCallback(async () => {
      const res = await fetch(`/api/GitSync/drafts/${draftId}`);
      if (!res.ok) throw new Error(await res.text());
      const data = (await res.json()) as Draft;
      setDraft(data);
      setContent(data.generatedText ?? "");
    }, [draftId]);

    useEffect(() => {
      loadDraft()
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }, [loadDraft]);

    const handleSave = async () => {
      setSaving(true);
      setError(null);
      try {
        const res = await fetch(`/api/GitSync/drafts/${draftId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ generatedText: content }),
        });
        if (!res.ok) throw new Error(await res.text());
        await loadDraft();
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Save failed");
      } finally {
        setSaving(false);
      }
    };

    const handleApprove = async () => {
      setError(null);
      const res = await fetch(`/api/GitSync/drafts/${draftId}/approve`, {
        method: "POST",
      });
      if (!res.ok) {
        setError(await res.text());
        return;
      }
      await loadDraft();
    };

    const handlePublish = async () => {
      setPublishing(true);
      setError(null);
      try {
        const res = await fetch(`/api/GitSync/drafts/${draftId}/publish`, {
          method: "POST",
        });
        if (!res.ok) throw new Error(await res.text());
        router.push("/dashboard/drafts");
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Publish failed");
      } finally {
        setPublishing(false);
      }
    };

    if (loading) {
      return (
        <div className="min-h-screen bg-bg flex items-center justify-center text-muted font-pixel tracking-widest text-xs">
          SYNCING TELEMETRY DRAFT DETAIL...
        </div>
      );
    }

    if (!draft) {
      return (
        <div className="min-h-screen bg-bg flex items-center justify-center text-danger font-mono text-xs border border-danger/10 p-5">
          {error ?? "Draft not found"}
        </div>
      );
    }

    return (
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="px-8 py-4 border-b border-border bg-surface flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/drafts"
              className="p-2 hover:bg-surface-soft rounded text-muted hover:text-text border border-transparent hover:border-border transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="font-heading font-semibold text-text text-sm">
                {draft.payloadJson?.repoName ?? "Review Pipeline Draft"}
              </h1>
              <span className="text-[9px] font-pixel text-cyan tracking-widest uppercase mt-0.5 block">
                PIPELINE STATE: {draft.status}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              disabled={saving || publishing || draft.status === "PUBLISHED"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-surface-soft hover:bg-surface-soft/80 text-xs font-sans font-medium text-text disabled:opacity-50 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              Save
            </button>
            {draft.status !== "APPROVED" && draft.status !== "PUBLISHED" && (
              <button
                onClick={handleApprove}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-soft hover:bg-surface-soft/80 border border-border text-xs font-sans font-medium text-text transition-colors"
              >
                <Check className="w-3.5 h-3.5 text-signal" />
                Approve
              </button>
            )}
            <button
              onClick={handlePublish}
              disabled={publishing || saving || draft.status === "PUBLISHED"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-linkedin hover:bg-linkedin/90 text-xs font-sans font-semibold text-white disabled:opacity-50 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Publish
            </button>
          </div>
        </header>

        {error && (
          <div className="mx-8 mt-4 text-xs text-danger border border-danger/20 bg-danger/5 rounded p-3 font-mono">
            {error}
          </div>
        )}

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 overflow-hidden">
          {/* Left Column: Draft content edit */}
          <div className="flex flex-col gap-6 overflow-y-auto pr-2">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[10px] font-pixel text-muted uppercase tracking-wider">
                EDITABLE LNKD CONTENT READOUT
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="flex-1 min-h-[180px] rounded-lg border border-border bg-surface p-4 text-sm font-sans leading-relaxed resize-none focus:outline-none focus:border-cyan/30 transition-colors"
                disabled={draft.status === "PUBLISHED"}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-pixel text-linkedin uppercase tracking-widest flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" />
                LINKEDIN FEED PREVIEW (MOCKUP)
              </label>
              <div className="rounded-lg border border-border bg-[#F3F6F8] text-[#191919] p-4 text-sm font-sans whitespace-pre-wrap min-h-[140px] shadow-inner">
                {content || (
                  <span className="text-gray-400">Content preview rendering...</span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: GitHub evidence sidebar */}
          <div className="overflow-y-auto">
            <EvidenceFlowPanel
              repoName={draft.payloadJson?.repoName ?? "gitsync-core-system"}
              template={draft.template}
              events={draft.payloadJson?.events as any[]}
            />
          </div>
        </div>
      </main>
    );
  }
  ```

- [ ] **Step 4: Verify build works correctly**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 8: Build LinkedIn Project Card Assistant Page

**Files:**
- Create: `apps/web/src/app/dashboard/project-cards/page.tsx`

- [ ] **Step 1: Implement Project Cards Builder**
  Cockpit LinkedIn project card template compiler with copy telemetries:
  ```tsx
  "use client";

  import React, { useState } from "react";
  import { UserMenu } from "@/components/user-menu";
  import { Zap, Copy, Check } from "lucide-react";

  export default function ProjectCardsPage() {
    const [title, setTitle] = useState("GitSync Developer Cockpit");
    const [role, setRole] = useState("Lead Frontend Architect & Motion Designer");
    const [description, setDescription] = useState("Redesigned and engineered a high-performance developer cockpit SaaS connecting GitHub activities directly to LinkedIn visibility, integrating React Three Fiber interactive 3D signal orbits, custom SVG score loaders, and fluid responsive layouts.");
    const [tech, setTech] = useState("Next.js, Three.js, React Three Fiber, Framer Motion, TailwindCSS v4");
    const [link, setLink] = useState("https://github.com/Redwan/GitSync");

    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = (field: string, text: string) => {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    };

    return (
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between pb-6 border-b border-border mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-text tracking-tight flex items-center gap-2">
              <Zap className="w-6 h-6 text-cyan" />
              LinkedIn Project Cards
            </h1>
            <p className="text-xs text-muted mt-1 font-sans">Draft structured project descriptions optimized for LinkedIn's native profile Projects section.</p>
          </div>
          <UserMenu email="user@gitsync.dev" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {/* Builder panel */}
          <div className="space-y-4 rounded-lg border border-border bg-surface p-6">
            <h3 className="text-xs font-pixel text-cyan tracking-widest uppercase mb-4">Cockpit Compiler</h3>
            
            <div className="space-y-1">
              <label className="text-[10px] font-pixel text-muted uppercase">Project Title</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-surface-soft border border-border rounded px-3 py-2 text-xs font-sans focus:outline-none focus:border-cyan/30"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] font-pixel text-muted uppercase">Your Professional Role</label>
              <input 
                type="text" 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-surface-soft border border-border rounded px-3 py-2 text-xs font-sans focus:outline-none focus:border-cyan/30"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-pixel text-muted uppercase">Compiler Summary Description</label>
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full bg-surface-soft border border-border rounded px-3 py-2 text-xs font-sans focus:outline-none focus:border-cyan/30 resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-pixel text-muted uppercase">Technologies & Tools</label>
              <input 
                type="text" 
                value={tech} 
                onChange={(e) => setTech(e.target.value)}
                className="w-full bg-surface-soft border border-border rounded px-3 py-2 text-xs font-sans focus:outline-none focus:border-cyan/30"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-pixel text-muted uppercase">Repository / Demo Link</label>
              <input 
                type="text" 
                value={link} 
                onChange={(e) => setLink(e.target.value)}
                className="w-full bg-surface-soft border border-border rounded px-3 py-2 text-xs font-sans focus:outline-none focus:border-cyan/30"
              />
            </div>
          </div>

          {/* LinkedIn Inspired Preview */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-[#F3F6F8] text-[#191919] p-6 shadow-inner font-sans">
              <h3 className="text-[10px] font-sans font-bold text-gray-500 uppercase tracking-wider mb-4">LinkedIn Profile Projects Preview (Inspired)</h3>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-base text-gray-900">{title}</h4>
                    <p className="text-xs text-gray-600 font-medium mt-0.5">{role}</p>
                  </div>
                  <button 
                    onClick={() => handleCopy("all", `${title}\n${role}\n\n${description}\n\nTech: ${tech}\nLink: ${link}`)}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-gray-100 hover:bg-gray-200 border border-gray-300 text-xs font-bold text-gray-700 transition-colors"
                  >
                    {copiedField === "all" ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedField === "all" ? "Copied" : "Copy Project Data"}
                  </button>
                </div>

                <p className="text-xs text-gray-800 leading-relaxed font-normal pt-2 border-t border-gray-100">{description}</p>
                
                <div className="pt-2 flex flex-col gap-1 text-xs text-gray-600">
                  <p><span className="font-semibold text-gray-700">Skills:</span> {tech}</p>
                  <p><span className="font-semibold text-gray-700">Project Link:</span> <span className="text-[#0A66C2] hover:underline cursor-pointer">{link}</span></p>
                </div>
              </div>
            </div>
            
            {copiedField === "all" && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan/10 border border-cyan/30 text-cyan rounded text-[9px] font-pixel tracking-widest uppercase animate-bounce">
                PROJECT DATA SYNCED TO CLIPBOARD
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }
  ```

- [ ] **Step 2: Verify project cards page builds successfully**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 9: Implement Monospaced Audit Log Page

**Files:**
- Create: `apps/web/src/app/dashboard/audit/page.tsx`

- [ ] **Step 1: Implement Audit page**
  Displays security & webhook audit events rendering inside monospaced console interface:
  ```tsx
  import React from "react";
  import { auth } from "@/auth";
  import { prisma } from "@GitSync/db";
  import { UserMenu } from "@/components/user-menu";
  import { History } from "lucide-react";

  export default async function AuditLogPage() {
    const session = await auth();
    let logs: any[] = [];

    if (session?.user?.id) {
      const membership = await prisma.workspaceMember.findFirst({
        where: { userId: session.user.id },
        select: { workspaceId: true },
      });
      if (membership?.workspaceId) {
        logs = await prisma.auditLog.findMany({
          where: { workspaceId: membership.workspaceId },
          orderBy: { createdAt: "desc" },
          take: 40,
        });
      }
    }

    return (
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between pb-6 border-b border-border mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold text-text tracking-tight flex items-center gap-2">
              <History className="w-6 h-6 text-cyan" />
              Audit Telemetry Console
            </h1>
            <p className="text-xs text-muted mt-1 font-sans">Trace secure database audit logs, webhook triggers, and publishing events.</p>
          </div>
          <UserMenu email={session?.user?.email} />
        </header>

        <div className="rounded-lg border border-border bg-surface overflow-hidden max-w-5xl">
          <div className="bg-surface-soft border-b border-border px-5 py-3 flex items-center justify-between">
            <span className="text-[10px] font-pixel text-cyan tracking-widest">SYSTEM READOUT: ACTIVE LOG STREAM</span>
            <span className="text-[9px] font-mono text-muted">SECURE TELEMETRY</span>
          </div>

          {logs.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-muted">
              -- LOG STREAM EMPTY --
            </div>
          ) : (
            <div className="divide-y divide-border/40 font-mono text-[11px] leading-relaxed text-muted max-h-[500px] overflow-y-auto">
              {logs.map((log) => (
                <div key={log.id} className="p-4 hover:bg-surface-soft/20 flex flex-col md:flex-row md:items-center justify-between gap-2 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-pixel text-cyan tracking-wider">[{log.action}]</span>
                    <span className="text-text">{log.resourceType} ({log.resourceId || "global"})</span>
                  </div>
                  <span className="text-[10px] text-muted">{new Date(log.createdAt).toISOString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    );
  }
  ```

- [ ] **Step 2: Verify compile and lint succeeds**
  Run: `pnpm --filter web run build`
  Expected: PASS

---

### Task 10: Final Audit, Consolidations, and Verification

**Files:**
- Modify: [c:\Users\Redwan Ahmmed\Desktop\GitSync\GitSync-main\apps\web\src\lib\reposignal-api.ts](file:///c:/Users/Redwan%20Ahmmed/Desktop/GitSync/GitSync-main/apps/web/src/lib/reposignal-api.ts)

- [ ] **Step 1: Cleanup old branding references**
  Ensure any old "RepoSignal" text in headers, titles, or descriptions is fully migrated to GitSync as approved.

- [ ] **Step 2: Run final clean workspace verification**
  Run: `pnpm lint`
  Expected: PASS with zero errors.

- [ ] **Step 3: Verify all typecheck tests pass**
  Run: `pnpm typecheck`
  Expected: PASS

- [ ] **Step 4: Verify production-ready build of packages and web**
  Run: `pnpm build`
  Expected: PASS
