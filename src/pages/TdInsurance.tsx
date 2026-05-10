import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 mb-4 text-xl font-bold text-gray-900">{children}</h2>
  );
}

function PhoneScreenshot({ src, alt, caption, context }: { src: string; alt: string; caption: string; context?: string }) {
  return (
    <figure className="my-6">
      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
        <img
          src={src}
          alt={alt}
          className="w-full max-w-[240px] sm:max-w-[280px] shrink-0 rounded-lg border border-gray-200"
          loading="lazy"
        />
        <div className="mt-3 sm:mt-0 text-center sm:text-left">
          <figcaption className="text-[13px] font-medium text-gray-700">{caption}</figcaption>
          {context && <p className="mt-1 text-[13px] text-gray-500 leading-relaxed">{context}</p>}
        </div>
      </div>
    </figure>
  );
}

function DocImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-6 flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className="w-full max-w-[480px] rounded-lg border border-gray-200"
        loading="lazy"
      />
      <figcaption className="mt-2 text-[13px] text-gray-500">{caption}</figcaption>
    </figure>
  );
}

function Formula({ children }: { children: string }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-sm font-mono text-gray-800">
      {children}
    </pre>
  );
}

function ComparisonCard() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-gray-200 p-5">
        <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">Before</p>
        <h3 className="mt-2 font-semibold text-gray-900">TD Insurance</h3>
        <dl className="mt-3 space-y-1 text-sm text-gray-600">
          <div className="flex justify-between">
            <dt>Monthly premium</dt>
            <dd className="font-medium text-gray-900">~$400/mo</dd>
          </div>
          <div className="flex justify-between">
            <dt>Driving discount</dt>
            <dd className="font-medium text-gray-900">6%</dd>
          </div>
          <div className="flex justify-between">
            <dt>Driving score</dt>
            <dd className="font-medium text-gray-900">3.5 / 5</dd>
          </div>
          <div className="flex justify-between">
            <dt>Includes home insurance</dt>
            <dd className="font-medium text-gray-900">No</dd>
          </div>
        </dl>
      </div>
      <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-xs font-medium tracking-wide text-emerald-600 uppercase">After</p>
        <h3 className="mt-2 font-semibold text-gray-900">New Insurer</h3>
        <dl className="mt-3 space-y-1 text-sm text-gray-600">
          <div className="flex justify-between">
            <dt>Monthly premium</dt>
            <dd className="font-medium text-emerald-700">~$260/mo</dd>
          </div>
          <div className="flex justify-between">
            <dt>Driving discount</dt>
            <dd className="font-medium text-emerald-700">10% upfront</dd>
          </div>
          <div className="flex justify-between">
            <dt>Driving score</dt>
            <dd className="font-medium text-gray-900">N/A (upfront)</dd>
          </div>
          <div className="flex justify-between">
            <dt>Includes home insurance</dt>
            <dd className="font-medium text-emerald-700">Yes</dd>
          </div>
        </dl>
        <div className="mt-3 border-t border-emerald-200 pt-3">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-900">Monthly savings</span>
            <span className="font-bold text-emerald-700">~$140/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TdInsurance() {
  usePageMeta("When Safe Driving Apps Punish Safe Drivers", "A product teardown of TD Insurance\u2019s telematics scoring \u2014 proxy metrics, incentive misalignment, and $744/year in lost value.");

  return (
    <article className="px-6 pt-8 pb-10 sm:pt-10 sm:pb-14">
      {/* Header */}
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            Published
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          When Safe Driving Apps Punish Safe Drivers
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          A product teardown of TD Insurance&apos;s telematics scoring &mdash; proxy metrics,
          incentive misalignment, and $744/year in lost value.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          May 2026 &middot; Originally published in Vietnamese on{" "}
          <a
            href="https://craftmindship.substack.com/p/bai-hoc-mua-bao-hiem-va-app-lai-xe"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            Craftmindship
          </a>
        </p>
      </header>

      <hr className="my-6 border-gray-200" />

      {/* Body */}
      <div className="prose-custom max-w-none space-y-4 text-gray-700 leading-relaxed">

        <SectionHeading>Auto insurance in Canada is expensive</SectionHeading>

        <p>
          In the Greater Toronto Area, quotes of $400&ndash;600 CAD/month for new drivers are
          common. Your premium is shaped by license class (G2 vs full G), years of experience,
          postal code, local accident rates, vehicle type, anti-theft devices, claim history,
          and coverage level.
        </p>
        <p>
          You can&apos;t pick up a car from the dealer without proof of insurance. No coverage, no driving.
        </p>
        <p>
          I started with TD Insurance &mdash; a common choice for new drivers in Ontario.
          First year on a G2 license with an MTO-approved driving school certificate and
          enrollment in their driving score program (TD MyAdvantage), I got about 22% discount.
          Bill: around $400/month.
        </p>
        <p>
          After upgrading to a full G, adding experience, zero tickets, zero accidents &mdash;
          premium dropped to about $300/month for two drivers.
        </p>
        <p>
          Everything was fine until TD switched to a new version of their driving app.
          That&apos;s where this gets interesting from a product and system design perspective.
        </p>

        <SectionHeading>The score dropped. The discount disappeared.</SectionHeading>

        <p>
          After the app update, my driving score fell from roughly 4.5 to 3.5. The discount
          went from 22% down to 8%, then 6%. Premium climbed back toward $400/month.
        </p>
        <DocImage
          src="/images/writing/td-contract-increase.png"
          alt="Premium renewal: $3.6K to $4.2K annually"
          caption="Premium renewal: $3.6K → $4.2K annually"
        />
        <p>Quick math on the discount loss alone:</p>
        <p>At $300/month with 22% discount, the base premium was approximately:</p>
        <Formula>{"300 / (1 - 0.22) ≈ $385/month"}</Formula>
        <p>At 6% discount:</p>
        <Formula>{"385 × (1 - 0.06) ≈ $362/month"}</Formula>
        <p>
          The discount erosion cost roughly <strong className="text-gray-900">$62/month &mdash; about $744/year</strong>.
        </p>
        <p>
          The driving score wasn&apos;t the only factor. Base premiums shift, pricing models
          change, risk profiles get re-evaluated. But the score drop was the trigger, and the
          financial impact was real enough to make me start shopping.
        </p>

        <SectionHeading>What the app actually measures</SectionHeading>

        <PhoneScreenshot
          src="/images/writing/td-driving-score.png"
          alt="Driving score 3.5 — projected discount dropped to 8%"
          caption="Driving score 3.5 — projected discount dropped to 8%"
          context="After the app update, the score dropped from 4.5 to 3.5. The projected discount fell from 22% to 8%, erasing most of the financial benefit."
        />

        <p>TD MyAdvantage tracks five categories:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li><strong className="text-gray-900">Speed</strong> &mdash; Are you exceeding the limit?</li>
          <li><strong className="text-gray-900">Acceleration</strong> &mdash; Are you accelerating too aggressively?</li>
          <li><strong className="text-gray-900">Cornering</strong> &mdash; Are you turning too fast or too sharply?</li>
          <li><strong className="text-gray-900">Braking</strong> &mdash; Are you braking too hard?</li>
          <li><strong className="text-gray-900">Duration</strong> &mdash; Trip length, time of day, possibly other factors.</li>
        </ul>
        <p>
          This is standard telematics insurance (also called usage-based insurance). The premise
          is straightforward: drive safely, pay less.
        </p>
        <p>The problem isn&apos;t the premise. It&apos;s the implementation.</p>

        <SectionHeading>Where the measurement breaks down</SectionHeading>

        <h3 className="mt-8 mb-2 text-lg font-semibold text-gray-900">Speed</h3>
        <p>The logic is elementary:</p>
        <Formula>{"actual_speed - speed_limit = margin"}</Formula>
        <p>
          If <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">v_actual &gt; v_limit + margin</code> for
          long enough, you get flagged. Straightforward.
        </p>
        <p>
          But the system needs accurate speed limit data, GPS position, and map data. If any of
          those are wrong &mdash; outdated map, GPS drift, incorrect speed limit in the database &mdash;
          the app scores you incorrectly. In school zones with time-based speed limits (common
          in Ontario, where yellow lights flash during arrival/dismissal hours), the complexity multiplies.
        </p>
        <PhoneScreenshot
          src="/images/writing/td-trip-perfect.png"
          alt="A trip scored perfectly across all categories"
          caption="A trip scored perfectly across all categories"
          context="When all conditions align — smooth road, no sudden stops, accurate GPS — the app gives a clean score. But real traffic rarely cooperates."
        />

        <h3 className="mt-8 mb-2 text-lg font-semibold text-gray-900">Acceleration and braking</h3>
        <p>Technically straightforward:</p>
        <Formula>{"a = Δv / Δt"}</Formula>
        <p>
          Example: slowing from 40 km/h (&asymp;11.1 m/s) to zero in 3 seconds gives roughly
          &minus;3.7 m/s&sup2; &mdash; likely flagged as hard braking. The same deceleration over
          8 seconds gives &minus;1.4 m/s&sup2;, which reads as smooth.
        </p>
        <p className="font-medium text-gray-900">
          The problem: hard braking isn&apos;t always unsafe driving.
        </p>
        <PhoneScreenshot
          src="/images/writing/td-trip-braking.png"
          alt="Same driver, same route — braking flagged as could be better"
          caption='Same driver, same route — braking flagged as "could be better"'
          context="One hard braking event on an otherwise clean trip. The app penalizes the entire trip rather than scoring the event in proportion to the distance driven."
        />
        <p>Real-world situations where hard braking is the correct response:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>A pedestrian steps into the road</li>
          <li>The car ahead brakes suddenly</li>
          <li>A yellow light gives you 2&ndash;3 seconds before turning red</li>
          <li>Another driver cuts in front of you</li>
          <li>School zone transitions</li>
        </ul>
        <p>
          In these cases, hard braking <strong className="text-gray-900">is</strong> safe driving.
          But if the app only measures negative acceleration and deducts points, it&apos;s measuring
          smoothness, not safety.
        </p>
        <p>
          This is where many telematics systems fail: <strong className="text-gray-900">the proxy
          metric diverges from the real-world outcome it claims to represent.</strong>
        </p>

        <h3 className="mt-8 mb-2 text-lg font-semibold text-gray-900">Cornering</h3>
        <p>Cornering detection likely uses lateral acceleration:</p>
        <Formula>{"a = v² / r"}</Formula>
        <p>
          Higher speed or tighter radius means greater lateral force. Sounds reasonable, but
          several things cause false readings:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Phone sitting in a cup holder (sensor angle)</li>
          <li>Sensor calibration drift</li>
          <li>Rough road surface</li>
          <li>GPS jitter</li>
        </ul>
        <PhoneScreenshot
          src="/images/writing/td-app-screens.jpg"
          alt="TD MyAdvantage trip tracking interface"
          caption="TD MyAdvantage trip tracking interface"
          context="The trip view shows speed, acceleration, braking, and cornering scores per trip. Individual events are visible but the aggregation logic remains opaque."
        />

        <SectionHeading>The real issue: incentive misalignment</SectionHeading>

        <p>
          I don&apos;t think the engineers wrote bad formulas. The math is trivial. What I suspect happened:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>The model is technically correct</li>
          <li>But the thresholds are tuned too aggressively</li>
        </ul>
        <p>And this is where the business model creates a conflict.</p>
        <p>
          The app is marketed as a safe driving reward tool. But it also functions as a pricing
          mechanism, a retention mechanism, and a behavioral control system.
        </p>
        <p>
          When your discount drops, the company doesn&apos;t need to say &ldquo;your premium
          increased.&rdquo; They say &ldquo;your driving score decreased.&rdquo; The framing
          shifts responsibility to you, even when the measurement system is the problem.
        </p>
        <p>
          This is a textbook case of <strong className="text-gray-900">misaligned incentives</strong>.
          The system begins optimizing for actuarial risk reduction and pricing protection rather
          than user experience and realistic driving behavior.
        </p>
        <p>
          The result: users change their behavior not to drive more safely in real traffic, but
          to drive in ways that produce better sensor readings.{" "}
          <strong className="text-gray-900">They optimize for the app, not for the road.</strong>
        </p>

        <SectionHeading>How I gamed the system (and why that&apos;s the point)</SectionHeading>

        <p>
          With the old version of the app, I discovered that trips longer than about 2 km were
          scored more harshly. So I developed a habit: every 2 km, I would end the trip in the
          app and start a new one.
        </p>
        <p>This got my discount back up to 22%.</p>
        <p>
          But this behavior was objectively less safe. I was managing the app while driving &mdash;
          checking distance, timing the restart, tapping the screen &mdash; instead of focusing on
          the road. The scoring system had created a perverse incentive where gaming the app was
          rewarded more than actually driving safely.
        </p>
        <p>
          Ontario&apos;s road design made this easy to exploit. In suburban areas, highway on/off
          ramps are spaced roughly every 2 km. In urban areas, traffic lights are about 2 km apart
          or denser. Every red light became a trip reset point.
        </p>

        <SectionHeading>Aggregation logic makes it worse</SectionHeading>

        <p>The app appears to weight negative events disproportionately.</p>
        <p>
          Example: a 20 km trip goes perfectly except for one hard braking event. Instead of
          scoring the event as 1 incident across 20 km, the app seems to treat it as if the
          entire trip was characterized by hard braking. The score for that trip drops significantly.
        </p>
        <p>
          On highways, this compounds. Nobody holds exactly 100 km/h &mdash; speeds naturally
          fluctuate between 80 and 130 km/h depending on traffic. The variance alone generates
          scoring events.
        </p>
        <p>This creates what I&apos;d call a <strong className="text-gray-900">punitive feedback loop</strong>:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>The score doesn&apos;t recover easily</li>
          <li>The system feels unfair</li>
          <li>The feedback is disproportionate to the behavior</li>
        </ul>
        <p>
          This is a dangerous UX pattern. When users stop believing the score reflects reality,
          three things happen: they disengage from the program, they change behavior to game the
          system instead of drive safely, or they churn.
        </p>
        <p>I did all three.</p>

        <SectionHeading>The exit</SectionHeading>

        <p>
          After several days of frustration, I called TD to ask about cancellation costs. When
          the customer service rep offered to re-enroll me in the driving program with an
          estimated 10% discount, I declined immediately.
        </p>
        <p>
          The mental overhead &mdash; opening the app, watching the score, worrying about
          deductions &mdash; wasn&apos;t worth even 20% off. I&apos;d only re-engage if the
          discount was guaranteed at 20% or higher, with a transparent scoring system I could
          actually trust.
        </p>
        <p>I went shopping.</p>

        <ComparisonCard />

        <p>I switched.</p>

        <SectionHeading>What product teams should learn from this</SectionHeading>

        <p>
          Many digital product teams assume that more telemetry, more metrics, and more
          &ldquo;AI-driven&rdquo; scoring produces better outcomes. But the bottleneck is
          usually the measurement system itself.
        </p>
        <p>
          When the measurement doesn&apos;t reflect reality, users feel punished rather than
          supported. TD MyAdvantage used to exist as a standalone app on the App Store, where
          it never exceeded a 3-star rating. After TD integrated it into their main insurance
          app, users lost the ability to give direct feedback through the App Store rating
          system &mdash; someone decided to bury the signal by removing the feedback channel entirely.
        </p>
        <p className="font-medium text-gray-900">The core failure pattern:</p>
        <ol className="ml-5 list-decimal space-y-2">
          <li>
            <strong className="text-gray-900">Proxy metric &ne; real-world outcome.</strong>{" "}
            Hard braking is used as a proxy for unsafe driving. But hard braking is often the
            safest possible response.
          </li>
          <li>
            <strong className="text-gray-900">Threshold sensitivity tuned for the business, not the user.</strong>{" "}
            Aggressive thresholds reduce payouts. They also reduce trust.
          </li>
          <li>
            <strong className="text-gray-900">Aggregation logic punishes disproportionately.</strong>{" "}
            One event shouldn&apos;t define a 20 km trip.
          </li>
          <li>
            <strong className="text-gray-900">Gaming becomes rational.</strong>{" "}
            When the system rewards sensor-friendly behavior over actually safe behavior, users
            will optimize for the sensor.
          </li>
          <li>
            <strong className="text-gray-900">Removing feedback channels doesn&apos;t fix the product.</strong>{" "}
            It just hides the evidence.
          </li>
        </ol>
        <p>
          The lesson: if your scoring system makes users change their behavior in ways that are
          worse for them, your incentives are misaligned &mdash; no matter how technically correct
          the underlying model is.
        </p>
      </div>

      <hr className="my-6 border-gray-200" />

      <footer className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          Originally published in Vietnamese on{" "}
          <a
            href="https://craftmindship.substack.com/p/bai-hoc-mua-bao-hiem-va-app-lai-xe"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Craftmindship Substack
          </a>
          . May 2026.
        </p>
        <Link to="/analysis" className="font-medium text-gray-900 hover:underline">
          &larr; All analysis
        </Link>
      </footer>
    </article>
  );
}
