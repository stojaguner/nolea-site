// app/page.tsx
export default function Home() {
  return (
    <main>
      <style jsx global>{`
        :root {
          --bg: #F5F7FA;
          --bg-soft: #EFF3F8;
          --accent: #4C9FBF;
          --accent-soft: #C3D6E5;
          --text: #1F2933;
          --muted: #6B7280;
          --card: #FFFFFF;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: var(--accent);
          text-decoration: none;
        }
        a:hover { text-decoration: underline; }

        .container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
        }

        header {
          padding: 18px 0 0;
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .logo {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: 20px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .nav-links a {
          font-size: 13px;
          color: var(--muted);
          margin-left: 18px;
        }
        .nav-links a:hover {
          color: var(--text);
        }

        .hero {
          max-width: 1080px;
          margin: 0 auto;
          padding: 56px 16px 56px;
          display: grid;
          grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
            padding-top: 40px;
          }
        }
        .hero-eyebrow {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
        }
        .hero-title {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: 34px;
          font-weight: 500;
          margin-bottom: 12px;
        }
        .hero-subtitle {
          font-size: 15px;
          color: var(--muted);
          max-width: 440px;
          margin-bottom: 24px;
        }
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 22px;
          border-radius: 999px;
          border: none;
          background: var(--accent);
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
        }
        .btn-primary:hover {
          background: #3c88a6;
        }
        .btn-text {
          font-size: 13px;
          color: var(--muted);
        }
        .hero-note {
          font-size: 11px;
          color: #9CA3AF;
          margin-top: 10px;
        }

        .hero-image-wrap {
          border-radius: 28px;
          overflow: hidden;
          background: #E5EDF5;
          min-height: 260px;
          display: flex;
          align-items: stretch;
          justify-content: center;
        }
        .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.8) contrast(0.96);
        }

        .section {
          padding: 56px 0;
        }
        .section-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .section-title {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: 24px;
          margin-bottom: 6px;
        }
        .section-intro {
          font-size: 14px;
          color: var(--muted);
          max-width: 520px;
          margin-bottom: 26px;
        }

        .card-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 20px 18px;
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.06);
          font-size: 13px;
        }
        .card-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #9CA3AF;
          margin-bottom: 6px;
        }
        .pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .pill {
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 999px;
          background: #EDF2F7;
          color: #4B5563;
        }
        ul { margin-left: 18px; }
        li { margin-bottom: 4px; }

        .join-section {
          padding: 56px 16px 72px;
          background: var(--bg-soft);
        }
        .join-inner {
          max-width: 540px;
          margin: 0 auto;
          text-align: center;
        }
        .join-title {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: 22px;
          margin-bottom: 8px;
        }
        .join-subtitle {
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 24px;
        }

        .join-form {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .join-input {
          min-width: 220px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid #D1D5DB;
          font-size: 14px;
          outline: none;
        }
        .join-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 1px rgba(76,159,191,0.1);
        }
        .join-btn {
          padding: 10px 20px;
          border-radius: 999px;
          border: none;
          background: var(--accent);
          color: #fff;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
        }
        .join-btn:hover {
          background: #3c88a6;
        }
        .join-note {
          font-size: 11px;
          color: #9CA3AF;
          margin-top: 10px;
        }

        footer {
          border-top: 1px solid #E5E7EB;
          padding: 18px 16px 28px;
          font-size: 12px;
          color: var(--muted);
        }
        .footer-inner {
          max-width: 960px;
          margin: 0 auto;
        }
      `}</style>

      <header>
        <nav className="nav">
          <div className="logo">NOLEA SKIN™</div>
          <div className="nav-links">
            <a href="#product">Product</a>
            <a href="#science">Science</a>
            <a href="#join">Waitlist</a>
          </div>
        </nav>

        <section className="hero" id="top">
          <div>
            <div className="hero-eyebrow">For kids who live in the water</div>
            <h1 className="hero-title">Soft protection for chlorine‑sensitive skin.</h1>
            <p className="hero-subtitle">
              Nolea Skin™ is a non‑greasy pre &amp; post swim mist created for young swimmers and
              water‑polo players who spend long hours in chlorinated pools and struggle with
              dryness or irritation after practice.
            </p>
            <div className="hero-cta">
              <button
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById('join');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join the waitlist
              </button>
              <div className="btn-text">
                Launching in limited batches with select U.S. labs.
              </div>
            </div>
            <div className="hero-note">
              Cosmetic skincare. Not a medical product. Always follow your child’s dermatologist’s advice.
            </div>
          </div>

          <div className="hero-image-wrap">
            {/* Replace /hero-placeholder.jpg with your own image in public/ */}
            <img src="/hero-placeholder.jpg" alt="Nolea Skin pre &amp; post swim mist" />
          </div>
        </section>
      </header>

      <section className="section" id="product">
        <div className="section-inner">
          <h2 className="section-title">Pre &amp; post swim in one step.</h2>
          <p className="section-intro">
            A water‑light body mist that helps neutralize chlorine on the skin’s surface
            and supports the skin barrier with extremolyte science – without a greasy film.
          </p>

          <div className="card-row">
            <div className="card">
              <div className="card-label">Actives</div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Ectoin &amp; vitamin C</h3>
              <p>
                Ectoin and other extremolytes help reinforce the skin’s natural moisture barrier,
                while sodium ascorbate (a gentle form of vitamin C) reacts with chlorine and
                chloramines on the skin so they can be rinsed away more easily.
              </p>
            </div>
            <div className="card">
              <div className="card-label">Texture</div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Water‑light, non‑greasy</h3>
              <p>
                Fine mist, no oils, no heavy occlusives. Designed so kids can spray and go between
                heats without feeling coated or losing grip on the ball.
              </p>
              <div className="pill-list">
                <div className="pill">Fragrance‑free</div>
                <div className="pill">No essential oils</div>
                <div className="pill">No drying alcohol</div>
              </div>
            </div>
            <div className="card">
              <div className="card-label">For who</div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Swim &amp; water‑polo kids</h3>
              <p>
                Built for children and adolescents who spend 10–15+ hours per week in chlorinated
                water and deal with tight, itchy, or reactive skin after pool time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="science">
        <div className="section-inner">
          <h2 className="section-title">Gentle science, not harsh chemistry.</h2>
          <p className="section-intro">
            Two complementary ideas: reduce the time active chlorine spends on the skin,
            and make the barrier itself more resilient.
          </p>

          <div className="card-row">
            <div className="card">
              <div className="card-label">Chlorine on the surface</div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Sodium ascorbate mist</h3>
              <p>
                Simple vitamin C solutions are often used by parents as “swim sprays” to help
                neutralize residual chlorine after swim lessons. Nolea Skin uses a water‑based
                sodium ascorbate system, applied just before and immediately after swimming, to
                help cut down the active chlorine load sitting on the skin between practices.
              </p>
            </div>
            <div className="card">
              <div className="card-label">Skin barrier underneath</div>
              <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Ectoin &amp; extremolytes</h3>
              <p>
                Ectoin, a stress‑protection molecule from extremophiles, has been shown in
                clinical studies to improve hydration and barrier function and reduce dryness
                and itching in sensitive and atopic skin. In a light mist, it helps the skin
                tolerate repeated water and chemical stress more comfortably.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="join-inner">
          <h2 className="join-title">Be first to know when we launch.</h2>
          <p className="join-subtitle">
            Nolea Skin is currently in formulation and safety work with a U.S. cosmetic lab.
            Join the list for early access and founder‑only updates.
          </p>

          <form
            className="join-form"
            onSubmit={(e) => {
              e.preventDefault();
              // Replace this with your real waitlist logic (e.g. API call or external form)
              alert('Thanks for your interest in Nolea Skin!');
            }}
          >
            <input
              type="email"
              className="join-input"
              placeholder="Email address"
              required
            />
            <button type="submit" className="join-btn">
              Join waitlist
            </button>
          </form>
          <div className="join-note">
            No spam. Just thoughtful updates on swimmer‑friendly skincare.
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div style={{ marginBottom: '4px' }}>
            © {new Date().getFullYear()} Nolea Skin™. All rights reserved.
          </div>
          <div>
            Information on this site is for cosmetic and educational purposes only and does not
            replace medical advice. Always consult your child’s healthcare provider about eczema
            or other skin conditions.
          </div>
        </div>
      </footer>
    </main>
  );
}
