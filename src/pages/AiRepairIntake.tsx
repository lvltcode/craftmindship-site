import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import ContentWithToc from "../components/ContentWithToc";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 mb-4 text-xl font-bold text-gray-900">{children}</h2>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-700">
      {children}
    </div>
  );
}

function ArtifactEmbed({ src, title, label, caption, height = "600px" }: { src: string; title: string; label: string; caption: string; height?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="my-8">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">{label}</p>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
          <p className="text-sm text-gray-500">{title}</p>
          <a href={src} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-gray-900 underline">
            Open in new tab &rarr;
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="my-8">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">{label}</p>
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <iframe src={src} title={title} className="w-full border-0" style={{ height }} onError={() => setFailed(true)} loading="lazy" sandbox="allow-scripts allow-same-origin" />
      </div>
      <p className="text-sm text-gray-500 mt-2">{caption}</p>
    </div>
  );
}

export default function AiRepairIntake() {
  usePageMeta(
    "AI Repair Intake Marketplace — Market Intelligence",
    "A pilot-ready MVP experiment on contractor lead quality, home repair trust, and subscription-first monetization.",
    {
      ogImage: "/images/og/og-ai-repair-intake.png",
      canonical: "/analysis/ai-repair-intake-marketplace",
    }
  );

  return (
    <article className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      {/* Header */}
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">
            Marketplace thesis
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            Pilot-ready MVP
          </span>
          <span className="text-xs text-gray-400">~12 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          AI Repair Intake Marketplace
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          AI-assisted repair intake, contractor lead quality, and the harder question of how to
          create value before forcing a marketplace into a commission model.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          May 2026
        </p>
      </header>

      <hr className="my-6 border-gray-200" />

      {/* At a Glance */}
      <div className="mb-8 rounded-lg border border-gray-200 p-5 sm:p-6">
        <h2 className="text-base font-semibold text-[#1a1a1a]">At a Glance</h2>
        <ul className="mt-4 space-y-2 text-[15px] text-[#1a1a1a]">
          <li><strong className="text-gray-900">Status:</strong> Pilot-ready MVP experiment</li>
          <li><strong className="text-gray-900">Category:</strong> Home repair marketplace, AI intake, contractor lead quality</li>
          <li><strong className="text-gray-900">Core thesis:</strong> The repair request is the unit of value</li>
          <li><strong className="text-gray-900">Built surfaces:</strong> Homeowner intake, AI-assisted assessment, contractor dashboard, admin/CMS, billing flow, role-based access</li>
          <li><strong className="text-gray-900">Main question tested:</strong> Can a clearer repair request create more value than a raw contractor lead?</li>
        </ul>
      </div>

      {/* Body */}
      <ContentWithToc>
      <div className="prose-custom max-w-none space-y-4 text-gray-700 leading-relaxed">

        <SectionHeading>Opening</SectionHeading>

        <p>
          Most home repair marketplaces start from a weak assumption: the homeowner already
          knows who to call.
        </p>

        <p>
          Plumber. Electrician. Appliance repair. Handyman.
        </p>

        <p>
          But real life usually does not work that cleanly. When something breaks at home, the
          homeowner often goes through a messy loop: asking friends, posting in a local Facebook
          group, Googling symptoms, watching YouTube videos, calling a few numbers they found
          online, choosing a contractor with decent reviews and hoping it is the right person.
        </p>

        <p>
          That is not a clean buying journey. It is trial and error.
        </p>

        <p>
          The problem is that even contractors do not always know the root cause from the first
          call. A good electrician, plumber, or appliance technician may still need to inspect,
          test, rule out causes, replace parts, or order components from a manufacturer. Home
          repair does not always have a clear answer at the first touchpoint.
        </p>

        <p>
          So the real problem is not just &ldquo;find a pro.&rdquo; The better problem is: how
          can we help homeowners understand the repair issue clearly enough before deciding
          whether to fix it themselves, call a contractor, or post a job?
        </p>

        <p>
          That is the thesis behind Wrenchy:{" "}
          <strong className="text-gray-900">the repair request is the unit of value.</strong>
        </p>

        <p>
          A clearer repair request can help all three sides &mdash; homeowners waste less time
          guessing, contractors receive better-quality leads, and the marketplace has a stronger
          basis for matching, quoting, and monetization.
        </p>

        <SectionHeading>Market observation</SectionHeading>

        <p>
          Home repair is a large market, but it is messy.
        </p>

        <p>
          Repair costs can be high. In some cases, calling a contractor can cost almost as much
          as replacing a cheaper appliance or fixture. Because of that, many homeowners naturally
          ask: can I fix this myself?
        </p>

        <p>
          But they often do not have enough information to answer the next set of questions.
          Is the issue dangerous? Is it safe to attempt a DIY repair? Which trade should I call?
          Which part is compatible? How long should this take? What can go wrong if I try to
          fix it? What is a reasonable contractor cost?
        </p>

        <p>
          Research takes time. A common pattern: something looks like a simple cleaning issue at
          first. After several failed attempts, the homeowner realizes the issue may be
          mechanical, electrical, model-specific, or part-related. Then they run into another
          problem &mdash; the YouTube video is for the wrong model, the part does not match, or
          the product design changed across versions.
        </p>

        <p>
          That is the gap many marketplaces do not solve well. They help people find someone to
          do the work. They do not always help the user understand the problem before looking
          for someone.
        </p>

        <SectionHeading>Existing marketplace pattern</SectionHeading>

        <p>
          Platforms like Jiffy improve access. The homeowner can find a service provider faster,
          follow a clearer booking flow, and feel more trust than they might from a random Google
          search. But a managed marketplace has a cost &mdash; the more the platform controls
          pricing, scheduling, payment, refunds, expectations, and payouts, the heavier the
          operational burden becomes.
        </p>

        <p>
          HomeStars leans more toward reviews, advertising, and lead generation. Contractors get
          visibility, homeowners get social proof, but the upstream problem remains: the homeowner
          still needs to understand the issue well enough to decide what to do next.
        </p>

        <p>
          Wrenchy tests a different angle: if the repair request is clarified first, can the
          marketplace create a better lead? See the embedded market intelligence report below
          for the full competitive landscape and Canadian regulatory context.
        </p>

        <SectionHeading>Product thesis</SectionHeading>

        <p>
          Wrenchy does not start with contractor search. It starts with problem clarification.
        </p>

        <p>
          The flow is intake-first: a homeowner uploads a photo or describes symptoms, the
          AI-assisted intake asks follow-up questions, and the system creates a structured repair
          request showing likely causes, urgency, DIY risk, estimated effort, and suggested
          trade. If a contractor is needed, they receive better context upfront.
        </p>

        <p>
          The important point: AI is not treated as a magic repair expert. It is more useful as
          a structured intake assistant &mdash; gathering information, asking the right follow-up
          questions, reducing ambiguity, and turning a vague issue into a clearer repair request.
        </p>

        <SectionHeading>MVP built to test the thesis</SectionHeading>

        <p>
          Wrenchy was built as a pilot-ready MVP, not just a static concept. The MVP was not
          built to prove that the market is already won. It was built to test a narrower and
          more useful question:
        </p>

        <Callout>
          <strong className="text-gray-900">Is a clarified repair request more valuable than a raw lead?</strong>
        </Callout>

        <p>
          The product surfaces below show what was built across the homeowner, contractor, and
          platform layers.
        </p>

        <SectionHeading>What the MVP looks like</SectionHeading>

        <p>
          The following screens are from the working MVP &mdash; built with React, TypeScript,
          Supabase, and Vercel. Each artifact is rendered from real codebase components, not mockups.
        </p>

        <ArtifactEmbed
          src="/artifacts/wrenchy/landing-page.html"
          title="Wrenchy landing page"
          label="Product surface: Landing page"
          caption="Wrenchy positions around intake quality — the marketplace starts before the homeowner knows what trade to call."
          height="700px"
        />

        <ArtifactEmbed
          src="/artifacts/wrenchy/ai-intake-flow.html"
          title="AI-assisted repair intake flow"
          label="Core product: AI-assisted repair intake"
          caption="A homeowner describes their issue and uploads a photo. The AI returns a structured assessment: likely cause, urgency, complexity, whether it's DIY-able, and which trade to contact."
          height="800px"
        />

        <ArtifactEmbed
          src="/artifacts/wrenchy/lead-preview.html"
          title="Structured lead preview for contractors"
          label="Contractor view: Structured lead"
          caption="What contractors receive is not a raw lead — it's a pre-qualified request with AI diagnosis, scope estimate, urgency level, and parts list attached."
          height="750px"
        />

        <ArtifactEmbed
          src="/artifacts/wrenchy/contractor-dashboard.html"
          title="Contractor dashboard"
          label="Contractor dashboard: Lead management"
          caption="The contractor dashboard organizes incoming leads by urgency and type. Each lead arrives with structured context — reducing the time from notification to decision."
          height="700px"
        />

        <ArtifactEmbed
          src="/artifacts/wrenchy/pricing.html"
          title="Subscription pricing tiers"
          label="Monetization: Subscription-first tiers"
          caption="Subscription-first was chosen as the simpler monetization path — testing willingness to pay for lead quality before adding marketplace commission."
          height="800px"
        />

        <SectionHeading>Why the DIY path matters</SectionHeading>

        <p>
          A key design decision in Wrenchy is that not every issue should be forced into
          &ldquo;book a contractor.&rdquo;
        </p>

        <p>
          Many homeowners genuinely want to know whether they can fix this themselves. If the
          issue appears simple and low-risk, Wrenchy can guide the homeowner through likely
          causes, basic safety checks, tools needed, possible replacement parts, estimated time,
          estimated DIY cost, and when to stop and call a professional.
        </p>

        <p>
          This matters because homeowners do not need repair services every day or every week.
          If the product is only a booking marketplace, many users will go back to Google the
          next time something breaks. For retention, Wrenchy cannot only be a
          marketplace &mdash; it needs to become a structured repair knowledge layer that helps
          users make better decisions even when they do not immediately book a contractor.
        </p>

        <SectionHeading>Structured contractor leads</SectionHeading>

        <p>
          When a job is posted, the contractor should not receive a vague message like
          &ldquo;Sink broken. Please quote.&rdquo; They should receive a structured lead with a
          clear problem description, photos, urgency, likely issue category, what the homeowner
          already tried, possible part requirement, estimated complexity, and location.
        </p>

        <p>
          This helps the contractor decide faster &mdash; whether to accept, whether to bring a
          specific part or tool, whether to quote remotely, whether to ask follow-up questions
          first. The lead preview artifact above shows the contrast between a traditional lead
          and a Wrenchy structured lead.
        </p>

        <p>
          Not by sending more leads. By sending clearer leads.
        </p>

        <SectionHeading>Monetization experiment</SectionHeading>

        <p>
          The MVP initially explored a marketplace payment model where homeowners pay through the
          platform and contractors receive payouts through the system. Technically, this is
          possible. But the business sequencing is not right for the earliest stage.
        </p>

        <p>
          A payment-led marketplace model creates operational complexity before the platform has
          proven liquidity and trust. It requires contractor KYC, payout handling, refund
          policies, dispute management, chargebacks, reconciliation, legal wording, and customer
          support. That is too much too early.
        </p>

        <p>
          So the payment marketplace model was intentionally postponed. Not because it could not
          be built. Because it should not be the center of the MVP yet.
        </p>

        <SectionHeading>Subscription-first, but not pretending it is final</SectionHeading>

        <p>
          A subscription-first model is a cleaner first test. But it should not be presented as
          proven. Wrenchy has not yet proven the best revenue model. There are several possible
          paths.
        </p>

        <div className="my-6 space-y-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Option 1: Contractor Subscription</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              Contractors pay for visibility, access to structured leads, profile placement, and
              lead management tools. The risk is obvious: if lead volume is too low, contractors
              will not keep paying.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Option 2: Commission Later</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              Once demand becomes more stable, the platform can introduce commission on completed
              jobs. But charging commission too early adds operational pressure before the
              marketplace has earned trust.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Option 3: Pro Contractor Tier</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              During the first 3 to 6 months, Wrenchy could offer an early-access Pro tier with
              benefits such as priority visibility, early lead access, verified badges, lower
              future commission, or featured listing. This fits better when the marketplace is
              still building supply.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900">Option 4: DIY Knowledge Revenue</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              Longer term, Wrenchy could turn real DIY repair cases into a structured repair
              knowledge network. DIY contributors or tradespeople who create accurate, useful
              repair guides could share revenue through subscriptions, affiliate parts, or other
              marketplace economics.
            </p>
          </div>
        </div>

        <p>
          This matters because homeowners do not repair things every day. If the platform wants
          repeat usage, it needs knowledge value, not just booking value.
        </p>

        <SectionHeading>Repair knowledge network</SectionHeading>

        <p>
          The home repair market has countless products, models, parts, versions, and failure
          modes. Even within the same brand, a few years can change the manual, layout,
          compatible parts, or repair method.
        </p>

        <p>
          This is why Google and YouTube are useful but incomplete. A video may be correct for a
          similar model but wrong for the user&apos;s actual appliance. A manual may be outdated.
          A replacement part may be unavailable. One wrong step can waste hours.
        </p>

        <p>
          Wrenchy could evolve into a repair knowledge layer: user-submitted DIY cases, verified
          repair guides, model-specific troubleshooting, part compatibility, local part
          availability, manufacturer manuals, and contractor-verified instructions. In the
          future, manufacturers could also contribute updated manuals, verified repair videos,
          replacement guides, known issue databases, and warranty guidance.
        </p>

        <p>
          This is hard. But if it works, Wrenchy is not just another contractor marketplace. It
          becomes infrastructure for repair knowledge.
        </p>

        <SectionHeading>What this MVP proves</SectionHeading>

        <p>The MVP proves several things:</p>

        <ul className="ml-5 list-disc space-y-1">
          <li>An end-to-end product surface can be built</li>
          <li>An intake-first flow is more thoughtful than a pure &ldquo;find a pro&rdquo; flow</li>
          <li>AI-assisted intake can turn vague homeowner input into a structured request</li>
          <li>Contractors can receive leads with better context</li>
          <li>Marketplace payment should be sequenced carefully</li>
          <li>The biggest marketplace risk is not technical &mdash; it is operational</li>
        </ul>

        <p>
          The most important lesson: building the MVP made the business risks clearer than a
          market report alone could.
        </p>

        <SectionHeading>What it does not prove yet</SectionHeading>

        <p>
          This is not a customer success story. It does not yet prove customer traction, paid
          contractor demand, homeowner repeat usage, marketplace liquidity, AI accuracy across
          real-world repair cases, CAC/LTV, stable revenue model, dispute handling at scale, or
          contractor trust.
        </p>

        <p>
          That is the right framing. Wrenchy is a market and product experiment, not a proven
          business.
        </p>

        <SectionHeading>Market research</SectionHeading>

        <p>
          The following report covers the Canadian home repair landscape: industry size,
          Right to Repair legislation, competitive positioning, target segments, and
          go-to-market strategy.
        </p>

        <ArtifactEmbed
          src="/artifacts/wrenchy/market-research/index.html"
          title="Canadian home repair market intelligence report"
          label="Market intelligence: Canadian home repair landscape"
          caption="10-section market intelligence report covering industry size, legislation (Right to Repair), competitive landscape, target segments, and go-to-market strategy."
          height="800px"
        />

        <p>
          <a
            href="/artifacts/wrenchy/market-research/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#2D6A4F] hover:underline"
          >
            View full report &rarr;
          </a>
        </p>

        <SectionHeading>Next validation steps</SectionHeading>

        <p>
          If Wrenchy continued, the validation should happen in this order: recruit 10 to 20
          contractors in one small local area, start with 3 to 4 common trades, let 10 beta
          homeowners use the intake flow with real repair issues, measure lead response rate,
          quote conversion, contractor acceptance, willingness to pay after contractors receive
          real leads, whether homeowners return, and whether DIY content creates repeat usage.
        </p>

        <p>
          The main question is not &ldquo;can this be built?&rdquo; The MVP already answers
          that. The real question is: can this marketplace be operated well enough for both
          contractors and homeowners to trust it?
        </p>

        <SectionHeading>Final view</SectionHeading>

        <p>
          Home repair marketplaces still have unsolved gaps. But the hardest part is not AI.
          The hardest part is operations.
        </p>

        <p>
          To make this work, the platform needs to handle contractor supply, quality control,
          homeowner acquisition, complaints, failed jobs, expectation management, knowledge
          maintenance, manufacturer data, and long-term trust.
        </p>

        <p>
          A home repair job is not like an Uber ride. The cost is higher. The risk is higher.
          Every job is more different. Trust is harder to build.
        </p>

        <p>
          So Wrenchy should not be understood as &ldquo;AI replacing contractor
          marketplaces.&rdquo; The better framing is: AI can improve repair intake. But the
          marketplace still wins or loses through trust, supply quality, knowledge depth, and
          operational execution.
        </p>

        <p>
          Technology can reduce ambiguity at the first step. The business still has to earn
          trust over time.
        </p>

      </div>
      </ContentWithToc>

      <hr className="my-6 border-gray-200" />

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
        <p>May 2026</p>
        <Link to="/analysis" className="font-medium text-gray-900 hover:underline">
          &larr; All analysis
        </Link>
      </footer>
    </article>
  );
}
