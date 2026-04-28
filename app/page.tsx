import React from 'react';

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Noléa home">
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <circle cx="20" cy="24" r="4" stroke="currentColor" strokeWidth="2.4" fill="none" />
              <path d="M20 30 Q 32 22, 48 26" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              <path d="M12 42 Q 32 43, 52 42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
            <span>Noléa</span>
          </a>

          <nav className="nav" id="nav">
            <a href="#approach">Approach</a>
            <a href="#formulation">Formulation</a>
            <a href="#founder">Founder</a>
            <a href="#waitlist">Waitlist</a>
          </nav>

          <div className="header-actions">
            <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="Open navigation">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
            <button className="theme-toggle" type="button" data-theme-toggle aria-label="Switch theme">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
            <a className="btn btn-secondary" href="#waitlist">Join waitlist</a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy reveal visible">
              <span className="eyebrow">Science-backed pediatric swim-skin care</span>
              <h1>Protection, before it&apos;s needed.</h1>
              <p>
                A refined approach to supporting children&apos;s skin exposed to chlorinated water—designed with restraint,
                informed by real exposure, and shaped for everyday use.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#waitlist">Join the Waitlist</a>
                <a className="btn btn-secondary" href="#approach">Explore the approach</a>
              </div>
              <div className="hero-meta" aria-label="Product focus highlights">
                <span>Pre-swim support</span>
                <span>Post-swim recovery</span>
                <span>Barrier-focused</span>
              </div>
            </div>

            <div className="hero-visual reveal visible" aria-hidden="true">
              <div className="swirl"></div>
              <div className="visual-card two">
                <small>Focused on</small>
                <strong>Repeated pool exposure</strong>
                <p>Support for skin under frequent environmental stress, not occasional treatment alone.</p>
              </div>
              <div className="mist-bottle"></div>
              <div className="visual-card one">
                <small>Formulation lens</small>
                <strong>Precision, not excess</strong>
                <p>Lightweight, water-based, compatible with regular use and active routines.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="approach">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">The problem</span>
                <h2>Repeated exposure, rarely considered.</h2>
              </div>
              <p>
                For children who spend meaningful time in pools, chlorinated water is not occasional.
                It is repeated, cumulative, and often reduced to the language of ordinary dryness.
              </p>
            </div>

            <div className="problem-grid">
              <article className="card reveal">
                <h3>What appears mild is often ongoing.</h3>
                <p>
                  Dryness, roughness, and heightened sensitivity can reflect a pattern of barrier disruption
                  rather than a single post-swim reaction.
                </p>
              </article>
              <article className="card reveal">
                <h3>Support usually starts too late.</h3>
                <p>
                  Most products are positioned after exposure. Noléa is built around a more complete sequence:
                  before contact, and after it.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container shift-panel reveal">
            <div>
              <div className="shift-kicker">Positioning shift</div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  maxWidth: '12ch',
                }}
              >
                From reactive to preparatory.
              </h2>
              <p
                style={{
                  marginTop: 'var(--space-5)',
                  color: 'var(--color-text-muted)',
                  maxWidth: '36ch',
                }}
              >
                A more considered approach supports the skin before and after environmental stressors,
                rather than only responding once disruption has already appeared.
              </p>
            </div>

            <div className="phase-list">
              <div className="phase-item">
                <strong>Before swimming</strong>
                <span>Support barrier function prior to exposure.</span>
              </div>
              <div className="phase-item">
                <strong>After swimming</strong>
                <span>Replenish hydration and help the skin settle after contact.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="formulation">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Formulation philosophy</span>
                <h2>Precision, not excess.</h2>
              </div>
              <p>
                Our approach draws from ingredients studied for their ability to support resilience under stress,
                including extremolytes such as ectoin and hydroxyectoin, within lightweight systems designed for frequent use.
              </p>
            </div>

            <div className="philosophy-grid">
              <article className="card reveal">
                <h3>Lightweight by design</h3>
                <p>
                  No heavy, occlusive feel. The goal is compatibility with movement, routine, and repeated application.
                </p>
              </article>
              <article className="card reveal">
                <h3>Evidence-led restraint</h3>
                <p>
                  Every inclusion should have a role: support tolerance, reinforce hydration,
                  and respect the realities of children&apos;s skin.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Designed for real use</span>
                <h2>Simple enough to keep.</h2>
              </div>
              <p>
                Care should feel nearly imperceptible—quiet enough to become routine, considered enough to matter.
              </p>
            </div>

            <div className="use-grid">
              <article className="use-step reveal">
                <div className="index">01 / Before swimming</div>
                <h3>Applied to clean skin</h3>
                <p>
                  Used prior to pool exposure to support the skin&apos;s surface before repeated contact with chlorinated water.
                </p>
              </article>
              <article className="use-step reveal">
                <div className="index">02 / After swimming</div>
                <h3>Reapplied for recovery</h3>
                <p>
                  Used after rinsing to restore hydration and help reduce the residual stress that accumulates over time.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="founder">
          <div className="container founder-panel">
            <div className="portrait reveal"></div>
            <div className="founder-copy reveal">
              <span className="eyebrow">Founder</span>
              <h2>A considered approach.</h2>
              <p>
                Noléa was developed in response to a gap between repeated environmental exposure and how children&apos;s skin
                is typically supported. Created in collaboration with medical professionals, the brand reflects a restrained,
                evidence-led view of everyday skin stressors.
              </p>
              <p style={{ marginTop: 'var(--space-5)' }}>Built from real exposure, not theoretical need.</p>
              <div className="quote">
                A brand shaped by observation, restraint, and the realities of frequent water exposure.
              </div>
              <div style={{ marginTop: 'var(--space-8)' }}>
                <a className="btn btn-secondary" href="#waitlist">Read more</a>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist">
          <div className="container waitlist-shell reveal">
            <div className="waitlist-panel">
              <div>
                <span className="eyebrow">Launching soon</span>
                <h2>Be first to know.</h2>
                <p>
                  Join the list for early product updates, first access, and a more thoughtful release timeline.
                </p>

                <form
                  className="waitlist-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const note = document.getElementById('waitlist-note');
                    if (note) {
                      note.textContent = "Thank you. You&apos;re on the list.";
                    }
                    (e.currentTarget as HTMLFormElement).reset();
                  }}
                >
                  <label className="sr-only" htmlFor="email">Email address</label>
                  <div className="input-wrap">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      aria-describedby="waitlist-note"
                      required
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">Join the Waitlist</button>
                </form>

                <p className="fine-print" id="waitlist-note">Low-volume updates only.</p>
              </div>

              <div
                className="card"
                style={{
                  background: 'color-mix(in oklab, var(--color-surface) 86%, transparent)',
                  minWidth: 'min(100%, 320px)',
                }}
              >
                <h3>What this page is built to do</h3>
                <p>Establish legitimacy before noise. Clear positioning, restrained tone, and a single conversion point.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="brand" aria-label="Noléa footer mark">
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <circle cx="20" cy="24" r="4" stroke="currentColor" strokeWidth="2.4" fill="none" />
              <path d="M20 30 Q 32 22, 48 26" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              <path d="M12 42 Q 32 43, 52 42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
            <span>Noléa</span>
          </div>
          <div className="footer-links">
            <a href="#approach">Approach</a>
            <a href="#formulation">Formulation</a>
            <a href="#founder">Founder</a>
            <a href="mailto:hello@nolea.skin" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
