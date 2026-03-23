export default function NoleaSite() {
  return (
    <div className="min-h-screen bg-[#f5f2ec] text-[#2c2c28]" style={{fontFamily: 'Georgia, serif'}}>

      {/* Top bar */}
      <div className="border-b border-[#ddd8ce] bg-[#f5f2ec] py-2 text-center text-xs tracking-[0.2em] uppercase text-[#999]">
        Launching soon — join the waitlist for early access
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#ddd8ce] bg-[#f5f2ec]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
          <svg width="200" height="46" viewBox="0 0 220 50" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="38" fontFamily="Georgia, serif" fontSize="36" fill="#2c2c28">N</text>
            <ellipse cx="44" cy="23" rx="17" ry="20" fill="#f5f2ec" stroke="#2c2c28" strokeWidth="1.8"/>
            <path d="M29 19 Q36 13 44 19 Q52 25 59 19" fill="none" stroke="#7a8c6e" strokeWidth="1.1" clipPath="url(#h1)"/>
            <path d="M29 28 Q36 22 44 28 Q52 34 59 28" fill="none" stroke="#a8b89a" strokeWidth="0.8" clipPath="url(#h1)"/>
            <clipPath id="h1"><ellipse cx="44" cy="23" rx="15" ry="18"/></clipPath>
            <text x="64" y="38" fontFamily="Georgia, serif" fontSize="36" fill="#2c2c28">LÉA</text>
          </svg>
          <nav className="hidden gap-10 text-xs md:flex text-[#666] tracking-[0.18em] uppercase">
            <a href="#product" className="hover:text-[#2c2c28] transition">Aqua Veil™</a>
            <a href="#science" className="hover:text-[#2c2c28] transition">Science</a>
            <a href="#story" className="hover:text-[#2c2c28] transition">Story</a>
            <a href="#join" className="hover:text-[#2c2c28] transition">Join</a>
          </nav>
          <a href="#join" className="text-xs tracking-[0.18em] uppercase text-[#2c2c28] border-b border-[#2c2c28] pb-px hover:text-[#666] hover:border-[#666] transition">
            Early Access
          </a>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section
          className="relative flex min-h-screen items-center justify-center text-center px-6"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#f5f2ec]/65" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#7a8c6e]">Barrier-first skincare for water-exposed skin</p>
            <h1 className="font-serif text-5xl leading-[1.1] md:text-7xl lg:text-8xl text-[#2c2c28]">
              Protect the skin<br/>
              <span className="italic font-normal">before damage begins.</span>
            </h1>
            <p className="mx-auto mt-10 max-w-lg text-sm leading-9 text-[#555550]">
              Aqua Veil™ is a pre + post swim barrier mist designed to shield delicate skin from chlorine, saltwater, and environmental stressors. Enriched with extremolytes, algae, and sea minerals.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <a href="#join" className="bg-[#2c2c28] text-[#f5f2ec] px-10 py-4 text-xs tracking-[0.2em] uppercase transition hover:bg-[#4a4a44]">
                Join the Waitlist
              </a>
              <a href="#product" className="border border-[#2c2c28] px-10 py-4 text-xs tracking-[0.2em] uppercase text-[#2c2c28] transition hover:bg-[#2c2c28] hover:text-[#f5f2ec]">
                Explore
              </a>
            </div>
          </div>
        </section>

        {/* Tagline strip */}
        <section className="border-t border-b border-[#ddd8ce] bg-[#e8e4dc] py-16 text-center">
          <p className="font-serif text-2xl italic text-[#7a8c6e] md:text-3xl">
            "Each application is an act of protection."
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#999]">Fragrance-free · Sensitive skin · Pediatric-informed</p>
        </section>

        {/* Product */}
        <section id="product">
          <div className="grid md:grid-cols-2">
            <div
              className="relative min-h-[500px] md:min-h-[680px]"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=900&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#2c2c28]/15" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">Aqua Veil™ — 100ml</p>
              </div>
            </div>
            <div className="flex items-center bg-[#f5f2ec] px-10 py-16 md:px-14">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#999]">The debut formula</p>
                <h2 className="mt-5 font-serif text-4xl md:text-5xl">Aqua Veil™</h2>
                <div className="mt-6 h-px w-10 bg-[#7a8c6e]" />
                <p className="mt-8 text-sm leading-9 text-[#555550]">
                  A lightweight, fast-drying mist formulated to support the skin barrier before and after exposure to water, chlorine, salt, and sun. Made to disappear instantly on skin while leaving behind comfort, calm, and resilience.
                </p>
                <p className="mt-6 text-sm leading-9 text-[#555550]">
                  Made for young swimmers, water sport kids, and families who live between the pool, the sea, and the sun.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">Before swim</p>
                    <p className="text-[#555550] leading-7">Mist onto clean skin for barrier support before entering the water.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">After swim</p>
                    <p className="text-[#555550] leading-7">Reapply after towel drying to restore calm and comfort to exposed skin.</p>
                  </div>
                </div>
                <a href="#join" className="mt-10 inline-block border-b border-[#2c2c28] pb-px text-xs uppercase tracking-[0.2em] hover:text-[#666] hover:border-[#666] transition">
                  Join the waitlist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Science */}
        <section id="science" className="border-t border-[#ddd8ce] bg-[#e8e4dc]">
          <div className="mx-auto max-w-6xl px-6 py-28 md:px-12">
            <div className="grid gap-12 md:grid-cols-2 md:items-end mb-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#999]">The science</p>
                <h2 className="mt-5 font-serif text-4xl md:text-5xl">Where the ocean<br/><span className="italic font-normal">meets the skin.</span></h2>
              </div>
              <p className="text-sm leading-9 text-[#666660]">
                NOLÉA formulas are built on extremolyte science — molecules found in organisms that survive extreme environments. Combined with algae and sea minerals, they deliver extraordinary resilience to delicate skin.
              </p>
            </div>
            <div className="grid gap-px bg-[#c8c4ba] md:grid-cols-3">
              <div className="bg-[#e8e4dc] p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">01</p>
                <h3 className="mt-5 font-serif text-2xl">Ectoin</h3>
                <p className="mt-5 text-sm leading-8 text-[#666660]">An extremolyte that shields skin cells from environmental stress. Found in microorganisms surviving the harshest conditions on earth.</p>
              </div>
              <div className="bg-[#e8e4dc] p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">02</p>
                <h3 className="mt-5 font-serif text-2xl">Sea Minerals</h3>
                <p className="mt-5 text-sm leading-8 text-[#666660]">Rich in trace elements that support skin balance and comfort after prolonged water and chlorine exposure.</p>
              </div>
              <div className="bg-[#e8e4dc] p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-[#999]">03</p>
                <h3 className="mt-5 font-serif text-2xl">Algae Extract</h3>
                <p className="mt-5 text-sm leading-8 text-[#666660]">Antioxidant-rich marine botanicals that defend against oxidative stress and help preserve the skin's natural barrier.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section
          id="story"
          className="relative py-32 px-6"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#f5f2ec]/80" />
          <div className="relative z-10 mx-auto max-w-6xl grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7a8c6e]">The philosophy</p>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl">We don't treat skin.<br/><span className="italic font-normal">We protect it.</span></h2>
              <div className="mt-8 h-px w-10 bg-[#7a8c6e]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm leading-9 text-[#555550]">
                NOLÉA was created for modern families who live in motion — between swim practice, the sea, the sun, and everyday exposure. Every formula is guided by a simple idea: protect the skin barrier first, before damage can begin.
              </p>
              <p className="mt-6 text-sm leading-9 text-[#555550]">
                Rooted in thoughtful ingredients, elevated design, and a pediatric-informed perspective, NOLÉA brings a quieter, more intelligent kind of care to children's skincare.
              </p>
              <p className="mt-6 text-sm leading-9 text-[#555550]">
                This is not just skincare. This is a practice of protection.
              </p>
            </div>
          </div>
        </section>

        {/* Full width quote */}
        <section
          className="relative border-t border-b border-[#ddd8ce] py-32 text-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#2c2c28]/70" />
          <div className="relative z-10 px-6">
            <p className="font-serif text-3xl italic text-[#f5f2ec] md:text-5xl max-w-3xl mx-auto leading-[1.4]">
              "Barrier-first. Always."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#a8b89a]">NOLÉA — Aqua Veil™</p>
          </div>
        </section>

        {/* Join */}
        <section id="join" className="mx-auto max-w-4xl px-6 py-28 text-center md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#999]">Coming soon</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl">Join NOLÉA.</h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-9 text-[#666660]">
            Be first to experience Aqua Veil™. Receive early access to launch, sampling updates, and the world of barrier-first skincare.
          </p>
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Your email address" className="h-12 flex-1 border border-[#7a8c6e] bg-transparent px-5 text-xs tracking-[0.1em] text-[#2c2c28] placeholder:text-[#bbb] outline-none focus:border-[#2c2c28]" />
            <button type="submit" className="h-12 bg-[#2c2c28] px-8 text-xs tracking-[0.2em] uppercase text-[#f5f2ec] transition hover:bg-[#4a4a44]">
              Join
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#ddd8ce] bg-[#e8e4dc]">
          <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
            <div className="grid gap-10 md:grid-cols-4">
              <div>
                <svg width="120" height="28" viewBox="0 0 220 50" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="38" fontFamily="Georgia, serif" fontSize="36" fill="#2c2c28">N</text>
                  <ellipse cx="44" cy="23" rx="17" ry="20" fill="#e8e4dc" stroke="#2c2c28" strokeWidth="1.8"/>
                  <path d="M29 19 Q36 13 44 19 Q52 25 59 19" fill="none" stroke="#7a8c6e" strokeWidth="1.1" clipPath="url(#f1)"/>
                  <path d="M29 28 Q36 22 44 28 Q52 34 59 28" fill="none" stroke="#a8b89a" strokeWidth="0.8" clipPath="url(#f1)"/>
                  <clipPath id="f1"><ellipse cx="44" cy="23" rx="15" ry="18"/></clipPath>
                  <text x="64" y="38" fontFamily="Georgia, serif" fontSize="36" fill="#2c2c28">LÉA</text>
                </svg>
                <p className="mt-4 text-xs leading-7 text-[#999]">Barrier-first skincare<br/>for water-exposed skin.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">Navigate</p>
                <div className="flex flex-col gap-3 text-xs text-[#666660]">
                  <a href="#product" className="hover:text-[#2c2c28] transition">Aqua Veil™</a>
                  <a href="#science" className="hover:text-[#2c2c28] transition">The Science</a>
                  <a href="#story" className="hover:text-[#2c2c28] transition">Our Story</a>
                  <a href="#join" className="hover:text-[#2c2c28] transition">Join the Waitlist</a>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">Contact</p>
                <a href="mailto:hello@nolea.skin" className="text-xs text-[#666660] hover:text-[#2c2c28] transition border-b border-[#7a8c6e] pb-px">
                  hello@nolea.skin
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">Stay in the know</p>
                <p className="text-xs leading-7 text-[#666660] mb-4">One email per month. Early access, launch updates, no spam.</p>
                <a href="#join" className="text-xs uppercase tracking-[0.2em] border-b border-[#2c2c28] pb-px hover:text-[#666] hover:border-[#666] transition">
                  Join the waitlist
                </a>
              </div>
            </div>
            <div className="mt-12 border-t border-[#ddd8ce] pt-8 flex flex-wrap justify-between gap-4 text-xs text-[#bbb]">
              <p>© 2026 NOLÉA. All rights reserved. · <a href="mailto:hello@nolea.skin" className="hover:text-[#666] transition">hello@nolea.skin</a></p>
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
