import { Link } from "react-router-dom";
import { ArrowDown, User, BookOpen } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const projects = [
  {
    name: "Cadence",
    description: "Live production app for teacher-parent lesson continuity, practice visibility, scheduling, and progress tracking.",
    status: "Live",
    path: "/work/cadence",
  },
  {
    name: "Puppy Program OS",
    description: "Prototype for foster management with daily logs, alert logic, and staff intervention workflows.",
    status: "Prototype",
    path: "/work/puppy-program-os",
  },
  {
    name: "Multi-Agent Workflow",
    description: "Repeatable ChatGPT, Claude Code, Codex, and Playwright delivery system for shipping with AI without agent drift.",
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
  usePageMeta();

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-8 pb-8 sm:pt-10 sm:pb-10">
        <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Luke V.
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-[2.5rem]">
          AI Product Builder · Technical Product Manager
        </h1>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-600">
          I design and ship workflow-heavy SaaS products that solve real operational
          problems, from concept to production. Systems over hype. Craft over ceremony.
        </p>
        <p className="mt-2 max-w-xl text-sm text-gray-400">
          Production SaaS · Supabase/RLS · AI-native delivery · Workflow automation · Real user pilots
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            <ArrowDown size={16} />
            View Work
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
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
              className="group rounded-xl border border-gray-200 p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                  {project.name}
                </h3>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusColor[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {project.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-gray-900 group-hover:underline">
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
            to="/analysis/td-insurance-telematics"
            className="group rounded-xl border border-gray-200 p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <p className="text-xs font-medium text-gray-400 uppercase">Product Analysis</p>
            <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-gray-700">
              When Safe Driving Apps Punish Safe Drivers
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              A product teardown of TD Insurance&apos;s telematics scoring &mdash; proxy metrics, incentive misalignment, and $744/year in lost value.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-gray-900 group-hover:underline">
              Read &rarr;
            </span>
          </Link>
          <a
            href="https://craftmindship.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-center rounded-xl border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
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
