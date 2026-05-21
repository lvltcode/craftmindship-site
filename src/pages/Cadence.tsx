import { useState } from "react";
import { ExternalLink, Code } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import ContentWithToc from "../components/ContentWithToc";
import AtAGlance from "../components/AtAGlance";
import ArtifactPreviewCard from "../components/ArtifactPreviewCard";

const externalLinks = [
  { label: "Live App", href: "https://cadence-osa.com", icon: ExternalLink },
  { label: "Prototype", href: "https://cadence-prototype-psi.vercel.app", icon: ExternalLink },
  { label: "Case Study Source", href: "https://github.com/lvltcode/lukedang/blob/main/casestudies/cadence.md", icon: Code },
];

const architectureDecisions = [
  { decision: "org_id nullable everywhere", reason: "Teacher can use Cadence independently \u2014 no org required for adoption" },
  { decision: "piece_progress.last_updated_lesson_id NOT NULL", reason: "Every progress update ties to a real lesson \u2014 no floating data, no orphaned progress entries" },
  { decision: "date type, not timestamptz for lesson dates", reason: "A parent in Ontario should see \u201cMay 9\u201d not \u201cMay 8\u201d because of timezone conversion. This one decision prevented the single most common date bug in the app." },
  { decision: "Parent-safe database views", reason: "Private fields excluded at the database layer, not just the UI \u2014 defense in depth" },
  { decision: "Skills architecturally separate from pieces", reason: "Technique transfers across repertoire. A child can polish Twinkle but still need work on bow hold. These are different axes of progress." },
  { decision: "String-split date parsing, never new Date() on bare strings", reason: "JavaScript\u2019s new Date('2026-05-09') parses as UTC midnight, which shifts to May 8 in Eastern Time. Every date display in Cadence avoids this trap." },
];

const techStack = [
  { layer: "Frontend", tools: "React 18 + TypeScript + Vite + Tailwind + shadcn/ui", role: "Mobile-first web app" },
  { layer: "Backend", tools: "Supabase (PostgreSQL + RLS + Edge Functions)", role: "Data, auth, permissions" },
  { layer: "Auth", tools: "Passwordless email OTP", role: "Zero-friction login" },
  { layer: "Deploy", tools: "Vercel (auto-deploy from main branch)", role: "Continuous deployment" },
  { layer: "QA", tools: "Playwright + manual mobile testing", role: "Browser automation + real-device QA" },
  { layer: "DNS/Email", tools: "Cloudflare + Resend", role: "Branded auth emails from auth.cadence-osa.com" },
];

const buildRoles = [
  { role: "Planning + architecture", tool: "Claude (chat)", did: "Product discovery, SQL/RLS design, prompt engineering, architecture decisions" },
  { role: "Frontend + feature execution", tool: "Lovable (Groups 1\u20137), then Claude Code", did: "UI scaffolding, component builds, feature implementation" },
  { role: "Backend precision", tool: "Claude Code", did: "RLS policies, Edge Functions, targeted fixes, git operations" },
  { role: "QA", tool: "Playwright + manual mobile", did: "Automated browser testing + real-device verification" },
  { role: "Overflow / refactor", tool: "Codex", did: "Secondary patches, code cleanup" },
];


export default function Cadence() {
  const [prototypeFailed, setPrototypeFailed] = useState(false);
  usePageMeta("Cadence", "Live pilot app for music teacher-parent lesson continuity. Supabase/RLS, email OTP, parent-safe views, and real teacher pilot.", { ogImage: "/images/og/og-cadence.png", canonical: "/work/cadence" });

  return (
    <div className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      {/* Hero */}
      <header className="prose-narrow">
        <div className="flex flex-wrap items-center gap-3">
          <img src="/images/projects/cadence/logo.jpg" alt="Cadence logo" className="h-12 w-auto" />
          <h1 className="page-title">
            Cadence
          </h1>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            Production
          </span>
        </div>
        <p className="mt-3 text-lg text-gray-600">
          A production music-education pilot built from months of parent-side observation,
          then shipped as the smallest reliable system to reduce invisible teacher admin work.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 min-h-[44px] text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <AtAGlance
        rows={[
          ["Role", "Solo founder \u00b7 product builder \u00b7 technical PM"],
          ["Status", "Production pilot \u2014 live app, first teacher onboarding"],
          ["Domain", "Music education \u00b7 workflow SaaS"],
          ["Stack", "React \u00b7 TypeScript \u00b7 Supabase \u00b7 PostgreSQL RLS \u00b7 Edge Functions \u00b7 Resend \u00b7 Vercel"],
          ["What I did", "Problem discovery \u2192 system design \u2192 AI-assisted build \u2192 pilot deployment \u2192 real-user onboarding"],
        ]}
        links={<>
          <a href="https://cadence-osa.com" target="_blank" rel="noopener noreferrer" className="text-[#2D6A4F] hover:underline">Live app</a>
          {" \u00b7 "}
          <a href="https://cadence-prototype-psi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#2D6A4F] hover:underline">Prototype</a>
          {" \u00b7 "}
          <a href="https://github.com/lvltcode/cadence-osa" target="_blank" rel="noopener noreferrer" className="text-[#2D6A4F] hover:underline">GitHub source</a>
        </>}
      />

      <ContentWithToc>
      {/* 1: Origin */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Origin</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          I joined the music lesson workflow as a parent in September 2025. My child started
          Suzuki violin, and I bought a violin to practice alongside them &mdash; not to become
          a violinist, but to understand the learning loop from the parent side. By March 2026,
          after months of watching the same operational burden repeat, I started building Cadence.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The pilot teacher &mdash; a long-time private violin/viola teacher with Suzuki and RCM
          students &mdash; was carrying invisible operational work: scheduling, remembering lesson
          context, coordinating with parents, and keeping each child moving across the week. Cadence
          started from a personal question about measuring a child&apos;s progress, but became a
          focused product when I saw the bigger bottleneck: teacher admin burden was pulling
          attention away from teaching itself.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The focused build took two weeks. The speed came from prior context, not from skipping
          product thinking. Most of the schema shape, role boundaries, and &ldquo;what to leave
          out&rdquo; decisions had already been made during the six months of observation. The
          2-week sprint was implementation, not discovery.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 2: Adoption Risk */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Adoption Risk Was Higher Than Technical Risk
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          The pilot teacher has low confidence with web apps and a phone-first email workflow.
          Building working software was not the hard part. Making it safe to try, easy to repeat,
          and impossible to lose trust over &mdash; that was the hard part.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Every architecture decision, every &ldquo;no,&rdquo; and every onboarding artifact in
          this case study was shaped by one principle: if she stops using it, it does not matter
          what was built. Technical elegance is irrelevant if the first real user cannot get in
          the door.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 3: The Problem */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">The Problem</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          After every lesson, the learning stops.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The teacher knows what happened. The parent wasn&apos;t there &mdash; or was there
          but didn&apos;t fully understand. The child comes home and nothing continues until
          next week. Over a year of Suzuki violin lessons, the parent&apos;s job is to run
          daily practice, but they have almost no real information to do it well.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          At the same time, a private teacher may manage 15&ndash;30 students across a season.
          Schedules change. Makeups get missed. Parents ask the same questions by text. Recitals
          require coordination across families. None of this has a system &mdash; it runs on
          memory, email, and manual effort.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The result: parents feel uninformed. Teachers repeat themselves constantly.
          Learning continuity breaks between lessons. Progress is invisible outside the lesson room.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 2: Product Thesis */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">The Product Thesis</h2>
        <p className="mt-4 text-gray-700 leading-relaxed font-medium">
          The lesson is the unit of value. Everything else is context around it.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          If the teacher writes a note, the parent has clarity. If the parent has clarity, the
          child practices. If the child practices, the teacher&apos;s work compounds. That
          loop &mdash; lesson &rarr; note &rarr; practice &rarr; better student &mdash; is the
          product. The teacher writes once after each lesson (what they worked on, what to
          practice, how many minutes and days per week), and the parent immediately sees the
          full weekly plan without asking.
        </p>
        <p className="mt-3 text-sm text-gray-500 italic">
          Every feature decision asks one question: does this make the loop faster, clearer,
          or more consistent?
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 3: 90-Second Constraint */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          The Hard Constraint &mdash; 90 Seconds
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          The most important product constraint was speed.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          If a teacher cannot write the note in under 90 seconds on a phone between lessons,
          the system will not survive real studio life. Teachers finish a lesson, have
          2&ndash;3 minutes before the next student arrives, and need to capture what happened
          while it&apos;s fresh.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Cadence was designed around that reality: short structured fields, reusable lesson
          context, tap-based piece and skill selection, pre-filled dates and times, and no
          extra admin ceremony. The form is optimized for fast mobile entry, with the main
          save path kept short and obvious.
        </p>
        <p className="mt-3 text-sm text-gray-500 italic">
          This constraint shaped the entire product. No feature was added that would slow
          down the core input flow.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 4: What Cadence Does Not Do */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          What Cadence Deliberately Does Not Do
        </h2>
        <p className="mt-4 text-sm text-gray-500 italic">
          Every &ldquo;no&rdquo; protected the core loop.
        </p>
        <div className="mt-4 space-y-3">
          {[
            { title: "No messaging", desc: "Prevents the app from becoming another inbox. The teacher writes structured lesson context, not ad-hoc messages." },
            { title: "No parent-side practice scoring", desc: "Prevents parents from gaming their child\u2019s record. Practice check-ins are lightweight confirmations, not evaluations." },
            { title: "No multi-instrument at MVP", desc: "Keeps the data model clean for Suzuki violin first. Other instruments and curricula can be added later without redesigning the core." },
            { title: "No billing integration", desc: "Removes procurement friction from pilot adoption. A teacher can start using Cadence without asking anyone for budget approval." },
            { title: "No passwords", desc: "Passwordless email OTP removes the most common friction point for non-technical users. No password to forget, no reset flow, no signup form." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Privacy and Trust */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Privacy and Trust Architecture
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed font-medium">
          The strongest product decision was to keep the teacher as the only source of teaching truth.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Parents can read lesson notes, confirm practice, and understand the weekly plan.
          They cannot edit lesson content, score skills, or inflate progress. This protects
          the integrity of the learning record.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Teachers need private space to think. Every lesson note has an optional private
          observation field &mdash; visible only to the teacher, excluded from all parent-facing
          queries at the database level, not just the UI. This is defense in depth: parent-safe
          database views (<code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">parent_safe_lesson_notes</code>,{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">parent_safe_piece_progress</code>)
          enforce the boundary even if a UI bug occurs.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Row-Level Security policies ensure that teachers see only their students, parents
          see only their children, and private teaching observations never leak across the boundary.
        </p>
        <p className="mt-3 text-sm text-gray-500 italic">
          This matters for adoption. Teachers will not use a system where parents can see their
          unfiltered teaching notes. The privacy architecture made adoption possible.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Learning Pattern Model */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Learning Pattern Model
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Cadence is not trying to measure children against each other. That is the wrong
          incentive in early music education.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Instead, Cadence tracks the smallest useful learning signals: which pieces appeared
          in lessons, which skills were practiced, how often they were repeated, and when the
          teacher confirms something is retained.
        </p>
        <ul className="mt-4 ml-5 list-disc space-y-2 text-gray-700 leading-relaxed">
          <li><strong className="text-gray-900">Pieces</strong> show repertoire progress. Status moves through introduced &rarr; working &rarr; can play &rarr; polished, mapped to the student&apos;s Suzuki book.</li>
          <li><strong className="text-gray-900">Skills</strong> show transferable technique. Tone, bow direction, rhythm, posture, and left-hand control are tracked separately from pieces so improvement is visible across the repertoire.</li>
          <li><strong className="text-gray-900">+N exposure counts.</strong> Repetition across lessons and practice context is tracked as exposure, not as a fake score.</li>
          <li><strong className="text-gray-900">Retained status</strong> is teacher-confirmed. Mastery is a professional judgment, not an algorithm threshold.</li>
        </ul>
        <p className="mt-6 text-sm text-gray-500 italic">
          Instead of calling a child &ldquo;talented&rdquo; or &ldquo;behind,&rdquo; Cadence
          makes progress visible at the smallest useful level.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 7: Design System */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Design System
        </h2>

        <div className="mt-6 space-y-4">
          <ArtifactPreviewCard
            eyebrow="Design system"
            title="Suzuki Book Color System"
            description="10 books mapped to a consistent visual language. Every book reference renders through a single BookChip component — no hand-coded color values anywhere in the codebase."
            href="/artifacts/suzuki_book_color_system.html"
          />
          <ArtifactPreviewCard
            eyebrow="Design system"
            title="Student Card Compact Layout"
            description="Teacher dashboard cards optimized for scanning: student name, book level, parent link status, lesson count, practice frequency, and next lesson. Left stripe matches current book level."
            href="/artifacts/student_card_compact_options.html"
          />
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 8: Adoption Reality */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Adoption Reality
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          The first real user was not a technical early adopter.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The first pilot teacher is a long-time private violin/viola teacher with Suzuki and RCM students.
          She manages schedules, notes, and parent communication mostly through paper, email,
          and memory. That shaped the product: no complex dashboard, no heavy setup, no
          passwords, no extra data entry for the sake of data entry.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          If the system created more work than it saved, she would stop using it. Every
          feature had to pass a simple test: does this reduce the teacher&apos;s daily coordination
          overhead, or does it add to it?
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The design decisions that came from this reality: passwordless email OTP (no
          passwords to forget), mobile-first layout (she uses her phone between lessons),
          pre-filled lesson dates and times (from the schedule), and tap-based piece/skill
          selection (no typing lists of song names).
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Shipping to a Real User */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Shipping to a Real User
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Cadence&apos;s first pilot teacher is an experienced violin teacher with very low
          computer confidence and a phone-first email workflow. Shipping a working app was not
          enough. I had to make Cadence reachable, repeatable, and safe to try.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The product challenge was not just interface design. It was adoption design. Cadence
          needed to feel less like &ldquo;new software&rdquo; and more like a simple routine
          she could repeat after every lesson.
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">PWA &mdash; Add to Home Screen</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              Cadence is a Progressive Web App. Instead of asking the teacher to search the App Store,
              manage downloads, or remember a URL, she opens one link, taps &ldquo;Add to Home
              Screen,&rdquo; and gets a Cadence icon that behaves like an app. No App Store
              friction. No installation anxiety. No extra account setup.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Coach marks &mdash; guided inside the app</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              I added five interactive tours across teacher, parent, and admin workflows. Each
              tour highlights one action at a time with a short tooltip, so users learn by doing
              instead of reading a manual. This matters for teachers who are willing to try the
              product but are not confident exploring software on their own.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Printed guide &mdash; designed for the pilot context</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              I spent two hours in Canva creating a printed, step-by-step guide using real
              screenshots from the actual Cadence flow. The guide is designed to sit next to
              the teacher&apos;s iPhone while she sets up the app, adds students, and invites parents.
              This is not scalable onboarding automation. It is founder-led adoption work for
              the first real user.
            </p>
          </div>
        </div>

        <figure className="mt-8">
          <img
            src="/images/projects/cadence/pilot-onboarding-guide.png"
            alt="PWA installation guide and Quick Start for teachers and parents"
            className="w-full rounded-lg border border-gray-200"
            loading="lazy"
          />
          <figcaption className="mt-2 text-[13px] text-gray-500">
            <strong className="text-gray-700">PWA installation guide + Quick Start</strong> &mdash; designed in Canva for the first pilot teacher
          </figcaption>
        </figure>

        <div className="mt-8 rounded-lg border-l-[3px] border-[#2D6A4F] bg-[#f9fafb] px-6 py-5">
          <p className="text-xs font-medium uppercase tracking-wide text-[#6b6b6b] mb-2">Pilot feedback, paraphrased</p>
          <p className="text-gray-700 leading-relaxed">
            The pilot teacher responded with strong appreciation, saying the guide made the app
            feel approachable and that she had been considering a basic computer course because
            she was not confident with technology.
          </p>
          <p className="mt-3 text-sm text-[#6b6b6b]">
            &mdash; J., pilot teacher
          </p>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">
          This was intentionally unscalable work for the first pilot. The goal was not to create
          a permanent manual onboarding process. The goal was to remove adoption risk, observe
          where the product broke down for a low-confidence user, and turn those lessons into
          reusable onboarding patterns.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Pilot Iteration With a Real Teacher */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Pilot Iteration With a Real Teacher
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Cadence is being tested with one real teacher first, not launched broadly.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          That matters because the early work is not just shipping features. It is observing
          how a non-technical teacher actually teaches, schedules, explains practice, and
          communicates with parents.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Through the pilot, I learned details that shaped the product:
        </p>
        <ul className="mt-3 ml-5 list-disc space-y-1 text-gray-700 leading-relaxed">
          <li>The pilot teacher works across violin and viola, not only violin.</li>
          <li>Many students follow RCM paths, not only Suzuki.</li>
          <li>Teacher onboarding needed printed guidance, not just an app walkthrough.</li>
          <li>Parent clarity matters as much as teacher data entry.</li>
          <li>The product had to reduce repeated explanation, not create another admin task.</li>
        </ul>
        <p className="mt-3 text-gray-700 leading-relaxed">
          This is still early, but it is real product iteration: observe the user, adjust the
          workflow, simplify the surface, and avoid scaling before the pilot proves the system
          is usable.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Rollout and Commercial Path */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Rollout and Commercial Path
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Cadence was designed to avoid enterprise-style adoption friction.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The first phase is a free pilot with one real teacher and her families. The commercial
          path starts with teachers, not parents and not the school. Teachers own the workflow
          and create the data &mdash; if the teacher uses Cadence, parents receive value
          automatically. Teacher-level pricing removes org procurement friction, which is the
          same adoption logic that shaped the rest of the product.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Future expansion can add an organization layer for visibility across teachers,
          group-class context, and administrative support &mdash; but the product starts
          teacher-first and stays teacher-first by default. Core progress visibility &mdash;
          lesson notes, piece status, skill tracking, practice guidance &mdash; will not be
          paywalled.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Interactive Prototype */}
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

      <hr className="my-8 border-gray-200" />

      {/* Technical Architecture */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Technical Architecture
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Stack chosen for adoption speed and maintainability, not framework fashion. Every
          layer is something the operator can debug, deploy, and replace alone.
        </p>
        <div className="responsive-table mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-3 pr-4 font-medium text-gray-900">Layer</th>
                <th className="py-3 pr-4 font-medium text-gray-900">Technology</th>
                <th className="py-3 font-medium text-gray-900">Role</th>
              </tr>
            </thead>
            <tbody>
              {techStack.map((row) => (
                <tr key={row.layer} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">{row.layer}</td>
                  <td className="py-3 pr-4 text-gray-600 align-top">{row.tools}</td>
                  <td className="py-3 text-gray-600 align-top">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-sm font-medium text-gray-900">Key Architecture Decisions</h3>
        <div className="responsive-table mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-3 pr-4 font-medium text-gray-900">Decision</th>
                <th className="py-3 font-medium text-gray-900">Why</th>
              </tr>
            </thead>
            <tbody>
              {architectureDecisions.map((row) => (
                <tr key={row.decision} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900 align-top whitespace-nowrap">{row.decision}</td>
                  <td className="py-3 text-gray-600 align-top">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 14: AI-Assisted Build Workflow */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          AI-Assisted Build Workflow
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Cadence used a hybrid build approach: enough upfront architecture to avoid costly
          rework, then small iterative releases around the real teacher workflow. Not pure
          Agile, not waterfall &mdash; risk-shaped.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed font-medium">
          AI accelerated execution. It did not decide the product.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Luke owned the product model, user flows, data architecture, permission boundaries,
          QA sequencing, prompt structure, and scope control. AI tools were used as specialized
          execution agents within a disciplined workflow:
        </p>
        <div className="responsive-table mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-3 pr-4 font-medium text-gray-900">Role</th>
                <th className="py-3 pr-4 font-medium text-gray-900">Tool</th>
                <th className="py-3 font-medium text-gray-900">What It Did</th>
              </tr>
            </thead>
            <tbody>
              {buildRoles.map((row) => (
                <tr key={row.role} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900 align-top whitespace-nowrap">{row.role}</td>
                  <td className="py-3 pr-4 text-gray-600 align-top whitespace-nowrap">{row.tool}</td>
                  <td className="py-3 text-gray-600 align-top">{row.did}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <span className="font-medium">The hardest part was not generating code.</span>{" "}
            The hardest part was preventing drift: keeping lesson notes, practice data, skills,
            pieces, parent views, teacher-private fields, and admin tools aligned to one product
            model across hundreds of AI-generated commits.
          </p>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Planning artifacts (8 markdown files totaling ~40 pages) served as the shared memory
          layer between the human operator and every AI agent. Each build session started by
          loading the current project state, not by re-explaining the product.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 15: How I Control AI-Generated Implementation */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          How I Control AI-Generated Implementation
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          I do not treat AI-generated output as trusted software.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          My strongest review loop is product and implementation control: I run the app locally,
          test the workflow directly, inspect the database and deployment surfaces, refactor
          UI/UX behavior, and read code deeply only where the system boundary requires it.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          For Cadence, that meant checking the parts that could break user trust:
        </p>
        <ul className="mt-3 ml-5 list-disc space-y-2 text-gray-700 leading-relaxed">
          <li>
            <strong className="text-gray-900">Workflow integrity</strong> &mdash; every feature
            had to preserve the lesson &rarr; practice &rarr; parent visibility loop.
          </li>
          <li>
            <strong className="text-gray-900">UI/UX refactoring</strong> &mdash; I tested screens
            directly, adjusted flows, and tightened the interface around how a non-technical
            teacher would actually use it.
          </li>
          <li>
            <strong className="text-gray-900">Schema and RLS control</strong> &mdash; I reviewed
            the Supabase data model, parent-safe access boundaries, and role-based visibility rules.
          </li>
          <li>
            <strong className="text-gray-900">Local dev and deployment control</strong> &mdash; I
            worked across local development, Supabase, Vercel, auth, email, and production
            deployment instead of treating the app as a black box.
          </li>
          <li>
            <strong className="text-gray-900">Targeted code inspection</strong> &mdash; I do not
            read every AI-generated line, but I inspect the code when behavior, data boundaries,
            or production risk requires it.
          </li>
          <li>
            <strong className="text-gray-900">QA gates</strong> &mdash; lint/build checks,
            Playwright tests, manual browser checks, and mobile review before accepting changes.
          </li>
        </ul>
        <p className="mt-4 text-gray-700 leading-relaxed">
          One example was Cadence&apos;s lesson date handling. AI-generated date code can easily
          turn <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">2026-05-09</code> into
          the wrong local day because JavaScript parses bare date strings as UTC.{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">new Date(&apos;2026-05-09&apos;)</code> parses
          as UTC midnight and can shift backward in Eastern Time &mdash; which would show parents
          in Ontario a lesson on the wrong day.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          I kept lesson dates as date-only values in the data model and avoided
          bare <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">new Date()</code> calls
          in display paths. This protected a core trust point: parents and teachers must see the
          same lesson date.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The point is not to manually write or read every line. The point is to know which
          boundaries matter, inspect those boundaries, and tighten the product before small
          technical mistakes become real user problems.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Cadence is early. The pilot is live with one teacher. At this stage, maintenance is
          mostly about catching boundary issues before they reach users, then tightening the
          system as the pilot reveals new edge cases.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 16: Decisions I'm Proud Of */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Decisions I&apos;m Proud Of
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Magic link auth instead of passwords</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Why:</strong> Teachers and parents are non-technical. Password friction kills adoption before the product gets a chance.
            </p>
            <p className="mt-1 text-sm text-gray-500 italic">
              Tradeoff: Requires reliable email delivery (Resend + custom domain), but removes the single biggest onboarding barrier.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Teacher-first data ownership</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Why:</strong> Teachers can adopt independently &mdash; no org procurement needed. <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">org_id</code> is nullable everywhere.
            </p>
            <p className="mt-1 text-sm text-gray-500 italic">
              Tradeoff: Nullable foreign keys add schema complexity, but removing org-level procurement friction was worth it for pilot adoption.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Parent-safe database views</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Why:</strong> Teachers won&apos;t use a system where parents can see private lesson observations. Privacy enforced at the database layer, not just the UI.
            </p>
            <p className="mt-1 text-sm text-gray-500 italic">
              Tradeoff: Two views per table (<code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">parent_safe_*</code>), more maintenance &mdash; but prevents data leaks even if the UI has bugs.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Skills architecturally separate from pieces</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Why:</strong> A child can polish Twinkle but still need work on bow hold. These are different axes of progress.
            </p>
            <p className="mt-1 text-sm text-gray-500 italic">
              Tradeoff: More data model complexity, but prevents the false signal of &ldquo;finished a song = mastered the technique.&rdquo;
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">RLS as product trust, not backend plumbing</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Why:</strong> Teachers see only their students. Parents see only their children. Private notes never leak across the boundary.
            </p>
            <p className="mt-1 text-sm text-gray-500 italic">
              Tradeoff: RLS policies add development overhead and debugging complexity, but they&apos;re the reason the pilot teacher trusts the system.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Designed to avoid future operational debt</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Why:</strong> Maintainability was treated as a product constraint, not a code-quality concern. The goal was not the fastest demo, but a system that could support future books, students, schedules, and parent views without turning every new feature into a rewrite.
            </p>
            <p className="mt-1 text-sm text-gray-500 italic">
              Tradeoff: More upfront schema and RLS design time, but the pilot can expand to a second teacher and a second curriculum without architectural rework.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Current Status */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Current Status
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Cadence is live in production at{" "}
          <a href="https://cadence-osa.com" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            cadence-osa.com
          </a>.
          The teacher-parent lesson continuity loop, parent practice view, piece and skill
          progress tracking, scheduling, events, and Super Admin support layer are all functional.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Next phase: profile polish, parent progress reports with PDF export, deeper teacher
          validation with the pilot teacher&apos;s full student roster, and funding transparency
          for community support.
        </p>
      </section>
      </ContentWithToc>
    </div>
  );
}
