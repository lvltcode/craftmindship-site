import TableOfContents from "./TableOfContents";

export default function ContentWithToc({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-10">
      <div className="min-w-0">{children}</div>
      <TableOfContents />
    </div>
  );
}
