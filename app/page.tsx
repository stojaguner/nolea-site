export default function NoleaSite() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <header className="sticky top-0 z-30 border-b border-[#e8e8e8] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <svg width="140" height="32" viewBox="0 0 260 50" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="38" fontFamily="Georgia, serif" fontSize="36" letterSpacing="0" fill="#1a1a1a">N</text>
            <ellipse cx="61" cy="23" rx="17" ry="20" fill="white" stroke="#1a1a1a" strokeWidth="1.8"/>
            <path d="M46 19 Q53 13 61 19 Q69 25 76 19" fill="none" stroke="#999" strokeWidth="1.1" clipPath="url(#b1)"/>
            <path d="M46 28 Q53 22 61 28 Q69 34 76 28" fill="none" stroke="#ccc" strokeWidth="0.8" clipPath="url(#b1)"/>
            <clipPath id="b1"><ellipse cx="61" cy="23" rx="15" ry="18"/></clipPath>
            <text x="81" y="38" fontFamily="Georgia, serif" fontSize="36" letterSpacing="0" fill="#1a1a1a">LÉA</text>
          </svg>
          <nav className="hidden gap-10 text-xs md:flex text-[#666] tracking-[0.15em] uppercase">
            <a href="#product" className="hover:text-[#1a1a1a] transition">Aqua Veil™</a>
            <a href="#science" className="hover:text-[#1a1a1a] transition">Science</a>
            <a href="#story" className="hover:text-[#1a1a1a] transition">Story</a>
            <a href="#join" className="hover:text-[#1a1a1a] transition">Join</a>
          </nav>
          <a href="#join" className="text-xs tracking-[0.15em] uppercase text-[#666] hover:text-[#1a1a1a] transition">
            Early Access
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#999]">Barrier-first skincare</p>
              <h1 className="font-serif text-5xl leading-[1.1] md:text-6xl lg:text-7xl">
                Invisible<br/>protection.<br/>
                <span className="italic font-normal">Visible care.</span>
              </h1>
              <div className="mt-8 h-px w-12 bg-[#ccc]" />
              <p className="mt-8 max-w-md text-sm leading-8 text-[#666]">
                NOLÉA creates elevated skincare for water-exposed skin. Aqua Veil™ is a pre + post swim barrier shield mist designed to protect delicate skin from chlorine, saltwater, sun, and environmental stressors.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#join" className="border border-[#1a1a1a] px-8 py-3 text-xs tracking-[0.15em] uppercase transition hover:bg-[#1a1a1a] hover:text-white">
                  Join the Waitlist
                </a>
                <a href="#product" className="border border-[#e8e8e8] px-8 py-3 text-xs tracking-[0.15em] uppercase text-[#666] transition hover:border-[#1a1a1a] hover:text-[#1a1a1a]">
                  Explore
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-8 text-xs tracking-[0.12em] uppercase text-[#999]">
                <span>Fragrance-free</span>
                <span>Sensitive skin</span>
                <span>Pediatric-informed</span>
              </div>
            </div>

            <div className="flex items-center justify-center bg-[#f7f7f7] min-h-[520px] md:min-h-[640px]">
              <div className="relative h-[400px] w-[180px] border border-[#e8e8e8] bg-white">
                <div className="mx-auto mt-8 h-1 w-16 bg-[#e8e8e8]" />
                <div className="px-6 pt-16 text-center">
                  <div className="font-serif text-2xl tracking-[0.2em]">NOLÉA</div>
                  <div className="mt-4 font-serif text-lg italic">Aqua Veil™</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[#999]">Barrier Shield Mist</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#999]">100 ml</div>
                  <div className="mt-16 text-xs leading-6 text-[#bbb]">Ectoin · Antioxidant · Barrier</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#e8e8e8]">
          <div className="mx-auto grid max-w-6xl gap-0 px-6 md:grid-cols-4 md:px-10">
            <div className="border-b border-[#e8e8e8] py-6 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999]">Pre + post swim</p>
            </div>
            <div className="border-b border-[#e8e8e8] py-6 md:border-b-0 md:border-r md:px-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999]">Chlorine defense</p>
            </div>
            <div className="border-b border-[#e8e8e8] py-6 md:border-b-0 md:border-r md:px-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999]">Delicate skin</p>
            </div>
            <div className="py-6 md:px-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999]">Extremolyte enriched</p>
            </div>
          </div>
        </section>

        <section id="product" className="border-t border-[#e8e8e8] mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#999]">The debut formula</p>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl">Aqua Veil™</h2>
              <div className="mt-6 h-px w-12 bg-[#e8e8e8]" />
              <p className="mt-6 text-sm leading-8 text-[#666]">
                A lightweight, fast-drying mist formulated to support the skin barrier before and after exposure to water, chlorine, salt, and sun. Made to disappear instantly on skin while leaving behind comfort, calm, and resilience.
              </p>
              <div className="mt-10 grid gap-px bg-[#e8e8e8] sm:grid-cols-2">
                <div className="bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#999]">When to use</p>
                  <p className="mt-3 text-sm leading-7 text-[#444]">Before swim for barrier support. Reapply after towel drying or post-rinse.</p>
                </div>
                <div className="bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#999]">Texture</p>
                  <p className="mt-3 text-sm leading-7 text-[#444]">A fine, weightless mist. No residue, no stickiness, no fragrance.</p>
                </div>
              </div>
            </div>

            <div className="border border-[#e8e8e8] p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#999]">How to use</p>
                  <p className="mt-4 text-sm leading-7 text-[#666]">Mist onto clean skin before swim. Reapply after towel drying or post-rinse as needed.</p>
                </div>
                <div className="h-px bg-[#e8e8e8]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#999]">Made for</p>
                  <p className="mt-4 text-sm leading-7 text-[#666]">Children's delicate skin, frequent swimmers, pool days, beach days, everyday exposure.</p>
                </div>
                <div className="h-px bg-[#e8e8e8]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#999]">Future ritual</p>
                  <p className="mt-4 text-sm leading-7 text-[#666]">Aqua Veil™ will be joined by Barrier Restore Cream and Mineral Wash.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="science" className="bg-[#f7f7f7] border-t border-[#e8e8e8]">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#999]">Why it works</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl max-w-xl">Designed to protect before damage begins.</h2>
            <div className="mt-16 grid gap-px bg-[#e8e8e8] md:grid-cols-3">
              <div className="bg-[#f7f7f7] p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">01</p>
                <h3 className="mt-4 font-serif text-2xl">Ectoin</h3>
                <p className="mt-4 text-sm leading-7 text-[#666]">Shields skin cells from environmental stress and supports resilience in delicate, frequently exposed skin.</p>
              </div>
              <div className="bg-[#f7f7f7] p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">02</p>
                <h3 className="mt-4 font-serif text-2xl">Antioxidant Defense</h3>
                <p className="mt-4 text-sm leading-7 text-[#666]">Supports skin against oxidative stress associated with chlorine and other external stressors.</p>
              </div>
              <div className="bg-[#f7f7f7] p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">03</p>
                <h3 className="mt-4 font-serif text-2xl">Barrier Support</h3>
                <p className="mt-4 text-sm leading-7 text-[#666]">Preserves comfort, hydration, and softness before and after water exposure.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="border-t border-[#e8e8e8] mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#999]">The philosophy</p>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl">Where nature meets skin science.</h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm leading-9 text-[#666]">
                NOLÉA was created for modern families who live in motion — between swim practice, the sea, the sun, and everyday exposure. Every formula is guided by a simple idea: protect the skin barrier first.
              </p>
              <p className="mt-6 text-sm leading-9 text-[#666]">
                Rooted in thoughtful ingredients, elevated design, and a pediatric-informed perspective, NOLÉA brings a quieter, more intelligent kind of care to children's skincare.
              </p>
            </div>
          </div>
        </section>

        <section id="join" className="bg-[#1a1a1a] text-white border-t border-[#333]">
          <div className="mx-auto max-w-4xl px-6 py-28 text-center md:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">Coming soon</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl">Join NOLÉA.</h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-[#999]">
              Be first to experience Aqua Veil™ and receive early access to launch, sampling updates, and the world of barrier-first skincare.
            </p>
            <form className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input type="email" placeholder="Email address" className="h-12 flex-1 border border-[#333] bg-transparent px-5 text-xs tracking-[0.1em] text-white placeholder:text-[#555] outline-none focus:border-[#666]" />
              <button type="submit" className="h-12 bg-white px-8 text-xs tracking-[0.15em] uppercase text-[#1a1a1a] transition hover:bg-[#e8e8e8]">
                Request Access
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
