export default function NoleaSite() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="text-xl tracking-[0.28em] font-serif">NOLÉA</div>
          <nav className="hidden gap-8 text-sm md:flex text-stone-700">
            <a href="#product" className="hover:text-stone-950">Aqua Veil™</a>
            <a href="#science" className="hover:text-stone-950">Science</a>
            <a href="#story" className="hover:text-stone-950">Story</a>
            <a href="#join" className="hover:text-stone-950">Join</a>
          </nav>
          <a href="#join" className="rounded-full border border-stone-300 px-4 py-2 text-sm transition hover:border-stone-500">
            Early Access
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-stone-500">Barrier-first skincare</p>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.05] md:text-7xl">
              Invisible protection.
              <span className="block italic font-normal">Visible care.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-stone-700 md:text-lg">
              NOLÉA creates elevated skincare for water-exposed skin. Our debut formula, Aqua Veil™, is a pre + post swim barrier shield mist designed to help protect delicate skin from chlorine, saltwater, sun, and environmental stressors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#join" className="rounded-full bg-stone-900 px-6 py-3 text-sm text-stone-50 transition hover:bg-stone-800">
                Join the Waitlist
              </a>
              <a href="#product" className="rounded-full border border-stone-300 px-6 py-3 text-sm transition hover:border-stone-500">
                Explore Aqua Veil™
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-600">
              <span>Fragrance-free</span>
              <span>Suitable for sensitive skin</span>
              <span>Pediatric-informed</span>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-stone-100 to-stone-200 p-8 shadow-sm md:min-h-[680px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.65),transparent_35%)]" />
            <div className="relative mx-auto mt-12 flex h-full max-w-sm items-center justify-center">
              <div className="relative h-[420px] w-[220px] rounded-[2.5rem] border border-stone-200 bg-stone-50 shadow-xl">
                <div className="mx-auto mt-6 h-6 w-24 rounded-full bg-sky-200/80" />
                <div className="px-8 pt-16 text-center">
                  <div className="font-serif text-3xl tracking-[0.18em]">NOLÉA</div>
                  <div className="mt-6 font-serif text-2xl italic">Aqua Veil™</div>
                  <div className="mt-4 text-sm uppercase tracking-[0.22em] text-stone-500">
                    Barrier Shield Mist
                  </div>
                  <div className="mt-16 text-xs leading-6 text-stone-500">
                    Ectoin • Antioxidant Defense • Barrier Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 text-sm uppercase tracking-[0.22em] text-stone-500 md:grid-cols-4 md:px-10">
            <div>Pre + post swim</div>
            <div>Chlorine + saltwater defense</div>
            <div>Designed for delicate skin</div>
            <div>Modern European aesthetic</div>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">The debut formula</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Aqua Veil™</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                A lightweight, fast-drying mist formulated to support the skin barrier before and after exposure to water, chlorine, salt, and sun. Made to disappear instantly on skin while leaving behind comfort, calm, and resilience.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                  <h3 className="font-medium">When to use</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">Before swim for barrier support. Reapply after towel drying or post-rinse as needed.</p>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                  <h3 className="font-medium">Texture</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">A fine, weightless mist with no residue, no stickiness, and no added fragrance.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">How to use</p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">Mist onto clean skin before swim. Reapply after towel drying or post-rinse as needed.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Made for</p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">Children's delicate skin, frequent swimmers, pool days, beach days, and everyday environmental exposure.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Future ritual</p>
                  <p className="mt-3 text-sm leading-7 text-stone-700">Aqua Veil™ will be joined by Barrier Restore Cream and Mineral Wash to complete the NOLÉA water-exposed skin ritual.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="science" className="bg-stone-100/70">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Why it works</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-5xl">Designed to protect before damage begins.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-2xl">Ectoin</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">Helps shield skin cells from environmental stress and supports resilience in delicate, frequently exposed skin.</p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-2xl">Antioxidant Defense</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">Supports skin against oxidative stress associated with chlorine and other external stressors.</p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="font-serif text-2xl">Barrier Support</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">Helps preserve comfort, hydration, and softness before and after water exposure.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">The philosophy</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Where nature meets skin science.</h2>
            </div>
            <div>
              <p className="text-base leading-8 text-stone-700">
                NOLÉA was created for modern families who live in motion—between swim practice, the sea, the sun, and everyday exposure. Every formula is guided by a simple idea: protect the skin barrier first.
              </p>
              <p className="mt-6 text-base leading-8 text-stone-700">
                Rooted in thoughtful ingredients, elevated design, and a pediatric-informed perspective, NOLÉA brings a quieter, more intelligent kind of care to children's skincare.
              </p>
            </div>
          </div>
        </section>

        <section id="join" className="bg-stone-900 text-stone-50">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Coming soon</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">Join NOLÉA.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-300">
              Be first to experience Aqua Veil™ and receive early access to launch, sampling updates, and the world of barrier-first skincare for water-exposed skin.
            </p>
            <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
              <input type="email" placeholder="Email address" className="h-14 flex-1 rounded-full border border-stone-700 bg-stone-950/40 px-6 text-sm text-stone-50 placeholder:text-stone-500 outline-none" />
              <button type="submit" className="h-14 rounded-full bg-stone-50 px-8 text-sm text-stone-900 transition hover:bg-stone-200">
                Request Early Access
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
