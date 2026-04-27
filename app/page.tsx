type HomePageProps = {
  searchParams?: Promise<{ joined?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = (await searchParams) ?? {};
  const joined = params.joined === "true";

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="NOLÉA home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" role="img" aria-label="NOLÉA logo mark">
                <path
                  d="M18 45C18 28 29 17 46 17C46 34 35 45 18 45Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="M18 45C21 33 29 27 40 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="brand-type">NOLÉA</span>
          </a>

          <nav className="header-nav" aria-label="Primary">
            <a href="#approach">Approach</a>
            <a href="#why">Why it exists</a>
            <a href="#waitlist" className="nav-cta">
              Early access
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Protective skincare for young swimmers</p>

              <h1 id="hero-heading">
                Protection for skin that lives in the water.
              </h1>

              <p className="hero-text">
                NOLÉA is developing a barrier-first skincare essential for children
                with repeated pool and sun exposure — designed for real swim
                routines, with a focus on comfort, simplicity, and everyday ease.
              </p>

              <form className="email-form" action="/api/waitlist" method="post">
                <label htmlFor="hero-email">Email address</label>
                <div className="email-row">
                  <input
                    id="hero-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                  <button type="submit">Get Early Access</button>
                </div>
              </form>

              {joined ? (
                <p className="form-success" role="status">
                  Thanks — you&apos;re on the list.
                </p>
              ) : null}

              <p className="fine-print">
                Join the waitlist for launch updates and early access. We&apos;ll keep it
                thoughtful and infrequent.
              </p>
            </div>

            <aside className="hero-panel" aria-label="Brand overview">
              <div className="panel-top">
                <span className="mini-label">Prelaunch</span>
                <span className="mini-rule" />
                <span className="mini-label">Barrier-first</span>
              </div>

              <div className="hero-panel-body">
                <p className="panel-kicker">Our first category</p>
                <h2>Care designed around chlorine, sun, salt, and repetition.</h2>
                <p>
                  The goal is simple: support skin comfort before exposure, reduce
                  that stripped feeling after, and help make daily care feel easy
                  for both kids and parents.
                </p>
              </div>

              <div className="panel-list">
                <div>
                  <span className="stat-label">Built for</span>
                  <p>Swim practice, lessons, beach days, pool weekends</p>
                </div>
                <div>
                  <span className="stat-label">Designed for</span>
                  <p>Simple family routines, not complicated regimens</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="section section-intro"
          id="why"
          aria-labelledby="why-heading"
        >
          <div className="shell narrow">
            <p className="section-label">Why this exists</p>
            <h2 id="why-heading">Frequent water exposure asks a lot from skin.</h2>

            <div className="prose">
              <p>
                For many children, life in the water is routine — swim team,
                lessons, beach afternoons, long hours at the pool. Repeated
                exposure to chlorine, salt, sun, rinsing, and friction can leave
                skin feeling dry, tight, and overworked.
              </p>
              <p>
                NOLÉA is being developed to support the skin barrier around those
                moments, without turning a child&apos;s routine into something
                complicated or clinical.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section section-approach"
          id="approach"
          aria-labelledby="approach-heading"
        >
          <div className="shell approach-grid">
            <div className="approach-intro">
              <p className="section-label">Our approach</p>
              <h2 id="approach-heading">
                Gentle, purposeful, and grounded in real routines.
              </h2>
            </div>

            <div className="approach-cards">
              <article className="approach-card large">
                <p className="card-tag">01</p>
                <h3>Barrier-first thinking</h3>
                <p>
                  We&apos;re designing around skin comfort and resilience, with a focus
                  on repeated exposure rather than one-off use.
                </p>
              </article>

              <article className="approach-card">
                <p className="card-tag">02</p>
                <h3>Routine-ready design</h3>
                <p>
                  Before swim, after rinse-off, after sun — the product should fit
                  naturally into life as it already exists.
                </p>
              </article>

              <article className="approach-card">
                <p className="card-tag">03</p>
                <h3>Parent-trust language</h3>
                <p>
                  Calm, clear communication matters. We care about usefulness more
                  than hype, and clarity more than marketing noise.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-rhythm" aria-labelledby="rhythm-heading">
          <div className="shell rhythm-grid">
            <div className="rhythm-quote">
              <p className="quote-mark">“</p>
              <p className="quote-text">
                Better care, built into the rhythm that already exists.
              </p>
            </div>

            <div className="rhythm-copy">
              <p className="section-label">How it fits</p>
              <h2 id="rhythm-heading">Protection before. Comfort after.</h2>

              <div className="prose">
                <p>
                  NOLÉA is being developed to work around the moments families
                  already have: before swim, after rinse-off, after sun, and on
                  high-exposure days when skin needs more support.
                </p>
                <p>
                  The goal is not more complexity. It&apos;s a calmer, better-fitting
                  layer of care for children who spend real time in the water.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section section-standard"
          aria-labelledby="standard-heading"
        >
          <div className="shell narrow">
            <p className="section-label">Our standard</p>
            <h2 id="standard-heading">
              Children&apos;s skincare should feel calm, considered, and useful.
            </h2>

            <div className="prose">
              <p>
                We believe skincare for children should be easy to understand,
                gentle in tone, and purposeful in design. That means a
                barrier-first philosophy, careful formulation thinking, and a
                brand that respects both parents and the kids these routines are
                built around.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section section-cta"
          id="waitlist"
          aria-labelledby="waitlist-heading"
        >
          <div className="shell cta-shell">
            <div className="cta-block">
              <p className="section-label">Join the waitlist</p>
              <h2 id="waitlist-heading">Be first to hear when NOLÉA launches.</h2>
              <p className="cta-text">
                Sign up for early access, launch updates, and thoughtful notes as
                the first product takes shape.
              </p>

              <form className="email-form cta-form" action="/api/waitlist" method="post">
                <label htmlFor="cta-email">Email address</label>
                <div className="email-row">
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                  <button type="submit">Get Early Access</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>Barrier-first skincare for young swimmers.</p>
          <p>NOLÉA — prelaunch.</p>
        </div>
      </footer>
    </>
  );
}
