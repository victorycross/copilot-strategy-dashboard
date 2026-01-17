# CLAUDE.md - Copilot Strategy Dashboard

## Project Overview
M365 Copilot governance and adoption strategy dashboard. Helps organizations plan, track, and measure their Microsoft Copilot rollout with focus on governance, risk assessment, and adoption metrics.

## Tech Stack
- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Package Manager**: bun (preferred) or npm

## Commands
```bash
bun install          # Install dependencies
bun run dev          # Start dev server
bun run build        # Production build
bun run lint         # Run ESLint
```

## Project Structure
```
src/
├── components/      # React components (shadcn/ui based)
├── hooks/           # Custom React hooks
├── lib/             # Utilities
├── pages/           # Route components
└── types/           # TypeScript interfaces
```

## Code Conventions
- Use TypeScript strict mode
- Prefer shadcn/ui components over custom implementations
- Keep components under 200 lines; extract logic to hooks
- Use Zod for form validation

## Domain Context
- **Copilot**: Microsoft 365 Copilot AI assistant
- **Adoption wave**: Phased rollout group (pilot → early adopters → general)
- **Governance controls**: Data classification, DLP, sensitivity labels
- **Risk factors**: Data exposure, oversharing, prompt injection
- **Metrics**: Usage rates, productivity gains, incident counts

## When Working on This Project
- Align with Microsoft's Copilot readiness framework
- Consider Canadian data residency requirements
- Governance recommendations should reference M365 admin center capabilities
- Dashboard should support executive-level summaries and detailed views
- Integration with Power Platform / Copilot Studio is in scope
