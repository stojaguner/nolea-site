export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#2f2a25]">
      {/* HERO */}
      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#8a7d6f]">
              NOLEA
            </p>

            <h1 className="max-w-2xl text-5xl font-light leading-tight md:text-7xl">
              Protection, before it’s needed.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#6d6258]">
              A refined pre- and post-swim mist designed to support young
              swimmers’ skin before and after chlorinated water exposure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="rounded-full bg-[#2f2a25] px-7 py-3 text-sm text-white transition hover:bg-[#4a423b]"
              >
                Join the Waitlist
              </a>

              <a
                href="#formula"
                className="rounded-full border border-[#c8b9aa] px-7 py-3 text-sm text-[#2f2a25] transition hover:bg-[#eee6dc]"
              >
                Explore the Formula
              </a>
            </div>
          </div>

          <div className="min-h-[520px] rounded-[2rem] bg-[#d8d0c4] p-6">
            <div className="h-full rounded-[1.5rem] bg-gradient-to-br from-[#e9e2d8] to-[#b9c4b2]" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-[#e5ddd3] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9a8d7f]">
            The overlooked exposure
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Repeated exposure, rarely considered.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#6d6258]">
            For children who spend meaningful time in pools, chlorinated water
            is not occasional. It is routine. What often presents as dryness,
            tightness, or sensitivity may reflect a more consistent disruption
            of the skin barrier under repeated conditions.
          </p>
        </div>
      </section>

      {/* SHIFT */}
      <section className="bg-[#eee7dd] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9a8d7f]">
              A different rhythm
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              From reactive to preparatory.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#6d6258]">
            Most skincare approaches address what happens after exposure.
            NOLEA is built around a more complete perspective: supporting the
            skin before and after contact with environmental stressors, not only
            in response to them.
          </p>
        </div>
      </section>

      {/* FORMULA */}
      <section id="formula" className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 min-h-[460px] rounded-[2rem] bg-[#d6dcd1] p-6">
            <div className="h-full rounded-[1.5rem] bg-gradient-to-br from-[#f2eee8] to-[#aebaa8]" />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9a8d7f]">
              Formula philosophy
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Precision, not excess.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#6d6258]">
              Our formulations draw from ingredients studied for their ability
              to support skin under stress, including extremolytes such as
              ectoin and hydroxyectoin.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#6d6258]">
              Designed to be lightweight, water-based, and compatible with
              frequent use, each formula focuses on resilience rather than
              coverage.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="border-y border-[#e5ddd3] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9a8d7f]">
            Daily use
          </p>

          <h2 className="max-w-3xl text-4xl font-light leading-tight md:text-5xl">
            Designed for real swimmers, real routines, and repeated exposure.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white/50 p-8">
              <h3 className="text-2xl font-light">Before swimming</h3>
              <p className="mt-5 leading-7 text-[#6d6258]">
                Applied to clean skin to support barrier function prior to pool
                exposure.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/50 p-8">
              <h3 className="text-2xl font-light">After swimming</h3>
              <p className="mt-5 leading-7 text-[#6d6258]">
                Reapplied after rinsing to help restore hydration and reduce
                residual environmental stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9a8d7f]">
              Founder
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              A considered approach.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#6d6258]">
              NOLEA was developed in response to a gap between repeated
              environmental exposure and how children’s skin is typically
              supported.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#6d6258]">
              Created in collaboration with medical professionals, the brand
              reflects a restrained, evidence-led approach to everyday skin
              stressors.
            </p>
          </div>

          <div className="min-h-[460px] rounded-[2rem] bg-[#d8d0c4] p-6">
            <div className="h-full rounded-[1.5rem] bg-gradient-to-br from-[#eee8df] to-[#c7b8a6]" />
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section
        id="waitlist"
        className="bg-[#2f2a25] px-6 py-24 text-white md:px-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c8b9aa]">
            First release
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            A calmer way to care for swimmers’ skin.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#d8d0c4]">
            NOLEA is developing a science-led mist for children exposed to
            chlorinated water, repeated training, sun, and friction.
          </p>

          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-6 text-white placeholder:text-[#c8b9aa] outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-white px-7 py-3 text-sm text-[#2f2a25] transition hover:bg-[#eee7dd]"
            >
              Join the First Release
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[#8a7d6f] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NOLEA</p>

          <div className="flex gap-6">
            <a href="#formula" className="hover:text-[#2f2a25]">
              Formula
            </a>
            <a href="#waitlist" className="hover:text-[#2f2a25]">
              Waitlist
            </a>
            <a href="mailto:hello@nolea.skin" className="hover:text-[#2f2a25]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
