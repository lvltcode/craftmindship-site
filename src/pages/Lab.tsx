import { usePageMeta } from "../hooks/usePageMeta";

const artifacts = [
  {
    category: "Design system",
    chipBg: "#EEEDFE",
    chipColor: "#534AB7",
    title: "Suzuki book color system",
    description: "10-level color mapping for Suzuki method piano books.",
    href: "/artifacts/suzuki_book_color_system.html",
  },
  {
    category: "Workflow",
    chipBg: "#EEEDFE",
    chipColor: "#534AB7",
    title: "Market intelligence pipeline",
    description: "7-stage research pipeline from market trigger to published analysis.",
    href: "/artifacts/market-intelligence-pipeline.html",
  },
  {
    category: "Market research",
    chipBg: "#D8F3DC",
    chipColor: "#2D6A4F",
    title: "Market intelligence reports",
    description: "6-venture competitive analysis board with sector filtering and visual report packs.",
    href: "/artifacts/market-intelligence/index.html",
  },
  {
    category: "Data architecture",
    chipBg: "#E6F1FB",
    chipColor: "#185FA5",
    title: "FleetLock data flow",
    description: "IoT sensor-to-dashboard data architecture for fleet tracking hardware.",
    href: "/artifacts/fleetlock-data-flow.html",
  },
];

export default function Lab() {
  usePageMeta("Lab", "Interactive artifacts from research, architecture, and planning work by Luke Dang.");

  return (
    <div className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14 mx-auto max-w-[720px]">
      <header>
        <h1 className="text-[28px] font-bold tracking-tight text-gray-900">
          Lab
        </h1>
        <p className="mt-3 text-base text-gray-500">
          Interactive artifacts from research, architecture, and planning work.
          Built with Claude as execution partner.
        </p>
      </header>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {artifacts.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-gray-200 p-5 transition-colors hover:border-[#2D6A4F]"
          >
            <span
              className="self-start rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{ backgroundColor: item.chipBg, color: item.chipColor }}
            >
              {item.category}
            </span>
            <h3 className="mt-3 font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
            <span className="mt-auto pt-3 text-sm font-medium text-gray-900 group-hover:underline">
              View artifact &rarr;
            </span>
          </a>
        ))}
      </div>

      <p className="mt-6 text-[13px] text-gray-500">
        All artifacts are interactive HTML built with Claude. Case study&ndash;specific
        artifacts live on their respective project pages.
      </p>
    </div>
  );
}
