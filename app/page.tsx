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

        <section className="border-y border-stone-200 bg
