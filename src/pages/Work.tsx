import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

const projects = [
  {
    title: "Cadence",
    status: "Production pilot",
    description:
      "Lesson continuity and practice management for private music teachers and parents, with parent-safe views, passwordless auth, and real teacher onboarding.",
    signal: "React · TypeScript · Supabase RLS · Vercel",
    path: "/work/cadence",
  },
  {
    title: "Puppy Program OS",
    status: "Prototype",
    description:
      "Operational system for guide dog foster programs, combining daily logs, staff workflows, contextual content, and Postgres-native alert logic.",
    signal: "Workflow design · Supabase · alert engine · staff/foster UX",
    path: "/work/puppy-program-os",
  },
  {
    title: "Multi-Agent Workflow",
    status: "Active methodology",
    description:
      "A controlled AI-assisted build workflow for planning, implementation, QA, and git checkpoints across multiple agent tools.",
    signal: "Claude · Codex · ChatGPT · Playwright · Vercel",
    path: "/work/multi-agent-workflow",
  },
] as const;

const statusColor: Record<string, string> = {
  "Production pilot": "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Prototype: "bg-sky-50 text-sky-700 ring-sky-600/20",
  "Active methodology": "bg-gray-100 text-gray-700 ring-gray-600/20",
};

export default function Work() {
  usePageMeta("Work", "Case studies and production projects by Luke Dang.", { canonical: "/work" });

  return (
    <div className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      <header className="prose-narrow">
        <h1 className="page-title">
          Work
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Case studies and production projects by Luke Dang.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>
            <p className="mt-3 text-xs font-medium text-gray-500">
              {project.signal}
            </p>
            <span className="mt-auto pt-4 text-sm font-medium text-gray-900 group-hover:underline">
              View case study &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
