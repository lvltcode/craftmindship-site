import { useEffect, useState, useCallback } from "react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const h2s = Array.from(document.querySelectorAll("h2"));
    const seen = new Set<string>();
    const items = h2s.map((h2) => {
      if (!h2.id) {
        let slug = slugify(h2.textContent || "");
        while (seen.has(slug)) slug += "-1";
        h2.id = slug;
      }
      seen.add(h2.id);
      return { id: h2.id, text: h2.textContent || "" };
    });
    // Syncing with DOM (external system) — valid effect pattern
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(items);

    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -75% 0px" },
    );

    h2s.forEach((h2) => observer.observe(h2));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      className="hidden lg:block sticky top-20"
      style={{ maxHeight: "calc(100vh - 160px)", overflowY: "auto" }}
    >
      <p className="text-xs font-medium tracking-wide text-[#6b6b6b] uppercase">
        On this page
      </p>
      <ul className="mt-3 space-y-0.5">
        {headings.map((h) => (
          <li key={h.id}>
            <button
              onClick={() => scrollTo(h.id)}
              className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-colors ${
                activeId === h.id
                  ? "border-[#2D6A4F] text-[#1a1a1a] font-semibold"
                  : "border-transparent text-[#6b6b6b] hover:text-[#1a1a1a]"
              }`}
            >
              {h.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
