type ReaderMapStep = {
  number: string;
  title: string;
  description: string;
  href?: string;
};

type ReaderMapProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps: ReaderMapStep[];
};

export default function ReaderMap({ eyebrow, title, description, steps }: ReaderMapProps) {
  return (
    <div className="my-8">
      {eyebrow && (
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 4 }}>
          {eyebrow}
        </p>
      )}
      {title && (
        <p className="font-semibold" style={{ fontSize: 15, color: "#1a1a1a", marginBottom: 2 }}>
          {title}
        </p>
      )}
      {description && (
        <p style={{ fontSize: 13, color: "#6b6b6b", marginBottom: 16 }}>
          {description}
        </p>
      )}

      {/* Desktop/tablet: horizontal strip */}
      <div className="hidden sm:block">
        <div className="relative flex items-start">
          {/* Connector line */}
          <div
            className="absolute top-3 left-3 right-3"
            style={{ height: 1, background: "#d4d4d4" }}
          />

          {steps.map((step, i) => {
            const inner = (
              <div className="relative flex flex-col items-center text-center" style={{ flex: 1 }}>
                <span
                  className="relative z-10 inline-flex items-center justify-center font-mono"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    fontSize: 11,
                    fontWeight: 600,
                    background: i === 0 ? "#2D6A4F" : "#f5f5f5",
                    color: i === 0 ? "#ffffff" : "#1a1a1a",
                    border: i === 0 ? "none" : "1px solid #e5e5e5",
                  }}
                >
                  {step.number}
                </span>
                <span
                  className="mt-1.5 font-medium"
                  style={{ fontSize: 12.5, color: "#1a1a1a", lineHeight: 1.3 }}
                >
                  {step.title}
                </span>
              </div>
            );

            return step.href ? (
              <a
                key={step.number}
                href={step.href}
                className="no-underline hover:opacity-75 transition-opacity"
                style={{ flex: 1, textDecoration: "none" }}
              >
                {inner}
              </a>
            ) : (
              <div key={step.number} style={{ flex: 1 }}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Description row below the strip */}
        <div className="mt-3 flex" style={{ gap: 0 }}>
          {steps.map((step) => (
            <p
              key={step.number}
              className="text-center"
              style={{ flex: 1, fontSize: 11.5, color: "#6b6b6b", lineHeight: 1.4, padding: "0 4px" }}
            >
              {step.description}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="sm:hidden space-y-2">
        {steps.map((step) => {
          const inner = (
            <div className="flex gap-3 rounded-md px-3 py-2.5" style={{ background: "#f9f9f9" }}>
              <span
                className="shrink-0 inline-flex items-center justify-center font-mono"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  fontSize: 11,
                  fontWeight: 600,
                  background: "#2D6A4F",
                  color: "#ffffff",
                  marginTop: 1,
                }}
              >
                {step.number}
              </span>
              <div>
                <p className="font-medium" style={{ fontSize: 13, color: "#1a1a1a", lineHeight: 1.3 }}>
                  {step.title}
                </p>
                <p style={{ fontSize: 12, color: "#6b6b6b", lineHeight: 1.4, marginTop: 2 }}>
                  {step.description}
                </p>
              </div>
            </div>
          );

          return step.href ? (
            <a
              key={step.number}
              href={step.href}
              className="block no-underline"
              style={{ textDecoration: "none" }}
            >
              {inner}
            </a>
          ) : (
            <div key={step.number}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
