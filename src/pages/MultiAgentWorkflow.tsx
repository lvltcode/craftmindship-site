export default function MultiAgentWorkflow() {
  return (
    <div className="px-6 py-16 sm:py-24">
      {/* Header */}
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Multi-Agent Workflow
          </h1>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            Active
          </span>
        </div>
        <p className="mt-3 text-lg text-gray-600">
          Practical AI orchestration for production software &mdash; using different models
          for different types of work without the build falling apart.
        </p>
      </header>

      <hr className="my-12 border-gray-200" />

      {/* Problem */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">The Problem</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Solo builders using AI coding tools hit a ceiling fast. A single model in a single
          context window can scaffold a feature, but production software requires decisions
          that span data modeling, security, UX, deployment, and business logic &mdash; often
          simultaneously. Feed all of that into one conversation and context degrades. The model
          forgets constraints from 40 messages ago. Bugs compound.
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed">
          The common response is to run multiple AI agents in parallel. This is worse. Two agents
          editing the same repo produce merge conflicts, ghost state, and silent regressions that
          cost hours to untangle. I lost 4&ndash;5 hours in a single session recovering from a
          dirty worktree I didn&apos;t catch before a handoff. That was enough to formalize
          the discipline.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Workflow */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
          The Workflow
        </h2>
        <p className="mt-4 text-sm text-gray-500">
          Use the right model for the right task, always sequentially, never in parallel on the same repo.
        </p>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-bold text-gray-700">1</span>
              <h3 className="font-semibold text-gray-900">Planning &rarr; Claude Chat</h3>
            </div>
            <p className="mt-2 ml-11 text-sm text-gray-600 leading-relaxed">
              Requirements, data models, RLS policies, implementation sequencing. For larger systems
              like Cadence (24-table schema, 3 user roles), this produces a full document set before
              any code is written &mdash; product brief, implementation plan, component spec, data
              model, scope boundaries. For smaller tasks, a single scoping conversation.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-bold text-gray-700">2</span>
              <h3 className="font-semibold text-gray-900">Execution &rarr; Claude Code</h3>
            </div>
            <p className="mt-2 ml-11 text-sm text-gray-600 leading-relaxed">
              The primary builder. Multi-file refactoring, RLS implementation, Edge Functions,
              architectural changes. Git commit and clean worktree before every handoff. This is
              the non-negotiable discipline in the entire workflow.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-bold text-gray-700">3</span>
              <h3 className="font-semibold text-gray-900">Overflow &rarr; Codex</h3>
            </div>
            <p className="mt-2 ml-11 text-sm text-gray-600 leading-relaxed">
              Isolated logic tasks, small fixes, refactors. Handles work that doesn&apos;t need
              full codebase awareness, or picks up when Claude Code hits rate limits.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm font-bold text-gray-700">4</span>
              <h3 className="font-semibold text-gray-900">Debate &rarr; ChatGPT (when needed)</h3>
            </div>
            <p className="mt-2 ml-11 text-sm text-gray-600 leading-relaxed">
              Not every decision needs a second opinion. But for irreversible choices &mdash;
              data model design, authentication architecture, integration patterns, pricing
              logic &mdash; stress-test the decision before committing. The filter: if you can
              undo it in five minutes, skip the debate.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-sm font-bold text-white">5</span>
              <h3 className="font-semibold text-gray-900">Orchestration &rarr; Me</h3>
            </div>
            <p className="mt-2 ml-11 text-sm text-gray-600 leading-relaxed">
              I route tasks to the right model, check the worktree between handoffs, maintain
              the planning docs, and make the final call. This is the single point of failure.
              There&apos;s no automation layer. The judgment about which model to use for what,
              and when to skip a step, is the actual skill.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Key Lessons */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Key Lessons</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Planning artifacts are the real memory</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Chat history is disposable. PRD and markdown files are not. They are the only thing
              that compounds across ventures, across models, and across sessions. When I switch
              from Claude Code to Codex, or from one project to another, the planning documents
              carry the full context. The chat window doesn&apos;t.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Sequential over parallel</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Running two agents on the same repo in parallel feels faster and produces ghost
              state &mdash; invisible conflicts between what each agent thinks the codebase looks
              like. One missed worktree check cost me 4&ndash;5 hours. The rule: git commit and
              confirm a clean worktree before every model handoff. A $0 quality gate that prevents
              the most expensive failure mode.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Context degrades at every model boundary</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Every time a prompt moves from one model to another, the &ldquo;why&rdquo; behind a
              decision compresses into &ldquo;what.&rdquo; The advisor knows the full reasoning.
              The executor receives a task. When the executor hits an edge case, it has no root
              reasoning to fall back on. For complex decisions, embed the reasoning directly into
              the planning docs: what was decided, why, and what constraints must not be violated.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Debate is expensive &mdash; use it selectively</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Early on I spent cycles running UI tweaks through a second model for validation.
              That was latency, not signal. The debate layer exists for decisions where being
              wrong means days of rework: data model changes, auth architecture, integration
              design. Everything else can be iterated in minutes.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Trade-offs */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Trade-offs</h2>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-amber-800 leading-relaxed">
            This workflow has real costs. Context switching between models requires sustained
            attention &mdash; the orchestrator can&apos;t step away mid-session. As the sole
            decision-maker and router, I am the bottleneck. Simple tasks don&apos;t need this
            level of structure; applying the full workflow to a bug fix adds overhead that a
            single tool could handle faster.
          </p>
          <p className="mt-3 text-sm text-amber-800 leading-relaxed">
            These are conscious trade-offs. The alternative &mdash; one model, one context, no
            discipline &mdash; produces faster first drafts and worse production software.
          </p>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* What compounds */}
      <section>
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">What Compounds vs What Gets Thrown Away</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-5">
            <h3 className="font-semibold text-gray-900">Compounds</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
              <li>Planning artifacts and decision logs</li>
              <li>Scope discipline</li>
              <li>Judgment about when to apply structure</li>
              <li>The workflow pattern itself</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Gets thrown away</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
              <li>Specific prompt templates</li>
              <li>Model configurations</li>
              <li>Tool-specific setups</li>
              <li>Custom workflows that worked last month</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Status */}
      <section className="pb-8">
        <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Current Status</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          In active use across multiple product builds including Cadence (music education platform)
          and three venture studio projects. The pattern maps to Anthropic&apos;s Advisor Strategy
          (released April 2026) &mdash; advisor model for planning, executor model for
          implementation, shared context &mdash; which I had been running manually before the
          official release. The system is stable but never final. Discipline and judgment are
          portable; specific tool configurations are not.
        </p>
      </section>
    </div>
  );
}
