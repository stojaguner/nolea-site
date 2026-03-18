export default function NoleaSite() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#2c2416]">
      <header className="sticky top-0 z-30 border-b border-[#c8b89a]/60 bg-[#f5f0e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="text-xl tracking-[0.28em] font-serif">NOLÉA</div>
          <nav className="hidden gap-8 text-sm md:flex text-[#6b5744]">
            <a href="#product" className="hover:text-[#2c2416]">Aqua Veil™</a>
            <a href="#science" className="hover:text-[#2c2416]">Science</a>
            <a href="#story" className="hover:text-[#2c2416]">Story</a>
            <a href="#join" className="hover:text-[#2c2416]">Join</a>
          </nav>
          <a href="#join" className="rounded-full border border-[#c8b89a] px-4 py-2 text-sm transition hover:border-[#6b5744]">
            Early Access
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9c8672]">Barrier-first skincare</p>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.05] md:text-7xl">
              Invisible protection.
              <span className="block italic font-normal">Visible care.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#6b5744] md:text-lg">
              NOLÉA creates elevated skincare for water-exposed skin. Our debut formula, Aqua Veil™, is a pre + post swim barrier shield mist designed to help protect delicate skin from chlorine, saltwater, sun, and environmental stressors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#join" className="rounded-full bg-[#2c2416] px-6 py-3 text-sm text-[#f5f0e8] transition hover:bg-[#6b5744]">
                Join the Waitlist
              </a>
              <a href="#product" className="rounded-full border border-[#c8b89a] px-6 py-3 text-sm transition hover:border-[#6b5744]">
                Explore Aqua Veil™
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#9c8672]">
              <span>Fragrance-free</span>
              <span>Suitable for sensitive skin</span>
              <span>Pediatric-informed</span>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#ede5d8] p-8 shadow-sm md:min-h-[680px]">
            <div className="relative mx-auto mt-12 flex h-full max-w-sm items-center justify-center">
              <div className="relative h-[420px] w-[220px] rounded-[2.5rem] border border-[#c8b89a] bg-[#f5f0e8] shadow-xl">
                <div className="mx-auto mt-6 h-6 w-24 rounded-full bg-[#c8b89a]/60" />
                <div className="px-8 pt-16 text-center">
                  <div className="font-serif text-3xl tracking-[0.18em]">NOLÉA</div>
                  <div className="mt-6 font-serif text-2xl italic">Aqua Veil™</div>
                  <div className="mt-4 text-sm uppercase tracking-[0.22em] text-[#9c8672]">
                    Barrier Shield Mist
                  </div>
                  <div className="mt-16 text-xs leading-6 text-[#9c8672]">
                    Ectoin • Antioxidant Defense • Barrier Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#c8b89a]/60 bg-[#ede5d8]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 text-sm uppercase tracking-[0.22em] text-[#9c8672] md:grid-cols-4 md:px-10">
            <div>Pre + post swim</div>
            <div>Chlorine + saltwater defense</div>
            <div>Designed for delicate skin</div>
            <div>Modern European aesthetic</div>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9c8672]">The debut formula</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Aqua Veil™</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b5744]">
                A lightweight, fast-drying mist formulated to support the skin barrier before and after exposure to water, chlorine, salt, and sun. Made to disappear instantly on skin while leaving behind comfort, calm, and resilience.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#c8b89a] bg-[#ede5d8] p-6">
                  <h3 className="font-medium">When to use</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6b5744]">Before swim for barrier support. Reapply after towel drying or post-rinse as needed.</p>
                </div>
                <div className="rounded-3xl border border-[#
