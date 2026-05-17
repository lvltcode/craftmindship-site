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
        <iframe src={src} title={title} className="w-full border-0" style={{ height }} onError={() => setFailed(true)} loading="lazy" sandbox="allow-scripts" />
      </div>
      <p className="text-sm text-gray-500 mt-2">{caption}</p>
    </div>
  );
}

function ComparisonCard() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-gray-200 p-5">
        <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">Commission-first</p>
        <h3 className="mt-2 font-semibold text-gray-900">Marketplace take-rate</h3>
        <dl className="mt-3 space-y-1 text-sm text-gray-600">
          <div className="flex justify-between">
            <dt>Platform fee</dt>
            <dd className="font-medium text-gray-900">15%</dd>
          </div>
          <div className="flex justify-between">
            <dt>KYC required</dt>
            <dd className="font-medium text-gray-900">Yes</dd>
          </div>
          <div className="flex justify-between">
            <dt>Payout handling</dt>
            <dd className="font-medium text-gray-900">Weekly / manual</dd>
          </div>
          <div className="flex justify-between">
            <dt>Dispute risk</dt>
            <dd className="font-medium text-gray-900">High</dd>
          </div>
          <div className="flex justify-between">
            <dt>Time to first revenue</dt>
            <dd className="font-medium text-gray-900">Post-job completion</dd>
          </div>
        </dl>
      </div>
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-xs font-medium tracking-wide text-emerald-600 uppercase">Subscription-first</p>
        <h3 className="mt-2 font-semibold text-gray-900">Contractor listing tiers</h3>
        <dl className="mt-3 space-y-1 text-sm text-gray-600">
          <div className="flex justify-between">
            <dt>Platform fee</dt>
            <dd className="font-medium text-emerald-700">$0 (no take-rate)</dd>
          </div>
          <div className="flex justify-between">
            <dt>KYC required</dt>
            <dd className="font-medium text-emerald-700">No</dd>
          </div>
          <div className="flex justify-between">
            <dt>Payout handling</dt>
            <dd className="font-medium text-emerald-700">None</dd>
          </div>
          <div className="flex justify-between">
            <dt>Dispute risk</dt>
            <dd className="font-medium text-emerald-700">Zero</dd>
          </div>
          <div className="flex justify-between">
            <dt>Time to first revenue</dt>
            <dd className="font-medium text-emerald-700">Day 1 (subscription)</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default function AiRepairIntake() {
  usePageMeta(
    "AI Repair Intake Marketplace — Market Intelligence",
    "A market intelligence and pilot-ready MVP experiment on contractor lead quality, home repair trust, and subscription-first monetization.",
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
            Market intelligence
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            MVP experiment
          </span>
          <span className="text-xs text-gray-400">~10 min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          AI Repair Intake Marketplace
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          A market intelligence and pilot-ready MVP experiment on contractor lead quality,
          home repair trust, and subscription-first monetization.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          May 2026
        </p>
      </header>

      <hr className="my-6 border-gray-200" />

      {/* Body */}
      <ContentWithToc>
      <div className="prose-custom max-w-none space-y-4 text-gray-700 leading-relaxed">

        <SectionHeading>The problem nobody talks about</SectionHeading>

        <p>
          Most home repair marketplaces assume the homeowner already knows what they need.
          &ldquo;Find a plumber.&rdquo; &ldquo;Get three quotes.&rdquo; &ldquo;Compare contractors.&rdquo;
        </p>

        <p>
          But the actual starting point is earlier and messier: a homeowner notices something wrong &mdash;
          a stain on the ceiling, a draft from a window, a furnace making a new sound &mdash; and does not
          know what trade to call, how urgent it is, or what a reasonable fix costs.
        </p>

        <p>
          This ambiguity creates friction at every step. Homeowners contact the wrong trade. Contractors
          show up to jobs that don&apos;t match the description. Quotes arrive for the wrong scope. Both
          sides waste time.
        </p>

        <p>
          <strong className="text-gray-900">The thesis tested here:</strong> the repair request is
          the unit of value. If the intake is better, everything downstream improves &mdash; matching,
          quoting, conversion, and contractor willingness to pay for leads.
        </p>

        <SectionHeading>Market observation</SectionHeading>

        <p>
          The home repair marketplace in Canada has a clear structure: HomeStars and Jiffy dominate
          different segments. HomeStars aggregates reviews and sells contractor advertising.
          Jiffy operates a more managed model &mdash; controlling pricing, scheduling, and payment flow.
        </p>

        <p>
          Both start from the same premise: the homeowner knows what they need, and the marketplace
          matches them with a contractor.
        </p>

        <p>
          The gap is upstream. When the problem is unclear, homeowners Google, watch YouTube videos,
          ask friends, or call multiple trades for exploratory visits. This can take days. The marketplace
          only captures demand after the homeowner has already self-diagnosed.
        </p>

        <p>
          That leaves an opening: what if the marketplace itself could compress the diagnosis step?
        </p>

        <SectionHeading>Competitor pattern</SectionHeading>

        <p>
          Jiffy represents a fully managed marketplace model. The platform controls job pricing,
          payment timing, and payout flow. This creates a predictable homeowner experience at
          the cost of contractor autonomy.
        </p>

        <p>
          Contractor-side friction can emerge when platforms control too much of the financial
          relationship: fees on every job, delayed payouts, pricing set by algorithm rather than
          by the contractor&apos;s own assessment. This is a common pattern in managed marketplaces
          across categories &mdash; Uber, DoorDash, and Instacart have all faced supply-side
          tension from the same structure.
        </p>

        <p>
          HomeStars takes a different approach: advertising and lead generation, where contractors
          pay for visibility and reviews drive ranking. The homeowner experience is less managed,
          but contractors retain pricing control.
        </p>

        <p>
          Neither model solves the upstream intake problem. Both wait for a homeowner who has
          already decided what they need.
        </p>

        <SectionHeading>Product thesis: the repair request is the unit of value</SectionHeading>

        <p>
          The hypothesis this MVP tests is simple: a well-structured repair request is more valuable
          than a raw lead.
        </p>

        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong className="text-gray-900">For homeowners:</strong> AI-assisted intake replaces
            the &ldquo;I don&apos;t know who to call&rdquo; paralysis with a structured summary:
            what the issue likely is, how urgent it is, whether it&apos;s DIY-able, and which trade
            to contact.
          </li>
          <li>
            <strong className="text-gray-900">For contractors:</strong> structured requests mean
            less time qualifying leads. The job description, urgency, and complexity are pre-assessed.
            Show-up rates and quote accuracy should improve.
          </li>
          <li>
            <strong className="text-gray-900">For the platform:</strong> better intake creates
            better matching, which creates higher conversion, which makes lead access more valuable
            &mdash; justifying contractor subscription fees.
          </li>
        </ul>

        <Callout>
          <strong className="text-gray-900">Not proven yet.</strong> This is a market thesis
          expressed as a working product. The MVP tests whether the mechanics work, not whether
          the market responds.
        </Callout>

        <SectionHeading>MVP built to test the thesis</SectionHeading>

        <p>
          The pilot-ready MVP was built as a vertically integrated product covering the full
          flow from diagnosis to booking to billing:
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>AI-powered diagnosis flow (text + image upload, multimodal analysis)</li>
          <li>Marketplace with contractor profiles, specialty filters, and city-specific pages</li>
          <li>Booking and scheduling with calendar availability</li>
          <li>Homeowner dashboard (diagnosis history, active jobs, usage tracking)</li>
          <li>Contractor dashboard (job management, accept/decline, analytics)</li>
          <li>Subscription billing with tiered access for both sides</li>
          <li>Notification system (in-app + email on job status changes)</li>
          <li>Admin panel with user management and content CMS</li>
          <li>Row-level security on every table, server-side price validation</li>
        </ul>

        <p>
          The stack: React + TypeScript + Supabase (Postgres, Auth, RLS, Edge Functions) + Stripe Billing.
          Deployed on Vercel with full SEO infrastructure.
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

        <SectionHeading>AI intake flow</SectionHeading>

        <p>
          The core product surface is the AI diagnosis. A homeowner uploads a photo and text
          description of their problem. The system:
        </p>

        <ol className="ml-5 list-decimal space-y-2">
          <li>
            <strong className="text-gray-900">Analyzes the input</strong> via multimodal AI
            (image + text, processed through an edge function)
          </li>
          <li>
            <strong className="text-gray-900">Returns a structured response:</strong> summary
            of the likely issue, urgency level, complexity assessment, DIY steps if applicable,
            and a parts list
          </li>
          <li>
            <strong className="text-gray-900">Routes based on complexity:</strong> simple issues
            get a DIY guide; complex issues get a &ldquo;book a pro&rdquo; prompt with a
            matched contractor recommendation
          </li>
        </ol>

        <p>
          Usage is gated by subscription tier: free users get 3 diagnoses per month, paid tiers
          unlock 20 or unlimited. This creates a natural upgrade trigger &mdash; homeowners who
          use the tool regularly hit the gate and decide whether the value justifies the subscription.
        </p>

        <p>
          The AI output is stored as a structured record, which means the platform accumulates
          a dataset of real repair patterns, seasonal demand, and geographic distribution &mdash;
          useful for future pricing intelligence.
        </p>

        <SectionHeading>Marketplace and contractor workflow</SectionHeading>

        <p>
          The marketplace side is structured around contractor profiles with specialties (plumber,
          electrician, HVAC, general contractor, etc.), verified availability, and review aggregation.
        </p>

        <p>
          The booking flow:
        </p>

        <ol className="ml-5 list-decimal space-y-1">
          <li>Homeowner browses by specialty and location</li>
          <li>Selects a contractor and picks an available time</li>
          <li>Job is created with the AI diagnosis attached as context</li>
          <li>Contractor receives notification with full job details</li>
          <li>Accept/decline with status tracking through completion</li>
        </ol>

        <p>
          The key difference from a raw lead marketplace: by the time the contractor sees the
          job, it already has a structured diagnosis, urgency assessment, and complexity rating.
          The contractor knows what they&apos;re walking into.
        </p>

        <p>
          Contractor tiers control lead access: free contractors get 5 leads per month, paid
          tiers get unlimited access with priority placement.
        </p>

        <SectionHeading>Payment model decision</SectionHeading>

        <p>
          The MVP originally explored a full marketplace payment model:
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>15% platform commission on every job</li>
          <li>Stripe Connect for contractor onboarding and payouts</li>
          <li>Destination charges (platform collects, pays out to contractor)</li>
          <li>Weekly payout schedule</li>
        </ul>

        <p>
          This was built but intentionally postponed. The code exists &mdash; Stripe Connect
          integration, platform fee logic, payout scheduling &mdash; but it is not active in
          the MVP.
        </p>

        <p>
          <strong className="text-gray-900">Why it was postponed:</strong>
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>KYC requirements for every contractor (identity verification, bank account linking)</li>
          <li>Payout handling and reconciliation</li>
          <li>Refund and dispute risk (chargebacks, scope disagreements)</li>
          <li>Regulatory requirements for holding and disbursing funds</li>
          <li>Operational complexity before product-market fit is established</li>
        </ul>

        <p>
          All of this is solvable &mdash; platforms like Jiffy and TaskRabbit operate this way.
          But it adds significant operational and legal surface area before the core thesis
          (better intake = better leads = willingness to pay) is validated.
        </p>

        <SectionHeading>Why subscription-first was simpler than commission-first</SectionHeading>

        <ComparisonCard />

        <p>
          The subscription model was chosen as the first monetization test because it:
        </p>

        <ol className="ml-5 list-decimal space-y-2">
          <li>
            <strong className="text-gray-900">Generates revenue before a single job completes.</strong>{" "}
            Contractors pay for lead access and visibility. The platform doesn&apos;t need to
            intermediate the payment between homeowner and contractor.
          </li>
          <li>
            <strong className="text-gray-900">Avoids regulatory complexity.</strong>{" "}
            No money transmission, no KYC, no payout timing disputes.
          </li>
          <li>
            <strong className="text-gray-900">Tests willingness to pay for lead quality.</strong>{" "}
            If contractors won&apos;t pay $29&ndash;$59/month for structured leads, they
            certainly won&apos;t tolerate a 15% cut of every job.
          </li>
          <li>
            <strong className="text-gray-900">Creates a cleaner signal.</strong>{" "}
            Subscription revenue is predictable. Commission revenue depends on job volume,
            which depends on supply and demand balance. Subscription isolates the
            &ldquo;is the lead quality good enough?&rdquo; question.
          </li>
        </ol>

        <p>
          Marketplace payments remain the long-term model &mdash; the code is built, the
          architecture supports it &mdash; but the sequence is deliberate: validate lead
          quality first, then introduce transaction-level monetization.
        </p>

        <SectionHeading>What the MVP proves</SectionHeading>

        <p>
          <strong className="text-gray-900">Technical feasibility:</strong>
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>AI multimodal intake can produce structured repair assessments from photos + text</li>
          <li>The full flow (diagnose → match → book → notify → track) works end-to-end</li>
          <li>Subscription billing with tiered access gates is functional</li>
          <li>Row-level security isolates tenant data correctly</li>
          <li>The architecture supports marketplace payments when ready to activate</li>
        </ul>

        <p>
          <strong className="text-gray-900">Product design feasibility:</strong>
        </p>

        <ul className="ml-5 list-disc space-y-1">
          <li>The intake-first flow is coherent &mdash; homeowners can go from &ldquo;I don&apos;t know what&apos;s wrong&rdquo; to a structured request in under 2 minutes</li>
          <li>Complexity routing (DIY vs. book a pro) creates a natural conversion funnel</li>
          <li>Free-tier usage caps create measurable upgrade triggers</li>
          <li>Contractor dashboards provide enough signal to evaluate leads before accepting</li>
        </ul>

        <SectionHeading>What it does not prove yet</SectionHeading>

        <p>
          <strong className="text-gray-900">This is a pilot-ready MVP experiment, not validated traction.</strong>
        </p>

        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong className="text-gray-900">No real revenue.</strong> Subscription billing
            is functional but has not processed paid subscribers at scale.
          </li>
          <li>
            <strong className="text-gray-900">No real users.</strong> Marketplace data is
            demonstration data. No homeowners have used this to solve a real repair problem.
          </li>
          <li>
            <strong className="text-gray-900">AI diagnosis quality is model-dependent.</strong>{" "}
            The system produces structured output, but accuracy and reliability under diverse
            real-world inputs has not been independently validated.
          </li>
          <li>
            <strong className="text-gray-900">Supply-side acquisition is untested.</strong>{" "}
            No real contractors have been onboarded. Willingness to subscribe for lead access
            is a hypothesis, not a measured result.
          </li>
          <li>
            <strong className="text-gray-900">Marketplace payment model is postponed.</strong>{" "}
            The 15% take-rate model is built but not live. Contractor acceptance of commission
            fees is unknown.
          </li>
          <li>
            <strong className="text-gray-900">Geographic demand is assumed.</strong>{" "}
            City-level SEO pages are built, but local demand patterns have not been observed.
          </li>
        </ul>

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
          The MVP moves from experiment to pilot with these milestones:
        </p>

        <ol className="ml-5 list-decimal space-y-2">
          <li>
            <strong className="text-gray-900">10&ndash;20 approved contractors</strong> in
            one city, across 3&ndash;4 specialties. Enough to cover common request types.
          </li>
          <li>
            <strong className="text-gray-900">10 beta homeowners</strong> using AI diagnosis
            on real problems. Measuring: diagnosis accuracy, time to resolution, contractor
            match quality.
          </li>
          <li>
            <strong className="text-gray-900">1 pilot partner</strong> (property manager,
            condo board, or insurance referral partner) who can provide consistent intake
            volume.
          </li>
          <li>
            <strong className="text-gray-900">Lead response rate:</strong> what percentage
            of structured requests get a contractor response within 4 hours?
          </li>
          <li>
            <strong className="text-gray-900">Quote conversion:</strong> of responded leads,
            how many convert to a booked job?
          </li>
          <li>
            <strong className="text-gray-900">Willingness to pay for subscription:</strong>{" "}
            of contractors receiving leads, how many convert from free tier to paid after
            30 days?
          </li>
        </ol>

        <Callout>
          <strong className="text-gray-900">The pilot question is not &ldquo;can we build it?&rdquo;</strong>{" "}
          The MVP answers that. The pilot question is: &ldquo;Will contractors pay for structured
          leads that they didn&apos;t have to qualify themselves?&rdquo;
        </Callout>

        <p>
          If subscription conversion is below 10% after 30 days of lead delivery, the thesis
          is weak. If it&apos;s above 25%, the subscription model has legs and marketplace
          payments become the natural next layer.
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
