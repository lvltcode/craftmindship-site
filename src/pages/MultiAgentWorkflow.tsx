import { Link } from "react-router-dom";
import { Code } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import ContentWithToc from "../components/ContentWithToc";
import AtAGlance from "../components/AtAGlance";

/* ── Workflow Map (inline SVG diagram) ── */
function WorkflowMap() {
  return (
    <svg
      viewBox="0 0 680 670"
      className="w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: "inherit" }}
    >
      <defs>
        <marker id="chv" viewBox="0 0 10 7" refX="9" refY="3.5"
          markerWidth="8" markerHeight="6" orient="auto">
          <polyline points="1,1 9,3.5 1,6" fill="none" stroke="#9CA3AF"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="chv-a" viewBox="0 0 10 7" refX="9" refY="3.5"
          markerWidth="8" markerHeight="6" orient="auto">
          <polyline points="1,1 9,3.5 1,6" fill="none" stroke="#F59E0B"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="chv-p" viewBox="0 0 10 7" refX="9" refY="3.5"
          markerWidth="8" markerHeight="6" orient="auto">
          <polyline points="1,1 9,3.5 1,6" fill="none" stroke="#7F77DD"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* Step 1 — Load project context (purple, operator) */}
      <rect x="220" y="12" width="240" height="68" rx="8"
        fill="#F0EEFF" stroke="#7F77DD" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle"
        fontSize="13" fontWeight="600" fill="#1F2937">Load project context</text>
      <text x="340" y="49" textAnchor="middle"
        fontSize="11" fill="#6B7280">PRD · architecture</text>
      <text x="340" y="63" textAnchor="middle"
        fontSize="11" fill="#6B7280">design locks · repo state</text>

      <line x1="340" y1="82" x2="340" y2="110" stroke="#9CA3AF"
        strokeWidth="1.5" markerEnd="url(#chv)" />
      <text x="362" y="100" fontSize="10" fill="#9CA3AF">project state</text>

      {/* Step 2 — Plan task (teal, AI planning) */}
      <rect x="220" y="112" width="240" height="54" rx="8"
        fill="#EEFBF8" stroke="#14B8A6" strokeWidth="1.5" />
      <text x="340" y="136" textAnchor="middle"
        fontSize="13" fontWeight="600" fill="#1F2937">Plan task</text>
      <text x="340" y="151" textAnchor="middle"
        fontSize="11" fill="#6B7280">ChatGPT + Claude Chat</text>

      <line x1="340" y1="168" x2="340" y2="196" stroke="#9CA3AF"
        strokeWidth="1.5" markerEnd="url(#chv)" />
      <text x="362" y="186" fontSize="10" fill="#9CA3AF">task scope</text>

      {/* Step 3 — Write scoped handoff (purple, operator) */}
      <rect x="220" y="198" width="240" height="54" rx="8"
        fill="#F0EEFF" stroke="#7F77DD" strokeWidth="1.5" />
      <text x="340" y="222" textAnchor="middle"
        fontSize="13" fontWeight="600" fill="#1F2937">Write scoped handoff</text>
      <text x="340" y="237" textAnchor="middle"
        fontSize="11" fill="#6B7280">Operator scoping</text>

      <line x1="340" y1="254" x2="340" y2="282" stroke="#9CA3AF"
        strokeWidth="1.5" markerEnd="url(#chv)" />
      <text x="362" y="272" fontSize="10" fill="#9CA3AF">scoped prompt</text>

      {/* Step 4 — Execute (coral, AI execution) */}
      <rect x="220" y="284" width="240" height="54" rx="8"
        fill="#FFF1F0" stroke="#F97066" strokeWidth="1.5" />
      <text x="340" y="308" textAnchor="middle"
        fontSize="13" fontWeight="600" fill="#1F2937">Execute</text>
      <text x="340" y="323" textAnchor="middle"
        fontSize="11" fill="#6B7280">Claude Code</text>

      <line x1="340" y1="340" x2="340" y2="368" stroke="#9CA3AF"
        strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#chv)" />
      <text x="362" y="358" fontSize="10" fill="#9CA3AF">code diff</text>

      {/* Step 5 — Patch / refactor (coral, dashed border, optional) */}
      <rect x="245" y="370" width="190" height="44" rx="8"
        fill="#FFF1F0" stroke="#F97066" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="340" y="390" textAnchor="middle"
        fontSize="13" fontWeight="600" fill="#1F2937">Patch / refactor</text>
      <text x="340" y="403" textAnchor="middle"
        fontSize="11" fill="#6B7280">Codex · optional</text>

      <line x1="340" y1="416" x2="340" y2="444" stroke="#9CA3AF"
        strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#chv)" />
      <text x="362" y="434" fontSize="10" fill="#9CA3AF">reviewed diff</text>

      {/* Step 6 — QA gate (amber, pill shape) */}
      <rect x="210" y="446" width="260" height="64" rx="22"
        fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1" />
      <text x="340" y="470" textAnchor="middle"
        fontSize="13" fontWeight="600" fill="#1F2937">QA gate</text>
      <text x="340" y="485" textAnchor="middle"
        fontSize="11" fill="#6B7280">lint · build · Playwright</text>
      <text x="340" y="499" textAnchor="middle"
        fontSize="11" fill="#6B7280">browser + mobile QA</text>

      <line x1="340" y1="512" x2="340" y2="540" stroke="#9CA3AF"
        strokeWidth="1.5" markerEnd="url(#chv)" />
      <text x="362" y="530" fontSize="10" fill="#9CA3AF">pass</text>

      {/* Step 7 — Commit + verify (gray, checkpoint) */}
      <rect x="220" y="542" width="240" height="54" rx="8"
        fill="#F3F4F6" stroke="#6B7280" strokeWidth="1.5" />
      <text x="340" y="566" textAnchor="middle"
        fontSize="13" fontWeight="600" fill="#1F2937">Commit + verify</text>
      <text x="340" y="581" textAnchor="middle"
        fontSize="11" fill="#6B7280">Git checkpoint + deploy check</text>

      {/* Fail path: QA gate → Execute (amber, right side) */}
      <path
        d="M 470 478 H 535 A 10 10 0 0 0 545 468 V 321 A 10 10 0 0 0 535 311 H 460"
        stroke="#F59E0B" strokeWidth="1.5" markerEnd="url(#chv-a)" />
      <text x="555" y="400" fontSize="10" fill="#F59E0B" fontWeight="500">fail</text>

      {/* Loop-back: Commit → Load context (purple dashed, left side) */}
      <path
        d="M 220 569 H 145 A 10 10 0 0 1 135 559 V 56 A 10 10 0 0 1 145 46 H 220"
        stroke="#7F77DD" strokeWidth="2" strokeDasharray="6 4"
        markerEnd="url(#chv-p)" />
      <text x="120" y="310" fontSize="10" fill="#7F77DD" fontWeight="500"
        textAnchor="middle" transform="rotate(-90 120 310)">
        next scoped task
      </text>

      {/* Legend */}
      <g transform="translate(140, 640)">
        <circle cx="0" cy="0" r="4" fill="#7F77DD" />
        <text x="10" y="4" fontSize="10" fill="#6B7280">Operator</text>
        <circle cx="90" cy="0" r="4" fill="#14B8A6" />
        <text x="100" y="4" fontSize="10" fill="#6B7280">AI planning</text>
        <circle cx="195" cy="0" r="4" fill="#F97066" />
        <text x="205" y="4" fontSize="10" fill="#6B7280">AI execution</text>
        <circle cx="305" cy="0" r="4" fill="#F59E0B" />
        <text x="315" y="4" fontSize="10" fill="#6B7280">Gate</text>
        <circle cx="365" cy="0" r="4" fill="#6B7280" />
        <text x="375" y="4" fontSize="10" fill="#6B7280">Checkpoint</text>
      </g>
    </svg>
  );
}

/* ── Operating Loop Pill ── */
function LoopStep({ num, label, desc }: { num: number; label: string; desc: string }) {
  return (
    <div className="flex-1 min-w-[140px]">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-700">
          {num}
        </span>
        <span className="font-semibold text-sm text-gray-900">{label}</span>
      </div>
      <p className="mt-1 text-[13px] text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ── Timeline Step (Real Example) ── */
function TimelineStep({
  num,
  tool,
  input,
  output,
  detail,
}: {
  num: number;
  tool: string;
  input: string;
  output: string;
  detail?: string;
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-900 text-xs font-bold text-white">
        {num}
      </div>
      <div className="rounded-lg border border-gray-200 p-4">
        <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
          {tool}
        </span>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">{input}</p>
        <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
          <span className="font-medium text-gray-600">&rarr; Output:</span> {output}
        </p>
        {detail && (
          <p className="mt-2 text-xs text-gray-400 font-mono truncate">{detail}</p>
        )}
      </div>
    </div>
  );
}

/* ── Page ── */
export default function MultiAgentWorkflow() {
  usePageMeta(
    "Multi-Agent Workflow",
    "Repeatable AI orchestration system using Claude Code, ChatGPT, Codex, and Playwright for production software delivery.",
    { ogImage: "/images/og/og-multi-agent.png", canonical: "/work/multi-agent-workflow" },
  );

  const roleMatrix = [
    { tool: "Claude Chat", role: "Planning, architecture, prompt design, scope decisions", not: "Random coding without a plan", color: "#14B8A6" },
    { tool: "ChatGPT", role: "Debate, critique, alternative perspectives", not: "Own the implementation", color: "#14B8A6" },
    { tool: "Claude Code", role: "Main executor \u2014 features, fixes, RLS, git operations", not: "Broad product decisions without human direction", color: "#F97066" },
    { tool: "Codex", role: "Narrow patches, refactor, cleanup, secondary review", not: "Owning the full repo or rewriting working code", color: "#F97066" },
    { tool: "Playwright", role: "Real-browser QA, regression testing, flow verification", not: "Replacing human judgment on UX", color: "#F59E0B" },
    { tool: "Git", role: "Checkpoint, handoff boundary, clean state enforcement", not: "Messy parallel work on the same codebase", color: "#6B7280" },
  ];

  const antiPatterns = [
    {
      pattern: "Treating all AI tools as interchangeable",
      breaks: "Context gets smeared across tools and each agent repeats or contradicts prior decisions.",
      rule: "Assign each tool a narrow lane with explicit authority boundaries.",
    },
    {
      pattern: "Sending vague mega-prompts",
      breaks: "The agent optimizes for breadth, guesses at product intent, and produces hard-to-review diffs.",
      rule: "Send one scoped task with clear inputs, constraints, and expected output.",
    },
    {
      pattern: "Letting executor agents make product decisions",
      breaks: "Implementation speed starts overriding product model, permission, and UX tradeoffs.",
      rule: "Humans own scope and product judgment; executor agents own the assigned implementation.",
    },
    {
      pattern: "Switching tools without a committed checkpoint",
      breaks: "The next tool inherits partial context, dirty diffs, and unclear ownership.",
      rule: "Handoff only after a reviewed checkpoint with current repo state captured.",
    },
    {
      pattern: "Debugging with repeated speculative prompts",
      breaks: "Fixes stack on guesses, masking the root cause and creating new regressions.",
      rule: "Inspect the failing state, isolate the cause, then prompt for the smallest corrective change.",
    },
    {
      pattern: "Letting context run too long without reset",
      breaks: "Old assumptions linger and the agent starts optimizing against stale constraints.",
      rule: "Reset with a fresh summary, current files, and the latest accepted decisions.",
    },
  ];

  return (
    <div className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      {/* Hero */}
      <header className="prose-narrow">
        <div className="flex flex-wrap items-center gap-3">
          <img src="/images/logos/craftmindship-light.png" alt="Craftmindship logo" className="h-12 w-auto" />
          <h1 className="page-title">
            Multi-Agent Development Workflow
          </h1>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
            Case Study
          </span>
        </div>
        <p className="mt-3 text-lg text-gray-600">
          A controlled system for using ChatGPT, Claude Chat, Claude Code, Codex, and Playwright
          to ship production software without agent drift.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/lvltcode/lukedang/blob/main/casestudies/multi-agent-workflow.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 min-h-[44px] text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Code size={16} />
            View on GitHub
          </a>
        </div>
      </header>

      <AtAGlance
        rows={[
          ["Role", "Operator \u00b7 AI orchestrator"],
          ["Status", "Documented methodology \u2014 active across Cadence + Puppy Program OS"],
          ["Domain", "AI-native software development"],
          ["Stack", "Claude Chat \u00b7 Claude Code \u00b7 ChatGPT \u00b7 Codex \u00b7 Playwright \u00b7 GitHub \u00b7 Vercel \u00b7 Supabase"],
          ["What I did", "Designed a 7-step loop coordinating multiple AI models across planning, implementation, QA, and deployment"],
        ]}
        links={<>
          <Link to="/work/cadence" className="text-[#2D6A4F] hover:underline">Cadence case study</Link>
          {" \u00b7 "}
          <Link to="/work/puppy-program-os" className="text-[#2D6A4F] hover:underline">Puppy Program OS case study</Link>
        </>}
      />

      <ContentWithToc>
      <section>
        <div className="rounded-lg border-l-4 bg-gray-50 p-4" style={{ borderLeftColor: "#2D6A4F" }}>
          <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            The Interchangeability Trap
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Most builders treat AI coding tools as interchangeable. That creates context loss,
            tool drift, and compounding bugs. The real unlock is routing work to the right agent
            with clear lane separation and handoff rules.
          </p>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 1: Before / After */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          The Problem
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-red-200 bg-red-50/40 p-5">
            <p className="text-xs font-medium tracking-wide text-red-600/70 uppercase">
              Without workflow discipline
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Vague mega-prompts to AI</li>
              <li>Agent drifts from product model</li>
              <li>Unclear who owns each decision</li>
              <li>Uncommitted changes pile up</li>
              <li>QA is an afterthought</li>
              <li className="font-medium text-red-700">4&ndash;5 hours lost to dirty worktree recovery</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/40 p-5">
            <p className="text-xs font-medium tracking-wide text-emerald-600/70 uppercase">
              With structured workflow
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Scoped, single-task prompts</li>
              <li>One executor per task</li>
              <li>Human owns product, agent owns execution</li>
              <li>Clean commit after every task</li>
              <li>QA gate before next task</li>
              <li className="font-medium text-emerald-700">Predictable, repeatable shipping</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 2: Workflow Map */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Workflow Map
        </h2>
        <div className="mt-6 mx-auto max-w-[600px]">
          <WorkflowMap />
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 3: Agent Role Matrix */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Agent Role Matrix
        </h2>
        <div className="responsive-table mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-3 pr-4 font-medium text-gray-900">Tool</th>
                <th className="py-3 pr-4 font-medium text-gray-900">Role</th>
                <th className="py-3 font-medium text-gray-500">Must NOT do</th>
              </tr>
            </thead>
            <tbody>
              {roleMatrix.map((row, i) => (
                <tr key={row.tool} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">
                    <span
                      className="inline-block w-2 h-2 rounded-full mr-2 align-middle"
                      style={{
                        backgroundColor: row.color,
                        opacity: row.tool === "Codex" ? 0.4 : 1,
                      }}
                    />
                    {row.tool}
                  </td>
                  <td className="py-3 pr-4 text-gray-600 align-top">{row.role}</td>
                  <td className="py-3 text-gray-400 italic align-top">{row.not}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 rounded-lg border-l-4 border-amber-400 bg-amber-50/60 p-4">
          <h3 className="text-sm font-semibold text-gray-900">Lane crossing debt</h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            When a tool works outside its lane, the short-term speed gain creates downstream
            handoff debt: a prototyping tool touching database or security logic, a code executor
            making product-scope decisions, or a chat assistant producing implementation
            instructions without repo context.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            Common Anti-Patterns
          </h3>
          <div className="responsive-table mt-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="py-3 pr-4 font-medium text-gray-900">Anti-pattern</th>
                  <th className="py-3 pr-4 font-medium text-gray-900">What breaks</th>
                  <th className="py-3 font-medium text-gray-900">Better operating rule</th>
                </tr>
              </thead>
              <tbody>
                {antiPatterns.map((row, i) => (
                  <tr key={row.pattern} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                    <td className="py-3 pr-4 font-medium text-gray-900 align-top">{row.pattern}</td>
                    <td className="py-3 pr-4 text-gray-600 align-top">{row.breaks}</td>
                    <td className="py-3 text-gray-600 align-top">{row.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 4: Operating Loop */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          The Operating Loop
        </h2>
        <div className="mt-6 flex flex-wrap gap-6">
          <LoopStep num={1} label="Plan" desc="Scope the task in chat. Write the prompt." />
          <LoopStep num={2} label="Execute" desc="One agent, one task, one repo state." />
          <LoopStep num={3} label="Build" desc="npm run build + lint must pass." />
          <LoopStep num={4} label="Browser" desc="Playwright or manual mobile check." />
          <LoopStep num={5} label="Commit" desc="Clean git commit with descriptive message." />
          <LoopStep num={6} label="Next" desc="Load updated project state. Repeat." />
        </div>
        <div className="mt-3 flex items-center gap-2 text-gray-400">
          <div className="flex-1 border-t border-dashed border-gray-300" />
          <span className="text-xs italic flex items-center gap-1">
            ↺ repeat from Plan
          </span>
          <div className="flex-1 border-t border-dashed border-gray-300" />
        </div>
        <div className="mt-8 rounded-lg border-l-4 bg-emerald-50/50 p-4" style={{ borderLeftColor: "#2D6A4F" }}>
          <p className="text-sm text-gray-700 leading-relaxed">
            No parallel agents on the same repo. No vague mega-prompts.
            No uncommitted handoff mess. One prompt, one task, one commit.
          </p>
        </div>
        <p className="mt-6 text-gray-700 leading-relaxed">
          I use tools like Lovable, Stitch, Canva, and Gemini for fast layout exploration,
          visual direction, and rapid idea testing, not as final authority over the product.
          Production-facing work is tightened through local development, Claude Code/Codex
          refactors, Supabase review, Vercel deployment checks, and manual QA.
        </p>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 5: Real Example */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Real Example &mdash; Cadence Task 8
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Teacher UI Polish: one task moving through the full workflow.
        </p>
        <div className="mt-6 space-y-6">
          <TimelineStep
            num={1}
            tool="Claude Chat — Planning"
            input="Redesign teacher dashboard student cards from simple list to 4-column × 2-row layout with book-level color coding, parent status, practice frequency, and next lesson time."
            output="Design lock document (cadence_task_8_design_lock.md)"
            detail="cadence_task_8_design_lock.md"
          />
          <TimelineStep
            num={2}
            tool="Claude Code — Execution"
            input="Implement BookChip component, refactor TeacherDashboard, add bookColors.ts constants, wire up v_student_weekly_log_count view."
            output="8 files changed, new component, constants file, view integration"
            detail="BookChip.tsx · bookColors.ts · TeacherDashboard refactor"
          />
          <TimelineStep
            num={3}
            tool="Playwright + Manual — QA"
            input="Verify card rendering at 380px on iPhone Safari. Check book colors match spec. Confirm parent status shows correct ternary state."
            output="All checks pass. One spacing fix caught on mobile."
            detail="✓ 4/4 Playwright tests passed"
          />
          <TimelineStep
            num={4}
            tool="Git — Commit"
            input="feat: teacher dashboard student card 4×2 layout with BookChip component"
            output="Clean commit. Project state updated. Ready for next task."
            detail="feat: teacher dashboard student card 4×2 layout"
          />
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 6: Four Lessons */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Four Lessons
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">1. Planning artifacts are shared memory</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              8 markdown files (~40 pages) served as context for every AI agent.
              Each session started by loading current state, not re-explaining
              the product. Without this, every conversation starts from zero.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">2. Sequential over parallel</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Running multiple agents on the same codebase at the same time
              creates merge conflicts, duplicated work, and compounding bugs.
              Sequential execution with clean handoffs is slower per-task but
              faster per-project.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">3. Context degrades at model boundaries</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              When work crosses from Claude Code to Codex or back, context is
              partially lost. The planning docs bridge that gap. Without them,
              each agent reinvents decisions the previous one already made.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">4. Selective debate improves decisions</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Using ChatGPT to challenge Claude&apos;s architecture suggestions
              (or vice versa) caught assumptions that a single model wouldn&apos;t
              question. But debate must be bounded &mdash; unlimited back-and-forth
              wastes time.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* 7: What This Proves */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          What This Proves
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Product judgment</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Scope decisions, feature boundaries, and deliberate &ldquo;no&rdquo; choices that
              protected the core product model across hundreds of commits.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Technical coordination</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Multiple AI agents (ChatGPT, Claude Chat, Claude Code, Codex) assigned distinct
              roles with no overlapping authority and no unscoped execution.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">QA discipline</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Every task verified through lint, build, Playwright automation, and manual
              browser/mobile testing before commit.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">AI-native execution</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              AI generated the code. The operator controlled the architecture, sequencing,
              permissions, and quality gates.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/work/cadence"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 min-h-[44px] text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Cadence case study &rarr;
          </Link>
          <a
            href="https://github.com/lvltcode/lukedang/blob/main/casestudies/multi-agent-workflow.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 min-h-[44px] text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Code size={16} />
            View source on GitHub
          </a>
        </div>
      </section>
      </ContentWithToc>
    </div>
  );
}
