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
  { label: "View CV", href: "/CV_Luke_Dang_Technical_Product_Manager_2026.pdf", icon: FileText },
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
          <header className="prose-narrow">
            <h1 className="page-title">
              About
            </h1>
            <p className="mt-3 text-lg font-medium text-gray-900">
              I analyze messy workflows, find the real constraint, and turn it into a working system.
            </p>
          </header>

          <section className="prose-narrow mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              I&apos;m Luke, an AI Product Builder and Technical Product Manager based in
              Ontario. I build operational software end-to-end in unfamiliar domains: learn
              the workflow fast, reduce risk before code, and ship the smallest reliable
              system real users adopt.
            </p>
            <p>
              Strong across product scoping, system design, Supabase/RLS architecture,
              AI-assisted execution, and production QA.
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
      <section className="prose-narrow">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Why This Portfolio Exists
        </h2>
        <div className="prose-narrow mt-4 space-y-4 text-gray-700 leading-relaxed">
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

      {/* Professional Experience */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Professional Experience
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900">Product Builder &amp; Technical Product Manager</h3>
            <p className="text-sm text-gray-500">Cognito Technology Canada Inc. &middot; Aug 2023 &ndash; Present</p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Translated ambiguous founder briefs into production-ready architecture across a
              portfolio of 20&ndash;30 ventures in SaaS, fintech, logistics, and edtech. Owned
              product scoping, schema design, implementation planning, QA review, and deployment
              handoff across multiple concurrent MVPs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Organization Design</h3>
            <p className="text-sm text-gray-500">GEEK Up &middot; Aug 2020 &ndash; Sep 2021, Jul 2022 &ndash; Dec 2022</p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Designed organizational systems and operational workflows for a growing technology
              company. Redesigned competency frameworks, contribution models, and performance
              review processes used across engineering and design teams.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Learning Design Expert</h3>
            <p className="text-sm text-gray-500">Topica Edtech Group &middot; Nov 2021 &ndash; Jul 2022</p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Analyzed platform workflows and operational data within a large-scale edtech
              environment serving 100K+ learners. Mapped LMS/CMS data flows and identified
              integration gaps that informed product improvement roadmaps.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Education & Certifications */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Education &amp; Certifications
        </h2>
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p><strong className="text-gray-900">Engineering Physics coursework</strong> &mdash; Ho Chi Minh City University of Technology (Bach Khoa)</p>
          <p className="text-gray-500" style={{ fontSize: '13px' }}>First year completed &middot; Left the degree program</p>
          <p className="text-gray-500">Google Data Analytics &middot; IBM Data Analyst &middot; Google Project Management</p>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Technologies */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Technologies
        </h2>
        <div className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
          <p><strong className="text-gray-900">Web:</strong> React &middot; TypeScript &middot; JavaScript &middot; HTML/CSS &middot; Tailwind</p>
          <p><strong className="text-gray-900">Data:</strong> Python &middot; SQL &middot; Power BI</p>
          <p><strong className="text-gray-900">Backend &amp; Infra:</strong> Supabase &middot; PostgreSQL &middot; RLS &middot; Edge Functions &middot; Vercel &middot; GitHub</p>
          <p><strong className="text-gray-900">AI workflow:</strong> Claude &middot; Claude Code &middot; ChatGPT &middot; Codex</p>
          <p><strong className="text-gray-900">QA:</strong> Playwright &middot; Manual mobile QA</p>
          <p><strong className="text-gray-900">Project &amp; Workflow:</strong> Jira &middot; Notion &middot; Obsidian &middot; Draw.io &middot; Whimsical</p>
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

      {/* Private Work Context */}
      <section className="prose-narrow pb-8">
        <p className="text-sm text-gray-500 leading-relaxed">
          Some production and company work cannot be public because it contains client,
          company, or real-user context. This portfolio focuses on public-safe case studies,
          shipped artifacts, and product reasoning rather than exposing private repositories.
        </p>
      </section>
    </div>
  );
}
