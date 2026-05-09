import { Link } from "react-router-dom";

const posts = [
  {
    title: "When Safe Driving Apps Punish Safe Drivers",
    description:
      "A product teardown of TD Insurance's telematics scoring \u2014 proxy metrics, incentive misalignment, and $744/year in lost value.",
    status: "Draft",
    path: "/writing/td-insurance",
  },
];

const statusColor: Record<string, string> = {
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Draft: "bg-amber-50 text-amber-700 ring-amber-600/20",
};

export default function Writing() {
  return (
    <div className="px-6 py-16 sm:py-24">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Writing
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Product teardowns, build logs, and operational thinking.
        </p>
      </header>

      {/* On-site posts */}
      <section className="mt-12">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Posts
        </h2>
        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.path}
              to={post.path}
              className="group rounded-xl border border-gray-200 p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                  {post.title}
                </h3>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusColor[post.status]}`}
                >
                  {post.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {post.description}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-gray-900 group-hover:underline">
                Read &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Substack */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Vietnamese Writing on Craftmindship
        </h2>
        <a
          href="https://craftmindship.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 block rounded-xl border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-semibold text-gray-900 group-hover:underline">
              Craftmindship on Substack &rarr;
            </h3>
          </div>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Essays on building, operating, and shipping — written in Vietnamese.
          </p>
        </a>
      </section>
    </div>
  );
}
