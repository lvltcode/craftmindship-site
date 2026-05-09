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
  { label: "lvltcode@gmail.com", href: "mailto:lvltcode@gmail.com", icon: "Mail" as const },
];

export default function About() {
  usePageMeta("About", "Multi-venture operator building production SaaS across construction tech, travel tech, fintech, and edtech.");

  return (
    <div className="px-6 py-16 sm:py-24">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About
        </h1>
        <p className="mt-3 text-lg font-medium text-gray-900">
          I analyze systems, find what&apos;s broken, and build what&apos;s missing.
        </p>
      </header>

      {/* Bio */}
      <section className="mt-8 space-y-4 text-gray-700 leading-relaxed">
        <p>
          I&apos;m Luke — a multi-venture operator at Cognito Technology Canada Inc.,
          based in Ontario. I build production SaaS products across construction tech,
          travel tech, fintech, and edtech. Not prototypes, not demos — products that
          run in production with real users and real data.
        </p>
        <p>
          My background is in product building and technical product management. At
          CognitoCRM, I built three full-stack platforms (construction, logistics, fintech),
          designed internal Notion operations infrastructure, and developed market
          intelligence systems. I think in workflows, not features.
        </p>
        <p>
          I work with AI-native tools — Lovable for frontend prototyping, Claude Code
          for precision development, Supabase for backend architecture, Vercel for
          deployment. The tools are fast. The bottleneck is always clarity: knowing
          what to build and what not to build.
        </p>
        <p>
          Every project I ship follows the same discipline: plan first, design the
          data model, lock architecture decisions, then execute in structured groups
          with QA at every step. Planning artifacts as agent context means the AI
          builds what I designed, not what it imagined.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

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

      <hr className="my-12 border-gray-200" />

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

      <hr className="my-12 border-gray-200" />

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

      <hr className="my-12 border-gray-200" />

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
