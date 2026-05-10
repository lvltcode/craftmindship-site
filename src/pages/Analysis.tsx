import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

const posts = [
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
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
            className="group flex flex-col rounded-xl border border-gray-200 p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <p className="text-xs font-medium text-gray-400 uppercase">
              {post.category}
            </p>
            <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-gray-700">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
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
