import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NOLÉA | Invisible protection. Visible care.",
  description:
    "Barrier-first skincare for children and families with repeated exposure to chlorine, sun, salt, and water.",
};

const pillars = [
  {
    title: "Pre-swim support",
    body: "Designed to be applied before pool exposure, when support is usually missing from the routine.",
  },
  {
    title: "Post-swim recovery",
    body: "Used again after rinsing to help skin feel hydrated, comfortable, and less stressed over time.",
  },
  {
    title: "Barrier-focused",
    body: "Built around the realities of repeated exposure rather than treating chlorine like a one-time event.",
  },
];

const routine = [
  {
    step: "01",
    title: "Before swimming",
    body: "Apply to clean, dry skin before pool time as part of a simple barrier-first routine alongside sunscreen.",
  },
  {
    step: "02",
    title: "After swimming",
    body: "Reapply after rinsing to help restore hydration and support comfort after repeated contact with chlorine and water.",
  },
];

const formulation = [
  {
    title: "Extremolyte-led",
    body: "Powered by ingredients like Ectoin and Hydroxyectoin, chosen for their role in supporting hydration and barrier resilience under environmental stress.",
  },
  {
    title: "Lightweight by design",
    body: "No heavy residue. No sticky finish. Designed to feel elegant enough for repeated, real-world use.",
  },
  {
    title: "Evidence-led restraint",
    body: "Every inclusion should serve a purpose: support tolerance, reinforce hydration, and respect the realities of children’s skin.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1f2937]">
      <section className="border-b border-black/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <a
            href="#top"
            className="text-sm font-medium uppercase tracking-[0.18em] text-[#111827]"
          >
            NOLÉA
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#approach"
              className="text-sm text-[#6b7280] transition hover:text-[#111827]"
            >
              Approach
            </a>
            <a
              href="#formula"
              className="text-sm text-[#6b7280] transition hover:text-[#111827]"
            >
              Formula
            </a>
            <a
              href="#routine"
              className="text-sm text-[#6b7280] transition hover:text-[#111827]"
            >
              Routine
            </a>
            <Link
              href="/learn"
              className="text-sm text-[#6b7280] transition hover:text-[#111827]"
            >
              Learn
            </Link>
          </nav>
        </div>
      </section>

      <section id="top" className="mx-auto max-w-6xl px-6 pb-10 pt-14 md:px-8 md:pb-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-[#6b7280]">
              Science-backed pediatric swim-skin care
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-[#111827] md:text-7xl md:leading-[0.96]">
              Protection, before it&apos;s needed.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#4b5563] md:text-lg">
              A weightless, barrier-first mist designed for children and
              families with repeated exposure to chlorine, sun, salt, and water
              — developed with restraint, shaped by real use, and informed by
              science.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#launch"
                className="inline-flex items-center rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Join the list
              </a>
              <Link
                href="/learn"
                className="inline-flex items-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-black/5"
              >
                Explore Learn
              </Link>
            </div>

            <p className="mt-8 max-w-3xl text-sm leading-7 text-[#6b7280]">
              Fragrance-free. Lightweight. Sensitive-skin minded. Developed in
              collaboration with a cosmetic chemist and university researchers,
              with oversight from a pediatric surgeon.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white/70 p-6 backdrop-blur-sm md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6b7280]">
              What this page is built to say
            </p>

            <div className="mt-6 space-y-5">
              {pillars.map((item) => (
                <div key={item.title} className="border-t border-black/6 pt-5 first:border-t-0 first:pt-0">
                  <h2 className="text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[16px] leading-7 text-[#4b5563]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="border-y border-black/5 bg-[#efece5]"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111827] md:text-5xl">
              Repeated exposure, rarely considered.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[17px] leading-8 text-[#374151]">
              For children who spend meaningful time in pools, chlorinated water
              is not occasional. It is repeated, cumulative, and often reduced
              to the language of ordinary dryness.
            </p>
            <p className="text-[17px] leading-8 text-[#374151]">
              What looks mild can reflect an ongoing pattern of barrier stress:
              roughness, tightness, heightened sensitivity, and discomfort that
              builds over time rather than appearing as a single post-swim
              reaction.
            </p>
            <p className="text-[17px] leading-8 text-[#374151]">
              Most products enter the routine too late. NOLÉA is built around a
              more complete sequence: before contact, and after it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
              Positioning shift
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111827] md:text-5xl">
              From reactive to preparatory.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-black/8 bg-white/75 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6b7280]">
                Before swimming
              </p>
              <p className="mt-3 text-[17px] leading-8 text-[#374151]">
                Support the skin barrier prior to exposure, rather than waiting
                for visible discomfort to appear.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-black/8 bg-white/75 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6b7280]">
                After swimming
              </p>
              <p className="mt-3 text-[17px] leading-8 text-[#374151]">
                Replenish hydration and help the skin settle after contact with
                chlorine, sun, salt, and repeated washing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="formula"
        className="border-y border-black/5 bg-white/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
              Formulation philosophy
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111827] md:text-5xl">
              Precision, not excess.
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#374151]">
              Our approach draws from ingredients studied for their role in
              supporting skin resilience under stress, including extremolytes
              such as Ectoin and Hydroxyectoin, within lightweight systems
              designed for frequent use.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {formulation.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-black/8 bg-[#faf8f3] p-6"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-7 text-[#4b5563]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="routine"
        className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
              Designed for real use
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111827] md:text-5xl">
              Simple enough to keep.
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#374151]">
              Care should feel nearly imperceptible — quiet enough to become
              routine, considered enough to matter.
            </p>
          </div>

          <div className="space-y-5">
            {routine.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.75rem] border border-black/8 bg-white/80 p-6 md:p-8"
              >
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#6b7280]">
                  {item.step} / {item.title}
                </p>
                <p className="mt-3 text-[17px] leading-8 text-[#374151]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#efece5]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
              Founder
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111827] md:text-5xl">
              A considered approach.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[17px] leading-8 text-[#374151]">
              NOLÉA was developed in response to the gap between repeated
              environmental exposure and how children&apos;s skin is typically
              supported. Built for real swim life, the brand reflects a
              restrained, evidence-led view of everyday skin stressors.
            </p>
            <p className="text-[17px] leading-8 text-[#374151]">
              Developed in collaboration with a cosmetic chemist and university
              researchers, with oversight from a pediatric surgeon, NOLÉA is
              shaped by observation, routine, and the realities of frequent
              water exposure.
            </p>
            <p className="text-[17px] leading-8 text-[#374151]">
              Built from real exposure, not theoretical need.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/8 bg-white/80 p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280]">
              Learn
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#111827] md:text-4xl">
              Explore the thinking behind barrier-first swim care.
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-[#4b5563]">
              Read practical guidance on chlorine exposure, children&apos;s
              skin, and how to build gentler routines around frequent pool time.
            </p>
            <div className="mt-6">
              <Link
                href="/learn"
                className="inline-flex items-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-black/5"
              >
                Visit Learn
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-[#111827] p-6 text-white md:p-8" id="launch">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
              Launching soon
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
              Be first to know.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-8 text-white/75">
              Join the list for early product updates, first access, and a more
              thoughtful release timeline.
            </p>

            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="min-h-[48px] flex-1 rounded-full border border-white/10 bg-white/8 px-5 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-white/30"
              />
              <button
                type="submit"
                className="min-h-[48px] rounded-full bg-white px-5 text-sm font-medium text-[#111827] transition hover:bg-[#f3f4f6]"
              >
                Join waitlist
              </button>
            </form>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Low-volume updates only.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
