"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = prefersDark ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.16 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      if (!el.classList.contains("visible")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&f[]=zodiak@400,500,700&display=swap');

        :root, [data-theme="light"] {
          --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
          --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
          --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
          --text-lg: clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
          --text-xl: clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem);
          --text-2xl: clamp(2.3rem, 1.3rem + 3vw, 4.75rem);
          --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem; --space-5: 1.25rem;
          --space-6: 1.5rem; --space-8: 2rem; --space-10: 2.5rem; --space-12: 3rem; --space-16: 4rem;
          --space-20: 5rem; --space-24: 6rem; --space-32: 8rem;
          --color-bg: #f6f2ec;
          --color-surface: #fbf8f4;
          --color-surface-2: #f1ece5;
          --color-surface-offset: #ebe5de;
          --color-border: #d9d2c9;
          --color-divider: #dfd8cf;
          --color-text: #221f1a;
          --color-text-muted: #68645e;
          --color-text-faint: #9d988f;
          --color-text-inverse: #f9f7f2;
          --color-primary: #6c8072;
          --color-primary-hover: #596a5f;
          --color-primary-highlight: #d8dfd7;
          --radius-sm: 0.375rem; --radius-md: 0.75rem; --radius-lg: 1rem; --radius-xl: 1.5rem; --radius-full: 9999px;
          --shadow-sm: 0 1px 2px rgba(34, 31, 26, 0.05);
          --transition-interactive: 180ms cubic-bezier(0.16, 1, 0.3, 1);
          --content-default: 1120px;
          --font-display: 'Zodiak', Georgia, serif;
          --font-body: 'Satoshi', Inter, sans-serif;
        }
        [data-theme="dark"] {
          --color-bg: #171512;
          --color-surface: #1f1c19;
          --color-surface-2: #27231f;
          --color-surface-offset: #2d2823;
          --color-border: #433d37;
          --color-divider: #36312c;
          --color-text: #eee7de;
          --color-text-muted: #c3bbb1;
          --color-text-faint: #8f877f;
          --color-text-inverse: #1a1714;
          --color-primary: #9cb59f;
          --color-primary-hover: #b6c8b7;
          --color-primary-highlight: #313830;
          --shadow-sm: 0 1px 2px rgba(0,0,0,.18);
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          min-height: 100dvh;
          background: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body);
          font-size: var(--text-base);
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        a { color: inherit; text-decoration: none; }
        button, input { font: inherit; }
        img, svg { display: block; max-width: 100%; }
        .page-aura {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
          opacity: .16;
          background: radial-gradient(circle at 18% 10%, rgba(156,181,159,.09), transparent 22%), url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c711fe5eb718eef6d5e683c8d316e3d1c31bda8d.jpg') center top / cover no-repeat;
          filter: saturate(.38) sepia(.12);
        }
        .skip-link {
          position: absolute; left: 1rem; top: -3rem; background: var(--color-text); color: var(--color-text-inverse);
          padding: 0.75rem 1rem; border-radius: 9999px; z-index: 100;
        }
        .skip-link:focus { top: 1rem; }
        .container { width: min(calc(100% - 2rem), var(--content-default)); margin-inline: auto; }
        .header {
          position: sticky; top: 0; z-index: 50; backdrop-filter: blur(14px);
          background: color-mix(in oklab, var(--color-bg) 84%, transparent);
          border-bottom: 1px solid color-mix(in oklab, var(--color-border) 78%, transparent);
        }
        .header-inner {
          display: flex; align-items: center; justify-content: space-between; gap: 1rem; min-height: 4.75rem;
        }
        .brand { display: inline-flex; align-items: center; gap: .75rem; text-transform: uppercase; }
        .wordmark { letter-spacing: .24em; text-indent: .24em; }
        .wordmark span {
          font-family: var(--font-display);
          font-size: clamp(1.15rem, 0.95rem + .25vw, 1.35rem);
          letter-spacing: .22em;
          font-weight: 400;
          color: var(--color-text);
        }
        .nav { display: flex; align-items: center; gap: 1.25rem; }
        .nav a { font-size: var(--text-sm); color: var(--color-text-muted); }
        .header-actions { display: flex; align-items: center; gap: .75rem; }
        .theme-toggle, .menu-toggle {
          min-width: 44px; min-height: 44px; display: grid; place-items: center;
          border: 1px solid color-mix(in oklab, var(--color-border) 84%, transparent);
          border-radius: 9999px; background: var(--color-surface); cursor: pointer;
        }
        .menu-toggle { display: none; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 1.25rem;
          border-radius: 9999px; transition: all var(--transition-interactive); border: 1px solid transparent; font-size: var(--text-sm);
          cursor: pointer;
        }
        .btn-primary { background: var(--color-primary); color: var(--color-text-inverse); }
        .btn-secondary { background: transparent; border-color: color-mix(in oklab, var(--color-border) 88%, transparent); color: var(--color-text); }
        section { padding-block: clamp(4rem, 10vw, 6rem); }
        .hero { min-height: calc(100dvh - 4.75rem); display: grid; align-items: center; padding-block: 4rem; }
        .hero-grid, .section-head, .feature-panel, .founder-panel, .waitlist-panel, .card-grid, .triptych, .future-grid, .faq-grid {
          display: grid; gap: 2rem;
        }
        .hero-grid { grid-template-columns: 1.1fr .9fr; align-items: center; }
        .eyebrow {
          display: inline-flex; padding: .45rem .8rem; border-radius: 9999px; background: var(--color-surface-2);
          color: var(--color-text-muted); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: .14em;
        }
        .hero-copy h1, .section-head h2, .feature-copy h2, .founder-copy h2, .waitlist-panel h2 {
          font-family: var(--font-display); line-height: 1.02; letter-spacing: -0.03em;
        }
        .hero-copy h1 { font-size: var(--text-2xl); max-width: 10ch; margin-top: 1.5rem; }
        .hero-copy p, .section-head p, .feature-copy p, .founder-copy p, .waitlist-panel p { color: var(--color-text-muted); max-width: 42ch; }
        .hero-copy p { margin-top: 1.5rem; font-size: clamp(1.02rem, 0.95rem + 0.25vw, 1.18rem); }
        .hero-actions, .hero-meta { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 2rem; }
        .hero-meta span {
          color: var(--color-text-faint); font-size: var(--text-xs); letter-spacing: .08em; text-transform: uppercase;
          padding: .55rem .8rem; border-radius: 9999px; background: color-mix(in oklab, var(--color-surface) 86%, transparent);
          border: 1px solid color-mix(in oklab, var(--color-border) 76%, transparent);
        }
        .hero-visual {
          position: relative; min-height: 560px; border-radius: min(2rem, 5vw); overflow: hidden;
          background: linear-gradient(180deg, rgba(246,242,236,.78), rgba(241,236,229,.92)), url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7e3132db241435c9724f19418019afeb1a7b6328.jpg') center / cover no-repeat;
          border: 1px solid color-mix(in oklab, var(--color-border) 76%, transparent); box-shadow: 0 10px 28px rgba(34,31,26,.06);
        }
        [data-theme="dark"] .hero-visual {
          background: linear-gradient(180deg, rgba(23,21,18,.74), rgba(39,35,31,.9)), url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7e3132db241435c9724f19418019afeb1a7b6328.jpg') center / cover no-repeat;
        }
        .swirl, .swirl::after {
          position: absolute; border-radius: 50%; border: 1px solid color-mix(in oklab, var(--color-primary) 16%, transparent); content: "";
        }
        .swirl { width: 320px; height: 320px; right: -52px; top: -72px; opacity: .45; }
        .swirl::after { inset: 48px; }
        .mist-bottle {
          position: absolute; inset: auto 16% 10% auto; width: min(290px, 48%); aspect-ratio: 0.52; border-radius: 2.5rem 2.5rem 3rem 3rem;
          background: linear-gradient(180deg, rgba(255,255,255,.82), rgba(236,233,227,.96)); border: 1px solid rgba(255,255,255,.65);
          box-shadow: 0 20px 50px rgba(34,31,26,.16);
        }
        .mist-bottle::before {
          content: ""; position: absolute; left: 26%; right: 26%; top: -16%; height: 16%; border-radius: 1.25rem 1.25rem .4rem .4rem;
          background: linear-gradient(180deg, #d8d2c9, #bfb8ad);
        }
        .mist-bottle::after {
          content: "AQUA VEIL"; position: absolute; inset: 38% 0 auto 0; text-align: center; font-family: var(--font-body);
          letter-spacing: .3em; text-indent: .3em; font-size: .8rem; color: #565148;
        }
        .visual-card {
          position: absolute; background: color-mix(in oklab, var(--color-surface) 95%, transparent); backdrop-filter: blur(8px);
          border: 1px solid color-mix(in oklab, var(--color-border) 68%, transparent); border-radius: 1.5rem; padding: 1.25rem;
          box-shadow: 0 6px 18px rgba(34,31,26,.03); max-width: 224px;
        }
        .visual-card small { display: block; color: var(--color-text-faint); text-transform: uppercase; letter-spacing: .12em; font-size: var(--text-xs); margin-bottom: .5rem; }
        .visual-card strong { font-size: var(--text-lg); font-weight: 500; font-family: var(--font-display); line-height: 1.1; }
        .visual-card p { margin-top: .5rem; color: var(--color-text-muted); font-size: var(--text-sm); }
        .visual-card.one { left: 7%; bottom: 14%; }
        .visual-card.two { left: 10%; top: 12%; }
        .section-head { grid-template-columns: .9fr 1.1fr; align-items: end; margin-bottom: 3rem; }
        .section-head h2, .feature-copy h2, .founder-copy h2, .waitlist-panel h2 { font-size: var(--text-xl); }
        .card-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .triptych { grid-template-columns: repeat(3, minmax(0,1fr)); }
        .future-grid, .faq-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .card, .future-card {
          padding: clamp(1.5rem, 3vw, 2rem); background: color-mix(in oklab, var(--color-surface) 96%, transparent);
          backdrop-filter: blur(8px); border-radius: 1.5rem; border: 1px solid color-mix(in oklab, var(--color-border) 72%, transparent);
        }
        .card .number { color: var(--color-text-faint); font-size: var(--text-xs); letter-spacing: .14em; text-transform: uppercase; margin-bottom: .75rem; }
        .card h3, .future-card h3, .faq-item h3 { font-size: var(--text-lg); margin-bottom: .75rem; font-weight: 500; }
        .card p, .future-card p, .faq-item p { color: var(--color-text-muted); }
        .feature-panel {
          grid-template-columns: .95fr 1.05fr; align-items: stretch; padding: clamp(2rem, 4vw, 3rem); background: var(--color-surface-2);
          border-radius: calc(1.5rem + .5rem); border: 1px solid color-mix(in oklab, var(--color-border) 78%, transparent);
        }
        .phase-list { display: grid; gap: 1rem; }
        .phase-item {
          padding: 1.25rem; border-radius: 1rem; background: color-mix(in oklab, var(--color-surface) 82%, transparent);
          border: 1px solid color-mix(in oklab, var(--color-border) 65%, transparent);
        }
        .phase-item strong { display: block; margin-bottom: .5rem; font-size: var(--text-sm); letter-spacing: .08em; text-transform: uppercase; color: var(--color-text-faint); }
        .phase-item span { font-size: var(--text-lg); font-family: var(--font-display); }
        .maker-grid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap: 1rem; }
        .maker-chip {
          padding: 1.25rem; text-align: center; border-radius: 1rem; background: color-mix(in oklab, var(--color-surface) 94%, transparent);
          backdrop-filter: blur(8px); border: 1px solid color-mix(in oklab, var(--color-border) 58%, transparent); color: var(--color-text-muted);
          min-height: 108px; display: grid; align-content: center;
        }
        .maker-chip strong { color: var(--color-text); font-weight: 500; }
        .founder-panel { grid-template-columns: .85fr 1.15fr; align-items: center; }
        .portrait {
          background: linear-gradient(180deg, rgba(246,242,236,.72), rgba(235,229,222,.88)), url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/677d8f0c1e9a23a88d090edb149e2bdd7cb923de.jpg') center / cover no-repeat;
          border-radius: min(2rem, 5vw); min-height: 460px; position: relative; overflow: hidden; border: 1px solid color-mix(in oklab, var(--color-border) 78%, transparent);
        }
        [data-theme="dark"] .portrait {
          background: linear-gradient(180deg, rgba(23,21,18,.68), rgba(45,40,35,.82)), url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/677d8f0c1e9a23a88d090edb149e2bdd7cb923de.jpg') center / cover no-repeat;
        }
        .portrait::before {
          content: ""; position: absolute; inset: 12% 18% 0 18%; border-radius: 12rem 12rem 0 0;
          background: linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,.12)); border: 1px solid rgba(255,255,255,.38);
        }
        .portrait::after {
          content: "NOLÉA"; position: absolute; bottom: 1.25rem; left: 1.25rem; font-size: var(--text-xs); letter-spacing: .14em; text-transform: uppercase; color: var(--color-text-faint);
        }
        .quote { margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--color-divider); font-family: var(--font-display); font-size: var(--text-lg); max-width: 22ch; }
        .future-card small { display: block; color: var(--color-text-faint); text-transform: uppercase; letter-spacing: .12em; margin-bottom: .75rem; }
        .faq-item { padding: 1.5rem; border-top: 1px solid var(--color-divider); }
        .waitlist-shell {
          padding: clamp(2rem, 4vw, 3rem); border-radius: calc(1.5rem + .75rem);
          background: linear-gradient(140deg, rgba(251,248,244,.97), rgba(241,236,229,.94)), url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c711fe5eb718eef6d5e683c8d316e3d1c31bda8d.jpg') center / cover no-repeat;
          border: 1px solid color-mix(in oklab, var(--color-border) 78%, transparent); box-shadow: 0 10px 28px rgba(34,31,26,.05);
        }
        [data-theme="dark"] .waitlist-shell {
          background: linear-gradient(140deg, rgba(31,28,25,.95), rgba(39,35,31,.88)), url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c711fe5eb718eef6d5e683c8d316e3d1c31bda8d.jpg') center / cover no-repeat;
        }
        .waitlist-panel { grid-template-columns: 1fr; align-items: center; }
        .waitlist-form { display: flex; gap: .75rem; align-items: center; flex-wrap: wrap; margin-top: 1.5rem; }
        .input-wrap {
          flex: 1 1 300px; display: flex; align-items: center; min-height: 52px; border-radius: 9999px;
          border: 1px solid color-mix(in oklab, var(--color-border) 84%, transparent); background: var(--color-bg); padding-inline: 1.25rem;
        }
        .input-wrap input { width: 100%; border: 0; background: transparent; color: var(--color-text); outline: none; }
        .fine-print { margin-top: 1rem; font-size: var(--text-xs); color: var(--color-text-faint); }
        .reveal { opacity: 0; transform: translateY(22px); transition: opacity 700ms ease, transform 700ms ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        footer { padding: 2.5rem 0 3rem; border-top: 1px solid var(--color-divider); }
        .footer-inner { display: flex; justify-content: space-between; gap: 1.25rem; flex-wrap: wrap; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 1rem; font-size: var(--text-sm); color: var(--color-text-muted); }
        @media (max-width: 1040px) { .maker-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
        @media (max-width: 900px) {
          .nav {
            position: absolute; inset: calc(100% + .75rem) 1rem auto 1rem; flex-direction: column; align-items: flex-start; padding: 1.25rem;
            background: var(--color-surface); border: 1px solid color-mix(in oklab, var(--color-border) 84%, transparent); border-radius: 1.5rem; display: ${menuOpen ? "flex" : "none"};
          }
          .menu-toggle { display: grid; }
          .hero-grid, .section-head, .feature-panel, .founder-panel, .card-grid, .triptych, .future-grid, .faq-grid { grid-template-columns: 1fr; }
          .maker-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .hero-visual { min-height: 460px; }
          .mist-bottle { width: 180px; right: 10%; }
          .visual-card.one { left: 6%; bottom: 10%; }
          .visual-card.two { left: 6%; top: 8%; }
        }
        @media (max-width: 640px) {
          .page-aura { opacity: .11; background-position: center center; }
          .header-inner { min-height: 4.25rem; }
          .hero { min-height: auto; }
          .hero-copy h1 { max-width: 11ch; }
          .hero-actions, .waitlist-form { flex-direction: column; align-items: stretch; }
          .btn { width: 100%; }
          .hero-visual { min-height: 390px; }
          .visual-card { max-width: 220px; padding: 1rem; }
          .mist-bottle { width: 150px; }
          .maker-grid { grid-template-columns: 1fr; }
          .input-wrap { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
          .reveal { opacity: 1; transform: none; }
        }
      `}</style>

      <div className="page-aura" aria-hidden="true" />
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="header">
        <div className="container header-inner">
          <a className="brand wordmark" href="#top" aria-label="NOLÉA home">
            <span>NOLÉA</span>
          </a>

          <nav className="nav" id="nav">
            <a href="#aqua-veil">Aqua Veil™</a>
            <a href="#ritual">Ritual</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#founder">Perspective</a>
            <a href="#waitlist">Waitlist</a>
          </nav>

          <div className="header-actions">
            <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
            <button className="theme-toggle" type="button" aria-label="Switch theme" onClick={toggleTheme}>
              {theme === "dark" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <a className="btn btn-secondary" href="#waitlist">Join waitlist</a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy reveal visible">
              <span className="eyebrow">Pediatric-informed swim-skin care</span>
              <h1>Invisible protection. Visible care.</h1>
              <p>Aqua Veil™ is a pediatric-informed pre- and post-swim mist designed to support children’s skin in high-exposure environments such as chlorinated pools, saltwater, sunlit decks, and everyday environmental stressors.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#waitlist">Join the Waitlist</a>
                <a className="btn btn-secondary" href="#aqua-veil">Meet Aqua Veil™</a>
              </div>
              <div className="hero-meta" aria-label="Product focus highlights">
                <span>Fragrance-free</span>
                <span>Sensitive skin</span>
                <span>Barrier-first</span>
              </div>
            </div>

            <div className="hero-visual reveal visible" aria-hidden="true">
              <div className="swirl"></div>
              <div className="visual-card two">
                <small>Created for</small>
                <strong>Swim families and water-loving kids</strong>
                <p>Made for children with frequent exposure to pools, beach days, water polo, and long afternoons in the sun.</p>
              </div>
              <div className="mist-bottle"></div>
              <div className="visual-card one">
                <small>Formulation lens</small>
                <strong>Quietly clinical</strong>
                <p>Lightweight, water-based, and designed to support the skin before and after repeated exposure.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="aqua-veil">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Aqua Veil™</span>
                <h2>Where nature meets skin science.</h2>
              </div>
              <p>Aqua Veil™ is a pediatric-informed pre- and post-swim barrier mist designed for children who live in the water—from swim lessons to competitive lanes, beach days, and everything in between.</p>
            </div>
            <div className="card-grid">
              <article className="card reveal">
                <h3>Barrier-first, every session</h3>
                <p>Every formula starts with a simple idea: support the skin barrier first, before repeated exposure turns into visible discomfort.</p>
              </article>
              <article className="card reveal">
                <h3>Elevated, not excessive</h3>
                <p>Rooted in thoughtful ingredients, refined textures, and a pediatric-informed point of view, Aqua Veil™ is designed to feel light, quiet, and easy to return to.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">The problem</span>
                <h2>Repeated exposure, rarely considered.</h2>
              </div>
              <p>For children who spend meaningful time in pools, exposure to chlorinated water is not occasional. It is repeated, cumulative, and often described simply as dryness rather than as ongoing stress to the skin barrier.</p>
            </div>
            <div className="card-grid">
              <article className="card reveal">
                <h3>What appears mild is often ongoing.</h3>
                <p>Dryness, roughness, and heightened sensitivity can reflect a pattern of barrier disruption over time, especially in children whose skin is still developing.</p>
              </article>
              <article className="card reveal">
                <h3>Support usually starts too late.</h3>
                <p>Most routines respond only after exposure. NOLÉA is built around a more complete sequence: supporting the skin before contact, and helping it recover after.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="ritual">
          <div className="container feature-panel reveal">
            <div className="feature-copy">
              <span className="eyebrow">How it lives in your ritual</span>
              <h2>Protection before, comfort after.</h2>
              <p>Aqua Veil™ was designed to slip into existing swim and sun routines, supporting the skin barrier before stress appears and restoring a sense of ease after each session.</p>
            </div>
            <div className="phase-list">
              <div className="phase-item">
                <strong>Before swimming</strong>
                <span>Used on clean skin as a first layer of barrier support prior to repeated exposure.</span>
              </div>
              <div className="phase-item">
                <strong>After swimming</strong>
                <span>Reapplied after towel drying or post-rinse to help restore hydration and ease residual tightness.</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Texture and use</span>
                <h2>Fine, weightless, uncomplicated.</h2>
              </div>
              <p>The mist is designed to settle quickly on the skin without stickiness, residue, or added fragrance, and to layer comfortably under mineral sunscreen or daily moisturiser.</p>
            </div>
            <div className="maker-grid">
              {[
                "Children’s delicate skin",
                "Swim team & water polo",
                "Frequent swimmers",
                "Pool & beach days",
                "Everyday exposure",
              ].map((item) => (
                <div className="maker-chip reveal" key={item}><strong>{item}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Why it works</span>
                <h2>Designed to support before stress appears.</h2>
              </div>
              <p>Each component of Aqua Veil™ was chosen to help skin stay comfortable in high-exposure environments, from chlorinated pools to sunlit decks and long weekends at the sea.</p>
            </div>
            <div className="triptych">
              <article className="card reveal">
                <div className="number">01 · Extremolyte care</div>
                <h3>Ectoin</h3>
                <p>Helps support skin cells under environmental stress and contributes to resilience in delicate, frequently exposed skin.</p>
              </article>
              <article className="card reveal">
                <div className="number">02 · Defense</div>
                <h3>Antioxidant support</h3>
                <p>Helps address oxidative stress associated with chlorine, sun, and other external factors that can leave skin feeling tight or uncomfortable.</p>
              </article>
              <article className="card reveal">
                <div className="number">03 · Barrier-first</div>
                <h3>Barrier comfort</h3>
                <p>Helps maintain comfort, hydration, and softness before and after water exposure, so skin feels less stripped over time.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">The philosophy</span>
                <h2>A quieter, more considered kind of care.</h2>
              </div>
              <p>NOLÉA was created for modern families who live in motion—between swim practice, the sea, the sun, and everyday exposure. The brand takes a restrained, evidence-led approach to children’s skincare and water-exposed skin.</p>
            </div>
          </div>
        </section>

        <section id="founder">
          <div className="container founder-panel">
            <div className="portrait reveal"></div>
            <div className="founder-copy reveal">
              <span className="eyebrow">NOLÉA</span>
              <h2>The Perspective</h2>
              <p>NOLÉA was developed in response to a gap between repeated environmental exposure and how children’s skin is typically supported. Developed in collaboration with medical professionals, NOLÉA combines extremolytes and barrier-supportive ingredients to address the overlooked effects of frequent pool exposure.</p>
              <p style={{ marginTop: "1.25rem" }}>Rooted in thoughtful ingredients, elevated design, and a pediatric-informed perspective, NOLÉA takes a quieter, more considered approach to children’s skincare and water-exposed skin.</p>
              <p style={{ marginTop: "1.25rem" }}>Built from real exposure, not theoretical need.</p>
              <div className="quote">A brand shaped by observation, restraint, and the realities of frequent water exposure.</div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Future ritual</span>
                <h2>Built as a system, not a single step.</h2>
              </div>
              <p>The broader NOLÉA ritual is designed around exposure, recovery, and barrier support—quietly extending beyond a single product.</p>
            </div>
            <div className="future-grid">
              <article className="future-card reveal">
                <small>Future ritual</small>
                <h3>Barrier Restore Cream</h3>
                <p>A comforting post-rinse moisturizer to help replenish and seal in hydration after long days in water and sun.</p>
              </article>
              <article className="future-card reveal">
                <small>Future ritual</small>
                <h3>Mineral Wash</h3>
                <p>A gentle, barrier-aware cleanser created to lift away chlorine, salt, and impurities without stripping the skin.</p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Questions</span>
                <h2>Thoughtfully answered.</h2>
              </div>
              <p>Clear answers, without excess.</p>
            </div>
            <div className="faq-grid">
              <article className="faq-item reveal">
                <h3>Is Aqua Veil™ safe for sensitive kids’ skin?</h3>
                <p>Aqua Veil™ is formulated with a pediatric-informed perspective and is fragrance-free, using gentle ingredients selected for delicate, frequently exposed skin.</p>
              </article>
              <article className="faq-item reveal">
                <h3>Can it be used with sunscreen?</h3>
                <p>Yes. Apply Aqua Veil™ first, allow it to settle, then follow with your usual mineral or daily sunscreen as directed.</p>
              </article>
              <article className="faq-item reveal">
                <h3>Does it leave a film or residue?</h3>
                <p>The fine mist is designed to feel weightless on skin, without a greasy film or sticky after-feel.</p>
              </article>
              <article className="faq-item reveal">
                <h3>When should it be used?</h3>
                <p>Before swim for proactive barrier support, and again after towel drying or post-rinse as needed.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="waitlist">
          <div className="container waitlist-shell reveal">
            <div className="waitlist-panel">
              <div>
                <span className="eyebrow">Coming soon</span>
                <h2>Join NOLÉA.</h2>
                <p>Be first to experience Aqua Veil™ and receive early access to launch details, sampling opportunities, and the world of barrier-first care for water-exposed skin.</p>
                <form
                  className="waitlist-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setJoined(true);
                  }}
                >
                  <label className="sr-only" htmlFor="email">Email address</label>
                  <div className="input-wrap">
                    <input id="email" type="email" placeholder="Enter your email" aria-describedby="waitlist-note" required />
                  </div>
                  <button className="btn btn-primary" type="submit">Join the waitlist</button>
                </form>
                <p className="fine-print" id="waitlist-note">
                  {joined ? "Thank you. You’re on the list." : "No spam — just launch details and considered updates."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="brand wordmark" aria-label="NOLÉA footer mark">
            <span>NOLÉA</span>
          </div>
          <div className="footer-links">
            <a href="#aqua-veil">Aqua Veil™</a>
            <a href="#ritual">Ritual</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#founder">Perspective</a>
            <a href="mailto:hello@nolea.skin">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
