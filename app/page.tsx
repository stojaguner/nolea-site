export default function HomePage() {
  return (
    <main>
      <section aria-labelledby="hero-heading">
        <div className="container">
          <p className="eyebrow">Protective skincare for young swimmers</p>
          <h1 id="hero-heading">Protection for skin that lives in the water.</h1>
          <p className="intro">
            NOLEA is developing a considered skincare essential for children with repeated
            pool exposure — created for real swim routines, with a focus on simplicity,
            comfort, and everyday use.
          </p>

          <form className="waitlist-form" action="/api/waitlist" method="post">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
            <button type="submit">Get Early Access</button>
          </form>

          <p className="microcopy">
            Join the waitlist for launch updates and early access. We’ll keep it thoughtful
            and infrequent.
          </p>
        </div>
      </section>

      <section aria-labelledby="why-heading">
        <div className="container narrow">
          <h2 id="why-heading">Why this exists</h2>
          <p>
            Repeated time in the pool can be demanding on skin. Chlorine, sun, frequent
            rinsing, and long training blocks can leave skin feeling dry, tight, and
            overworked — especially when that routine is part of everyday life.
          </p>
          <p>
            NOLEA began with a simple question: what should protective skincare look like
            for children who spend real time in the water? We believe the answer should
            feel light, calm, and easy to use consistently.
          </p>
        </div>
      </section>

      <section aria-labelledby="difference-heading">
        <div className="container">
          <h2 id="difference-heading">What makes it different</h2>
          <div className="grid-3">
            <article>
              <h3>Made for repeated pool exposure</h3>
              <p>
                Designed around the realities of frequent swim schedules, not occasional use.
              </p>
            </article>

            <article>
              <h3>Barrier-minded philosophy</h3>
              <p>
                A formulation direction centered on supporting comfort, resilience, and a more
                considered daily routine.
              </p>
            </article>

            <article>
              <h3>Simple enough to use consistently</h3>
              <p>
                Lightweight, practical, and built to fit before- and after-swim life without
                adding friction.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="approach-heading">
        <div className="container narrow">
          <h2 id="approach-heading">Our approach</h2>
          <p>
            NOLEA is being built with an intentionally narrow focus: thoughtful skincare for
            young water athletes. The goal is not to create a 10-step system or an overloaded
            product line, but to develop one strong solution first with attention to formula
            feel, family usability, and long-term trust.
          </p>
          <p>
            We are interested in restraint over noise — clear purpose, careful choices, and a
            brand experience that feels calm from the formula philosophy to the website itself.
          </p>
        </div>
      </section>

      <section aria-labelledby="founder-heading">
        <div className="container narrow">
          <h2 id="founder-heading">Founder note</h2>
          <p>
            I started NOLEA after seeing how normal repeated pool exposure had become for
            young athletes, and how little product design seemed to reflect that reality.
            The goal is not more skincare — it is better-considered skincare for a very
            specific life in and around the water.
          </p>
        </div>
      </section>

      <section aria-labelledby="faq-heading">
        <div className="container narrow">
          <h2 id="faq-heading">FAQ</h2>

          <div className="faq-item">
            <h3>What is NOLEA?</h3>
            <p>
              NOLEA is a skincare brand in development focused on protective care for children
              and young athletes with repeated pool exposure.
            </p>
          </div>

          <div className="faq-item">
            <h3>When will it launch?</h3>
            <p>
              We’re currently in development, and the waitlist is the best way to hear first
              about timing and early access.
            </p>
          </div>

          <div className="faq-item">
            <h3>Who is it designed for?</h3>
            <p>
              NOLEA is being created with young swimmers and water-sport routines in mind.
            </p>
          </div>

          <div className="faq-item">
            <h3>Will there be more than one product?</h3>
            <p>
              The focus right now is on developing the first product thoughtfully before
              expanding.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
