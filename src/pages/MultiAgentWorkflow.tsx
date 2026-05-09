import { Link } from "react-router-dom";
import { Code } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

/* ── Workflow Map Step ── */
function FlowStep({
  tool,
  role,
  annotation,
  accent,
  isLast,
}: {
  tool: string;
  role: string;
  annotation: string;
  accent: string;
  isLast?: boolean;
}) {
  return (
    <>
      <div className="relative flex gap-4 sm:gap-6">
        <div
          className="w-1 shrink-0 rounded-full"
          style={{ background: accent }}
        />
        <div className="flex-1 rounded-lg border border-gray-200 p-4 sm:p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <div>
              <span className="font-semibold text-gray-900">{tool}</span>
              <span className="ml-2 text-sm text-gray-500">({role})</span>
            </div>
            <span className="text-[13px] italic text-gray-400">{annotation}</span>
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="flex items-center pl-[1px]">
          <div className="w-1 mx-auto h-6 border-l-2 border-dashed border-gray-300" />
        </div>
      )}
    </>
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
}: {
  num: number;
  tool: string;
  input: string;
  output: string;
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
      </div>
    </div>
  );
}

/* ── Page ── */
export default function MultiAgentWorkflow() {
  usePageMeta(
    "Multi-Agent Workflow",
    "A controlled system for using Claude Chat, Claude Code, Codex, and Playwright to ship production software without agent drift."
  );

  return (
    <div className="px-6 py-16 sm:py-24">
      {/* Hero */}
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Multi-Agent Development Workflow
          </h1>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">
            Case Study
          </span>
        </div>
        <p className="mt-3 text-lg text-gray-600">
          A controlled system for using Claude Chat, Claude Code, Codex, and Playwright
          to ship production software without agent drift.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/lvltcode/lukedang/blob/main/casestudies/multi-agent-workflow.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Code size={16} />
            View on GitHub
          </a>
        </div>
      </header>

      <hr className="my-12 border-gray-200" />

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

      <hr className="my-12 border-gray-200" />

      {/* 2: Workflow Map */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Workflow Map
        </h2>
        <div className="mt-6 mx-auto max-w-[600px] space-y-0">
          <FlowStep
            tool="Product question / task"
            role="Human input"
            annotation="Human decides what matters"
            accent="#374151"
          />
          <FlowStep
            tool="Claude Chat / ChatGPT"
            role="Planning & Debate"
            annotation="Architecture, scope control, prompt design"
            accent="#6366f1"
          />
          <FlowStep
            tool="Claude Code"
            role="Execution"
            annotation="Implementation, RLS, Edge Functions, git ops"
            accent="#2563eb"
          />
          <FlowStep
            tool="Codex"
            role="Secondary patches"
            annotation="Overflow: patches, refactor, cleanup"
            accent="#0891b2"
          />
          <FlowStep
            tool="Playwright / lint / build"
            role="QA Loop"
            annotation="Browser automation, type check, build verify"
            accent="#059669"
          />
          <FlowStep
            tool="Git commit"
            role="Checkpoint"
            annotation="Clean state, documented change, ready for next"
            accent="#2D6A4F"
            isLast
          />
        </div>
        <p className="mt-4 text-center text-sm text-gray-400 italic">
          Loop repeats for each scoped task
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* 3: Agent Role Matrix */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          Agent Role Matrix
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-3 pr-4 font-medium text-gray-900">Tool</th>
                <th className="py-3 pr-4 font-medium text-gray-900">Role</th>
                <th className="py-3 font-medium text-gray-500">Must NOT do</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tool: "Claude Chat", role: "Planning, architecture, prompt design, scope decisions", not: "Random coding without a plan" },
                { tool: "ChatGPT", role: "Debate, critique, alternative perspectives", not: "Own the implementation" },
                { tool: "Claude Code", role: "Main executor \u2014 features, fixes, RLS, git operations", not: "Broad product decisions without human direction" },
                { tool: "Codex", role: "Narrow patches, refactor, cleanup, secondary review", not: "Owning the full repo or rewriting working code" },
                { tool: "Playwright", role: "Real-browser QA, regression testing, flow verification", not: "Replacing human judgment on UX" },
                { tool: "Git", role: "Checkpoint, handoff boundary, clean state enforcement", not: "Messy parallel work on the same codebase" },
              ].map((row, i) => (
                <tr key={row.tool} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap align-top">{row.tool}</td>
                  <td className="py-3 pr-4 text-gray-600 align-top">{row.role}</td>
                  <td className="py-3 text-gray-400 italic align-top">{row.not}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

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
        <div className="mt-8 rounded-lg border-l-4 bg-emerald-50/50 p-4" style={{ borderLeftColor: "#2D6A4F" }}>
          <p className="text-sm text-gray-700 leading-relaxed">
            No parallel agents on the same repo. No vague mega-prompts.
            No uncommitted handoff mess. One prompt, one task, one commit.
          </p>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

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
            tool="Claude Chat \u2014 Planning"
            input="Redesign teacher dashboard student cards from simple list to 4-column \u00d7 2-row layout with book-level color coding, parent status, practice frequency, and next lesson time."
            output="Design lock document (cadence_task_8_design_lock.md)"
          />
          <TimelineStep
            num={2}
            tool="Claude Code \u2014 Execution"
            input="Implement BookChip component, refactor TeacherDashboard, add bookColors.ts constants, wire up v_student_weekly_log_count view."
            output="8 files changed, new component, constants file, view integration"
          />
          <TimelineStep
            num={3}
            tool="Playwright + Manual \u2014 QA"
            input="Verify card rendering at 380px on iPhone Safari. Check book colors match spec. Confirm parent status shows correct ternary state."
            output="All checks pass. One spacing fix caught on mobile."
          />
          <TimelineStep
            num={4}
            tool="Git \u2014 Commit"
            input="feat: teacher dashboard student card 4\u00d72 layout with BookChip component"
            output="Clean commit. Project state updated. Ready for next task."
          />
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

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

      <hr className="my-12 border-gray-200" />

      {/* 7: What This Proves */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          What This Proves
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          This workflow is not a rigid system. It adapts based on task complexity,
          available tools, and project phase. The discipline is in the operating
          principles: scope before execution, one agent per task, QA before commit,
          documentation as working memory. The tools change. The discipline compounds.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/work/cadence"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Cadence case study &rarr;
          </Link>
          <a
            href="https://github.com/lvltcode/lukedang/blob/main/casestudies/multi-agent-workflow.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Code size={16} />
            View source on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
