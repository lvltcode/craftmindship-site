const inputFields = [
  { key: "learner_goal", value: '"Build production AI features"' },
  { key: "prior_experience", value: '"3 yrs PM, no ML"' },
  { key: "target_role", value: '"AI PM, Series B+"' },
  { key: "product_version", value: '"claude-api-2024-11-05"' },
];

const processNodes: {
  number: string;
  name: string;
  consumes: string;
  produces: string;
  property: string;
  accent?: string;
}[] = [
  {
    number: "01",
    name: "Placement Engine",
    consumes: "all 4 inputs",
    produces: "capability gap map",
    property: "Not a pre-test. A positioning system — what can this learner already do?",
  },
  {
    number: "02",
    name: "Personal Roadmap",
    consumes: "capability gap map",
    produces: "sequenced path with adaptive branching",
    property: "Roadmap mutates when product version changes. New API feature → modules reorder.",
  },
  {
    number: "03",
    name: "Shared Gates",
    consumes: "learner progress + roadmap position",
    produces: "pass / not-yet decisions",
    property: "Personal paths diverge. Gates converge. This is what makes credentials comparable.",
    accent: "#2D6A4F",
  },
  {
    number: "04",
    name: "Validation Layer",
    consumes: "gate results + learner artifacts",
    produces: "evidence packages",
    property: "95% AI-graded + peer-reviewed. 5% expert-validated capstone. Evidence, not grades.",
    accent: "#1a1a1a",
  },
];

export default function LearningInfrastructureArchitecture() {
  return (
    <div className="my-8">
      <style>{`
        .lia-pipeline {
          display: grid;
          grid-template-columns: 200px 1fr 180px;
          gap: 0;
          align-items: stretch;
          min-height: 420px;
        }
        .lia-processing {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 0 24px;
          position: relative;
        }
        .lia-processing::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: #d4d4d4;
          z-index: 0;
        }
        .lia-arrow-right {
          position: absolute;
          right: -13px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid #d4d4d4;
          z-index: 2;
        }
        .lia-arrow-out {
          position: absolute;
          right: 11px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid #d4d4d4;
          z-index: 2;
        }
        .lia-column-arrow { display: none; }
        @media (max-width: 740px) {
          .lia-pipeline {
            grid-template-columns: 1fr;
            gap: 12px;
            min-height: auto;
          }
          .lia-processing {
            padding: 0;
          }
          .lia-processing::before {
            display: none;
          }
          .lia-arrow-right,
          .lia-arrow-out {
            display: none;
          }
          .lia-column-arrow {
            display: block;
            text-align: center;
            color: #d4d4d4;
            font-size: 18px;
            padding: 4px 0;
          }
        }
      `}</style>

      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 6 }}>
        System Architecture
      </p>
      <p style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", marginBottom: 28, lineHeight: 1.3 }}>
        Learning Infrastructure: From Learner Input to Verified Signal
      </p>

      <div className="lia-pipeline">
        {/* INPUT */}
        <div className="relative flex flex-col justify-center" style={{ background: "#f5f5f5", border: "1px solid #e5e5e5", borderRadius: 8, padding: 20 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: 14 }}>
            Inputs
          </div>
          {inputFields.map((f) => (
            <div key={f.key} style={{ marginBottom: 12 }}>
              <span className="font-mono block" style={{ fontSize: 11, fontWeight: 500, color: "#6b6b6b", marginBottom: 2 }}>{f.key}</span>
              <span className="font-mono" style={{ fontSize: 11.5, color: "#1a1a1a", lineHeight: 1.4 }}>{f.value}</span>
            </div>
          ))}
          <div className="lia-arrow-right" />
        </div>

        <div className="lia-column-arrow">↓</div>

        {/* PROCESSING */}
        <div className="lia-processing">
          {processNodes.map((node, i) => (
            <div key={node.number}>
              <div
                className="relative"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e5e5",
                  borderRadius: 8,
                  padding: "16px 18px",
                  zIndex: 1,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  ...(node.accent ? { borderLeft: `3px solid ${node.accent}` } : {}),
                }}
              >
                <div className="font-mono" style={{ fontSize: 10, fontWeight: 500, color: "#9a9a9a", marginBottom: 4 }}>{node.number}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 6, lineHeight: 1.3 }}>{node.name}</div>
                <div style={{ fontSize: 11.5, color: "#6b6b6b", lineHeight: 1.45, marginBottom: 4 }}>
                  <span className="font-mono" style={{ fontSize: 10, fontWeight: 500, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.04em" }}>consumes</span>{" "}
                  {node.consumes}
                </div>
                <div style={{ fontSize: 11.5, color: "#6b6b6b", lineHeight: 1.45 }}>
                  <span className="font-mono" style={{ fontSize: 10, fontWeight: 500, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.04em" }}>produces</span>{" "}
                  {node.produces}
                </div>
                <div style={{ fontSize: 12, color: "#4a4a4a", lineHeight: 1.45, marginTop: 6, paddingTop: 6, borderTop: "1px solid #f0f0f0", fontStyle: "italic" }}>
                  {node.property}
                </div>
              </div>
              {i < processNodes.length - 1 && (
                <div style={{ textAlign: "center", color: "#d4d4d4", fontSize: 14, lineHeight: 1, padding: "2px 0", position: "relative", zIndex: 1 }}>↓</div>
              )}
            </div>
          ))}
          <div className="lia-arrow-out" />
        </div>

        <div className="lia-column-arrow">↓</div>

        {/* OUTPUT */}
        <div className="flex flex-col justify-center" style={{ background: "#1a1a1a", borderRadius: 8, padding: 20, color: "#ffffff" }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9a9a9a", marginBottom: 14 }}>
            Output
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#ffffff", marginBottom: 12, lineHeight: 1.3 }}>
            Verified Signal
          </div>
          <div style={{ fontSize: 12, color: "#b0b0b0", lineHeight: 1.5, marginBottom: 12 }}>
            Emits a credential object with validation trail, capability scope, and version binding.
          </div>
          <div style={{ fontSize: 11, color: "#7a7a7a", lineHeight: 1.5 }}>
            <span className="font-mono block" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.04em", color: "#6b6b6b", marginBottom: 4 }}>consumed by</span>
            Hiring managers · Learner's career system · Anthropic talent pipeline
          </div>
          <span className="font-mono inline-block" style={{ marginTop: 10, fontSize: 10, color: "#2D6A4F", background: "rgba(45, 106, 79, 0.15)", padding: "3px 8px", borderRadius: 3, letterSpacing: "0.02em" }}>
            → see credential object
          </span>
        </div>
      </div>

      <p style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #e5e5e5", fontSize: 13, color: "#6b6b6b", lineHeight: 1.55, fontStyle: "italic" }}>
        Infrastructure means: if the product changes, the system re-routes. If it doesn't, it's just a course catalog with extra steps.
      </p>
    </div>
  );
}
