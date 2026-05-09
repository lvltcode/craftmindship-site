import { useState } from "react";
import { ExternalLink, Code } from "lucide-react";

const externalLinks = [
  { label: "Live App", href: "https://cadence-osa.com", icon: ExternalLink },
  { label: "Prototype", href: "https://cadence-prototype-psi.vercel.app", icon: ExternalLink },
  { label: "GitHub", href: "https://github.com/lvltcode/cadence-osa", icon: Code },
];

const architectureDecisions = [
  {
    decision: "Teacher-first",
    detail: "org_id nullable everywhere",
    reason: "Teachers can use Cadence independently without org adoption",
  },
  {
    decision: "Lesson = source of truth",
    detail: "piece_progress.last_updated_lesson_id NOT NULL",
    reason: "No floating progress updates — essential for learning record integrity",
  },
  {
    decision: "Magic link auth",
    detail: "No passwords",
    reason: "Teachers and parents are non-technical — zero password friction",
  },
  {
    decision: "Status model",
    detail: "introduced \u2192 working \u2192 can_play \u2192 polished",
    reason: "Mastery-based progression, true to Suzuki method",
  },
  {
    decision: "Private fields",
    detail: "teacher_observation excluded from parent queries",
    reason: "Teachers need private space — this drives adoption",
  },
  {
    decision: "Parent-safe views",
    detail: "Database views, not UI guards",
    reason: "Defense in depth — private fields excluded at DB layer",
  },
  {
    decision: "Date type",
    detail: "date not timestamptz for lesson dates",
    reason: "Prevents timezone shift in Eastern time",
  },
  {
    decision: "Skills \u2260 Pieces",
    detail: "Architecturally separate tables",
    reason: "Suzuki tracks foundational technique independently of repertoire",
  },
];

const techStack = [
  { layer: "Frontend", tools: "React 18 + TypeScript + Vite + Tailwind + shadcn/ui" },
  { layer: "Backend", tools: "Supabase (PostgreSQL + RLS + Auth + Edge Functions)" },
  { layer: "Deploy", tools: "Vercel (auto-deploy from main)" },
  { layer: "Testing", tools: "Playwright (E2E for critical flows)" },
  { layer: "Auth", tools: "Supabase magic link (no passwords)" },
];

const builderRoles = [
  {
    who: "Me (Luke)",
    role: "Product owner, architect, QA",
    did: "Product planning (5 docs before code), data model design, RLS policy architecture, scope decisions, all QA, pilot strategy",
  },
  {
    who: "Claude Code",
    role: "Precision backend + targeted patches",
    did: "SQL migrations, RLS policies, Edge Functions, multi-file refactors, git operations, bug fixes",
  },
  {
    who: "Lovable",
    role: "UI scaffolding",
    did: "Initial component generation, page layouts, form structures — all from detailed prompts. Manual direction needed for spacing, hierarchy, and empty states",
  },
  {
    who: "Supabase",
    role: "Backend platform",
    did: "24 tables, row-level security, magic link auth, parent-safe views, Edge Functions (Resend API for invites)",
  },
];

function ArtifactEmbed({ src, title, height = "480px" }: { src: string; title: string; height?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
        <p className="text-sm text-gray-500">{title}</p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-medium text-gray-900 underline"
        >
          Open in new tab &rarr;
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <iframe
        src={src}
        title={title}
        className="w-full border-0"
        style={{ height }}
        onError={() => setFailed(true)}
        sandbox="allow-scripts"
      />
    </div>
  );
}

export default function Cadence() {
  const [prototypeFailed, setPrototypeFailed] = useState(false);

  return (
    <div className="px-6 py-16 sm:py-24">
      {/* Header */}
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cadence
          </h1>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            Production
          </span>
        </div>
        <p className="mt-3 text-lg text-gray-600">
          Lesson continuity and practice management for Suzuki music teachers and parents.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <hr className="my-12 border-gray-200" />

      {/* Problem + Solution */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          The Problem
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          After every lesson, the learning stops. The teacher knows what happened.
          The parent wasn't there — or didn't fully understand. The child comes home
          and nothing continues until next week.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Over a year of Suzuki violin lessons, the parent's job is to run daily practice —
          but they have almost no real information to do it well. Teachers manage 15–30 students
          across a season. Schedules change, makeups get missed, parents ask the same questions
          by text. None of this has a system.
        </p>

        <h2 className="mt-12 text-sm font-medium tracking-wide text-gray-500 uppercase">
          What Cadence Does
        </h2>
        <div className="mt-4 space-y-4">
          {[
            {
              title: "Captures what happened in every lesson",
              desc: "Teacher writes 3–4 lines after each session: what we worked on, what to practice, how many minutes and days per week. Takes under 90 seconds.",
            },
            {
              title: "Delivers it to the parent immediately",
              desc: "Parent opens the app and sees this week's lesson note, practice goal, and current piece status. No searching, no asking.",
            },
            {
              title: "Tracks piece progression (Suzuki-native)",
              desc: "Each student has a live piece list. Teacher updates status: introduced \u2192 working \u2192 can_play \u2192 polished. Parents see progress in real terms.",
            },
            {
              title: "Keeps the schedule accurate",
              desc: "Teacher marks cancellations and makeups. Parent sees the updated schedule without a text chain.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500 italic">
          The lesson is the unit of value. Everything else is context around it.
          If the teacher writes a note, the parent has clarity. If the parent has clarity,
          the child practices. That loop — lesson &rarr; note &rarr; practice &rarr; better student — is the product.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Prototype */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Interactive Prototype
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Click through the teacher and parent flows. No account needed.
        </p>
        <div className="mt-4">
          {prototypeFailed ? (
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
              <p className="text-sm text-gray-500">Prototype could not be embedded.</p>
              <a
                href="https://cadence-prototype-psi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-gray-900 underline"
              >
                Open in new tab &rarr;
              </a>
            </div>
          ) : (
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <iframe
                src="https://cadence-prototype-psi.vercel.app"
                title="Cadence interactive prototype"
                className="w-full border-0"
                style={{ height: "680px" }}
                onError={() => setPrototypeFailed(true)}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          )}
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Design Artifacts */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Design Artifacts
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Early design explorations generated during product planning.
        </p>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              Suzuki Book Color System
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              10-level color gradient from green (Book 1) to gold (Book 10).
              Used across student cards, piece lists, and progress indicators.
            </p>
            <div className="mt-3">
              <ArtifactEmbed
                src="/artifacts/suzuki_book_color_system.html"
                title="Suzuki Book Color System"
                height="520px"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">
              Student Card Layout Options
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Two density options for the teacher dashboard — single-row (20+ students)
              vs two-row (more readable with practice/status chips).
            </p>
            <div className="mt-3">
              <ArtifactEmbed
                src="/artifacts/student_card_compact_options.html"
                title="Student Card Compact Layout Options"
                height="640px"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Architecture Decisions */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Architecture Decisions
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Locked before build. Not revisited mid-sprint.
        </p>
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
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">
                    {row.decision}
                  </td>
                  <td className="py-3 pr-4 text-gray-600 align-top">{row.detail}</td>
                  <td className="py-3 text-gray-600 align-top">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Tech Stack */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Tech Stack
        </h2>
        <div className="mt-4">
          <table className="w-full text-sm">
            <tbody>
              {techStack.map((row) => (
                <tr key={row.layer} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap w-28">
                    {row.layer}
                  </td>
                  <td className="py-3 text-gray-600">{row.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Builder Roles */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          What I Built vs What the Tool Built
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          AI-assisted, not AI-autonomous. 80% of effort was planning; 20% was execution.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {builderRoles.map((role) => (
            <div key={role.who} className="rounded-lg border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">{role.who}</h3>
              <p className="mt-0.5 text-xs font-medium text-gray-500 uppercase">
                {role.role}
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{role.did}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <span className="font-medium">What AI is bad at here:</span> design taste
            and scope discipline. Every screen needed manual direction on spacing, hierarchy,
            and empty states. AI will build features you didn&apos;t ask for if prompts are
            slightly ambiguous.
          </p>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Status */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Current Status
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          In production at{" "}
          <a href="https://cadence-osa.com" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            cadence-osa.com
          </a>.
          Core lesson-practice-scheduling loop is functional. 24 tables, 3 roles,
          RLS-enforced access control. Next phase: user validation with Suzuki teachers
          in Ontario.
        </p>
      </section>
    </div>
  );
}
