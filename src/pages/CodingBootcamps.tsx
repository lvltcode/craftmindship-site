import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 mb-4 text-xl font-bold text-gray-900">{children}</h2>
  );
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-4 border-l-4 border-gray-300 pl-4 text-gray-600 italic">
      {children}
    </blockquote>
  );
}

function StatCard({ source, stat, detail }: { source: string; stat: string; detail: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <p className="text-xs font-medium text-gray-400 uppercase">{source}</p>
      <p className="mt-1 text-lg font-bold text-gray-900">{stat}</p>
      <p className="mt-1 text-sm text-gray-600">{detail}</p>
    </div>
  );
}

function FutureCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <p className="text-xs font-medium text-gray-400 uppercase">Future {number}</p>
      <h3 className="mt-1 font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

export default function CodingBootcamps() {
  usePageMeta(
    "Why coding bootcamps are dying \u2014 and what replaces them",
    "A 2023 course review reread in 2026. Coffee Credit formula, business model analysis, and four futures for coding schools as AI compresses the beginner layer.",
    { ogImage: "/images/og/og-coding-bootcamps.png", canonical: "/analysis/coding-bootcamps-dying" },
  );

  return (
    <article className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      {/* Header */}
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">
            Edtech teardown
          </span>
          <span className="text-xs text-gray-400">~10 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why coding bootcamps are dying &mdash; and what replaces them
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          A 2023 course review reread in 2026. Coffee Credit formula, business model
          analysis, and four futures for coding schools as AI compresses the beginner layer.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          May 10, 2026
        </p>
      </header>

      <hr className="my-6 border-gray-200" />

      {/* Body */}
      <div className="prose-custom max-w-none space-y-4 text-gray-700 leading-relaxed">

        <p>
          In 2023, I took a Data Science course at an American coding school with a Toronto
          campus. At the time, I thought I was reviewing a course. Looking back from 2026,
          I see it differently. It was a small case study in the coding bootcamp business
          model &mdash; and that model has been past its bubble for a while.
        </p>

        <p>The old bootcamp promise was simple:</p>

        <Blockquote>
          <p>
            Learn code for a few months &rarr; build portfolio projects &rarr; apply for
            tech jobs &rarr; change your career.
          </p>
        </Blockquote>

        <p>
          That promise sounded believable during the hot tech hiring cycle. Not because a
          few months of training created deep engineering ability &mdash; but because the
          market was short on developers. Even weaker candidates had a path in.
        </p>
        <p>
          That was not proof that bootcamps worked. It was proof that bootcamps worked{" "}
          <strong className="text-gray-900">better when the market was desperate</strong>.
        </p>
        <p>
          By 2026, the picture is different. The New York Fed reported that unemployment for
          recent U.S. college graduates rose to 5.7% in Q4 2025, with underemployment at
          42.5% &mdash; the highest since 2020. If people with four-year CS degrees are
          facing a weak entry-level market, the idea that a few months of bootcamp training
          reliably creates a path into tech is no longer credible.
        </p>
        <p>It sounds less like education. More like marketing.</p>

        <SectionHeading>1. The instructor told me the truth</SectionHeading>

        <p>During the course, I asked the instructor a direct question:</p>

        <Blockquote>
          <p>
            &ldquo;After finishing this course, will I have a better chance of getting a
            job?&rdquo;
          </p>
        </Blockquote>

        <p>
          The answer wasn&apos;t direct, but the message was clear:{" "}
          <strong className="text-gray-900">not really.</strong>
        </p>
        <p>
          I didn&apos;t blame the instructor. I appreciated the honesty. But that moment
          exposed the deeper problem.
        </p>
        <p>
          A for-profit coding school can&apos;t clearly explain how the course improves a
          student&apos;s job prospects. Yet it sells the course with the <em>feeling</em> of
          career transition. The school&apos;s incentives and the student&apos;s incentives
          don&apos;t match:
        </p>

        {/* Two-column comparison table */}
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 text-left font-semibold text-gray-900">The school needs to&hellip;</th>
                <th className="py-3 pl-4 text-left font-semibold text-gray-900">The student needs&hellip;</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Fill seats every cohort</td>
                <td className="py-2 pl-4">Real skill</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Reuse curriculum</td>
                <td className="py-2 pl-4">Real feedback</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Hire instructors per class</td>
                <td className="py-2 pl-4">Real projects</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Keep new sessions launching</td>
                <td className="py-2 pl-4">Real market signal</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 pr-4">Market career transition</td>
                <td className="py-2 pl-4">Honest job probability</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Use old success stories</td>
                <td className="py-2 pl-4">A clear answer on whether this path is still worth pursuing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A course can feel nice. The instructor can be friendly. The slides can be clean.
          The LMS can work. But if the student leaves with no real market leverage,{" "}
          <strong className="text-gray-900">the product is still weak</strong>.
        </p>
        <p>
          The problem isn&apos;t bad instructors. The problem is a product system designed to
          sell <em>learning experiences</em> while students think they&apos;re buying{" "}
          <em>career leverage</em>.
        </p>

        <SectionHeading>2. The Coffee Credit formula</SectionHeading>

        <p>
          One part of my original review still holds up: the tuition math. I called it the{" "}
          <strong className="text-gray-900">Coffee Credit</strong>.
        </p>
        <p>Don&apos;t ask whether a course costs $3,000 or $10,000. Ask:</p>

        {/* Coffee Credit formula box */}
        <div className="my-6 rounded-lg border border-amber-200 bg-amber-50/50 px-5 py-4">
          <p className="text-xs font-medium text-amber-700 uppercase tracking-wide mb-2">Formula</p>
          <pre className="overflow-x-auto text-sm font-mono text-gray-800 leading-relaxed">
            Coffee Credit = (Course price &divide; Hours of instruction) &divide; Local minimum wage
          </pre>
          <p className="mt-2 text-sm text-gray-600 italic">
            = How many hours of minimum-wage work to pay for one hour of class
          </p>
        </div>

        <p>
          In Ontario, minimum wage is C$17.60/hour (Oct 2025 &ndash; Sep 2026). If one paid
          learning session effectively costs C$50, that&apos;s{" "}
          <strong className="text-gray-900">2.8 hours of gross minimum-wage work</strong>.
          C$100 = 5.7 hours. Before taxes, rent, transit, food, and the time cost of attending.
        </p>
        <p>
          Coffee Credit makes the price less abstract. If one hour of class costs several
          hours of real labor, the course needs to create real leverage:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Feedback that AI or YouTube can&apos;t provide</li>
          <li>Projects strong enough to prove ability</li>
          <li>Real employer access</li>
          <li>Technical judgment the student couldn&apos;t build alone</li>
        </ul>
        <p>
          Without that, the student is paying for{" "}
          <strong className="text-gray-900">
            structure, accountability, and the feeling of progress
          </strong>
          . Those things have value. They don&apos;t justify old bootcamp pricing.
        </p>
        <p>This is why B2C coding schools are stuck:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Charge thousands &rarr; students ask what they actually get back</li>
          <li>Lower the price &rarr; compete directly with YouTube, Coursera, ChatGPT, Claude, Cursor</li>
        </ul>
        <p className="font-medium text-gray-900">
          Expensive is hard to defend. Cheap is hard to differentiate.
        </p>
        <p>
          A polished LMS doesn&apos;t change this math. The delivery surface can be
          clean &mdash; lessons, files, submission areas &mdash; but a good delivery surface
          is not the same as a good product outcome. The real question isn&apos;t &ldquo;Did
          the student enjoy the course?&rdquo; It&apos;s:{" "}
          <strong className="text-gray-900">
            Can the student do something valuable after the course that they couldn&apos;t do
            before &mdash; and does the market recognize that ability?
          </strong>{" "}
          If the answer is unclear, the issue isn&apos;t curriculum. It&apos;s product strategy.
        </p>

        <SectionHeading>3. AI didn&apos;t kill bootcamps. AI exposed the zombie model.</SectionHeading>

        <p>
          AI doesn&apos;t need to replace senior engineers to damage bootcamps. It only needs
          to compress the <strong className="text-gray-900">beginner layer</strong> &mdash;
          the exact layer many coding schools sold at premium prices: syntax explanation,
          simple examples, beginner debugging, boilerplate, CRUD apps, sample dashboards.
        </p>
        <p>
          Stack Overflow&apos;s 2024 Developer Survey: 76% of respondents were using or
          planning to use AI tools, up from 70% the year before. Active usage rose from 44%
          to 62%.
        </p>
        <p>
          AI is good enough to compress beginner coding. It&apos;s not reliable enough to
          replace engineering judgment.
        </p>
        <p>
          So the most important skill is no longer{" "}
          <strong className="text-gray-900">writing code</strong>. It&apos;s{" "}
          <strong className="text-gray-900">reading code</strong>.
        </p>

        <blockquote className="my-6 border-l-4 border-[#2D6A4F] bg-emerald-50/40 pl-5 pr-4 py-4 text-lg text-gray-700 italic">
          <p>
            If you cannot read code, you do not know what AI wrote.<br />
            If you do not know what AI wrote, when the system breaks, you cannot fix it.<br />
            You can only tear it down and start again.
          </p>
          <p className="mt-2">
            That is not engineering. That is gambling with a nicer interface.
          </p>
        </blockquote>

        <p>
          Software engineering is not just producing code that runs today. It&apos;s asking:
          Is this secure? Maintainable? Is the data model correct? Are edge cases handled?
          Can it scale? Can it be tested? When it breaks, can we debug it?
        </p>
        <p>
          To answer those, the learner needs the layer{" "}
          <strong className="text-gray-900">below and above</strong> coding: algorithms,
          data structures, system thinking, product judgment, market understanding, problem
          framing, debugging, QA, deployment, trade-off decisions, the ability to inspect AI
          output.
        </p>
        <p>
          These are old problems. AI doesn&apos;t make them disappear.{" "}
          <strong className="text-gray-900">AI makes them more important.</strong>
        </p>
        <p>
          When everyone can generate code, the difference is no longer who can type the code.
          The difference is who can define the right problem, inspect the output, and decide
          what should actually ship.
        </p>
        <p>Old coding schools rarely teach that deeply.</p>

        <SectionHeading>4. The instructor model is also weak</SectionHeading>

        <p>
          If someone is genuinely excellent technically, busy with important work, constantly
          updated, understands hiring, understands engineering, understands product, and can
          teach well &mdash; that person&apos;s time is expensive.
        </p>
        <p>
          It&apos;s not easy for a coding school to consistently get people like that to
          teach beginner classes for many sessions at a price the school can afford.
        </p>
        <p>
          So instructor quality becomes uneven. Some can code but can&apos;t teach. Some can
          teach but don&apos;t understand the current hiring market. Some are simply teaching
          on the side for extra income. Coding schools use instructor profiles as{" "}
          <strong className="text-gray-900">trust signals</strong> while often failing to
          control the outcome that matters: whether students actually become more capable and
          more employable.
        </p>
        <p>
          A university is expensive, but at least it offers deeper foundations: math, CS,
          algorithms, systems, alumni networks, a recognized credential. A cheap online
          course is limited, but it&apos;s cheap.
        </p>
        <p className="font-medium text-gray-900">
          The coding school is stuck in the middle. Not deep like university. Not cheap like
          online learning. No guaranteed outcome. High tuition. Heavy marketing. That&apos;s
          a bad position.
        </p>

        <SectionHeading>5. The market evidence</SectionHeading>

        <p>The bootcamp model was already weak before AI accelerated it.</p>

        {/* Stats callout grid */}
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          <StatCard
            source="2U (Inside Higher Ed)"
            stat="Exited bootcamps, 2024"
            detail="Shifted to shorter microcredentials. Bootcamps struggled against shorter-term alternatives, generative AI, and changing labor needs."
          />
          <StatCard
            source="Reuters, 2025"
            stat="600+ applications, 0 offers"
            detail="A bootcamp graduate who paid nearly $20,000 applied to 600+ software engineering jobs. Got 6 replies, 2 technical screenings, zero offers."
          />
          <StatCard
            source="Codesmith CIRR data"
            stat="83% &rarr; 37%"
            detail="Part-time program job placement within 6 months of graduation. 2H 2021: 83%. 2023: 37%."
          />
          <StatCard
            source="SignalFire"
            stat="50% drop"
            detail="New-grad tech hiring dropped 50% from pre-pandemic 2019 levels."
          />
        </div>

        <p>
          The model is being squeezed by multiple forces simultaneously: weak junior hiring,
          too much bootcamp supply, employers returning to traditional signals, more
          experienced talent available, AI compressing entry-level tasks, international
          hiring competition, tutorial-style portfolios losing signal.
        </p>
        <p className="font-medium text-gray-900">
          AI is not the only problem. AI is the accelerant.
        </p>

        <SectionHeading>6. Four futures for coding schools</SectionHeading>

        <p>After 2026, coding schools split into four groups:</p>

        {/* Four futures cards */}
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          <FutureCard number={1} title="Schools that teach old-style coding">
            Die fastest. Basic Python, basic React, basic SQL, sample dashboards, clone
            apps. AI and free online education already compressed this value.
          </FutureCard>
          <FutureCard number={2} title="Schools that pivot to AI-assisted building">
            Survive temporarily. They&apos;ll teach Cursor, Claude Code, Copilot, prompting,
            vibe coding. But if they only teach &ldquo;use AI to code faster,&rdquo;
            they&apos;ll repeat the old mistake. Prompt tutorials will commoditize too.
          </FutureCard>
          <FutureCard number={3} title="Schools that teach product thinking, system design, QA, and shipping">
            Best chance. As AI gets stronger, the hard part moves to judgment: What should be
            built? What shouldn&apos;t? Which flow matters first? Where are the edge cases?
            Can the AI output be trusted? When should we refactor? When should we stop?
          </FutureCard>
          <FutureCard number={4} title="Schools that don't adapt">
            Become zombies. Landing pages still up. Cohorts still running. Old testimonials
            still cited. Real career leverage keeps weakening.
          </FutureCard>
        </div>

        <p>
          <strong className="text-gray-900">B2B is the more likely survival path.</strong>{" "}
          A person paying out of pocket asks &ldquo;what do I get back for thousands of
          dollars?&rdquo; A company paying for upskilling, AI literacy, or internal training
          carries less personal risk. But coding schools moving B2B need to be honest:
          they&apos;re no longer a path into tech. They&apos;re corporate training vendors.
          Different business.
        </p>

        <SectionHeading>7. What actually replaces coding school</SectionHeading>

        <p>
          The replacement isn&apos;t a better coding school. It&apos;s an{" "}
          <strong className="text-gray-900">AI-native building workflow</strong>.
        </p>
        <p>
          I learned more building real products with AI workflows than from any technical
          course. Building Cadence required dealing with real user flows, teacher and parent
          permissions, database schema with row-level security, authentication, deployment,
          real bugs, QA, technical debt, product trade-offs, and AI agent
          handoff &mdash; things that bootcamp exercises rarely cover properly.
        </p>
        <p>
          Claude Code, Codex, ChatGPT, Playwright, Supabase, and Vercel don&apos;t just help
          me code faster. They force me to become the person who{" "}
          <strong className="text-gray-900">defines, checks, and owns</strong> the system.
        </p>
        <p>
          <strong className="text-gray-900">Vibe coding</strong> = creating something that
          appears to work.
        </p>
        <p>
          <strong className="text-gray-900">AI-native building</strong> = understanding how
          to read code, inspect code, write clear requirements, debug, test, understand data,
          understand users, make trade-offs, ship, and take responsibility.
        </p>
        <p>That&apos;s the difference. That&apos;s what&apos;s worth learning now.</p>

        <SectionHeading>Conclusion</SectionHeading>

        <p>
          Coding bootcamps didn&apos;t die because of AI. The model had already passed its
          bubble. AI made the zombie layer visible &mdash; basic coding is no longer scarce,
          the junior tech market is no longer easy, and &ldquo;study for a few months and
          enter tech&rdquo; sounds like marketing, not a defensible outcome.
        </p>
        <p>
          Coding still needs to be understood. But learning coding in the old bootcamp sense
          is no longer worth paying a high price for.
        </p>
        <p>
          The durable skills are deeper and older: algorithms, data structures, system
          thinking, product judgment, problem framing, debugging, QA, the ability to inspect
          AI output.
        </p>
        <p>
          You can learn it in university. You can self-learn it. You can learn it by building
          real products with AI if you&apos;re serious enough not to just prompt for fun.
        </p>
        <p>
          But the old coding school model is a difficult product to defend now. It looks
          polished. It sounds reasonable. It&apos;s packaged nicely.
        </p>
        <p>
          But once you buy it,{" "}
          <strong className="text-gray-900">it&apos;s hard to return</strong>. And it may not
          do the job you actually needed it to do.
        </p>

        <hr className="my-6 border-gray-200" />

        <p className="text-sm text-gray-400 italic">
          Sources: NY Fed Q4 2025 Labor Market for Recent College Graduates &middot; Stack
          Overflow Developer Survey 2024 &middot; Reuters bootcamp coverage 2025 &middot;
          Inside Higher Ed (2U restructuring 2024) &middot; CIRR placement data &middot;
          SignalFire State of Talent 2025
        </p>
      </div>

      <hr className="my-6 border-gray-200" />

      <footer className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
        <p>May 10, 2026</p>
        <Link to="/analysis" className="font-medium text-gray-900 hover:underline">
          &larr; All analysis
        </Link>
      </footer>
    </article>
  );
}
