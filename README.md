# GitSync

> Turn meaningful GitHub activity into professional LinkedIn updates with human-in-the-loop control.

![GitHub stars](https://img.shields.io/github/stars/redwan2003-bot/GitSync?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/redwan2003-bot/GitSync?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/redwan2003-bot/GitSync?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/redwan2003-bot/GitSync?style=for-the-badge&logo=github) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Key Dependencies](#key-dependencies)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 📝 Description

GitSync is a compliant, human-in-the-loop publishing assistant designed to bridge the gap between technical development activity on GitHub and professional visibility on LinkedIn. Instead of broadcasting low-value automated commit streams, GitSync analyzes repository activity to identify genuinely notable milestones and drafts high-quality LinkedIn-ready updates. This protects user credibility by ensuring that only reviewed, high-value highlights are posted.\n\nBuilt as a TypeScript monorepo with a Next.js web application and a Hono-based API backend, the system monitors incoming GitHub Webhook events and handles queue operations using Redis and Prisma. It integrates with OpenRouter to draft contextual summaries of developer progress, keeping all actual publication actions behind an approval phase utilizing official LinkedIn OAuth APIs.

## ✨ Key Features

- **🔌 GitHub Webhook Integration** — Receives and processes repository events using secure GitHub Webhook payloads.
- **🤖 Intelligent Update Drafting** — Integrates with OpenRouter and OpenAI models to translate raw repository developments into polished LinkedIn draft posts.
- **📤 Official LinkedIn Publishing** — Publishes approved content directly to LinkedIn profiles using official publishing APIs and OAuth authorization.
- **📦 Monorepo Application Design** — Features a structured architecture containing a Next.js web application, a Hono API backend, and shared database packages.
- **🗄️ Prisma and Redis Backend** — Manages project configurations and event records using Prisma ORM alongside Redis queue management.

## 🎯 Use Cases

- Developers who want to consistently share major repository milestones and releases on LinkedIn without manual drafting.
- Open-source maintainers aiming to drive project discovery and contributor engagement by highlighting impactful developments.
- Engineering organizations seeking a human-reviewed automated pipeline to cross-promote technical achievements.

## 🛠️ Tech Stack

- 🐳 **Docker**
- ⬢ **Node.js**
- 🔷 **Prisma**
- 🐍 **Python**
- 🌬️ **Tailwind CSS**
- 📘 **TypeScript**

## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/redwan2003-bot/GitSync.git

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env   # then fill in the values

# 4. Start the dev server
npm run dev
```

## 🔑 Environment Variables

The following environment variables are required (see `.env.example`):

```bash
NODE_ENV=
DATABASE_URL=
REDIS_URL=
TOKEN_ENCRYPTION_KEY=
AUTH_SECRET=
AUTH_URL=
AUTH_TRUST_HOST=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
NEXT_PUBLIC_API_URL=
INTERNAL_API_SECRET=
PORT=
WEB_APP_URL=
GITHUB_APP_ID=
GITHUB_APP_PRIVATE_KEY=
GITHUB_WEBHOOK_SECRET=
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
LINKEDIN_REDIRECT_URI=
OPENROUTER_API_KEY=
OPENROUTER_MODEL=
OPENROUTER_ALLOW_PRIVATE_REPO_DRAFTING=
LINKEDIN_PROFILE_EDIT_ENABLED=
DEFAULT_MAX_POSTS_PER_WEEK=
WEBHOOK_RETENTION_DAYS=
EVIDENCE_RETENTION_DAYS=
```

## 📦 Key Dependencies

```
@neondatabase/serverless: 0.10.0
@prisma/adapter-neon: ^5.10.0
```

## 🚀 Available Scripts

- **build** — `npm run build`
- **dev** — `npm run dev`
- **build:packages** — `npm run build:packages`
- **dev:api** — `npm run dev:api`
- **dev:worker** — `npm run dev:worker`
- **dev:web** — `npm run dev:web`
- **lint** — `npm run lint`
- **test** — `npm run test`
- **typecheck** — `npm run typecheck`
- **format** — `npm run format`
- **db:push** — `npm run db:push`
- **db:studio** — `npm run db:studio`

## 🌐 API Endpoints

Detected endpoints (best-effort scan):

```
/api/GitSync/[...path]
/api/GitSync/audit-logs
/api/GitSync/dashboard/metrics
/api/GitSync/dashboard/pending-drafts
/api/GitSync/drafts/[id]
/api/GitSync/github-repos
/api/GitSync/github/debug-installation
/api/GitSync/github/installations/sync
/api/GitSync/github/repositories/sync
/api/GitSync/integration-status
/api/GitSync/linkedin/callback/complete
/api/GitSync/linkedin/callback
/api/GitSync/linkedin/connect
/api/GitSync/project-cards
/api/GitSync/workspace-id
/api/auth/[...nextauth]
/api/reposignal/[...path]
GET /
```

## 📁 Project Structure

```
.
├── .agent
│   └── skills
│       └── ui-ux-pro-max
│           ├── SKILL.md
│           ├── data
│           │   ├── charts.csv
│           │   ├── colors.csv
│           │   ├── icons.csv
│           │   ├── landing.csv
│           │   ├── products.csv
│           │   ├── react-performance.csv
│           │   ├── stacks
│           │   │   └── ...
│           │   ├── styles.csv
│           │   ├── typography.csv
│           │   ├── ui-reasoning.csv
│           │   ├── ux-guidelines.csv
│           │   └── web-interface.csv
│           └── scripts
│               ├── core.py
│               ├── design_system.py
│               └── search.py
├── .agentic
│   └── plans
│       ├── 2026-05-16-technical-roadmap-q2-2026.md
│       └── INDEX.md
├── .agents
│   ├── rules
│   │   └── graphify.md
│   ├── skills
│   │   ├── add-tests
│   │   │   └── SKILL.md
│   │   ├── address-sanitizer
│   │   │   └── SKILL.md
│   │   ├── aflpp
│   │   │   └── SKILL.md
│   │   ├── agentic-actions-auditor
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── action-profiles.md
│   │   │       ├── cross-file-resolution.md
│   │   │       ├── foundations.md
│   │   │       ├── vector-a-env-var-intermediary.md
│   │   │       ├── vector-b-direct-expression-injection.md
│   │   │       ├── vector-c-cli-data-fetch.md
│   │   │       ├── vector-d-pr-target-checkout.md
│   │   │       ├── vector-e-error-log-injection.md
│   │   │       ├── vector-f-subshell-expansion.md
│   │   │       ├── vector-g-eval-of-ai-output.md
│   │   │       ├── vector-h-dangerous-sandbox-configs.md
│   │   │       └── vector-i-wildcard-allowlists.md
│   │   ├── algorand-vulnerability-scanner
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── VULNERABILITY_PATTERNS.md
│   │   ├── analyzing-dotnet-performance
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── async-patterns.md
│   │   │       ├── collections-and-linq.md
│   │   │       ├── critical-patterns.md
│   │   │       ├── io-and-serialization.md
│   │   │       ├── memory-and-strings.md
│   │   │       ├── regex-patterns.md
│   │   │       └── structural-patterns.md
│   │   ├── android-tombstone-symbolication
│   │   │   ├── SKILL.md
│   │   │   └── scripts
│   │   │       └── Symbolicate-Tombstone.ps1
│   │   ├── apple-crash-symbolication
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   └── ips-crash-format.md
│   │   │   └── scripts
│   │   │       └── Symbolicate-Crash.ps1
│   │   ├── ask-questions-if-underspecified
│   │   │   └── SKILL.md
│   │   ├── assertion-quality
│   │   │   └── SKILL.md
│   │   ├── atheris
│   │   │   └── SKILL.md
│   │   ├── audit
│   │   │   └── SKILL.md
│   │   ├── audit-augmentation
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── formats.md
│   │   ├── audit-context-building
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── COMPLETENESS_CHECKLIST.md
│   │   │       ├── FUNCTION_MICRO_ANALYSIS_EXAMPLE.md
│   │   │       └── OUTPUT_REQUIREMENTS.md
│   │   ├── audit-prep-assistant
│   │   │   └── SKILL.md
│   │   ├── author-component
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── async-programming-rules.md
│   │   │       ├── breaking-down-components.md
│   │   │       └── component-disposal.md
│   │   ├── binlog-failure-analysis
│   │   │   └── SKILL.md
│   │   ├── binlog-generation
│   │   │   └── SKILL.md
│   │   ├── brainstorming
│   │   │   ├── SKILL.md
│   │   │   ├── scripts
│   │   │   │   ├── frame-template.html
│   │   │   │   ├── helper.js
│   │   │   │   ├── server.cjs
│   │   │   │   ├── start-server.sh
│   │   │   │   └── stop-server.sh
│   │   │   ├── spec-document-reviewer-prompt.md
│   │   │   └── visual-companion.md
│   │   ├── build-parallelism
│   │   │   └── SKILL.md
│   │   ├── build-perf-baseline
│   │   │   └── SKILL.md
│   │   ├── build-perf-diagnostics
│   │   │   └── SKILL.md
│   │   ├── burpsuite-project-parser
│   │   │   ├── SKILL.md
│   │   │   └── scripts
│   │   │       └── burp-search.sh
│   │   ├── c-review
│   │   │   └── SKILL.md
│   │   ├── cairo-vulnerability-scanner
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── VULNERABILITY_PATTERNS.md
│   │   ├── cargo-fuzz
│   │   │   └── SKILL.md
│   │   ├── caveman
│   │   │   └── SKILL.md
│   │   ├── check-bin-obj-clash
│   │   │   └── SKILL.md
│   │   ├── claude-in-chrome-troubleshooting
│   │   │   └── SKILL.md
│   │   ├── clr-activation-debugging
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── activation-flow.md
│   │   │       ├── com-activation.md
│   │   │       └── log-format.md
│   │   ├── code-maturity-assessor
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── ASSESSMENT_CRITERIA.md
│   │   │       ├── EXAMPLE_REPORT.md
│   │   │       └── REPORT_FORMAT.md
│   │   ├── code-review
│   │   │   ├── SKILL.md
│   │   │   └── checklist.md
│   │   ├── code-testing-agent
│   │   │   ├── SKILL.md
│   │   │   └── unit-test-generation.prompt.md
│   │   ├── code-testing-extensions
│   │   │   ├── SKILL.md
│   │   │   └── extensions
│   │   │       ├── cpp.md
│   │   │       ├── dotnet-examples.md
│   │   │       ├── dotnet.md
│   │   │       ├── go.md
│   │   │       ├── java.md
│   │   │       ├── kotlin.md
│   │   │       ├── powershell.md
│   │   │       ├── python.md
│   │   │       ├── ruby.md
│   │   │       ├── rust.md
│   │   │       ├── swift.md
│   │   │       └── typescript.md
│   │   ├── codeql
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── build-fixes.md
│   │   │   │   ├── diagnostic-query-templates.md
│   │   │   │   ├── extension-yaml-format.md
│   │   │   │   ├── important-only-suite.md
│   │   │   │   ├── language-details.md
│   │   │   │   ├── macos-arm64e-workaround.md
│   │   │   │   ├── performance-tuning.md
│   │   │   │   ├── quality-assessment.md
│   │   │   │   ├── ruleset-catalog.md
│   │   │   │   ├── run-all-suite.md
│   │   │   │   ├── sarif-processing.md
│   │   │   │   └── threat-models.md
│   │   │   └── workflows
│   │   │       ├── build-database.md
│   │   │       ├── create-data-extensions.md
│   │   │       └── run-analysis.md
│   │   ├── collect-user-input
│   │   │   └── SKILL.md
│   │   ├── commit
│   │   │   ├── SKILL.md
│   │   │   └── agents
│   │   │       └── openai.yaml
│   │   ├── compose-agents-md
│   │   │   └── SKILL.md
│   │   ├── configure-auth
│   │   │   └── SKILL.md
│   │   ├── configure-mcp
│   │   │   └── SKILL.md
│   │   ├── configuring-opentelemetry-dotnet
│   │   │   └── SKILL.md
│   │   ├── constant-time-analysis
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── compiled.md
│   │   │       ├── javascript.md
│   │   │       ├── kotlin.md
│   │   │       ├── php.md
│   │   │       ├── python.md
│   │   │       ├── ruby.md
│   │   │       ├── swift.md
│   │   │       └── vm-compiled.md
│   │   ├── constant-time-testing
│   │   │   └── SKILL.md
│   │   ├── convert-blazor-server-to-webapp
│   │   │   └── SKILL.md
│   │   ├── convert-to-cpm
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── audit-complexities.md
│   │   │       ├── baseline-comparison.md
│   │   │       ├── directory-packages-props.md
│   │   │       ├── msbuild-property-handling.md
│   │   │       └── validation-and-errors.md
│   │   ├── coordinate-components
│   │   │   └── SKILL.md
│   │   ├── cosmos-vulnerability-scanner
│   │   │   ├── CHANGELOG.md
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── ADVANCED_VULNERABILITY_PATTERNS.md
│   │   │       ├── COSMWASM_VULNERABILITY_PATTERNS.md
│   │   │       ├── DISCOVERY.md
│   │   │       ├── EVM_VULNERABILITY_PATTERNS.md
│   │   │       ├── IBC_VULNERABILITY_PATTERNS.md
│   │   │       ├── STATE_VULNERABILITY_PATTERNS.md
│   │   │       └── VULNERABILITY_PATTERNS.md
│   │   ├── coverage-analysis
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── guidelines.md
│   │   │   │   └── output-format.md
│   │   │   └── scripts
│   │   │       ├── Compute-CrapScores.ps1
│   │   │       └── Extract-MethodCoverage.ps1
│   │   ├── crap-score
│   │   │   └── SKILL.md
│   │   ├── create-blazor-project
│   │   │   ├── SKILL.md
│   │   │   └── assets
│   │   │       └── agents-md
│   │   │           └── ...
│   │   ├── create-custom-agent
│   │   │   └── SKILL.md
│   │   ├── create-skill
│   │   │   └── SKILL.md
│   │   ├── create-skill-test
│   │   │   └── SKILL.md
│   │   ├── create-terraform-module
│   │   │   ├── SKILL.md
│   │   │   └── module-skeleton.md
│   │   ├── create-terraform-tests
│   │   │   ├── SKILL.md
│   │   │   └── tftest-patterns.md
│   │   ├── crypto-protocol-diagram
│   │   │   ├── SKILL.md
│   │   │   ├── examples
│   │   │   │   ├── simple-handshake
│   │   │   │   │   └── ...
│   │   │   │   └── simple-proverif
│   │   │   │       └── ...
│   │   │   └── references
│   │   │       ├── ascii-sequence-diagram.md
│   │   │       ├── mermaid-sequence-syntax.md
│   │   │       ├── protocol-patterns.md
│   │   │       └── spec-parsing-patterns.md
│   │   ├── csharp-scripts
│   │   │   └── SKILL.md
│   │   ├── ddd-aggregate-modeling
│   │   │   ├── SKILL.md
│   │   │   └── aggregate-modeling-checklist.md
│   │   ├── debug-buttercup
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   └── failure-patterns.md
│   │   │   └── scripts
│   │   │       └── diagnose.sh
│   │   ├── deploy-config
│   │   │   └── SKILL.md
│   │   ├── deploy-to-vercel
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── deploy-codex.sh
│   │   │       └── deploy.sh
│   │   ├── design-an-interface
│   │   │   └── SKILL.md
│   │   ├── design-aws-terraform-iac
│   │   │   ├── SKILL.md
│   │   │   ├── acceptance-checklist.md
│   │   │   └── aws-service-matrix.md
│   │   ├── designing-workflow-skills
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── anti-patterns.md
│   │   │   │   ├── progressive-disclosure-guide.md
│   │   │   │   ├── tool-assignment-guide.md
│   │   │   │   └── workflow-patterns.md
│   │   │   └── workflows
│   │   │       ├── design-a-workflow-skill.md
│   │   │       └── review-checklist.md
│   │   ├── detail
│   │   │   └── SKILL.md
│   │   ├── detect-static-dependencies
│   │   │   └── SKILL.md
│   │   ├── devcontainer-setup
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── dockerfile-best-practices.md
│   │   │   │   └── features-vs-dockerfile.md
│   │   │   └── resources
│   │   │       ├── Dockerfile
│   │   │       ├── devcontainer.json
│   │   │       ├── install.sh
│   │   │       └── post_install.py
│   │   ├── diagnose
│   │   │   ├── SKILL.md
│   │   │   └── scripts
│   │   │       └── hitl-loop.template.sh
│   │   ├── diagram-design
│   │   │   └── SKILL.md
│   │   ├── diagramming-code
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── diagram-types.md
│   │   │   │   └── mermaid-syntax.md
│   │   │   └── scripts
│   │   │       └── diagram.py
│   │   ├── differential-review
│   │   │   ├── SKILL.md
│   │   │   ├── adversarial.md
│   │   │   ├── methodology.md
│   │   │   ├── patterns.md
│   │   │   └── reporting.md
│   │   ├── dimensional-analysis
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── annotate.md
│   │   │       ├── bug-patterns.md
│   │   │       ├── common-dimensions.md
│   │   │       └── dimension-algebra.md
│   │   ├── directory-build-organization
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── common-patterns.md
│   │   │       ├── multi-level-examples.md
│   │   │       └── targetframework-props-pitfall.md
│   │   ├── dispatching-parallel-agents
│   │   │   └── SKILL.md
│   │   ├── docker-compose-local-setup
│   │   │   ├── SKILL.md
│   │   │   └── compose-patterns-reference.md
│   │   ├── dotnet-aot-compat
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── polyfills.md
│   │   ├── dotnet-maui-doctor
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── installation-commands-macos.md
│   │   │       ├── installation-commands-windows.md
│   │   │       ├── installation-commands.md
│   │   │       ├── microsoft-openjdk.md
│   │   │       ├── platform-requirements-linux.md
│   │   │       ├── platform-requirements-macos.md
│   │   │       ├── platform-requirements-windows.md
│   │   │       ├── troubleshooting-macos.md
│   │   │       ├── troubleshooting-windows.md
│   │   │       ├── troubleshooting.md
│   │   │       └── workload-dependencies-discovery.md
│   │   ├── dotnet-pinvoke
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── diagnostics.md
│   │   │       └── type-mapping.md
│   │   ├── dotnet-test-frameworks
│   │   │   └── SKILL.md
│   │   ├── dotnet-trace-collect
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── dotnet-monitor.md
│   │   │       ├── dotnet-trace-collect-linux.md
│   │   │       ├── dotnet-trace-collect.md
│   │   │       ├── perfcollect.md
│   │   │       └── perfview.md
│   │   ├── dotnet-webapi
│   │   │   └── SKILL.md
│   │   ├── dump-collect
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── container-dumps.md
│   │   │       ├── coreclr-dumps.md
│   │   │       └── nativeaot-dumps.md
│   │   ├── dwarf-expert
│   │   │   ├── SKILL.md
│   │   │   └── reference
│   │   │       ├── coding.md
│   │   │       ├── dwarfdump.md
│   │   │       └── readelf.md
│   │   ├── edit-article
│   │   │   └── SKILL.md
│   │   ├── entry-point-analyzer
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── cosmwasm.md
│   │   │       ├── move-aptos.md
│   │   │       ├── move-sui.md
│   │   │       ├── solana.md
│   │   │       ├── solidity.md
│   │   │       ├── ton.md
│   │   │       └── vyper.md
│   │   ├── eval-performance
│   │   │   └── SKILL.md
│   │   ├── executing-plans
│   │   │   └── SKILL.md
│   │   ├── extension-points
│   │   │   └── SKILL.md
│   │   ├── fetch-and-send-data
│   │   │   └── SKILL.md
│   │   ├── filter-syntax
│   │   │   └── SKILL.md
│   │   ├── finishing-a-development-branch
│   │   │   └── SKILL.md
│   │   ├── firebase-apk-scanner
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── vulnerabilities.md
│   │   ├── fix-bug
│   │   │   └── SKILL.md
│   │   ├── fp-check
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── bug-class-verification.md
│   │   │       ├── deep-verification.md
│   │   │       ├── evidence-templates.md
│   │   │       ├── false-positive-patterns.md
│   │   │       ├── gate-reviews.md
│   │   │       └── standard-verification.md
│   │   ├── framer-motion-gestures
│   │   │   └── SKILL.md
│   │   ├── framer-motion-layout
│   │   │   └── SKILL.md
│   │   ├── framer-motion-react
│   │   │   └── SKILL.md
│   │   ├── framer-motion-scroll
│   │   │   └── SKILL.md
│   │   ├── framer-motion-variants
│   │   │   └── SKILL.md
│   │   ├── fuzzing-dictionary
│   │   │   └── SKILL.md
│   │   ├── fuzzing-obstacles
│   │   │   └── SKILL.md
│   │   ├── generate-testability-wrappers
│   │   │   └── SKILL.md
│   │   ├── genotoxic
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── graph-analysis.md
│   │   │       ├── mutation-frameworks.md
│   │   │       └── triage-methodology.md
│   │   ├── gh-cli
│   │   │   └── SKILL.md
│   │   ├── git-cleanup
│   │   │   └── SKILL.md
│   │   ├── git-flow-pr
│   │   │   └── SKILL.md
│   │   ├── git-guardrails-claude-code
│   │   │   ├── SKILL.md
│   │   │   └── scripts
│   │   │       └── block-dangerous-git.sh
│   │   ├── git-worktree-workspaces
│   │   │   └── SKILL.md
│   │   ├── github-actions-workflow
│   │   │   └── SKILL.md
│   │   ├── github-issue-planning
│   │   │   ├── SKILL.md
│   │   │   └── issue-comment-template.md
│   │   ├── golang-manual-di
│   │   │   ├── SKILL.md
│   │   │   └── example_di.go
│   │   ├── graph-evolution
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── evolution-metrics.md
│   │   │   │   └── report-format.md
│   │   │   └── scripts
│   │   │       └── graph_diff.py
│   │   ├── grill-me
│   │   │   └── SKILL.md
│   │   ├── grill-with-docs
│   │   │   ├── ADR-FORMAT.md
│   │   │   ├── CONTEXT-FORMAT.md
│   │   │   └── SKILL.md
│   │   ├── guidelines-advisor
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── ASSESSMENT_AREAS.md
│   │   │       ├── DELIVERABLES.md
│   │   │       └── EXAMPLE_REPORT.md
│   │   ├── handoff
│   │   │   └── SKILL.md
│   │   ├── harness-writing
│   │   │   └── SKILL.md
│   │   ├── health-check-endpoints
│   │   │   └── SKILL.md
│   │   ├── ideate
│   │   │   └── SKILL.md
│   │   ├── implement
│   │   │   └── SKILL.md
│   │   ├── improve-codebase-architecture
│   │   │   ├── DEEPENING.md
│   │   │   ├── HTML-REPORT.md
│   │   │   ├── INTERFACE-DESIGN.md
│   │   │   ├── LANGUAGE.md
│   │   │   └── SKILL.md
│   │   ├── including-generated-files
│   │   │   └── SKILL.md
│   │   ├── incremental-build
│   │   │   └── SKILL.md
│   │   ├── insecure-defaults
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── examples.md
│   │   ├── internationalization-i18n
│   │   │   └── SKILL.md
│   │   ├── interpreting-culture-index
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── anti-patterns.md
│   │   │   │   ├── archetype-administrator.md
│   │   │   │   ├── archetype-coordinator.md
│   │   │   │   ├── archetype-craftsman.md
│   │   │   │   ├── archetype-daredevil.md
│   │   │   │   ├── archetype-debater.md
│   │   │   │   ├── archetype-facilitator.md
│   │   │   │   ├── archetype-influencer.md
│   │   │   │   ├── archetype-operator.md
│   │   │   │   ├── archetype-persuader.md
│   │   │   │   ├── archetype-philosopher.md
│   │   │   │   ├── archetype-rainmaker.md
│   │   │   │   ├── archetype-scholar.md
│   │   │   │   ├── archetype-socializer.md
│   │   │   │   ├── archetype-specialist.md
│   │   │   │   ├── archetype-technical-expert.md
│   │   │   │   ├── archetype-traditionalist.md
│   │   │   │   ├── archetype-trailblazer.md
│   │   │   │   ├── conversation-starters.md
│   │   │   │   ├── interview-trait-signals.md
│   │   │   │   ├── motivators.md
│   │   │   │   ├── patterns-archetypes.md
│   │   │   │   ├── primary-traits.md
│   │   │   │   ├── secondary-traits.md
│   │   │   │   └── team-composition.md
│   │   │   ├── scripts
│   │   │   │   ├── check_deps.py
│   │   │   │   ├── culture_index
│   │   │   │   │   └── ...
│   │   │   │   ├── extract_pdf.py
│   │   │   │   └── pyproject.toml
│   │   │   ├── templates
│   │   │   │   ├── burnout-report.md
│   │   │   │   ├── comparison-report.md
│   │   │   │   ├── hiring-profile.md
│   │   │   │   ├── individual-report.md
│   │   │   │   ├── predicted-profile.md
│   │   │   │   └── team-report.md
│   │   │   └── workflows
│   │   │       ├── analyze-team.md
│   │   │       ├── coach-manager.md
│   │   │       ├── compare-profiles.md
│   │   │       ├── define-hiring-profile.md
│   │   │       ├── detect-burnout.md
│   │   │       ├── extract-from-pdf.md
│   │   │       ├── interpret-individual.md
│   │   │       ├── interview-debrief.md
│   │   │       ├── mediate-conflict.md
│   │   │       ├── plan-onboarding.md
│   │   │       └── predict-from-interview.md
│   │   ├── item-management
│   │   │   └── SKILL.md
│   │   ├── json-to-toon
│   │   │   ├── SKILL.md
│   │   │   └── toon-spec-reference.md
│   │   ├── launch
│   │   │   ├── SKILL.md
│   │   │   └── agents
│   │   │       └── openai.yaml
│   │   ├── let-fate-decide
│   │   │   ├── SKILL.md
│   │   │   ├── cards
│   │   │   │   ├── cups
│   │   │   │   │   └── ...
│   │   │   │   ├── major
│   │   │   │   │   └── ...
│   │   │   │   ├── pentacles
│   │   │   │   │   └── ...
│   │   │   │   ├── swords
│   │   │   │   │   └── ...
│   │   │   │   └── wands
│   │   │   │       └── ...
│   │   │   ├── houses
│   │   │   │   ├── 01-first-house.md
│   │   │   │   ├── 02-second-house.md
│   │   │   │   ├── 03-third-house.md
│   │   │   │   ├── 04-fourth-house.md
│   │   │   │   ├── 05-fifth-house.md
│   │   │   │   ├── 06-sixth-house.md
│   │   │   │   ├── 07-seventh-house.md
│   │   │   │   ├── 08-eighth-house.md
│   │   │   │   ├── 09-ninth-house.md
│   │   │   │   ├── 10-tenth-house.md
│   │   │   │   ├── 11-eleventh-house.md
│   │   │   │   └── 12-twelfth-house.md
│   │   │   ├── references
│   │   │   │   ├── INTERPRETATION_GUIDE.md
│   │   │   │   └── TECHNICAL_CONTEXT_LENSES.md
│   │   │   └── scripts
│   │   │       ├── draw_cards.py
│   │   │       ├── pyproject.toml
│   │   │       └── test_draw_cards.py
│   │   ├── libafl
│   │   │   └── SKILL.md
│   │   ├── libfuzzer
│   │   │   └── SKILL.md
│   │   ├── maui-app-lifecycle
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── lifecycle-api.md
│   │   ├── maui-collectionview
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── collectionview-api.md
│   │   ├── maui-data-binding
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── data-binding-api.md
│   │   ├── maui-dependency-injection
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── dependency-injection-api.md
│   │   ├── maui-safe-area
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── safe-area-api.md
│   │   ├── maui-shell-navigation
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── shell-navigation-api.md
│   │   ├── maui-theming
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── theming-api.md
│   │   ├── mcp-csharp-create
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── api-patterns.md
│   │   │       └── transport-config.md
│   │   ├── mcp-csharp-debug
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── ide-config.md
│   │   │       └── mcp-inspector.md
│   │   ├── mcp-csharp-publish
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── docker-azure.md
│   │   │       ├── mcp-registry.md
│   │   │       └── nuget-packaging.md
│   │   ├── mcp-csharp-test
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── evaluations.md
│   │   │       └── test-patterns.md
│   │   ├── mermaid-to-proverif
│   │   │   ├── SKILL.md
│   │   │   ├── examples
│   │   │   │   └── simple-handshake
│   │   │   │       └── ...
│   │   │   └── references
│   │   │       ├── crypto-to-proverif-mapping.md
│   │   │       ├── proverif-syntax.md
│   │   │       └── security-properties.md
│   │   ├── microbenchmarking
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── bdn-internals-and-tuning.md
│   │   │       ├── comparison-strategies.md
│   │   │       ├── diagnosers-and-exporters.md
│   │   │       ├── project-setup-and-running.md
│   │   │       └── writing-benchmarks.md
│   │   ├── microservices-architecture
│   │   │   └── SKILL.md
│   │   ├── migrate-dotnet10-to-dotnet11
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── aspnetcore-dotnet10to11.md
│   │   │       ├── core-libraries-dotnet10to11.md
│   │   │       ├── cryptography-dotnet10to11.md
│   │   │       ├── csharp-compiler-dotnet10to11.md
│   │   │       ├── efcore-dotnet10to11.md
│   │   │       ├── runtime-jit-dotnet10to11.md
│   │   │       └── sdk-msbuild-dotnet10to11.md
│   │   ├── migrate-dotnet8-to-dotnet9
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── aspnet-core-dotnet8to9.md
│   │   │       ├── containers-interop-dotnet8to9.md
│   │   │       ├── core-libraries-dotnet8to9.md
│   │   │       ├── cryptography-dotnet8to9.md
│   │   │       ├── csharp-compiler-dotnet8to9.md
│   │   │       ├── deployment-runtime-dotnet8to9.md
│   │   │       ├── efcore-dotnet8to9.md
│   │   │       ├── sdk-msbuild-dotnet8to9.md
│   │   │       ├── serialization-networking-dotnet8to9.md
│   │   │       └── winforms-wpf-dotnet8to9.md
│   │   ├── migrate-dotnet9-to-dotnet10
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── aspnet-core-dotnet9to10.md
│   │   │       ├── containers-interop-dotnet9to10.md
│   │   │       ├── core-libraries-dotnet9to10.md
│   │   │       ├── cryptography-dotnet9to10.md
│   │   │       ├── csharp-compiler-dotnet9to10.md
│   │   │       ├── efcore-dotnet9to10.md
│   │   │       ├── extensions-hosting-dotnet9to10.md
│   │   │       ├── sdk-msbuild-dotnet9to10.md
│   │   │       ├── serialization-networking-dotnet9to10.md
│   │   │       └── winforms-wpf-dotnet9to10.md
│   │   ├── migrate-mstest-v1v2-to-v3
│   │   │   └── SKILL.md
│   │   ├── migrate-mstest-v3-to-v4
│   │   │   └── SKILL.md
│   │   ├── migrate-nullable-references
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── aspnet-core.md
│   │   │   │   ├── breaking-changes.md
│   │   │   │   ├── ef-core.md
│   │   │   │   └── nullable-attributes.md
│   │   │   └── scripts
│   │   │       └── Get-NullableReadiness.ps1
│   │   ├── migrate-static-to-wrapper
│   │   │   └── SKILL.md
│   │   ├── migrate-to-shoehorn
│   │   │   └── SKILL.md
│   │   ├── migrate-vstest-to-mtp
│   │   │   └── SKILL.md
│   │   ├── migrate-xunit-to-xunit-v3
│   │   │   └── SKILL.md
│   │   ├── minimal-api-file-upload
│   │   │   └── SKILL.md
│   │   ├── modern-python
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── dependabot.md
│   │   │   │   ├── migration-checklist.md
│   │   │   │   ├── pep723-scripts.md
│   │   │   │   ├── prek.md
│   │   │   │   ├── pyproject.md
│   │   │   │   ├── ruff-config.md
│   │   │   │   ├── security-setup.md
│   │   │   │   ├── testing.md
│   │   │   │   └── uv-commands.md
│   │   │   └── templates
│   │   │       ├── dependabot.yml
│   │   │       └── pre-commit-config.yaml
│   │   ├── monorepo-management
│   │   │   └── SKILL.md
│   │   ├── msbuild-antipatterns
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── additional-antipatterns.md
│   │   │       ├── incremental-build-inputs-outputs.md
│   │   │       └── private-assets.md
│   │   ├── msbuild-modernization
│   │   │   └── SKILL.md
│   │   ├── msbuild-server
│   │   │   └── SKILL.md
│   │   ├── mtp-hot-reload
│   │   │   └── SKILL.md
│   │   ├── mutation-testing
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   └── optimization-strategies.md
│   │   │   └── workflows
│   │   │       └── configuration.md
│   │   ├── neon-postgres
│   │   │   └── SKILL.md
│   │   ├── new-gh-issue-orchestration
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── workflow-checklist.md
│   │   ├── next-application-structure
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── app-router-guidance.md
│   │   ├── nextjs-react-typescript
│   │   │   └── SKILL.md
│   │   ├── nosql-database-design
│   │   │   └── SKILL.md
│   │   ├── nuget-trusted-publishing
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── package-types.md
│   │   │       └── publish-workflow.md
│   │   ├── obsidian-vault
│   │   │   └── SKILL.md
│   │   ├── optimizing-ef-core-queries
│   │   │   └── SKILL.md
│   │   ├── ossfuzz
│   │   │   └── SKILL.md
│   │   ├── persist-plan
│   │   │   ├── SKILL.md
│   │   │   └── plan-template.md
│   │   ├── plan-ui-change
│   │   │   └── SKILL.md
│   │   ├── platform-detection
│   │   │   └── SKILL.md
│   │   ├── property-based-testing
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── design.md
│   │   │       ├── generating.md
│   │   │       ├── interpreting-failures.md
│   │   │       ├── libraries.md
│   │   │       ├── refactoring.md
│   │   │       ├── reviewing.md
│   │   │       └── strategies.md
│   │   ├── property-patterns
│   │   │   └── SKILL.md
│   │   ├── prototype
│   │   │   ├── LOGIC.md
│   │   │   ├── SKILL.md
│   │   │   └── UI.md
│   │   ├── pull-request-automation
│   │   │   └── SKILL.md
│   │   ├── qa
│   │   │   └── SKILL.md
│   │   ├── react-application-structure
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── stack-guidance.md
│   │   ├── react-component-design
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── component-api-checklist.md
│   │   ├── react-component-testing
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── testing-matrix.md
│   │   ├── receiving-code-review
│   │   │   └── SKILL.md
│   │   ├── refactor
│   │   │   └── SKILL.md
│   │   ├── relational-database-design
│   │   │   └── SKILL.md
│   │   ├── request-refactor-plan
│   │   │   └── SKILL.md
│   │   ├── requesting-code-review
│   │   │   ├── SKILL.md
│   │   │   └── code-reviewer.md
│   │   ├── resolve-project-references
│   │   │   └── SKILL.md
│   │   ├── review
│   │   │   └── SKILL.md
│   │   ├── run-tests
│   │   │   └── SKILL.md
│   │   ├── ruzzy
│   │   │   └── SKILL.md
│   │   ├── sarif-parsing
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── jq-queries.md
│   │   │       └── sarif_helpers.py
│   │   ├── scaffold-exercises
│   │   │   └── SKILL.md
│   │   ├── seatbelt-sandboxer
│   │   │   └── SKILL.md
│   │   ├── second-opinion
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── codex-invocation.md
│   │   │       ├── codex-review-schema.json
│   │   │       └── gemini-invocation.md
│   │   ├── secure-workflow-guide
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── EXAMPLE_REPORT.md
│   │   │       └── WORKFLOW_STEPS.md
│   │   ├── semgrep
│   │   │   ├── SKILL.md
│   │   │   ├── references
│   │   │   │   ├── rulesets.md
│   │   │   │   ├── scan-modes.md
│   │   │   │   └── scanner-task-prompt.md
│   │   │   ├── scripts
│   │   │   │   └── merge_sarif.py
│   │   │   └── workflows
│   │   │       └── scan-workflow.md
│   │   ├── semgrep-rule-creator
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── quick-reference.md
│   │   │       └── workflow.md
│   │   ├── semgrep-rule-variant-creator
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── applicability-analysis.md
│   │   │       ├── language-syntax-guide.md
│   │   │       └── workflow.md
│   │   ├── serverless-architecture
│   │   │   └── SKILL.md
│   │   ├── setup-matt-pocock-skills
│   │   │   ├── SKILL.md
│   │   │   ├── domain.md
│   │   │   ├── issue-tracker-github.md
│   │   │   ├── issue-tracker-gitlab.md
│   │   │   ├── issue-tracker-local.md
│   │   │   └── triage-labels.md
│   │   ├── setup-pre-commit
│   │   │   └── SKILL.md
│   │   ├── sharp-edges
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── auth-patterns.md
│   │   │       ├── case-studies.md
│   │   │       ├── config-patterns.md
│   │   │       ├── crypto-apis.md
│   │   │       ├── lang-c.md
│   │   │       ├── lang-csharp.md
│   │   │       ├── lang-go.md
│   │   │       ├── lang-java.md
│   │   │       ├── lang-javascript.md
│   │   │       ├── lang-kotlin.md
│   │   │       ├── lang-php.md
│   │   │       ├── lang-python.md
│   │   │       ├── lang-ruby.md
│   │   │       ├── lang-rust.md
│   │   │       ├── lang-swift.md
│   │   │       └── language-specific.md
│   │   ├── skill-improver
│   │   │   └── SKILL.md
│   │   ├── solana-vulnerability-scanner
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── VULNERABILITY_PATTERNS.md
│   │   ├── spec-to-code-compliance
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── COMPLETENESS_CHECKLIST.md
│   │   │       ├── IR_EXAMPLES.md
│   │   │       └── OUTPUT_REQUIREMENTS.md
│   │   ├── sql-query-optimization
│   │   │   └── SKILL.md
│   │   ├── static-code-analysis
│   │   │   └── SKILL.md
│   │   ├── subagent-driven-development
│   │   │   ├── SKILL.md
│   │   │   ├── code-quality-reviewer-prompt.md
│   │   │   ├── implementer-prompt.md
│   │   │   └── spec-reviewer-prompt.md
│   │   ├── substrate-vulnerability-scanner
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── VULNERABILITY_PATTERNS.md
│   │   ├── supabase
│   │   │   ├── SKILL.md
│   │   │   ├── assets
│   │   │   │   └── feedback-issue-template.md
│   │   │   └── references
│   │   │       └── skill-feedback.md
│   │   ├── supabase-postgres-best-practices
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── _contributing.md
│   │   │       ├── _sections.md
│   │   │       ├── _template.md
│   │   │       ├── advanced-full-text-search.md
│   │   │       ├── advanced-jsonb-indexing.md
│   │   │       ├── conn-idle-timeout.md
│   │   │       ├── conn-limits.md
│   │   │       ├── conn-pooling.md
│   │   │       ├── conn-prepared-statements.md
│   │   │       ├── data-batch-inserts.md
│   │   │       ├── data-n-plus-one.md
│   │   │       ├── data-pagination.md
│   │   │       ├── data-upsert.md
│   │   │       ├── lock-advisory.md
│   │   │       ├── lock-deadlock-prevention.md
│   │   │       ├── lock-short-transactions.md
│   │   │       ├── lock-skip-locked.md
│   │   │       ├── monitor-explain-analyze.md
│   │   │       ├── monitor-pg-stat-statements.md
│   │   │       ├── monitor-vacuum-analyze.md
│   │   │       ├── query-composite-indexes.md
│   │   │       ├── query-covering-indexes.md
│   │   │       ├── query-index-types.md
│   │   │       ├── query-missing-indexes.md
│   │   │       ├── query-partial-indexes.md
│   │   │       ├── schema-constraints.md
│   │   │       ├── schema-data-types.md
│   │   │       ├── schema-foreign-key-indexes.md
│   │   │       ├── schema-lowercase-identifiers.md
│   │   │       ├── schema-partitioning.md
│   │   │       ├── schema-primary-keys.md
│   │   │       ├── security-privileges.md
│   │   │       ├── security-rls-basics.md
│   │   │       └── security-rls-performance.md
│   │   ├── supply-chain-risk-auditor
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── results-template.md
│   │   ├── support-prerendering
│   │   │   └── SKILL.md
│   │   ├── sync-confluence
│   │   │   ├── SKILL.md
│   │   │   ├── adr-template.md
│   │   │   ├── architecture-template.md
│   │   │   ├── engineering-scaffold.md
│   │   │   └── rfc-template.md
│   │   ├── system-text-json-net11
│   │   │   └── SKILL.md
│   │   ├── systematic-debugging
│   │   │   ├── CREATION-LOG.md
│   │   │   ├── SKILL.md
│   │   │   ├── condition-based-waiting-example.ts
│   │   │   ├── condition-based-waiting.md
│   │   │   ├── defense-in-depth.md
│   │   │   ├── find-polluter.sh
│   │   │   ├── root-cause-tracing.md
│   │   │   ├── test-academic.md
│   │   │   ├── test-pressure-1.md
│   │   │   ├── test-pressure-2.md
│   │   │   └── test-pressure-3.md
│   │   ├── target-authoring
│   │   │   └── SKILL.md
│   │   ├── tdd
│   │   │   ├── SKILL.md
│   │   │   ├── deep-modules.md
│   │   │   ├── interface-design.md
│   │   │   ├── mocking.md
│   │   │   ├── refactoring.md
│   │   │   └── tests.md
│   │   ├── teach
│   │   │   ├── GLOSSARY-FORMAT.md
│   │   │   ├── LEARNING-RECORD-FORMAT.md
│   │   │   ├── MISSION-FORMAT.md
│   │   │   ├── RESOURCES-FORMAT.md
│   │   │   └── SKILL.md
│   │   ├── technical-roadmap-planning
│   │   │   └── SKILL.md
│   │   ├── technology-selection
│   │   │   └── SKILL.md
│   │   ├── template-authoring
│   │   │   └── SKILL.md
│   │   ├── template-discovery
│   │   │   └── SKILL.md
│   │   ├── template-instantiation
│   │   │   └── SKILL.md
│   │   ├── template-validation
│   │   │   └── SKILL.md
│   │   ├── terraform-infrastructure
│   │   │   └── SKILL.md
│   │   ├── test-anti-patterns
│   │   │   └── SKILL.md
│   │   ├── test-driven-development
│   │   │   ├── SKILL.md
│   │   │   └── testing-anti-patterns.md
│   │   ├── test-gap-analysis
│   │   │   └── SKILL.md
│   │   ├── test-smell-detection
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       └── test-smell-catalog.md
│   │   ├── test-tagging
│   │   │   └── SKILL.md
│   │   ├── testing
│   │   │   └── SKILL.md
│   │   ├── testing-handbook-generator
│   │   │   ├── SKILL.md
│   │   │   ├── agent-prompt.md
│   │   │   ├── discovery.md
│   │   │   ├── templates
│   │   │   │   ├── domain-skill.md
│   │   │   │   ├── fuzzer-skill.md
│   │   │   │   ├── technique-skill.md
│   │   │   │   └── tool-skill.md
│   │   │   └── testing.md
│   │   ├── thread-abort-migration
│   │   │   └── SKILL.md
│   │   ├── to-issues
│   │   │   └── SKILL.md
│   │   ├── to-prd
│   │   │   └── SKILL.md
│   │   ├── token-integration-analyzer
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── ASSESSMENT_CATEGORIES.md
│   │   │       └── REPORT_TEMPLATES.md
│   │   ├── ton-vulnerability-scanner
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       └── VULNERABILITY_PATTERNS.md
│   │   ├── trailmark
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── preanalysis-passes.md
│   │   │       └── query-patterns.md
│   │   ├── trailmark-structural
│   │   │   └── SKILL.md
│   │   ├── trailmark-summary
│   │   │   └── SKILL.md
│   │   ├── triage
│   │   │   ├── AGENT-BRIEF.md
│   │   │   ├── OUT-OF-SCOPE.md
│   │   │   └── SKILL.md
│   │   ├── ubiquitous-language
│   │   │   └── SKILL.md
│   │   ├── use-aws-mini-stack-emulator
│   │   │   ├── SKILL.md
│   │   │   └── emulator-compatibility-matrix.md
│   │   ├── use-js-interop
│   │   │   └── SKILL.md
│   │   ├── using-arc
│   │   │   └── SKILL.md
│   │   ├── using-git-worktrees
│   │   │   └── SKILL.md
│   │   ├── using-superpowers
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── codex-tools.md
│   │   │       ├── copilot-tools.md
│   │   │       └── gemini-tools.md
│   │   ├── variant-analysis
│   │   │   ├── METHODOLOGY.md
│   │   │   ├── SKILL.md
│   │   │   └── resources
│   │   │       ├── codeql
│   │   │       │   └── ...
│   │   │       ├── semgrep
│   │   │       │   └── ...
│   │   │       └── variant-report-template.md
│   │   ├── vector-forge
│   │   │   ├── SKILL.md
│   │   │   └── references
│   │   │       ├── fault-simulation.md
│   │   │       ├── lessons-learned.md
│   │   │       ├── mutation-frameworks.md
│   │   │       ├── report-template.md
│   │   │       └── vector-patterns.md
│   │   ├── vercel-cli-with-tokens
│   │   │   └── SKILL.md
│   │   ├── vercel-composition-patterns
│   │   │   ├── AGENTS.md
│   │   │   ├── SKILL.md
│   │   │   ├── metadata.json
│   │   │   └── rules
│   │   │       ├── _sections.md
│   │   │       ├── _template.md
│   │   │       ├── architecture-avoid-boolean-props.md
│   │   │       ├── architecture-compound-components.md
│   │   │       ├── patterns-children-over-render-props.md
│   │   │       ├── patterns-explicit-variants.md
│   │   │       ├── react19-no-forwardref.md
│   │   │       ├── state-context-interface.md
│   │   │       ├── state-decouple-implementation.md
│   │   │       └── state-lift-state.md
│   │   ├── vercel-optimize
│   │   │   ├── AGENTS.md
│   │   │   ├── CONTRIBUTING.md
│   │   │   ├── SKILL.md
│   │   │   ├── lib
│   │   │   │   ├── auth-route.mjs
│   │   │   │   ├── budget-summary.mjs
│   │   │   │   ├── citations.mjs
│   │   │   │   ├── cost-coverage.mjs
│   │   │   │   ├── dedup-recs.mjs
│   │   │   │   ├── deep-dive.mjs
│   │   │   │   ├── display-labels.mjs
│   │   │   │   ├── extract-claims.mjs
│   │   │   │   ├── framework-support.mjs
│   │   │   │   ├── gates
│   │   │   │   │   └── ...
│   │   │   │   ├── grade-recommendation.mjs
│   │   │   │   ├── impact-label.mjs
│   │   │   │   ├── impact-magnitude.mjs
│   │   │   │   ├── investigation-brief.mjs
│   │   │   │   ├── project-facts.mjs
│   │   │   │   ├── queries.mjs
│   │   │   │   ├── reconcile-candidates.mjs
│   │   │   │   ├── render-report.mjs
│   │   │   │   ├── repo-root.mjs
│   │   │   │   ├── route-normalize.mjs
│   │   │   │   ├── sanitizers
│   │   │   │   │   └── ...
│   │   │   │   ├── scanners
│   │   │   │   │   └── ...
│   │   │   │   ├── support-topics.mjs
│   │   │   │   ├── throttle.mjs
│   │   │   │   ├── util.mjs
│   │   │   │   ├── vercel.mjs
│   │   │   │   ├── verify-claim.mjs
│   │   │   │   └── workspace-resolver.mjs
│   │   │   ├── metadata.json
│   │   │   ├── references
│   │   │   │   ├── candidates.md
│   │   │   │   ├── data-collection.md
│   │   │   │   ├── docs-library.json
│   │   │   │   ├── doctrine.md
│   │   │   │   ├── observability-plus.md
│   │   │   │   ├── playbooks
│   │   │   │   │   └── ...
│   │   │   │   ├── recommendations.md
│   │   │   │   ├── scanner-patterns.md
│   │   │   │   ├── scoring.md
│   │   │   │   ├── support-topics
│   │   │   │   │   └── ...
│   │   │   │   ├── verification.md
│   │   │   │   └── voice.md
│   │   │   └── scripts
│   │   │       ├── budget-summary.mjs
│   │   │       ├── build-docs.mjs
│   │   │       ├── check-citations.mjs
│   │   │       ├── check-docs-fresh.mjs
│   │   │       ├── collect-signals.mjs
│   │   │       ├── collect-sub-agent-outputs.mjs
│   │   │       ├── deep-dive.mjs
│   │   │       ├── gate-investigations.mjs
│   │   │       ├── merge-signals.mjs
│   │   │       ├── prepare-investigation-brief.mjs
│   │   │       ├── reconcile-candidates.mjs
│   │   │       ├── render-report.mjs
│   │   │       ├── scan-codebase.mjs
│   │   │       ├── verify-and-regen.mjs
│   │   │       └── verify-finding.mjs
│   │   ├── vercel-react-best-practices
│   │   │   ├── AGENTS.md
│   │   │   ├── SKILL.md
│   │   │   ├── metadata.json
│   │   │   └── rules
│   │   │       ├── _sections.md
│   │   │       ├── _template.md
│   │   │       ├── advanced-effect-event-deps.md
│   │   │       ├── advanced-event-handler-refs.md
│   │   │       ├── advanced-init-once.md
│   │   │       ├── advanced-use-latest.md
│   │   │       ├── async-api-routes.md
│   │   │       ├── async-cheap-condition-before-await.md
│   │   │       ├── async-defer-await.md
│   │   │       ├── async-dependencies.md
│   │   │       ├── async-parallel.md
│   │   │       ├── async-suspense-boundaries.md
│   │   │       ├── bundle-analyzable-paths.md
│   │   │       ├── bundle-barrel-imports.md
│   │   │       ├── bundle-conditional.md
│   │   │       ├── bundle-defer-third-party.md
│   │   │       ├── bundle-dynamic-imports.md
│   │   │       ├── bundle-preload.md
│   │   │       ├── client-event-listeners.md
│   │   │       ├── client-localstorage-schema.md
│   │   │       ├── client-passive-event-listeners.md
│   │   │       ├── client-swr-dedup.md
│   │   │       ├── js-batch-dom-css.md
│   │   │       ├── js-cache-function-results.md
│   │   │       ├── js-cache-property-access.md
│   │   │       ├── js-cache-storage.md
│   │   │       ├── js-combine-iterations.md
│   │   │       ├── js-early-exit.md
│   │   │       ├── js-flatmap-filter.md
│   │   │       ├── js-hoist-regexp.md
│   │   │       ├── js-index-maps.md
│   │   │       ├── js-length-check-first.md
│   │   │       ├── js-min-max-loop.md
│   │   │       ├── js-request-idle-callback.md
│   │   │       ├── js-set-map-lookups.md
│   │   │       ├── js-tosorted-immutable.md
│   │   │       ├── rendering-activity.md
│   │   │       ├── rendering-animate-svg-wrapper.md
│   │   │       ├── rendering-conditional-render.md
│   │   │       ├── rendering-content-visibility.md
│   │   │       ├── rendering-hoist-jsx.md
│   │   │       ├── rendering-hydration-no-flicker.md
│   │   │       ├── rendering-hydration-suppress-warning.md
│   │   │       ├── rendering-resource-hints.md
│   │   │       ├── rendering-script-defer-async.md
│   │   │       ├── rendering-svg-precision.md
│   │   │       ├── rendering-usetransition-loading.md
│   │   │       ├── rerender-defer-reads.md
│   │   │       ├── rerender-dependencies.md
│   │   │       ├── rerender-derived-state-no-effect.md
│   │   │       ├── rerender-derived-state.md
│   │   │       ├── rerender-functional-setstate.md
│   │   │       ├── rerender-lazy-state-init.md
│   │   │       ├── rerender-memo-with-default-value.md
│   │   │       ├── rerender-memo.md
│   │   │       ├── rerender-move-effect-to-event.md
│   │   │       ├── rerender-no-inline-components.md
│   │   │       ├── rerender-simple-expression-in-memo.md
│   │   │       ├── rerender-split-combined-hooks.md
│   │   │       ├── rerender-transitions.md
│   │   │       ├── rerender-use-deferred-value.md
│   │   │       ├── rerender-use-ref-transient-values.md
│   │   │       ├── server-after-nonblocking.md
│   │   │       ├── server-auth-actions.md
│   │   │       ├── server-cache-lru.md
│   │   │       ├── server-cache-react.md
│   │   │       ├── server-dedup-props.md
│   │   │       ├── server-hoist-static-io.md
│   │   │       ├── server-no-shared-module-state.md
│   │   │       ├── server-parallel-fetching.md
│   │   │       ├── server-parallel-nested-fetching.md
│   │   │       └── server-serialization.md
│   │   ├── vercel-react-native-skills
│   │   │   ├── AGENTS.md
│   │   │   ├── SKILL.md
│   │   │   ├── metadata.json
│   │   │   └── rules
│   │   │       ├── _sections.md
│   │   │       ├── _template.md
│   │   │       ├── animation-derived-value.md
│   │   │       ├── animation-gesture-detector-press.md
│   │   │       ├── animation-gpu-properties.md
│   │   │       ├── design-system-compound-components.md
│   │   │       ├── fonts-config-plugin.md
│   │   │       ├── imports-design-system-folder.md
│   │   │       ├── js-hoist-intl.md
│   │   │       ├── list-performance-callbacks.md
│   │   │       ├── list-performance-function-references.md
│   │   │       ├── list-performance-images.md
│   │   │       ├── list-performance-inline-objects.md
│   │   │       ├── list-performance-item-expensive.md
│   │   │       ├── list-performance-item-memo.md
│   │   │       ├── list-performance-item-types.md
│   │   │       ├── list-performance-virtualize.md
│   │   │       ├── monorepo-native-deps-in-app.md
│   │   │       ├── monorepo-single-dependency-versions.md
│   │   │       ├── navigation-native-navigators.md
│   │   │       ├── react-compiler-destructure-functions.md
│   │   │       ├── react-compiler-reanimated-shared-values.md
│   │   │       ├── react-state-dispatcher.md
│   │   │       ├── react-state-fallback.md
│   │   │       ├── react-state-minimize.md
│   │   │       ├── rendering-no-falsy-and.md
│   │   │       ├── rendering-text-in-text-component.md
│   │   │       ├── scroll-position-no-state.md
│   │   │       ├── state-ground-truth.md
│   │   │       ├── ui-expo-image.md
│   │   │       ├── ui-image-gallery.md
│   │   │       ├── ui-measure-views.md
│   │   │       ├── ui-menus.md
│   │   │       ├── ui-native-modals.md
│   │   │       ├── ui-pressable.md
│   │   │       ├── ui-safe-area-scroll.md
│   │   │       ├── ui-scrollview-content-inset.md
│   │   │       └── ui-styling.md
│   │   ├── vercel-react-view-transitions
│   │   │   ├── AGENTS.md
│   │   │   ├── SKILL.md
│   │   │   ├── metadata.json
│   │   │   └── references
│   │   │       ├── css-recipes.md
│   │   │       ├── implementation.md
│   │   │       ├── nextjs.md
│   │   │       └── patterns.md
│   │   ├── verification-before-completion
│   │   │   └── SKILL.md
│   │   ├── vision
│   │   │   └── SKILL.md
│   │   ├── vue-application-structure
│   │   │   └── SKILL.md
│   │   ├── vue-component-design
│   │   │   └── SKILL.md
│   │   ├── vue-component-testing
│   │   │   └── SKILL.md
│   │   ├── web-design-guidelines
│   │   │   └── SKILL.md
│   │   ├── webhook-development
│   │   │   └── SKILL.md
│   │   ├── wireframe-prototyping
│   │   │   └── SKILL.md
│   │   ├── write-a-skill
│   │   │   └── SKILL.md
│   │   ├── write-adr
│   │   │   ├── SKILL.md
│   │   │   └── adr-template.md
│   │   ├── write-changelog
│   │   │   └── SKILL.md
│   │   ├── write-dockerfile
│   │   │   └── SKILL.md
│   │   ├── write-plan
│   │   │   ├── SKILL.md
│   │   │   └── plan-template.md
│   │   ├── write-readme
│   │   │   └── SKILL.md
│   │   ├── writing-beats
│   │   │   └── SKILL.md
│   │   ├── writing-fragments
│   │   │   └── SKILL.md
│   │   ├── writing-mstest-tests
│   │   │   └── SKILL.md
│   │   ├── writing-plans
│   │   │   ├── SKILL.md
│   │   │   └── plan-document-reviewer-prompt.md
│   │   ├── writing-shape
│   │   │   └── SKILL.md
│   │   ├── writing-skills
│   │   │   ├── SKILL.md
│   │   │   ├── anthropic-best-practices.md
│   │   │   ├── examples
│   │   │   │   └── CLAUDE_MD_TESTING.md
│   │   │   ├── graphviz-conventions.dot
│   │   │   ├── persuasion-principles.md
│   │   │   ├── render-graphs.js
│   │   │   └── testing-skills-with-subagents.md
│   │   ├── wycheproof
│   │   │   └── SKILL.md
│   │   ├── yara-rule-authoring
│   │   │   ├── SKILL.md
│   │   │   ├── examples
│   │   │   │   ├── MAL_Mac_ProtonRAT_Jan25.yar
│   │   │   │   ├── MAL_NPM_SupplyChain_Jan25.yar
│   │   │   │   ├── MAL_Win_Remcos_Jan25.yar
│   │   │   │   ├── SUSP_CRX_SuspiciousPermissions.yar
│   │   │   │   └── SUSP_JS_Obfuscation_Jan25.yar
│   │   │   ├── references
│   │   │   │   ├── crx-module.md
│   │   │   │   ├── dex-module.md
│   │   │   │   ├── performance.md
│   │   │   │   ├── strings.md
│   │   │   │   ├── style-guide.md
│   │   │   │   └── testing.md
│   │   │   ├── scripts
│   │   │   │   ├── atom_analyzer.py
│   │   │   │   ├── pyproject.toml
│   │   │   │   └── yara_lint.py
│   │   │   └── workflows
│   │   │       └── rule-development.md
│   │   ├── zeroize-audit
│   │   │   ├── SKILL.md
│   │   │   ├── configs
│   │   │   │   ├── c.yaml
│   │   │   │   ├── default.yaml
│   │   │   │   └── rust.yaml
│   │   │   ├── prompts
│   │   │   │   ├── report_template.md
│   │   │   │   ├── system.md
│   │   │   │   └── task.md
│   │   │   ├── references
│   │   │   │   ├── compile-commands.md
│   │   │   │   ├── detection-strategy.md
│   │   │   │   ├── ir-analysis.md
│   │   │   │   ├── mcp-analysis.md
│   │   │   │   ├── poc-generation.md
│   │   │   │   └── rust-zeroization-patterns.md
│   │   │   ├── schemas
│   │   │   │   ├── input.json
│   │   │   │   └── output.json
│   │   │   ├── tools
│   │   │   │   ├── analyze_asm.sh
│   │   │   │   ├── analyze_cfg.py
│   │   │   │   ├── analyze_heap.sh
│   │   │   │   ├── analyze_ir_semantic.py
│   │   │   │   ├── diff_ir.sh
│   │   │   │   ├── diff_rust_mir.sh
│   │   │   │   ├── emit_asm.sh
│   │   │   │   ├── emit_ir.sh
│   │   │   │   ├── emit_rust_asm.sh
│   │   │   │   ├── emit_rust_ir.sh
│   │   │   │   ├── emit_rust_mir.sh
│   │   │   │   ├── extract_compile_flags.py
│   │   │   │   ├── generate_poc.py
│   │   │   │   ├── mcp
│   │   │   │   │   └── ...
│   │   │   │   ├── scripts
│   │   │   │   │   └── ...
│   │   │   │   ├── track_dataflow.sh
│   │   │   │   └── validate_rust_toolchain.sh
│   │   │   └── workflows
│   │   │       ├── phase-0-preflight.md
│   │   │       ├── phase-1-source-analysis.md
│   │   │       ├── phase-2-compiler-analysis.md
│   │   │       ├── phase-3-interim-report.md
│   │   │       ├── phase-4-poc-generation.md
│   │   │       ├── phase-5-poc-validation.md
│   │   │       ├── phase-6-final-report.md
│   │   │       └── phase-7-test-generation.md
│   │   └── zoom-out
│   │       └── SKILL.md
│   └── workflows
│       └── graphify.md
├── .cursor
│   └── rules
│       ├── GitSync.mdc
│       └── reposignal.mdc
├── .env.example
├── .superpowers
│   └── brainstorm
│       └── 1723122729-1780184178.25699
│           ├── content
│           │   ├── dashboard-structure.html
│           │   ├── design-summary.html
│           │   ├── drafts-page.html
│           │   ├── layout-approaches.html
│           │   ├── project-cards-page.html
│           │   ├── repositories-page.html
│           │   └── settings-audit-pages.html
│           └── state
│               ├── server-info
│               └── server-info.json
├── AGENTS.md
├── ANALYSIS_SUMMARY.md
├── AUTH_CONFIG_FIX.md
├── BUTTON_AUDIT_REPORT.md
├── DEPLOYMENT_STATUS.md
├── DEPLOYMENT_SUMMARY.md
├── DOCUMENTATION_INDEX.md
├── FINAL_DEPLOYMENT_CHECKLIST.md
├── GITHUB_APP_DEBUG_GUIDE.md
├── GITHUB_APP_FIX_PLAN.md
├── GITHUB_APP_IMPLEMENTATION_COMPLETE.md
├── GITHUB_APP_INSTALLATION_DEBUG.md
├── GitSync.code-workspace
├── KNOWN_ISSUES_AND_GAPS.md
├── OAUTH_ROOT_CAUSE.md
├── OAUTH_VERIFICATION_COMPLETE.md
├── PHASES_8-12_COMPLETION_REPORT.md
├── PRODUCTION_READINESS_REPORT.md
├── QUICK_REFERENCE.md
├── RESILIENCE_REVIEW.md
├── VERCEL_DEPLOYMENT_CHECKLIST.md
├── Vercel_Fix_Report.md
├── apps
│   ├── api
│   │   ├── .wrangler
│   │   │   └── state
│   │   │       └── v3
│   │   │           └── ...
│   │   ├── eslint.config.mjs
│   │   ├── nest-cli.json
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── auth
│   │   │   │   └── middleware.ts
│   │   │   ├── index.ts
│   │   │   ├── lib
│   │   │   │   ├── encryption.ts
│   │   │   │   └── validation.ts
│   │   │   ├── posthog.ts
│   │   │   └── routes
│   │   │       ├── account.ts
│   │   │       ├── drafts.ts
│   │   │       ├── github-app.ts
│   │   │       ├── github.ts
│   │   │       └── linkedin.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   ├── tsconfig.build.json
│   │   ├── tsconfig.json
│   │   └── wrangler.toml
│   └── web
│       ├── AGENTS.md
│       ├── CLAUDE.md
│       ├── eslint.config.mjs
│       ├── lint-results.txt
│       ├── next.config.ts
│       ├── package.json
│       ├── playwright.config.ts
│       ├── postcss.config.mjs
│       ├── public
│       │   ├── file.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   └── window.svg
│       ├── src
│       │   ├── app
│       │   │   ├── api
│       │   │   │   └── ...
│       │   │   ├── dashboard
│       │   │   │   └── ...
│       │   │   ├── error.tsx
│       │   │   ├── favicon.ico
│       │   │   ├── globals.css
│       │   │   ├── layout.tsx
│       │   │   ├── loading.tsx
│       │   │   ├── page.tsx
│       │   │   └── sign-in
│       │   │       └── ...
│       │   ├── auth.config.ts
│       │   ├── auth.ts
│       │   ├── components
│       │   │   ├── DashboardSidebar.tsx
│       │   │   ├── DashboardTopBar.tsx
│       │   │   ├── animated-metric-card.tsx
│       │   │   ├── bento-card.tsx
│       │   │   ├── dashboard-content.tsx
│       │   │   ├── dashboard-shell.tsx
│       │   │   ├── dashboard-sidebar.tsx
│       │   │   ├── dashboard-topbar.tsx
│       │   │   ├── dynamic-orbit.tsx
│       │   │   ├── empty-state.tsx
│       │   │   ├── error-boundary.tsx
│       │   │   ├── generative-art-scene.tsx
│       │   │   ├── hero-section.tsx
│       │   │   ├── integration-status-card.tsx
│       │   │   ├── loading-states.tsx
│       │   │   ├── notification-panel.tsx
│       │   │   ├── pipeline-status-tracker.tsx
│       │   │   ├── profile-dropdown.tsx
│       │   │   ├── project-card-generator.tsx
│       │   │   ├── project-score-ring.tsx
│       │   │   ├── repo-signal-card.tsx
│       │   │   ├── session-provider.tsx
│       │   │   ├── signal-orbit-fallback.tsx
│       │   │   ├── signal-orbit-panel.tsx
│       │   │   ├── signal-orbit-scene.tsx
│       │   │   ├── typography.tsx
│       │   │   └── user-menu.tsx
│       │   ├── consumer.ts
│       │   ├── dlq_handler.ts
│       │   ├── lib
│       │   │   ├── GitSync-api.ts
│       │   │   ├── api-client.ts
│       │   │   ├── api-response.ts
│       │   │   ├── api-sign.ts
│       │   │   ├── dashboard-data.ts
│       │   │   ├── design-tokens.ts
│       │   │   ├── linkedin-oauth.ts
│       │   │   ├── rate-limit.ts
│       │   │   └── reposignal-api.ts
│       │   ├── middleware.ts
│       │   └── types
│       │       └── next-auth.d.ts
│       ├── tailwind.config.ts
│       ├── tests
│       │   └── e2e
│       │       ├── accessibility.spec.ts
│       │       ├── auth.spec.ts
│       │       ├── navigation.spec.ts
│       │       └── ui-elements.spec.ts
│       └── tsconfig.json
├── docker-compose.yml
├── docs
│   ├── ARCHITECTURE.md
│   ├── GITSYNC-DASHBOARD-REDESIGN-DESIGN.md
│   ├── IMPLEMENTATION_BACKLOG.md
│   ├── KOYEB_SETUP.md
│   ├── MVP_LAUNCH_CONFIG.md
│   ├── PRODUCT_SPEC.md
│   ├── PROJECT_SKILLS.md
│   └── superpowers
│       ├── plans
│       │   ├── 2026-05-30-gitsync-signal-orbit.md
│       │   ├── 2026-05-31-gitsync-dashboard-redesign.md
│       │   └── dashboard-api-integration-plan.md
│       └── specs
│           └── 2026-05-30-gitsync-signal-orbit-design.md
├── domain-ts.txt
├── domain-typecheck.txt
├── image.png
├── infra
│   └── modules
│       ├── GitSync-core
│       │   ├── examples
│       │   │   └── basic
│       │   │       └── ...
│       │   ├── main.tf
│       │   ├── outputs.tf
│       │   ├── providers.tf
│       │   ├── variables.tf
│       │   └── versions.tf
│       └── reposignal-core
│           ├── examples
│           │   └── basic
│           │       └── ...
│           ├── main.tf
│           ├── outputs.tf
│           ├── providers.tf
│           ├── variables.tf
│           └── versions.tf
├── integrations-ts.txt
├── integrations-typecheck.txt
├── package.json
├── packages
│   ├── ai
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── __tests__
│   │   │   │   └── ai.service.spec.ts
│   │   │   ├── ai.service.ts
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   ├── config
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── env.ts
│   │   │   └── index.ts
│   │   ├── tsconfig.build.json
│   │   └── tsconfig.json
│   ├── db
│   │   ├── package.json
│   │   ├── prisma
│   │   │   └── schema.prisma
│   │   ├── src
│   │   │   ├── generated
│   │   │   │   └── client
│   │   │   │       └── ...
│   │   │   └── index.ts
│   │   ├── test-prisma.js
│   │   ├── test.js
│   │   └── tsconfig.json
│   ├── domain
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── __tests__
│   │   │   │   ├── encryption.spec.ts
│   │   │   │   └── signals.spec.ts
│   │   │   ├── auth
│   │   │   │   ├── encryption.ts
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   └── signals
│   │   │       ├── fixtures.ts
│   │   │       ├── index.ts
│   │   │       ├── scorers.ts
│   │   │       └── types.ts
│   │   └── tsconfig.json
│   ├── integrations
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── github
│   │   │   │   ├── client.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── sync.ts
│   │   │   ├── index.ts
│   │   │   └── linkedin
│   │   │       ├── index.ts
│   │   │       └── publisher.ts
│   │   └── tsconfig.json
│   ├── prompts
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── index.ts
│   │   │   ├── schemas.ts
│   │   │   └── templates
│   │   │       ├── evidence-check.hbs
│   │   │       ├── project-card.hbs
│   │   │       ├── project-update.hbs
│   │   │       ├── release-notes.hbs
│   │   │       └── summary.hbs
│   │   ├── summary.txt
│   │   └── tsconfig.json
│   ├── testing
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   └── ui
│       ├── package.json
│       ├── src
│       │   └── index.ts
│       └── tsconfig.json
├── pnpm-workspace.yaml
├── scripts
│   └── load-env.ps1
├── skills-lock.json
├── testing-ts.txt
├── testing-typecheck.txt
├── turbo.json
├── ui-ts.txt
├── ui-typecheck.txt
└── wrangler.jsonc.backup
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above

### Python
1. Install Python (v3.10+ recommended)
2. `python -m venv venv && source venv/bin/activate`  (Windows: `venv\Scripts\activate`)
3. `pip install -r requirements.txt`

### Docker
1. `docker build -t my-app .`
2. `docker run -p 3000:3000 my-app`

## 🚢 Deployment

### Docker
```bash
docker build -t gitsync .
docker run -p 3000:3000 gitsync
```

### Docker Compose
```bash
docker compose up -d
```

> ⚙️ CI/CD is configured via GitHub Actions (see `.github/workflows/`).

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/redwan2003-bot/GitSync.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

---
*This README was generated with ❤️ by [ReadmeBuddy](https://readmebuddy.com)*
