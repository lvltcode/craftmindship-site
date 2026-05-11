# AGENTS.md — Craftmindship Portfolio

> Guardrails for AI agents (Codex, Claude Code) operating on this repo.

## Project Context

| Field | Value |
|-------|-------|
| Repo | `lvltcode/craftmindship-site` |
| Site | `https://craftmindship.com/` |
| Stack | Vite + React + TypeScript + Tailwind |
| Deploy | Vercel |
| Supabase | None |

## Audit Mode

All automated runs are **report-only** unless explicitly approved by the operator.

## Rules

### Always

- Read this file first before any action.
- Run safe checks only: `npm run lint`, `npm run build`, `npm test`.
- Report findings in Markdown format.
- Flag issues with severity (Low / Medium / High / Critical).
- Respect existing code style and conventions.

### Never

- Do not push to main.
- Do not merge branches.
- Do not modify production code without explicit approval.
- Do not redesign UI or rewrite copy.
- Do not add, remove, or upgrade dependencies.
- Do not touch secrets or environment variables.
- Do not create PRs without human review.
- Do not auto-patch based on audit findings.
- Do not run destructive commands (rm, reset, force-push).

### Report Output

Save audit reports to: `ops/reports/YYYY-MM-DD-audit-type.md`

### Escalation

If a Critical finding is detected:
1. Include it in the report with full context.
2. Do not attempt to fix it.
3. Mark it as requiring human review.

## Owner

Operator: Luke (lvltcode)
Primary tool: Codex + Claude Code
