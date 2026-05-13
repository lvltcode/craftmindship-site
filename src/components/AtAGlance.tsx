import type { ReactNode } from "react";

interface AtAGlanceProps {
  rows: [string, string][];
  links: ReactNode;
}

export default function AtAGlance({ rows, links }: AtAGlanceProps) {
  return (
    <div className="mt-8 mb-12 rounded-lg border border-gray-200 p-5 sm:p-6">
      <h2 className="text-base font-semibold text-[#1a1a1a]">At a Glance</h2>
      <dl className="mt-4 space-y-3 sm:space-y-2">
        {rows.map(([label, value]) => (
          <div key={label} className="sm:grid sm:grid-cols-[110px_1fr] sm:gap-4">
            <dt className="text-xs sm:text-[13px] font-medium uppercase tracking-wide text-[#6b6b6b]">{label}</dt>
            <dd className="mt-0.5 sm:mt-0 text-[15px] text-[#1a1a1a]">{value}</dd>
          </div>
        ))}
        <div className="sm:grid sm:grid-cols-[110px_1fr] sm:gap-4">
          <dt className="text-xs sm:text-[13px] font-medium uppercase tracking-wide text-[#6b6b6b]">Links</dt>
          <dd className="mt-0.5 sm:mt-0 text-[15px] text-[#1a1a1a]">{links}</dd>
        </div>
      </dl>
    </div>
  );
}
