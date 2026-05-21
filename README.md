# Craftmindship

Portfolio site for Luke Dang — AI Product Builder and Technical Product Manager.

**Live:** [craftmindship.com](https://craftmindship.com)

## What's on the site

### Case studies (`/work`)

| Route | Project | Status |
|---|---|---|
| `/work/cadence` | Lesson continuity app for private music teachers and parents. Supabase/RLS, email OTP, parent-safe views, real teacher pilot. | Production |
| `/work/puppy-program-os` | Operational system for a guide dog training organization. Postgres alert engine, multi-tenant schema with RLS. | Prototype |
| `/work/multi-agent-workflow` | Documented methodology for coordinating multiple AI models across planning, implementation, QA, and deployment. | Methodology |

### Analysis (`/analysis`)

| Route | Topic |
|---|---|
| `/analysis/anthropic-academy-skill-formation` | Why AI education needs living learning infrastructure, not just courses and certificates. |
| `/analysis/coding-bootcamps-dying` | Business model analysis of coding bootcamps and four futures as AI compresses the beginner layer. |
| `/analysis/td-insurance-telematics` | Product teardown of TD MyAdvantage driving score — incentive misalignment and proxy metric problems. |
| `/analysis/ai-repair-intake-marketplace` | Market intelligence and MVP experiment on contractor lead quality and subscription-first monetization. |

### Lab (`/lab`)

Standalone interactive artifacts: design systems, data flow diagrams, market intelligence visuals. Built as static HTML files in `public/artifacts/`.

### Other pages

- `/about` — background, build process, target roles
- `/work` — case study index

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| Prerender | Build-time SSG via `scripts/prerender.mjs` |
| Deploy | Vercel (auto-deploy from `main`) |
| Analytics | Vercel Analytics |
| OG/Social | Edge middleware for crawler-specific responses |
| Sitemap | Static `public/sitemap.xml` + Google Search Console |

No database, no auth, no CMS. Content lives in TSX components and static HTML artifacts.

## Architecture

```
Browser / Googlebot / AI tool
        │
        ▼
   Vercel Edge
        │
        ├─ Social crawler (Twitter, Facebook, LinkedIn, etc.)
        │     └─ middleware.ts returns OG-only HTML
        │
        └─ Normal visitor / Googlebot
              └─ Prerendered static HTML (real content in <div id="root">)
                    └─ React hydrates on client
```

- `scripts/prerender.mjs` generates static HTML for all known routes at build time. Each route gets a full server-rendered HTML file so search engines and AI tools see real content without JavaScript.
- `middleware.ts` intercepts social crawler user-agents and returns a lightweight HTML page with OG/Twitter meta tags. Normal visitors and Googlebot receive the prerendered HTML directly.
- The build command (`npm run build`) runs TypeScript checks, Vite production build, and prerendering in sequence.

## Artifacts

Some case studies link to standalone HTML files under `public/artifacts/` for full artifact views (design systems, data flow diagrams, credential models). Case study pages use compact preview cards that link out to these files rather than embedding large iframes inline.

The Lab page (`/lab`) also links to artifacts in the same directory.

## Adding a new page

The site depends on multiple files staying in sync. Checklist:

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add route to `scripts/prerender.mjs` routes array
4. Add OG metadata to `middleware.ts`
5. Add or update OG image in `public/images/og/` if needed
6. Add route to `public/sitemap.xml`
7. Run `npm run build` — verify prerender succeeds
8. Check for hydration errors locally
9. Push to `main` after review

## Local development

```bash
npm install
npm run dev        # Vite dev server with HMR
npm run build      # TypeScript + Vite build + prerender
npm run lint       # ESLint
npm run preview    # Serve production build locally
```

## Development workflow

Content and implementation are maintained through an AI-assisted development workflow using ChatGPT, Claude, Claude Code, Codex, and local QA. Planning artifacts drive build sessions. AI tools execute against specs, not ad-hoc prompts. See the [Multi-Agent Workflow case study](https://craftmindship.com/work/multi-agent-workflow) for the full methodology.

## Related repos

- [cadence-osa](https://github.com/lvltcode/cadence-osa) — Cadence production app
- [lukedang](https://github.com/lvltcode/lukedang) — case study source documents and planning artifacts

## Contact

- [craftmindship.com](https://craftmindship.com)
- [LinkedIn](https://www.linkedin.com/in/dangtranlevu/)
- [GitHub](https://github.com/lvltcode)
- [Substack](https://craftmindship.substack.com)
- hello@craftmindship.com
