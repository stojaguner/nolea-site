export default function NoleaSite() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#1c1c1a]" style={{fontFamily: 'Georgia, serif'}}>

      {/* Top bar */}
      <div className="border-b border-[#e0ddd6] bg-[#f8f6f1] py-2 text-center text-xs tracking-[0.2em] uppercase text-[#999]">
        Launching soon — join the waitlist for early access
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#e0ddd6] bg-[#f8f6f1]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
          <svg width="130" height="30" viewBox="0 0 260 50" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="38" fontFamily="Georgia, serif" fontSize="36" letterSpacing="0" fill="#1c1c1a">N</text>
            <ellipse cx="61" cy="23" rx="17" ry="20" fill="#f8f6f1" stroke="#1c1c1a" strokeWidth="1.8"/>
            <path d="M46 19 Q53 13 61 19 Q69 25 76 19" fill="none" stroke="#9c8672" strokeWidth="1.1" clipPath="url(#b1)"/>
            <path d="M46 28 Q53 22 61 28 Q69 34 76 28" fill="none" stroke="#c8b89a" strokeWidth="0.8" clipPath="url(#b1)"/>
            <clipPath id="b1"><ellipse cx="61" cy="23" rx="15" ry="18"/></clipPath>
            <text x="81" y="38" fontFamily="Georgia, serif" fontSize="36" letterSpacing="0" fill="#1c1c1a">LÉA</text>
          </svg>
          <nav className="hidden gap-10 text-xs md:flex text-[#666] tracking-[0.18em] uppercase">
            <a href="#product" className="hover:text-[#1c1c1a] transition">Aqua Veil™</a>
            <a href="#science" className="hover:text-[#1c1c1a] transition">Science</a>
            <a href="#story" className="hover:text-[#1c1c1a] transition">Story</a>
            <a href="#join" className="hover:text-[#1c1c1a] transition">Join</a>
          </nav>
          <a href="#join" className="text-xs tracking-[0.18em] uppercase text-[#1c1c1a] border-b border-[#1c1c1a] pb-px hover:text-[#666] hover:border-[#666] transition">
            Early Access
          </a>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-28 md:px-12 md:py-40 text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#999]">Barrier-first skincare for water-exposed skin</p>
          <h1 className="font-serif text-5xl leading-[1.1] md:text-7xl lg:text-8xl max-w-4xl mx-auto">
            Protect the skin<br/>
            <span className="italic font-normal">before damage begins.</span>
          </h1>
          <p className="mx-auto mt-10 max-w-lg text-sm leading-9 text-[#666]">
            Aqua Veil™ is a pre + post swim barrier mist designed to shield delicate skin from chlorine, saltwater, and environmental stressors. Enriched with extremolytes, algae, and sea minerals.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a href="#join" className="bg-[#1c1c1a] text-[#f8f6f1] px-10 py-4 text-xs tracking-[0.2em] uppercase transition hover:bg-[#3a3a36]">
              Join the Waitlist
            </a>
            <a href="#product" className="border border-[#c8b89a] px-10 py-4 text-xs tracking-[0.2em] uppercase text-[#666] transition hover:border-[#1c1c1a] hover:text-[#1c1c1a]">
              Explore
            </a>
          </div>
        </section>

        {/* Full width divider with tagline */}
        <section className="border-t border-b border-[#e0ddd6] bg-[#f0ece3] py-16 text-center">
          <p className="font-serif text-2xl italic text-[#6b5744] md:text-3xl">
            "Each application is an act of protection."
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#999]">Fragrance-free · Sensitive skin · Pediatric-informed</p>
        </section>

        {/* Product */}
        <section id="product" className="mx-auto max-w-6xl px-6 py-28 md:px-12">
          <div className="grid gap-20 md:grid-cols-2 md:items-center">
            <div className="flex items-center justify-center bg-[#ede8df] min-h-[500px]">
              <div className="relative h-[380px] w-[160px] border border-[#d5cec4] bg-[#f8f6f1]">
                <div className="mx-auto mt-6 h-[2px] w-12 bg-[#c8b89a]" />
                <div className="px-5 pt-14 text-center">
                  <div className="font-serif text-xl tracking-[0.2em]">NOLÉA</div>
                  <div className="mt-3 font-serif text-base italic text-[#6b5744]">Aqua Veil™</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.15em] text-[#999]">Barrier Shield Mist</div>
                  <div className="mt-1 text-xs text-[#bbb]">100 ml</div>
                  <div className="mt-14 text-xs leading-6 text-[#bbb]">Ectoin<br/>Antioxidant<br/>Barrier</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#999]">The debut formula</p>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl">Aqua Veil™</h2>
              <div className="mt-6 h-px w-10 bg-[#c8b89a]" />
              <p className="mt-8 text-sm leading-9 text-[#555]">
                A lightweight, fast-drying mist formulated to support the skin barrier before and after exposure to water, chlorine, salt, and sun. Made to disappear instantly on skin while leaving behind comfort, calm, and resilience.
              </p>
              <p className="mt-6 text-sm leading-9 text-[#555]">
                Made for young swimmers, water sport kids, and families who live between the pool, the sea, and the sun.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">Before swim</p>
                  <p className="text-[#555] leading-7">Mist onto clean skin for barrier support before entering the water.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">After swim</p>
                  <p className="text-[#555] leading-7">Reapply after towel drying to restore calm and comfort to exposed skin.</p>
                </div>
              </div>
              <a href="#join" className="mt-10 inline-block border-b border-[#1c1c1a] pb-px text-xs uppercase tracking-[0.2em] hover:text-[#666] hover:border-[#666] transition">
                Join the waitlist
              </a>
            </div>
          </div>
        </section>

        {/* Science */}
        <section id="science" className="border-t border-[#e0ddd6] bg-[#f0ece3]">
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-12">
            <div className="grid gap-12 md:grid-cols-2 md:items-end mb-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#999]">The science</p>
                <h2 className="mt-5 font-serif text-4xl md:text-5xl">Where the ocean<br/><span className="italic font-normal">meets the skin.</span></h2>
              </div>
              <p className="text-sm leading-9 text-[#666]">
                NOLÉA formulas are built on extremolyte science — molecules found in organisms that survive extreme environments. Combined with algae and sea minerals, they deliver extraordinary resilience to delicate skin.
              </p>
            </div>
            <div className="grid gap-px bg-[#d5cec4] md:grid-cols-3">
              <div className="bg-[#f0ece3] p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">01</p>
                <h3 className="mt-5 font-serif text-2xl">Ectoin</h3>
                <p className="mt-5 text-sm leading-8 text-[#666]">An extremolyte that shields skin cells from environmental stress. Found in microorganisms surviving the harshest conditions on earth.</p>
              </div>
              <div className="bg-[#f0ece3] p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">02</p>
                <h3 className="mt-5 font-serif text-2xl">Sea Minerals</h3>
                <p className="mt-5 text-sm leading-8 text-[#666]">Rich in trace elements that support skin balance and comfort after prolonged water and chlorine exposure.</p>
              </div>
              <div className="bg-[#f0ece3] p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">03</p>
                <h3 className="mt-5 font-serif text-2xl">Algae Extract</h3>
                <p className="mt-5 text-sm leading-8 text-[#666]">Antioxidant-rich marine botanicals that defend against oxidative stress and help preserve the skin's natural barrier.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="mx-auto max-w-6xl px-6 py-28 md:px-12">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#999]">The philosophy</p>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl">We don't treat skin.<br/><span className="italic font-normal">We protect it.</span></h2>
              <div className="mt-8 h-px w-10 bg-[#c8b89a]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm leading-9 text-[#555]">
                NOLÉA was created for modern families who live in motion — between swim practice, the sea, the sun, and everyday exposure. Every formula is guided by a simple idea: protect the skin barrier first, before damage can begin.
              </p>
              <p className="mt-6 text-sm leading-9 text-[#555]">
                Rooted in thoughtful ingredients, elevated design, and a pediatric-informed perspective, NOLÉA brings a quieter, more intelligent kind of care to children's skincare.
              </p>
              <p className="mt-6 text-sm leading-9 text-[#555]">
                This is not just skincare. This is a practice of protection.
              </p>
            </div>
          </div>
        </section>

        {/* Full width quote */}
        <section className="border-t border-b border-[#e0ddd6] bg-[#1c1c1a] py-24 text-center text-[#f8f6f1]">
          <p className="font-serif text-3xl italic md:text-4xl max-w-3xl mx-auto px-6 leading-[1.4]">
            "Barrier-first. Always."
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#666]">NOLÉA — Aqua Veil™</p>
        </section>

        {/* Join */}
        <section id="join" className="mx-auto max-w-4xl px-6 py-28 text-center md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#999]">Coming soon</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl">Join NOLÉA.</h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-9 text-[#666]">
            Be first to experience Aqua Veil™. Receive early access to launch, sampling updates, and the world of barrier-first skincare.
          </p>
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Your email address" className="h-12 flex-1 border border-[#c8b89a] bg-transparent px-5 text-xs tracking-[0.1em] text-[#1c1c1a] placeholder:text-[#bbb] outline-none focus:border-[#1c1c1a]" />
            <button type="submit" className="h-12 bg-[#1c1c1a] px-8 text-xs tracking-[0.2em] uppercase text-[#f8f6f1] transition hover:bg-[#3a3a36]">
              Join
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#e0ddd6] bg-[#f0ece3]">
          <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <svg width="100" height="24" viewBox="0 0 260 50" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="38" fontFamily="Georgia, serif" fontSize="36" letterSpacing="0" fill="#1c1c1a">N</text>
                  <ellipse cx="61" cy="23" rx="17" ry="20" fill="#f0ece3" stroke="#1c1c1a" strokeWidth="1.8"/>
                  <path d="M46 19 Q53 13 61 19 Q69 25 76 19" fill="none" stroke="#9c8672" strokeWidth="1.1" clipPath="url(#b2)"/>
                  <path d="M46 28 Q53 22 61 28 Q69 34 76 28" fill="none" stroke="#c8b89a" strokeWidth="0.8" clipPath="url(#b2)"/>
                  <clipPath id="b2"><ellipse cx="61" cy="23" rx="15" ry="18"/></clipPath>
                  <text x="81" y="38" fontFamily="Georgia, serif" fontSize="36" letterSpacing="0" fill="#1c1c1a">LÉA</text>
                </svg>
                <p className="mt-4 text-xs leading-7 text-[#999]">Barrier-first skincare<br/>for water-exposed skin.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">Navigate</p>
                <div className="flex flex-col gap-3 text-xs text-[#555]">
                  <a href="#product" className="hover:text-[#1c1c1a] transition">Aqua Veil™</a>
                  <a href="#science" className="hover:text-[#1c1c1a] transition">The Science</a>
                  <a href="#story" className="hover:text-[#1c1c1a] transition">Our Story</a>
                  <a href="#join" className="hover:text-[#1c1c1a] transition">Join the Waitlist</a>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">Stay in the know</p>
                <p className="text-xs leading-7 text-[#555] mb-4">One email per month. Early access, launch updates, no spam.</p>
                <a href="#join" className="text-xs uppercase tracking-[0.2em] border-b border-[#1c1c1a] pb-px hover:text-[#666] hover:border-[#666] transition">
                  Join the waitlist
                </a>
              </div>
            </div>
            <div className="mt-12 border-t border-[#e0ddd6] pt-8 flex flex-wrap justify-between gap-4 text-xs text-[#bbb]">
              <p>© 2026 NOLÉA. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#666] transition">Privacy Policy</a>
                <a href="#" className="hover:text-[#666] transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
