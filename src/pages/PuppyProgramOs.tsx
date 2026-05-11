import { useState } from "react";
import { ExternalLink, Code } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import ContentWithToc from "../components/ContentWithToc";

const externalLinks = [
  { label: "Case Study Source", href: "https://github.com/lvltcode/lukedang/blob/main/casestudies/puppy-program-os.md", icon: Code },
];

const alertRules = [
  { rule: "Missing socialization", condition: "No socialization logged for 8+ consecutive days (weeks 8\u201320)", severity: "Medium \u2192 High at 14 days" },
  { rule: "Jumping pattern", condition: "Jumping on 3 of last 5 log days", severity: "Medium" },
  { rule: "Potty regression", condition: "2+ accidents/day for 3 consecutive days (age >18 weeks)", severity: "Medium" },
  { rule: "Health flag", condition: "Vomiting or diarrhea on 2 consecutive days", severity: "High (immediate)" },
];

const architectureDecisions = [
  { decision: "Alert engine in Postgres", detail: "Triggers, not Edge Functions", reason: "Can\u2019t be bypassed by frontend bugs, executes atomically with log save, deduplication via partial unique index" },
  { decision: "Append-only audit trail", detail: "INSERT-only on alert_events", reason: "Full history for every intervention \u2014 no UPDATE, no DELETE from app layer" },
  { decision: "Magic link auth", detail: "No passwords", reason: "Foster population is non-technical \u2014 password management would generate support tickets" },
  { decision: "Multi-tenant from day one", detail: "org_id on every table", reason: "Second organization can onboard without schema changes" },
  { decision: "RLS enforced at DB", detail: "Row-Level Security on all 18 tables", reason: "Organizations can never see each other\u2019s data, even if frontend has bugs" },
  { decision: "Rule-based content", detail: "46 modules with unlock conditions", reason: "Fosters see content when relevant, not a wall of PDFs. Staff add modules without a developer" },
];

const techStack = [
  { layer: "Frontend", tools: "React + TypeScript + Tailwind + shadcn/ui" },
  { layer: "Backend", tools: "Supabase (PostgreSQL + RLS + Triggers + Auth)" },
  { layer: "Deploy", tools: "Vercel (auto-deploy from main)" },
  { layer: "Auth", tools: "Supabase magic link (no passwords)" },
  { layer: "Alert Engine", tools: "Postgres triggers (fn_evaluate_all_rules)" },
];

function ArtifactEmbed({ src, title, height = "600px" }: { src: string; title: string; height?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
        <p className="text-sm text-gray-500">{title}</p>
        <a href={src} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-gray-900 underline">
          Open in new tab &rarr;
        </a>
      </div>
    );
  }
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <iframe src={src} title={title} className="w-full border-0" style={{ height }} onError={() => setFailed(true)} sandbox="allow-scripts" />
    </div>
  );
}

export default function PuppyProgramOs() {
  usePageMeta("Puppy Program OS", "Operational system for a dog training academy. Prototype case study with daily logs, alert logic, and staff workflows.", { ogImage: "/images/og/og-puppy-program.png", canonical: "/work/puppy-program-os" });

  return (
    <div className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      {/* Header */}
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <img src="/images/projects/puppy-program/logo.svg" alt="Puppy Program OS logo" className="h-12 w-auto" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Puppy Program OS
          </h1>
          <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-600/20">
            Prototype
          </span>
        </div>
        <p className="mt-3 text-lg text-gray-600">
          Automated foster management platform for a national guide dog organization.
          Daily logging, behavioral alerts, and contextual content &mdash; replacing email chains and PDF manuals.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://puppy-prototype.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-[44px] rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            <ExternalLink size={16} />
            View Prototype
          </a>
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[44px] rounded-lg border border-gray-300 px-3.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Prototype password: <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-700">ZuriLion2026</code>
        </p>
      </header>

      <hr className="my-8 border-gray-200" />

      <ContentWithToc>
      {/* Problem */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">The Problem</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          A national guide dog organization in Canada runs a foster program where volunteer
          families raise puppies for 12&ndash;18 months before the dogs enter formal training.
          Coordinators manage dozens of foster families simultaneously, tracking puppy development,
          behavioral patterns, health events, and socialization milestones &mdash; mostly through
          email chains, PDF manuals, and manual check-ins.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The coordination overhead is significant. Fosters forget to report issues. Staff spend
          hours chasing updates. Behavioral problems go undetected for weeks because there&apos;s
          no structured data flowing from foster homes back to the organization. By the time a
          pattern surfaces, the intervention window has narrowed.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The brief: replace the static manual and email workflow with a structured digital
          system &mdash; daily logging, automated behavioral alerts, contextual learning content,
          and a staff dashboard that surfaces what needs attention without anyone having to ask.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* System Design */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">System Design</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Foster App (mobile-first)</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Volunteer families log daily observations &mdash; potty training, feeding, behavior,
              health, socialization &mdash; through a chip-based input interface designed to
              complete in under 90 seconds. No typing, no forms. Content modules unlock
              progressively based on the puppy&apos;s age, replacing the static PDF manual.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Staff App (desktop-first)</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Coordinators open their day to an auto-populated dashboard showing which puppies
              need attention, ranked by urgency. Alert badges, support queue counters, and foster
              compliance indicators are all live. Staff never need to ask &ldquo;how is the puppy
              doing&rdquo; &mdash; the data tells them before the foster does.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900">Core Loop</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Foster saves daily log &rarr; Postgres triggers evaluate behavioral rules &rarr;
            alerts auto-generate if patterns match &rarr; staff see alerts on dashboard &rarr;
            staff intervene with protocol checklists &rarr; foster acknowledges and acts.
          </p>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Design Artifacts */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Design Artifacts</h2>
        <p className="mt-2 text-sm text-gray-500">
          Interactive mockups generated during product planning.
        </p>
        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Product Overview</h3>
            <p className="mt-1 text-sm text-gray-500">
              Cover page, design system, UI components, alert rules, and data model.
            </p>
            <div className="mt-3">
              <ArtifactEmbed
                src="/artifacts/puppy-prototype/index.html"
                title="Puppy Program OS — Product Overview"
                height="700px"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Interactive UI Mockup</h3>
            <p className="mt-1 text-sm text-gray-500">
              Tabbed prototype showing both Foster and Staff app screens. Click through to explore each role.
            </p>
            <div className="mt-3">
              <ArtifactEmbed
                src="/artifacts/puppy-prototype/puppy_program_os_ui.html"
                title="Puppy Program OS — Interactive UI Mockup"
                height="700px"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Alert Engine */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Alert Engine</h2>
        <p className="mt-2 text-sm text-gray-500">
          Four behavioral rules run as Postgres triggers &mdash; not in application code.
          Deduplication via partial unique index guarantees one open alert per puppy per rule type.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-3 pr-4 font-medium text-gray-900">Rule</th>
                <th className="py-3 pr-4 font-medium text-gray-900">Condition</th>
                <th className="py-3 font-medium text-gray-900">Severity</th>
              </tr>
            </thead>
            <tbody>
              {alertRules.map((row) => (
                <tr key={row.rule} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">{row.rule}</td>
                  <td className="py-3 pr-4 text-gray-600 align-top">{row.condition}</td>
                  <td className="py-3 text-gray-600 align-top whitespace-nowrap">{row.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Architecture Decisions */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Architecture Decisions</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-3 pr-4 font-medium text-gray-900">Decision</th>
                <th className="py-3 pr-4 font-medium text-gray-900">What</th>
                <th className="py-3 font-medium text-gray-900">Why</th>
              </tr>
            </thead>
            <tbody>
              {architectureDecisions.map((row) => (
                <tr key={row.decision} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">{row.decision}</td>
                  <td className="py-3 pr-4 text-gray-600 align-top">{row.detail}</td>
                  <td className="py-3 text-gray-600 align-top">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* What Makes It Interesting */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">What Makes This Interesting</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">The 90-second constraint shaped everything</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              If the daily log takes longer than 90 seconds, foster compliance drops and the alert
              engine starves for data. The entire input design &mdash; chip-based taps instead of
              text fields, six sections with sensible defaults, one-thumb mobile layout &mdash;
              exists to protect that completion time. UX decisions are data pipeline decisions.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Domain knowledge mattered</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              I raised a puppy (Zuri) through the organization&apos;s foster program. That firsthand
              experience shaped the daily log structure, the alert thresholds, and the content
              unlock timing in ways that pure product research wouldn&apos;t have surfaced. Knowing
              that fosters check the app while holding a leash with one hand informed the 90-second,
              one-thumb design constraint.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Security in a non-profit context</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              PIPEDA-compliant data minimization: no medical records, no SIN, no financial data.
              React Query cache keys include orgId to prevent cross-org data bleed in shared
              browser sessions. Cache cleared on sign-out.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Tech Stack */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Tech Stack</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {techStack.map((row) => (
                <tr key={row.layer} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap w-28">{row.layer}</td>
                  <td className="py-3 text-gray-600">{row.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Data Model */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Data Model</h2>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-sm font-mono text-gray-800 leading-relaxed">{`organizations
    \u2193
profiles (foster / staff / vet / org_admin)
    \u2193
puppies \u2192 daily_logs \u2192 fn_evaluate_all_rules (trigger)
    \u2193                         \u2193
content_modules           alerts \u2192 alert_events (append-only)
(46 seeded, rule-based     \u2193
 unlock by age/stage)   support_tickets
    \u2193
foster_stats + foster_achievements`}</pre>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Status */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Current Status</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          The prototype is live and was presented to program coordinators at the partner
          organization. The system was designed for a structured 1&ndash;2 month pilot with
          real foster workflows. 18 tables, 4 roles, RLS-enforced multi-tenancy, and a
          Postgres-native alert engine.
        </p>
      </section>
      </ContentWithToc>
    </div>
  );
}
