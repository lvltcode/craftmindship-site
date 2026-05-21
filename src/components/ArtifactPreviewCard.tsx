type ArtifactPreviewCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  thumbnail?: string;
};

export default function ArtifactPreviewCard({
  eyebrow = "Artifact",
  title,
  description,
  href,
  linkLabel = "View full artifact \u2192",
  thumbnail,
}: ArtifactPreviewCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-gray-200 overflow-hidden transition-colors hover:border-gray-300 no-underline"
      style={{ textDecoration: "none" }}
    >
      {thumbnail ? (
        <div className="sm:flex">
          <div className="sm:w-48 shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100 bg-[#fafafa]">
            <img
              src={thumbnail}
              alt=""
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-4 sm:p-5 flex flex-col">
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 4 }}>
              {eyebrow}
            </p>
            <p className="font-semibold" style={{ fontSize: 16, color: "#1a1a1a", lineHeight: 1.3 }}>
              {title}
            </p>
            <p className="mt-1" style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.5 }}>
              {description}
            </p>
            <p className="mt-auto pt-3 font-medium" style={{ fontSize: 13, color: "#2D6A4F" }}>
              {linkLabel}
            </p>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-5 border-l-2" style={{ borderLeftColor: "#2D6A4F" }}>
          <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 4 }}>
            {eyebrow}
          </p>
          <p className="font-semibold" style={{ fontSize: 16, color: "#1a1a1a", lineHeight: 1.3 }}>
            {title}
          </p>
          <p className="mt-1" style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.5 }}>
            {description}
          </p>
          <p className="mt-3 font-medium" style={{ fontSize: 13, color: "#2D6A4F" }}>
            {linkLabel}
          </p>
        </div>
      )}
    </a>
  );
}
