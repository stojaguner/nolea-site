import Image from "next/image";

export default function HomePage() {
  return (
    <main className="page">
      <style>{`
        :root {
          --bg: #f7f4ef;
          --bg-soft: #fbf9f5;
          --panel: rgba(255,255,255,0.62);
          --text: #24312b;
          --muted: #66736c;
          --line: rgba(36, 49, 43, 0.10);
          --sage: #cfd8cc;
          --sage-deep: #a8b7a8;
          --taupe: #d9cec1;
          --taupe-deep: #bcae9f;
          --water: #d9e7e2;
          --shadow: 0 24px 70px rgba(36, 49, 43, 0.08);
          --shadow-soft: 0 12px 32px rgba(36, 49, 43, 0.05);
          --radius-xl: 34px;
          --radius-lg: 26px;
          --radius-md: 20px;
          --max: 1280px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 8% 8%, rgba(207,216,204,0.45), transparent 24%),
            radial-gradient(circle at 92% 14%, rgba(217,206,193,0.42), transparent 24%),
            linear-gradient(180deg, #fcfbf8 0%, #f7f4ef 100%);
          color: var(--text);
          font-family: var(--font-sans), Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page {
          position: relative;
          overflow: clip;
        }

        .glowA,
        .glowB {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          z-index: 0;
          filter: blur(28px);
        }

        .glowA {
          top: -10rem;
          left: -10rem;
          width: 36rem;
          height: 36rem;
          background: radial-gradient(circle, rgba(207,216,204,0.55), transparent 66%);
        }

        .glowB {
          top: 24rem;
          right: -10rem;
          width: 34rem;
          height: 34rem;
          background: radial-gradient(circle, rgba(217,206,193,0.45), transparent 66%);
        }

        .container {
          width: min(var(--max), calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          background: rgba(247,244,239,0.74);
          border-bottom: 1px solid rgba(36, 49, 43, 0.06);
        }

        .navInner {
          width: min(var(--max), calc(100% - 40px));
          margin: 0 auto;
          min-height: 82px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .brandWrap {
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }

        .wordmark {
          display: inline-flex;
          align-items: center;
          gap: 0.08em;
          text-transform: uppercase;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.34em;
          white-space: nowrap;
        }

        .wordmarkLetter {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .brandIcon {
          width: 34px;
          height: 34px;
          display: inline-block;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 28px;
          color: var(--muted);
          font-size: 0.96rem;
        }

        .navLinks a:hover {
          color: var(--text);
        }

        .navButton,
        .ctaPrimary,
        .ctaSecondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .navButton:hover,
        .ctaPrimary:hover,
        .ctaSecondary:hover {
          transform: translateY(-1px);
        }

        .navButton {
          height: 44px;
          padding: 0 18px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.6);
          box-shadow: var(--shadow-soft);
          font-size: 0.95rem;
        }

        .hero {
          padding: 56px 0 42px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 26px;
          align-items: stretch;
        }

        .heroText {
          padding: 26px 6px 18px 0;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.56);
          color: var(--muted);
          font-size: 0.85rem;
          box-shadow: var(--shadow-soft);
        }

        .eyebrowDot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--sage), var(--taupe));
        }

        .hero h1 {
          margin: 24px 0 16px;
          font-family: var(--font-serif), serif;
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.94;
          letter-spacing: -0.05em;
          font-weight: 500;
          max-width: 10ch;
        }

        .hero h1 span {
          display: block;
          color: rgba(36,49,43,0.78);
        }

        .lead {
          margin: 0;
          max-width: 42rem;
          color: var(--muted);
          font-size: 1.08rem;
          line-height: 1.9;
        }

        .heroActions {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .ctaPrimary,
        .ctaSecondary {
          height: 50px;
          padding: 0 20px;
          font-size: 0.96rem;
        }

        .ctaPrimary {
          background: linear-gradient(180deg, #ffffff, #f3f5f0);
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
        }

        .ctaSecondary {
          background: rgba(255,255,255,0.48);
          border: 1px solid var(--line);
        }

        .heroMeta {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .metaCard,
        .panel,
        .statCard,
        .ingredientCard,
        .ritualCard,
        .storyCard,
        .imageCard,
        .quoteCard,
        .ctaCard {
          background: var(--panel);
          border: 1px solid var(--line);
          box-shadow: var(--shadow-soft);
        }

        .metaCard {
          padding: 18px;
          border-radius: 20px;
        }

        .metaLabel {
          color: var(--muted);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
        }

        .metaValue {
          line-height: 1.55;
        }

        .heroVisual {
          position: relative;
          min-height: 760px;
          border-radius: 38px;
          overflow: hidden;
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0) 30%),
            linear-gradient(180deg, #ede7df 0%, #e7ece5 36%, #f7f4ef 100%);
        }

        .heroImage {
          position: absolute;
          inset: 0;
        }

        .heroImage::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(247,244,239,0.1), rgba(247,244,239,0.1)),
            linear-gradient(180deg, rgba(36,49,43,0.02), rgba(36,49,43,0.22));
        }

        .heroImage img {
          object-fit: cover;
        }

        .heroOverlayCard {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          padding: 20px 20px 18px;
          border-radius: 22px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.38);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: var(--shadow-soft);
        }

        .heroOverlayCard small {
          display: block;
          margin-bottom: 8px;
          color: var(--muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.76rem;
        }

        .heroOverlayCard p {
          margin: 0;
          font-size: 0.98rem;
          line-height: 1.7;
          color: var(--text);
        }

        .floatingTag {
          position: absolute;
          top: 22px;
          right: 22px;
          padding: 12px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,0.64);
          border: 1px solid rgba(255,255,255,0.42);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: var(--muted);
          font-size: 0.85rem;
          box-shadow: var(--shadow-soft);
        }

        .section {
          padding: 48px 0;
        }

        .sectionHeader {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 24px;
        }

        .sectionHeader h2 {
          margin: 0;
          font-family: var(--font-serif), serif;
          font-size: clamp(2rem, 4vw, 3.3rem);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 500;
        }

        .sectionHeader p {
          margin: 0;
          max-width: 38rem;
          color: var(--muted);
          line-height: 1.85;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .statCard {
          padding: 28px;
          border-radius: 26px;
        }

        .statCard h3 {
          margin: 0 0 10px;
          font-family: var(--font-serif), serif;
          font-size: 1.9rem;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .statCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .panel {
          border-radius: 30px;
          overflow: hidden;
        }

        .panelPad {
          padding: 30px;
        }

        .imagePanel {
          position: relative;
          min-height: 600px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid var(--line);
          box-shadow: var(--shadow-soft);
        }

        .imagePanel img {
          object-fit: cover;
        }

        .imageTint {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(247,244,239,0.08), rgba(36,49,43,0.18)),
            linear-gradient(135deg, rgba(207,216,204,0.12), rgba(217,206,193,0.12));
        }

        .panelNote {
          position: absolute;
          left: 22px;
          bottom: 22px;
          max-width: 300px;
          padding: 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.64);
          border: 1px solid rgba(255,255,255,0.36);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .panelNote h3 {
          margin: 0 0 8px;
          font-size: 1rem;
        }

        .panelNote p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.93rem;
        }

        .featureStack {
          display: grid;
          gap: 14px;
        }

        .featureCard {
          padding: 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.38);
          border: 1px solid var(--line);
        }

        .featureTop {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: start;
          margin-bottom: 10px;
        }

        .featureTop h3 {
          margin: 0;
          font-size: 1.08rem;
        }

        .featureIndex {
          color: rgba(36,49,43,0.36);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.82rem;
        }

        .featureCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.78;
        }

        .ingredientsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .ingredientCard {
          padding: 22px;
          border-radius: 24px;
        }

        .ingredientTag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          color: var(--muted);
          font-size: 0.8rem;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .ingredientTag span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--sage), var(--taupe));
        }

        .ingredientCard h3 {
          margin: 0 0 10px;
          font-size: 1.08rem;
        }

        .ingredientCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
          font-size: 0.95rem;
        }

        .ritualGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .ritualCard {
          padding: 24px;
          border-radius: 24px;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ritualNum {
          color: rgba(36,49,43,0.36);
          text-transform: uppercase;
          letter-spacing: 0.13em;
          font-size: 0.8rem;
        }

        .ritualCard h3 {
          margin: 18px 0 10px;
          font-size: 1.1rem;
        }

        .ritualCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.8;
        }

        .imageGrid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }

        .imageCard {
          border-radius: 26px;
          overflow: hidden;
          position: relative;
          min-height: 380px;
        }

        .imageCard img {
          object-fit: cover;
        }

        .imageCard::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(247,244,239,0.02), rgba(36,49,43,0.18));
        }

        .imageCaption {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          z-index: 2;
          padding: 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.64);
          border: 1px solid rgba(255,255,255,0.38);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .imageCaption h3 {
          margin: 0 0 6px;
          font-size: 1rem;
        }

        .imageCaption p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.9rem;
        }

        .storyGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .storyCard {
          padding: 30px;
          border-radius: 28px;
        }

        .storyCard h3 {
          margin: 0 0 12px;
          font-size: 1.08rem;
        }

        .storyCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.9;
        }

        .quoteCard {
          margin-top: 18px;
          padding: 30px;
          border-radius: 28px;
        }

        .quoteCard p {
          margin: 0;
          font-family: var(--font-serif), serif;
          font-size: clamp(1.5rem, 2.8vw, 2.35rem);
          line-height: 1.3;
          letter-spacing: -0.03em;
        }

        .quoteCard small {
          display: block;
          margin-top: 14px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.84rem;
        }

        .ctaSection {
          padding: 66px 0 90px;
        }

        .ctaCard {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          padding: 42px;
          background:
            radial-gradient(circle at 18% 20%, rgba(255,255,255,0.8), transparent 18%),
            radial-gradient(circle at 90% 16%, rgba(207,216,204,0.5), transparent 22%),
            linear-gradient(180deg, #f6f3ee 0%, #edf1eb 100%);
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
        }

        .ctaGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 22px;
          align-items: center;
        }

        .ctaCopy h2 {
          margin: 0 0 12px;
          font-family: var(--font-serif), serif;
          font-size: clamp(2.1rem, 4vw, 3.5rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 500;
        }

        .ctaCopy p {
          margin: 0;
          color: var(--muted);
          line-height: 1.9;
          max-width: 38rem;
        }

        .ctaActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 26px;
        }

        .ctaVisual {
          position: relative;
          min-height: 300px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(255,255,255,0.62), rgba(255,255,255,0.34));
        }

        .ctaVisual img {
          object-fit: cover;
        }

        .ctaVisual::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(247,244,239,0.1), rgba(36,49,43,0.16));
        }

        .footer {
          padding: 0 0 44px;
        }

        .footerInner {
          width: min(var(--max), calc(100% - 40px));
          margin: 0 auto;
          padding-top: 18px;
          border-top: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          color: var(--muted);
          font-size: 0.94rem;
        }

        .footerBrand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text);
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .footerLinks {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .heroGrid,
          .split,
          .storyGrid,
          .ctaGrid {
            grid-template-columns: 1fr;
          }

          .heroMeta,
          .stats,
          .ritualGrid {
            grid-template-columns: 1fr;
          }

          .ingredientsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .imageGrid {
            grid-template-columns: 1fr;
          }

          .sectionHeader {
            flex-direction: column;
            align-items: start;
          }

          .navLinks {
            display: none;
          }

          .heroVisual {
            min-height: 620px;
          }
        }

        @media (max-width: 700px) {
          .container,
          .navInner,
          .footerInner {
            width: min(var(--max), calc(100% - 24px));
          }

          .hero {
            padding-top: 34px;
          }

          .hero h1 {
            font-size: clamp(2.7rem, 14vw, 4.3rem);
          }

          .lead {
            font-size: 1rem;
          }

          .heroVisual {
            min-height: 500px;
            border-radius: 28px;
          }

          .ingredientsGrid {
            grid-template-columns: 1fr;
          }

          .ctaCard {
            padding: 28px;
          }

          .footerInner {
            flex-direction: column;
            align-items: start;
          }
        }
      `}</style>

      <div className="glowA" />
      <div className="glowB" />

      <header className="nav">
        <div className="navInner">
          <a href="#" className="brandWrap" aria-label="NOLEA home">
            <span className="wordmark">
              <span className="wordmarkLetter">N</span>
              <svg className="brandIcon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="42" cy="21" r="5.5" fill="currentColor" opacity="0.82" />
                <path
                  d="M12 39.5C16.5 35.8 21 34 25.5 34C31 34 33.5 37.5 39 37.5C44.2 37.5 48.8 34.6 52 31.8"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5 46.5C16.3 42.8 21 41 26 41C31.5 41 34.5 44 39.5 44C44.7 44 48.7 41.6 52.5 39"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.8"
                />
              </svg>
              <span className="wordmarkLetter">L</span>
              <span className="wordmarkLetter">E</span>
              <span className="wordmarkLetter">A</span>
            </span>
          </a>

          <nav className="navLinks" aria-label="Primary navigation">
            <a href="#formula">Formula</a>
            <a href="#ingredients">Ingredients</a>
            <a href="#ritual">Ritual</a>
            <a href="#story">Story</a>
          </nav>

          <a href="#shop" className="navButton">Explore Aqua Veil</a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div className="heroText">
              <div className="eyebrow">
                <span className="eyebrowDot" />
                Swim skincare for sensitive skin
              </div>

              <h1>
                Calm protection
                <span>for skin in</span>
                constant motion.
              </h1>

              <p className="lead">
                Nolea is a modern skincare brand designed around the realities of
                swimmers’ skin. Aqua Veil is a refined protective mist created to
                support the barrier before and after chlorine exposure, helping
                skin feel softer, steadier, and less visibly stressed.
              </p>

              <div className="heroActions">
                <a href="#shop" className="ctaPrimary">Discover Aqua Veil</a>
                <a href="#ingredients" className="ctaSecondary">View ingredients</a>
              </div>

              <div className="heroMeta">
                <div className="metaCard">
                  <div className="metaLabel">Positioning</div>
                  <div className="metaValue">
                    Minimal, eloquent, science-led swim skincare
                  </div>
                </div>
                <div className="metaCard">
                  <div className="metaLabel">Hero Ingredients</div>
                  <div className="metaValue">
                    Ectoin, algae extracts, panthenol, trehalose
                  </div>
                </div>
                <div className="metaCard">
                  <div className="metaLabel">Designed For</div>
                  <div className="metaValue">
                    Kids who train, swim, and spend time in chlorinated water
                  </div>
                </div>
              </div>
            </div>

            <div className="heroVisual">
              <div className="heroImage">
                <Image
                  src="/images/hero-swimmer.jpg"
                  alt="Young swimmer emerging from the pool in soft morning light"
                  fill
                  priority
                />
              </div>
              <div className="floatingTag">Sensitive-skin swim care</div>
              <div className="heroOverlayCard">
                <small>NOLEA / AQUA VEIL</small>
                <p>
                  A gentle protective mist for swimmers’ skin — shaped by
                  barrier science, softened by elegant restraint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats">
            <div className="statCard">
              <h3>Barrier-first</h3>
              <p>
                Designed to support skin under repeated exposure to water,
                chlorine, heat, and friction.
              </p>
            </div>
            <div className="statCard">
              <h3>Softly technical</h3>
              <p>
                A scientific point of view expressed through calm language and a
                minimal visual system.
              </p>
            </div>
            <div className="statCard">
              <h3>Made for movement</h3>
              <p>
                Lightweight, comfortable, and elegant enough to become part of a
                real pre- and post-swim ritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="formula">
        <div className="container">
          <div className="sectionHeader">
            <h2>The formula approach</h2>
            <p>
              Aqua Veil is designed as a breathable protective layer: light on
              the skin, calm in texture, and focused on resilience rather than
              heaviness.
            </p>
          </div>

          <div className="split">
            <div className="imagePanel">
              <Image
                src="/images/pool-detail.jpg"
                alt="Close-up pool water detail with soft reflections"
                fill
              />
              <div className="imageTint" />
              <div className="panelNote">
                <h3>Protection with clarity</h3>
                <p>
                  We focus on what the skin needs most: comfort, hydration,
                  support, and reduced visible stress after repeated exposure.
                </p>
              </div>
            </div>

            <div className="panel panelPad">
              <div className="featureStack">
                <div className="featureCard">
                  <div className="featureTop">
                    <h3>Before-swim support</h3>
                    <div className="featureIndex">01</div>
                  </div>
                  <p>
                    A refined mist format intended to sit lightly on dry skin
                    before time in chlorinated water.
                  </p>
                </div>

                <div className="featureCard">
                  <div className="featureTop">
                    <h3>After-swim recovery</h3>
                    <div className="featureIndex">02</div>
                  </div>
                  <p>
                    Reapplies easily after rinsing to help restore softness,
                    comfort, and hydration.
                  </p>
                </div>

                <div className="featureCard">
                  <div className="featureTop">
                    <h3>Elegant sensoriality</h3>
                    <div className="featureIndex">03</div>
                  </div>
                  <p>
                    Fast-drying, non-sticky, and visually quiet — designed to
                    disappear into the ritual with ease.
                  </p>
                </div>

                <div className="featureCard">
                  <div className="featureTop">
                    <h3>Clear cosmetic language</h3>
                    <div className="featureIndex">04</div>
                  </div>
                  <p>
                    Focused on barrier support, hydration, and environmental
                    stress rather than sunscreen positioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ingredients">
        <div className="container">
          <div className="sectionHeader">
            <h2>Ingredients with purpose</h2>
            <p>
              Each ingredient is selected to support a more resilient, less
              reactive skin feel — especially for children who spend long hours
              in the pool.
            </p>
          </div>

          <div className="ingredientsGrid">
            <div className="ingredientCard">
              <div className="ingredientTag"><span />Hero active</div>
              <h3>Ectoin</h3>
              <p>
                Chosen for the brand’s core focus on skin comfort and resilience
                under repeated environmental stress.
              </p>
            </div>

            <div className="ingredientCard">
              <div className="ingredientTag"><span />Marine support</div>
              <h3>Algae extracts</h3>
              <p>
                Added for a marine-derived, mineral-rich support layer that
                aligns naturally with the aquatic world of the brand.
              </p>
            </div>

            <div className="ingredientCard">
              <div className="ingredientTag"><span />Barrier comfort</div>
              <h3>Panthenol</h3>
              <p>
                Helps create a softer, calmer skin feel and supports the
                formula’s gentle, recovery-focused profile.
              </p>
            </div>

            <div className="ingredientCard">
              <div className="ingredientTag"><span />Hydration structure</div>
              <h3>Trehalose</h3>
              <p>
                Contributes to lasting comfort and reinforces the elegant,
                water-based architecture of the mist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ritual">
        <div className="container">
          <div className="sectionHeader">
            <h2>The ritual</h2>
            <p>
              A clear, practical routine — simple enough for everyday use, but
              elevated enough to feel intentional.
            </p>
          </div>

          <div className="ritualGrid">
            <div className="ritualCard">
              <div className="ritualNum">Step 01</div>
              <div>
                <h3>Before swim</h3>
                <p>
                  Apply to clean, dry skin before entering the pool to begin the
                  protective ritual.
                </p>
              </div>
            </div>

            <div className="ritualCard">
              <div className="ritualNum">Step 02</div>
              <div>
                <h3>After rinse</h3>
                <p>
                  Reapply after rinsing and lightly towel-drying to help restore
                  softness and comfort.
                </p>
              </div>
            </div>

            <div className="ritualCard">
              <div className="ritualNum">Step 03</div>
              <div>
                <h3>Everyday ease</h3>
                <p>
                  Designed to feel light, calm, and elegant enough to become a
                  natural part of the swimmer’s day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>The world of Nolea</h2>
            <p>
              A brand shaped by water, discipline, softness, and movement — made
              for young swimmers whose skin lives in a demanding environment.
            </p>
          </div>

          <div className="imageGrid">
            <div className="imageCard">
              <Image
                src="/images/hero-swimmer.jpg"
                alt="Young swimmer in calm natural light"
                fill
              />
              <div className="imageCaption">
                <h3>Young swimmers</h3>
                <p>
                  Built for children who spend serious time in chlorinated water.
                </p>
              </div>
            </div>

            <div className="imageCard">
              <Image
                src="/images/waterpolo-kids.jpg"
                alt="Youth water polo players in the pool"
                fill
              />
              <div className="imageCaption">
                <h3>Water polo players</h3>
                <p>
                  For skin exposed to repetition, sun, friction, and pool
                  chemicals.
                </p>
              </div>
            </div>

            <div className="imageCard">
              <Image
                src="/images/pool-detail.jpg"
                alt="Soft pool reflections and water texture"
                fill
              />
              <div className="imageCaption">
                <h3>Aquatic texture</h3>
                <p>
                  The visual language of the brand is quiet, fluid, and clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <div className="container">
          <div className="sectionHeader">
            <h2>The brand story</h2>
            <p>
              Nolea was created from a simple idea: protection should feel
              beautiful, intelligent, and calm.
            </p>
          </div>

          <div className="storyGrid">
            <div className="storyCard">
              <h3>Why it exists</h3>
              <p>
                Children who swim frequently live in a unique environment.
                Chlorinated water, daily repetition, sun, and friction can leave
                skin dry, unsettled, and visibly stressed. Nolea was created to
                answer that reality with a more thoughtful kind of care.
              </p>
            </div>

            <div className="storyCard">
              <h3>How it speaks</h3>
              <p>
                Clear language. Modern ingredients. Soft colors. A minimal,
                eloquent point of view. We believe high-performance skincare can
                feel gentle, visually quiet, and deeply considered at once.
              </p>
            </div>
          </div>

          <div className="quoteCard">
            <p>
              “Protection should not feel heavy. Science should not feel harsh.
              Care should not have to shout.”
            </p>
            <small>NOLEA / Brand philosophy</small>
          </div>
        </div>
      </section>

      <section className="ctaSection" id="shop">
        <div className="container">
          <div className="ctaCard">
            <div className="ctaGrid">
              <div className="ctaCopy">
                <h2>
                  A calmer, more modern
                  <br />
                  way to care for swimmers’ skin.
                </h2>
                <p>
                  Aqua Veil is Nolea’s first expression: a protective mist with
                  a gentle, science-led point of view and a visual language drawn
                  from water, restraint, and quiet confidence.
                </p>

                <div className="ctaActions">
                  <a href="#" className="ctaPrimary">Join the first release</a>
                  <a href="#" className="ctaSecondary">Request brand deck</a>
                </div>
              </div>

              <div className="ctaVisual">
                <Image
                  src="/images/waterpolo-kids.jpg"
                  alt="Kids water polo players swimming together"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <svg className="brandIcon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="42" cy="21" r="5.5" fill="currentColor" opacity="0.82" />
              <path
                d="M12 39.5C16.5 35.8 21 34 25.5 34C31 34 33.5 37.5 39 37.5C44.2 37.5 48.8 34.6 52 31.8"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 46.5C16.3 42.8 21 41 26 41C31.5 41 34.5 44 39.5 44C44.7 44 48.7 41.6 52.5 39"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
              />
            </svg>
            NOLEA
          </div>

          <div>Swim skincare, clearly redefined.</div>

          <div className="footerLinks">
            <a href="#formula">Formula</a>
            <a href="#ingredients">Ingredients</a>
            <a href="#ritual">Ritual</a>
            <a href="#story">Story</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
