import Image from "next/image";

export default function Page() {
  const ingredients = [
    {
      name: "Ectoin",
      text:
        "A clinically studied extremolyte that helps protect skin from environmental stress, support barrier integrity, and reduce visible signs of irritation after repeated water exposure.",
    },
    {
      name: "Marine Minerals",
      text:
        "Ocean-derived trace elements selected to help replenish balance, support hydration, and restore comfort after chlorine, saltwater, and sun exposure.",
    },
    {
      name: "Algae Bioactives",
      text:
        "Antioxidant-rich marine extracts that help defend against oxidative stress while supporting calmer, more resilient skin over time.",
    },
  ];

  const benefits = [
    "Fragrance-free",
    "Fast-absorbing, water-light texture",
    "Breathable, non-occlusive finish",
    "Suitable for sensitive and eczema-prone skin",
    "Pediatric-informed formulation (3+)",
    "Designed for daily swimmers",
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-stone-50 via-stone-100 to-emerald-50/40">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-stone-200 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-100 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
          <header className="mb-14 flex items-center justify-between">
            <Logo />
            <nav className="hidden gap-8 text-sm tracking-[0.18em] text-stone-600 md:flex uppercase">
              <a href="#formula" className="transition hover:text-stone-900">Formula</a>
              <a href="#ritual" className="transition hover:text-stone-900">Ritual</a>
              <a href="#science" className="transition hover:text-stone-900">Science</a>
            </nav>
          </header>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-stone-500">
                Pediatric-informed swim skin care
              </p>
              <h1 className="max-w-xl text-5xl font-light leading-[1.02] tracking-[-0.04em] text-stone-900 md:text-7xl">
                Protection, before the damage begins.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
                Aqua Veil™ is a barrier-first mist designed to protect delicate skin before and after exposure to chlorine, saltwater, and sun.
                Quietly scientific. Comfort-first. Created for children who live in the water.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#formula"
                  className="rounded-full border border-stone-900 bg-stone-900 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-50 transition hover:opacity-90"
                >
                  Discover the formula
                </a>
                <a
                  href="#science"
                  className="rounded-full border border-stone-300 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-700 transition hover:border-stone-500 hover:text-stone-900"
                >
                  Why it matters
                </a>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
              <PhotoCard
                src="/images/nolea-kids-swimmer.jpg"
                alt="Young swimmer wrapped in a towel after practice"
                title="Kids swimmers"
                subtitle="editorial image"
                tall
              />
              <div className="grid gap-5">
                <PhotoCard
                  src="/images/nolea-algae-texture.jpg"
                  alt="Marine algae and mineral water texture"
                  title="Sea + algae"
                  subtitle="ingredient visual"
                />
                <PhotoCard
                  src="/images/nolea-waterpolo-action.jpg"
                  alt="Child water polo player in motion"
                  title="Water polo"
                  subtitle="brand world"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formula" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-500">The Formula</p>
          <h2 className="text-4xl font-light tracking-[-0.03em] text-stone-900 md:text-6xl">
            Barrier-first protection,
            <br className="hidden md:block" /> before damage begins
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-stone-600">
            Rather than correcting damage after it appears, the formula works proactively—helping reduce direct environmental stress while supporting the skin’s natural barrier.
            Developed with sensitive and pediatric skin in mind, it absorbs instantly, leaving no residue—only comfort.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-[0_10px_50px_rgba(0,0,0,0.03)] backdrop-blur"
            >
              <div className="mb-6 h-px w-12 bg-stone-300" />
              <h3 className="text-2xl font-light tracking-[-0.02em] text-stone-900">{item.name}</h3>
              <p className="mt-4 leading-8 text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-500">Visual world</p>
            <h2 className="text-4xl font-light tracking-[-0.03em] md:text-5xl">
              Make the page feel less like a product site,
              <span className="block text-stone-500">more like an editorial campaign.</span>
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-stone-600">
              The site needs emotional atmosphere as much as scientific clarity. Use soft taupe and sage tones, real swimmers, marine textures, and quiet spacing so the brand feels modern, premium, and trustworthy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <PhotoCard
              src="/images/nolea-post-swim-portrait.jpg"
              alt="Post-swim portrait of a child in warm natural light"
              title="Post-swim skin"
              subtitle="campaign image"
              tall
            />
            <div className="grid gap-5">
              <PhotoCard
                src="/images/nolea-water-surface.jpg"
                alt="Sunlit water surface with soft ripples"
                title="Water surface"
                subtitle="texture layer"
              />
              <PhotoCard
                src="/images/nolea-product-still-life.jpg"
                alt="Minimal product still life with bottle and marine-inspired styling"
                title="Packaging still life"
                subtitle="product image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ritual" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-500">Designed for daily exposure</p>
            <h2 className="text-4xl font-light tracking-[-0.03em] md:text-5xl">A refined daily ritual for swimmers.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 text-stone-700 shadow-[0_6px_30px_rgba(0,0,0,0.03)]"
              >
                <p className="text-base leading-7">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="science" className="bg-stone-900 text-stone-100">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10 lg:px-16">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-400">Why it matters</p>
          <h2 className="text-4xl font-light tracking-[-0.03em] md:text-6xl">
            Repeated chlorine exposure can disrupt the skin barrier—especially in children.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-300">
            Aqua Veil™ is designed to intervene earlier: to protect before, support during, and restore after. It is not about over-treating skin. It is about preserving comfort, calm, and resilience in the first place.
          </p>
          <p className="mt-10 text-sm uppercase tracking-[0.35em] text-stone-400">
            Protection, not correction.
          </p>
        </div>
      </section>
    </main>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white/80 shadow-sm">
        <div className="absolute inset-2 rounded-full border border-stone-200" />
        <svg viewBox="0 0 100 100" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2.5" className="text-stone-700" />
          <path d="M27 54C35 48 41 48 50 54C59 60 65 60 73 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-emerald-700" />
          <circle cx="64" cy="36" r="4" fill="currentColor" className="text-amber-500" />
        </svg>
      </div>
      <div>
        <p className="text-xl font-light tracking-[0.38em] text-stone-900">NOLÉA</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Swim skin care</p>
      </div>
    </div>
  );
}

function PhotoCard({
  src,
  alt,
  title,
  subtitle,
  tall = false,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-[0_12px_50px_rgba(0,0,0,0.06)] ${
        tall ? "min-h-[420px]" : "min-h-[220px]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-stone-900/10 to-white/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">{subtitle}</p>
        <h3 className="mt-3 text-2xl font-light tracking-[-0.02em] text-white">{title}</h3>
      </div>
    </div>
  );
}
