import { FileText, Code, Briefcase, Mail } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const targetRoles = [
  "AI Product Builder",
  "Technical Product Manager",
  "Product Ops",
  "Workflow Automation",
  "Vertical SaaS",
  "AI-Native Startups",
];

const buildProcess = [
  {
    step: "Product Discovery",
    detail: "System design and planning in Claude Chat — 80% planning, 20% execution. Planning artifacts (MD files) drive every build session as agent context.",
  },
  {
    step: "Database Architecture",
    detail: "Supabase + PostgreSQL + row-level security policies. Access control enforced at the database layer, not the application layer.",
  },
  {
    step: "Frontend Execution",
    detail: "Claude Code for precision implementation. Codex for targeted patches and refactors.",
  },
  {
    step: "QA",
    detail: "Playwright browser testing for critical flows. Manual mobile QA for responsive and edge-case coverage.",
  },
  {
    step: "Deploy",
    detail: "Vercel, auto-deploy from main branch. Ship continuously, validate in production.",
  },
];

const ctaLinks = [
  { label: "View CV", href: "/cv.pdf", icon: FileText },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dangtranlevu/", icon: Briefcase },
  { label: "GitHub", href: "https://github.com/lvltcode", icon: Code },
  { label: "Email", href: "mailto:hello@craftmindship.com", icon: Mail },
];

export default function About() {
  usePageMeta("About", "Luke Dang \u2014 AI Product Builder and Technical Product Manager based in Ontario, Canada.", { canonical: "/about" });

  return (
    <div className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      {/* Two-column: intro + CTA card */}
      <div className="sm:grid sm:grid-cols-[1fr_260px] sm:gap-10">
        <div>
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About
            </h1>
            <p className="mt-3 text-lg font-medium text-gray-900">
              I analyze messy workflows, find the real constraint, and turn it into a working system.
            </p>
          </header>

          <section className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              I&apos;m Luke, an AI Product Builder and Technical Product Manager based in
              Ontario. I start with the workflow &mdash; who does the work, where it breaks,
              what data matters &mdash; and build systems that solve the real constraint.
            </p>
            <p>
              My work sits between product strategy, software architecture, and AI-assisted
              execution. I use planning artifacts, scoped prompts, implementation review
              checkpoints, and quality gates to ship live pilot apps with AI tools as
              execution leverage.
            </p>
          </section>
        </div>

        {/* CTA card */}
        <div className="mt-8 sm:mt-0">
          <div className="rounded-lg border border-gray-200 p-5 sm:sticky sm:top-24 space-y-3">
            {ctaLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <link.icon size={16} className="shrink-0" />
                <span className="truncate">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Why This Portfolio Exists */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Why This Portfolio Exists
        </h2>
        <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
          <p>
            I use Craftmindship to show how I turn messy real-world workflows into shipped software.
          </p>
          <p>
            The projects here are not mock case studies. Cadence came from working with a real
            music teacher trying to coordinate lessons, parents, practice notes, and scheduling.
            Puppy Program OS came from observing the operational load behind guide dog fostering.
            Multi-Agent Workflow documents how I use AI tools as a disciplined build system, not
            random prompting.
          </p>
          <p>
            The common thread: find the constraint, design the system, ship the workflow, then
            prove it with real usage. Every project starts with planning documents, not code.
            AI tools execute against specs, not vibes.
          </p>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Target Roles */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Looking For
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {targetRoles.map((role) => (
            <span
              key={role}
              className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700"
            >
              {role}
            </span>
          ))}
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* How I Build */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          How I Build
        </h2>
        <div className="mt-6 space-y-4">
          {buildProcess.map((item) => (
            <div key={item.step} className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">{item.step}</h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
