const capabilityClaims = [
  "Design Claude API integration architecture for multi-step workflows",
  "Implement function calling with error handling and fallback logic",
  "Evaluate prompt performance against defined quality rubrics",
];

const cannotYetClaims = [
  "Fine-tuning pipeline design",
  "Multi-model orchestration across vendors",
];

const evidenceItems = [
  { number: "01", title: "Working API integration", meta: "Code repository · 847 lines · Reviewed by AI grader + 2 peers" },
  { number: "02", title: "Prompt evaluation framework", meta: "Documentation · Applied to 3 production scenarios · Peer reviewed" },
  { number: "03", title: "Architecture decision record", meta: "Capstone artifact · Expert-validated · Dr. M. Chen, Anthropic Applied AI" },
];

const trailEntries = [
  { date: "2026-07-01", event: <><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Placement</strong> — Positioned at Level 2 (prior PM experience, no ML background)</> },
  { date: "2026-07-14", event: <><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Gate 1 passed</strong> — API fundamentals (artifact + peer review)</> },
  { date: "2026-08-02", event: <><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Gate 2 passed</strong> — Production patterns (artifact + AI grader)</> },
  { date: "2026-08-15", event: <><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Capstone validated</strong> — Expert reviewer Dr. M. Chen, Anthropic Applied AI</> },
  { date: "2026-08-15", event: <><strong style={{ fontWeight: 500, color: "#1a1a1a" }}>Credential issued</strong> — LLI-2026-0847-CLD</> },
];

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono" style={{ fontSize: 10, fontWeight: 500, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
      {children}
    </div>
  );
}

function KvRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="vasc-kv-row" style={{ marginBottom: 8 }}>
      <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: "#6b6b6b" }}>{label}</span>
      <span className={mono ? "font-mono" : ""} style={{ fontSize: mono ? 12 : 13, color: "#1a1a1a", lineHeight: 1.5 }}>{value}</span>
    </div>
  );
}

export default function VerifiedAiSkillCredential() {
  return (
    <div className="my-8">
      <style>{`
        .vasc-kv-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 8px;
          align-items: baseline;
        }
        .vasc-trail-entry {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 12px;
          align-items: baseline;
        }
        .vasc-claim {
          position: relative;
          padding: 6px 0 6px 18px;
          font-size: 13px;
          color: #1a1a1a;
          line-height: 1.5;
          border-bottom: 1px solid #f7f7f7;
          list-style: none;
        }
        .vasc-claim:last-child { border-bottom: none; }
        .vasc-claim::before {
          content: '';
          position: absolute;
          left: 0;
          top: 12px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2D6A4F;
        }
        .vasc-claim-not-yet {
          color: #6b6b6b;
          font-style: italic;
        }
        .vasc-claim-not-yet::before {
          background: none;
          border: 1.5px solid #c4c4c4;
        }
        @media (max-width: 640px) {
          .vasc-kv-row {
            grid-template-columns: 1fr;
            gap: 2px;
            margin-bottom: 12px;
          }
          .vasc-trail-entry {
            grid-template-columns: 1fr;
            gap: 2px;
          }
          .vasc-header { flex-direction: column; }
          .vasc-section { padding: 14px 16px; }
        }
      `}</style>

      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 6 }}>
        Sample Credential Object
      </p>
      <p style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", marginBottom: 24, lineHeight: 1.3 }}>
        What a Verified AI Skill Credential Contains
      </p>

      <div style={{ background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: 8, overflow: "hidden" }}>
        {/* Header */}
        <div className="vasc-header" style={{ padding: "20px 24px", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div className="font-mono" style={{ fontSize: 10, fontWeight: 500, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
              Credential ID
            </div>
            <div className="font-mono" style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a", letterSpacing: "0.02em" }}>
              LLI-2026-0847-CLD
            </div>
            <div style={{ marginTop: 8 }}>
              <div className="vasc-kv-row" style={{ marginBottom: 4 }}>
                <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: "#6b6b6b" }}>issued</span>
                <span className="font-mono" style={{ fontSize: 12, color: "#1a1a1a" }}>2026-08-15</span>
              </div>
              <div className="vasc-kv-row" style={{ marginBottom: 0 }}>
                <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: "#6b6b6b" }}>version_bound</span>
                <span className="font-mono" style={{ fontSize: 12, color: "#1a1a1a" }}>claude-api-2024-11-05</span>
              </div>
            </div>
          </div>
          <span className="font-mono" style={{ display: "inline-block", fontSize: 11, fontWeight: 500, letterSpacing: "0.04em", padding: "4px 10px", borderRadius: 4, background: "#D8F3DC", color: "#2D6A4F", flexShrink: 0, marginTop: 2 }}>
            VERIFIED
          </span>
        </div>

        {/* Capability Verified */}
        <div className="vasc-section" style={{ padding: "18px 24px", borderBottom: "1px solid #f0f0f0" }}>
          <SectionHeader>Capability Verified</SectionHeader>
          <KvRow label="scope" value="Production AI Feature Development" />
          <div style={{ marginTop: 12 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {capabilityClaims.map((claim) => (
                <li key={claim} className="vasc-claim">{claim}</li>
              ))}
            </ul>
            <span className="font-mono block" style={{ fontSize: 10, fontWeight: 500, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 10, marginBottom: 4 }}>
              Cannot yet
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {cannotYetClaims.map((claim) => (
                <li key={claim} className="vasc-claim vasc-claim-not-yet">{claim}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Evidence Package */}
        <div className="vasc-section" style={{ padding: "18px 24px", borderBottom: "1px solid #f0f0f0" }}>
          <SectionHeader>Evidence Package</SectionHeader>
          {evidenceItems.map((item) => (
            <div key={item.number} style={{ padding: "10px 0", borderBottom: "1px solid #f5f5f5" }}>
              <div>
                <span className="font-mono" style={{ fontSize: 11, fontWeight: 500, color: "#9a9a9a", marginRight: 8 }}>{item.number}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>{item.title}</span>
              </div>
              <div style={{ fontSize: 12, color: "#6b6b6b", marginTop: 3, paddingLeft: 24, lineHeight: 1.4 }}>{item.meta}</div>
            </div>
          ))}
          <div style={{ marginTop: 12 }}>
            <KvRow label="method" value="AI-graded 95% + expert capstone 5%" />
            <KvRow label="rubric" value="LLI-RUBRIC-2026-Q3-v2" mono />
          </div>
        </div>

        {/* Validation Trail */}
        <div className="vasc-section" style={{ padding: "18px 24px", borderBottom: "1px solid #f0f0f0" }}>
          <SectionHeader>Validation Trail</SectionHeader>
          {trailEntries.map((entry, i) => (
            <div key={i} className="vasc-trail-entry" style={{ padding: "8px 0", borderBottom: i < trailEntries.length - 1 ? "1px solid #f7f7f7" : "none" }}>
              <span className="font-mono" style={{ fontSize: 11, color: "#9a9a9a", whiteSpace: "nowrap" }}>{entry.date}</span>
              <span style={{ fontSize: 12.5, color: "#4a4a4a", lineHeight: 1.45 }}>{entry.event}</span>
            </div>
          ))}
        </div>

        {/* Credential Type */}
        <div className="vasc-section" style={{ padding: "18px 24px", background: "#f9f9f9", borderRadius: "0 0 8px 8px" }}>
          <SectionHeader>Credential Type</SectionHeader>
          <KvRow label="class" value="Capability credential (not completion certificate)" />
          <KvRow label="comparability" value="Gates are standardized; personal path was unique" />
          <KvRow label="version_bound" value="Valid for Claude API 2024-11-05 feature set" />

          <div style={{ fontSize: 12.5, color: "#4a4a4a", lineHeight: 1.5, marginTop: 8, paddingTop: 8, borderTop: "1px solid #ececec" }}>
            Status changes to <strong style={{ fontWeight: 600 }}>DECAYING</strong> when a new major API version ships. Learner can re-verify specific capabilities without full re-enrollment.
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 10, flexWrap: "wrap" }}>
            {([
              { color: "#2D6A4F", label: "verified" },
              { color: "#D97706", label: "decaying" },
              { color: "#DC2626", label: "expired" },
            ] as const).map((s) => (
              <span key={s.label} className="font-mono inline-flex items-center" style={{ gap: 6, fontSize: 11, color: "#6b6b6b" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #e5e5e5", fontSize: 13, color: "#6b6b6b", lineHeight: 1.55, fontStyle: "italic" }}>
        A completion certificate tells you someone finished. This tells you what they can do, how that was verified, and when it expires.
      </p>
    </div>
  );
}
