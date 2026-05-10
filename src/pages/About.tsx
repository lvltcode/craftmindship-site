import { Code, Briefcase, BookOpen, Mail } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const iconMap = { Code, Briefcase, BookOpen, Mail } as const;

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
    detail: "Lovable for rapid prototyping and UI scaffolding. Claude Code for precision work — multi-file refactors, targeted patches, backend safety.",
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

const externalLinks = [
  { label: "GitHub", href: "https://github.com/lvltcode", icon: "Code" as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dangtranlevu/", icon: "Briefcase" as const },
  { label: "Substack", href: "https://craftmindship.substack.com", icon: "BookOpen" as const },
  { label: "hello@craftmindship.com", href: "mailto:hello@craftmindship.com", icon: "Mail" as const },
];

export default function About() {
  usePageMeta("About", "AI Product Builder and Technical Product Manager. I analyze messy workflows, find the real constraint, and turn it into a working system.");

  return (
    <div className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About
        </h1>
        <p className="mt-3 text-lg font-medium text-gray-900">
          I analyze messy workflows, find the real constraint, and turn it into a working system.
        </p>
      </header>

      {/* Bio */}
      <section className="mt-8 space-y-4 text-gray-700 leading-relaxed">
        <p>
          I&apos;m Luke, an AI Product Builder and Technical Product Manager based in
          Ontario. My work sits between product strategy, operations, software
          architecture, and AI-assisted execution.
        </p>
        <p>
          I do not start with features. I start with the workflow: who does the work,
          where it breaks, what data matters, what should stay private, and what needs
          to happen next.
        </p>
        <p>
          My strongest skill is building the system around the build: planning docs,
          data models, user flows, implementation phases, QA loops, and knowledge
          management. I use AI-native tools as execution leverage, but the real value
          is judgment: knowing what to build, what to defer, and how to keep the
          product from drifting.
        </p>
        <p>
          Every project I ship follows the same discipline: understand the workflow,
          define the source of truth, lock the architecture, execute in small phases,
          test each step, and preserve knowledge so the next build decision is easier
          than the last.
        </p>
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
      <section>
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

      <hr className="my-8 border-gray-200" />

      {/* CV */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          CV
        </h2>
        <div className="mt-4 rounded-lg border border-gray-200 p-5">
          <a
            href="https://docs.google.com/document/d/1pfayjyRgACKrlF47UQXOlM0XTDEWfu1VynuBZL52lxU/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-900 underline"
          >
            View CV on Google Docs &rarr;
          </a>
          <p className="mt-1 text-sm text-gray-500">PDF version coming soon.</p>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Links */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Connect
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {externalLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Icon size={16} />
                {link.label}
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
