import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

const posts = [
  {
    category: "Product analysis · AI Education · Edtech",
    title: "Anthropic Academy and the Skill Formation Gap",
    thesis:
      "A teardown of Anthropic Academy, Skilljar, and why AI education needs to move beyond course completion into verified capability.",
    impact: "18 courses · 5 education hires · 4 structural gaps",
    path: "/analysis/anthropic-academy-skill-formation",
  },
  {
    category: "Market intelligence · Home repair · AI intake",
    title: "AI Repair Intake Marketplace",
    thesis:
      "The repair request is the unit of value. Better intake improves matching, quoting, and contractor willingness to pay for leads.",
    impact: "Subscription-first · AI diagnosis → structured lead · Pilot-ready MVP",
    path: "/analysis/ai-repair-intake-marketplace",
  },
  {
    category: "Edtech teardown · Coding bootcamps · Business model",
    title: "Why coding bootcamps are dying \u2014 and what replaces them",
    thesis:
      "A 2023 course review reread in 2026. The bootcamp model passed its bubble before AI. AI just made the zombie layer visible.",
    impact: "Codesmith placement: 83% (2021) \u2192 37% (2023) \u00b7 2U exited bootcamps 2024",
    path: "/analysis/coding-bootcamps-dying",
  },
  {
    category: "Product teardown · Insurance · Telematics",
    title: "When Safe Driving Apps Punish Safe Drivers",
    thesis:
      "How TD MyAdvantage\u2019s scoring incentives pushed a safe driver to game the app and switch insurers.",
    impact: "$744/year discount erosion · $140/month saved",
    path: "/analysis/td-insurance-telematics",
  },
];

export default function Analysis() {
  usePageMeta("Analysis", "Product teardowns, system breakdowns, and operational thinking by Luke Dang.", { canonical: "/analysis" });

  return (
    <div className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      <header className="prose-narrow">
        <h1 className="page-title">
          Analysis
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Product teardowns, system breakdowns, and operational thinking.
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.path}
            to={post.path}
            className="group flex h-full flex-col rounded-lg border border-gray-200 p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <p className="text-xs font-medium text-gray-400 uppercase">
              {post.category}
            </p>
            <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-gray-700">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {post.thesis}
            </p>
            <p className="mt-3 text-xs font-medium text-gray-500">
              {post.impact}
            </p>
            <span className="mt-auto pt-4 inline-block text-sm font-medium text-gray-900 group-hover:underline">
              Read analysis &rarr;
            </span>
          </Link>
        ))}
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Substack */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Vietnamese Writing on Craftmindship
        </h2>
        <a
          href="https://craftmindship.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 block rounded-lg border border-gray-200 p-5 transition-colors hover:border-gray-300 hover:bg-gray-50"
        >
          <h3 className="text-sm font-semibold text-gray-700 group-hover:underline">
            Craftmindship on Substack &rarr;
          </h3>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">
            Essays on building, operating, and shipping — written in Vietnamese.
          </p>
        </a>
      </section>
    </div>
  );
}
