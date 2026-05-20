const rows = [
  {
    dimension: ["content", "state"],
    traditional: (
      <>
        Fixed at publish. Updated quarterly or annually.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Version = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>Course v2.3</code>
        </span>
      </>
    ),
    living: (
      <>
        Continuous. Content decays on a clock tied to product release cadence. Modules resequence when the underlying product ships breaking changes.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Version = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>synced to API 2024-11-05</code>
        </span>
      </>
    ),
  },
  {
    dimension: ["learner", "state"],
    traditional: (
      <>
        Binary: enrolled or completed. Progress measured by position in a fixed sequence.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Position = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>Module 4 of 7</code>
        </span>
      </>
    ),
    living: (
      <>
        Continuous capability vector. The system tracks what the learner can do, not where they are in a list.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Position = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>can build X, cannot yet Y</code>
        </span>
      </>
    ),
  },
  {
    dimension: ["assessment", "state"],
    traditional: (
      <>
        Scheduled checkpoints. Same test for every learner regardless of path. Result is a percentage score.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Output = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>score: 84%</code>
        </span>
      </>
    ),
    living: (
      <>
        Adaptive probes triggered by learner behavior. Assessment is contextualized: demonstrated under these constraints, with this evidence, at this product version.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Output = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>evidence_package</code>
        </span>
      </>
    ),
  },
  {
    dimension: ["credential", "state"],
    traditional: (
      <>
        Issued once at completion. Static badge. No expiry signal. No version binding.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Lifecycle = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>issued → permanent</code>
        </span>
      </>
    ),
    living: (
      <>
        Living credential with validation trail. Status field reflects product version changes. Re-verification targets specific capabilities, not full re-enrollment.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Lifecycle = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>verified → decaying → re-verified</code>
        </span>
      </>
    ),
  },
  {
    dimension: ["outcome", "state"],
    traditional: (
      <>
        Completion rate. NPS. Satisfaction surveys. "92% of learners would recommend this course."
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Measures = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>engagement</code>
        </span>
      </>
    ),
    living: (
      <>
        Can the learner do the job? Measured by artifact quality, employer signal, time-to-productivity in role. The system is accountable to outcomes, not satisfaction.
        <span className="block mt-1.5 text-xs italic" style={{ color: "#6b6b6b" }}>
          Measures = <code className="font-mono text-xs rounded px-1.5 py-0.5" style={{ background: "#f0f0f0", color: "#374151", fontSize: 12 }}>capability_transfer</code>
        </span>
      </>
    ),
  },
];

export default function LearningStateModel() {
  return (
    <div className="my-8">
      <style>{`
        .lsm-divider { width: 1px; padding: 0 !important; position: relative; }
        .lsm-divider::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: #d4d4d4;
        }
        thead .lsm-divider::after { bottom: -1px; }
        @media (max-width: 640px) {
          .lsm-scroll-hint { display: block; }
        }
        @media (min-width: 641px) {
          .lsm-scroll-hint { display: none; }
        }
      `}</style>

      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D6A4F", marginBottom: 6 }}>
        Learning State Model
      </p>
      <p style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", marginBottom: 24, lineHeight: 1.3 }}>
        Static vs Living Infrastructure
      </p>

      <p className="lsm-scroll-hint" style={{ fontSize: 11, color: "#9a9a9a", textAlign: "center", marginBottom: 8 }}>
        ← scroll horizontally →
      </p>

      <div className="-mx-6 px-6 overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <table className="w-full border-collapse" style={{ minWidth: 640 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #1a1a1a" }}>
              <th style={{ textAlign: "left", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6b6b6b", padding: "0 16px 12px 0", width: 140 }}>
                State
              </th>
              <th style={{ textAlign: "left", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6b6b6b", padding: "0 16px 12px 16px" }}>
                Traditional LMS
              </th>
              <th className="lsm-divider" />
              <th style={{ textAlign: "left", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#6b6b6b", padding: "0 16px 12px 16px" }}>
                Living Learning Infrastructure
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e5e5" : "none" }}>
                <td style={{ padding: "16px 16px 16px 0", verticalAlign: "top" }}>
                  <span className="font-mono" style={{ fontSize: 12, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4 }}>
                    {row.dimension[0]}<br />{row.dimension[1]}
                  </span>
                </td>
                <td style={{ padding: 16, verticalAlign: "top", fontSize: 13.5, lineHeight: 1.55, color: "#4a4a4a" }}>
                  {row.traditional}
                </td>
                <td className="lsm-divider" />
                <td style={{ padding: 16, verticalAlign: "top", fontSize: 13.5, lineHeight: 1.55, color: "#1a1a1a" }}>
                  {row.living}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #e5e5e5", fontSize: 13, color: "#6b6b6b", lineHeight: 1.55, fontStyle: "italic" }}>
        The gap is not feature depth. It is state resolution — how frequently and precisely the system knows where the learner actually is.
      </p>
    </div>
  );
}
