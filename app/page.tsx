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

            <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-2xl">
              Protection, before it’s needed.
            </h1>

            <p className="mt-8 text-lg leading-8 text-[#6d6258] max-w-xl">
              A refined pre- and post-swim mist designed to support young swimmers’ skin before and after exposure to chlorinated water.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="px-7 py-3 rounded-full bg-[#2f2a25] text-white text-sm hover:bg-[#4a423b] transition"
              >
                Join the Waitlist
              </a>

              <a
                href="#formula"
                className="px-7 py-3 rounded-full border border-[#c8b9aa] text-sm hover:bg-[#eee6dc] transition"
              >
                Explore the Formula
              </a>
            </div>
          </div>

          <div className="min-h-[520px] rounded-[2rem] bg-gradient-to-br from-[#e9e2d8] to-[#b9c4b2]" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-[#e5ddd3] px-6 py-24 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9a8d7f] mb-5">
            The overlooked exposure
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Repeated exposure, rarely considered.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#6d6258]">
            For children who spend meaningful time in pools, chlorinated water is not occasional—it is routine. What often presents as dryness or sensitivity may reflect a more consistent disruption of the skin barrier under repeated conditions.
          </p>
        </div>
      </section>

      {/* SHIFT */}
      <section className="bg-[#eee7dd] px-6 py-24 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9a8d7f] mb-5">
              A different approach
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              From reactive to preparatory.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#6d6258]">
            Most skincare addresses what happens after exposure. NOLEA is built around a more complete perspective—supporting the skin before and after contact with environmental stressors, not only in response to them.
          </p>
        </div>
      </section>

      {/* FORMULA */}
      <section id="formula" className="px-6 py-24 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="min-h-[460px] rounded-[2rem] bg-gradient-to-br from-[#f2eee8] to-[#aebaa8]" />

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9a8d7f] mb-5">
              Formula philosophy
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Precision, not excess.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#6d6258]">
              Our formulations draw from ingredients studied for their ability to support skin under stress, including extremolytes such as ectoin and hydroxyectoin.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#6d6258]">
              Designed to be lightweight, water-based, and compatible with frequent use, each formula focuses on resilience rather than coverage.
            </p>
          </div>
        </div>
      </section>

      {/* USAGE */}
      <section className="border-y border-[#e5ddd3] px-6 py-24 md:px-16">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs uppercase tracking-[0.3em] text-[#9a8d7f] mb-5">
            Daily use
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-3xl">
            Designed for real swimmers, real routines, and repeated exposure.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            <div className="p-8 bg-white/50 rounded-[1.5rem]">
              <h3 className="text-2xl font-light">Before swimming</h3>
              <p className="mt-5 text-[#6d6258] leading-7">
                Applied to clean skin to support barrier function prior to exposure.
              </p>
            </div>

            <div className="p-8 bg-white/50 rounded-[1.5rem]">
              <h3 className="text-2xl font-light">After swimming</h3>
              <p className="mt-5 text-[#6d6258] leading-7">
                Reapplied after rinsing to help restore hydration and reduce residual stress.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 py-24 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9a8d7f] mb-5">
              Founder
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              A considered approach.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#6d6258]">
              NOLEA was developed in response to a gap between repeated environmental exposure and how children’s skin is typically supported.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#6d6258]">
              Created in collaboration with medical professionals, the brand reflects a restrained, evidence-led approach to everyday skin stressors.
            </p>
          </div>

          <div className="min-h-[460px] rounded-[2rem] bg-gradient-to-br from-[#eee8df] to-[#c7b8a6]" />
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="bg-[#2f2a25] text-white px-6 py-24 md:px-16">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#c8b9aa] mb-5">
            First release
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            A calmer way to care for swimmers’ skin.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#d8d0c4] max-w-2xl mx-auto">
            NOLEA is developing a science-led mist for children exposed to chlorinated water, frequent training, sun, and friction.
          </p>

          <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 min-h-12 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-[#c8b9aa] outline-none"
            />

            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-white text-[#2f2a25] text-sm hover:bg-[#eee7dd]"
            >
              Join the First Release
            </button>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 md:px-16 text-sm text-[#8a7d6f]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} NOLEA</p>

          <div className="flex gap-6">
            <a href="#formula">Formula</a>
            <a href="#waitlist">Waitlist</a>
            <a href="mailto:hello@nolea.skin">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
