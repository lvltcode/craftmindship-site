import { Link } from "react-router-dom";
import { ArrowRight, User, FileText, BookOpen } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const projects = [
  {
    name: "Cadence",
    description: "Live pilot app for private music teachers and parents. Supabase/RLS, email OTP auth, parent-safe database views, scheduling, and a live teacher pilot.",
    status: "Live",
    path: "/work/cadence",
  },
  {
    name: "Puppy Program OS",
    description: "Operational system for a national guide dog organization. Postgres-native alert engine, 18-table multi-tenant schema with RLS, and staff intervention workflows.",
    status: "Prototype",
    path: "/work/puppy-program-os",
  },
  {
    name: "Multi-Agent Workflow",
    description: "Structured AI build workflow used to ship Cadence. Scoped prompts, sequential execution, Playwright QA gates, and clean git checkpoints.",
    status: "Active",
    path: "/work/multi-agent-workflow",
  },
] as const;

const statusColor: Record<string, string> = {
  "Live": "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  "Active": "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  "Prototype": "bg-sky-50 text-sky-700 ring-sky-600/20",
  "In Progress": "bg-amber-50 text-amber-700 ring-amber-600/20",
};

export default function Home() {
  usePageMeta(undefined, undefined, { canonical: "/" });

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-8 pb-8 sm:pt-10 sm:pb-10">
        <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Luke V.
        </p>
        <h1 className="page-title mt-2 max-w-[880px]">
          AI Product Builder&nbsp;· Technical Product&nbsp;Manager
        </h1>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-600">
          I work in unfamiliar, ambiguous workflows: learn the domain fast,
          reduce risk before code, and ship the smallest reliable system real
          users can actually adopt. AI-assisted execution stays under operator control.
        </p>
        <p className="mt-2 max-w-xl text-sm text-gray-500 italic">
          Reliable over clever. Judgment over automation.
        </p>
        <p className="mt-2 max-w-xl text-sm text-gray-400">
          Production pilot · Real users · Supabase/RLS · Multi-agent AI workflow · Observation-led product design
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 min-h-[44px] rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            <ArrowRight size={16} />
            View Work
          </Link>
          <a
            href="/CV_Luke_Dang_Technical_Product_Manager_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-[44px] rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <FileText size={16} />
            View CV
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 min-h-[44px] rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <User size={16} />
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="px-6 pb-8 sm:pb-12">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Featured Work
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.path}
              to={project.path}
              className="group flex h-full flex-col rounded-lg border border-gray-200 p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <span
                className={`self-start rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusColor[project.status]}`}
              >
                {project.status}
              </span>
              <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-gray-700">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {project.description}
              </p>
              <span className="mt-auto pt-4 text-sm font-medium text-gray-900 group-hover:underline">
                View case study &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected Analysis */}
      <section className="px-6 pb-14 sm:pb-16">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Selected Analysis
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            to="/analysis/anthropic-academy-skill-formation"
            className="group flex h-full flex-col rounded-lg border border-gray-200 p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <p className="text-xs font-medium text-gray-400 uppercase">Product Analysis &middot; AI Education &middot; Edtech</p>
            <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-gray-700">
              Anthropic Academy and the Skill Formation Gap
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Why AI product education needs living learning infrastructure, not just courses, quizzes, and completion certificates.
            </p>
            <p className="mt-2 text-xs text-gray-400">
              Skilljar LMS &middot; content decay &middot; assessment gaps &middot; labor-market signal
            </p>
            <span className="mt-auto pt-4 text-sm font-medium text-gray-900 group-hover:underline">
              Read &rarr;
            </span>
          </Link>
          <Link
            to="/analysis/coding-bootcamps-dying"
            className="group flex h-full flex-col rounded-lg border border-gray-200 p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <p className="text-xs font-medium text-gray-400 uppercase">Edtech Teardown</p>
            <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-gray-700">
              Why coding bootcamps are dying &mdash; and what replaces them
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              A 2023 course review reread in 2026. Coffee Credit formula, business model analysis, and four futures for coding schools.
            </p>
            <span className="mt-auto pt-4 text-sm font-medium text-gray-900 group-hover:underline">
              Read &rarr;
            </span>
          </Link>
          <a
            href="https://craftmindship.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-center rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase">Substack</p>
              <h3 className="mt-2 inline-flex items-center gap-1.5 font-semibold text-gray-900 group-hover:underline">
                <BookOpen size={16} />
                Read more on Substack &rarr;
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Essays on building, operating, and shipping.
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
