export default function HomePage() {
  return (
    <main className="page">
      <style>{`
        :root {
          --bg: #f7f8f6;
          --bg-soft: #fbfcfa;
          --text: #1d2628;
          --muted: #667275;
          --line: rgba(29, 38, 40, 0.10);
          --aqua: #dceff2;
          --aqua-deep: #c7e5ea;
          --sand: #ece7df;
          --shadow: 0 20px 60px rgba(20, 30, 32, 0.08);
          --shadow-soft: 0 10px 30px rgba(20, 30, 32, 0.05);
          --radius-xl: 32px;
          --radius-lg: 24px;
          --radius-md: 18px;
          --max: 1240px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 10% 10%, rgba(220,239,242,0.7), transparent 28%),
            radial-gradient(circle at 90% 18%, rgba(236,231,223,0.8), transparent 26%),
            linear-gradient(180deg, #fafbf9 0%, #f7f8f6 100%);
          color: var(--text);
          font-family: var(--font-sans), sans-serif;
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

        .topGlow {
          position: absolute;
          inset: 0 auto auto 0;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(220,239,242,0.65), transparent 62%);
          filter: blur(18px);
          pointer-events: none;
          z-index: 0;
        }

        .topGlow2 {
          position: absolute;
          inset: 20rem 0 auto auto;
          width: 45vw;
          height: 45vw;
          background: radial-gradient(circle, rgba(236,231,223,0.6), transparent 62%);
          filter: blur(26px);
          pointer-events: none;
          z-index: 0;
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
          z-index: 20;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          background: rgba(247, 248, 246, 0.72);
          border-bottom: 1px solid rgba(29, 38, 40, 0.06);
        }

        .navInner {
          width: min(var(--max), calc(100% - 40px));
          margin: 0 auto;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          letter-spacing: 0.42em;
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .navLinks {
          display: flex;
          gap: 28px;
          align-items: center;
          color: var(--muted);
          font-size: 0.96rem;
        }

        .navLinks a:hover {
          color: var(--text);
        }

        .navButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          padding: 0 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(29, 38, 40, 0.08);
          box-shadow: var(--shadow-soft);
          font-size: 0.95rem;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .navButton:hover,
        .ctaPrimary:hover,
        .ctaSecondary:hover,
        .buttonGhost:hover {
          transform: translateY(-1px);
        }

        .hero {
          padding: 68px 0 42px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 34px;
          align-items: stretch;
        }

        .heroText {
          padding: 34px 4px 24px 0;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(29, 38, 40, 0.08);
          color: var(--muted);
          font-size: 0.86rem;
          letter-spacing: 0.02em;
          box-shadow: var(--shadow-soft);
        }

        .eyebrowDot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(135deg, #dceff2, #c7e5ea);
          box-shadow: 0 0 0 5px rgba(220,239,242,0.18);
        }

        .hero h1 {
          margin: 24px 0 16px;
          font-family: var(--font-serif), serif;
          font-size: clamp(3.3rem, 7vw, 6.3rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 500;
          max-width: 10ch;
        }

        .hero h1 span {
          display: block;
          color: rgba(29, 38, 40, 0.76);
        }

        .hero p.lead {
          margin: 0;
          max-width: 40rem;
          font-size: 1.12rem;
          line-height: 1.85;
          color: var(--muted);
        }

        .heroActions {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .ctaPrimary,
        .ctaSecondary,
        .buttonGhost {
          height: 50px;
          padding: 0 20px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.97rem;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .ctaPrimary {
          background: linear-gradient(180deg, #ffffff, #f4fbfc);
          border: 1px solid rgba(29, 38, 40, 0.08);
          box-shadow: var(--shadow);
        }

        .ctaSecondary,
        .buttonGhost {
          background: rgba(255,255,255,0.46);
          border: 1px solid rgba(29, 38, 40, 0.08);
          color: var(--text);
        }

        .heroMeta {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 34px;
        }

        .metaCard {
          padding: 18px 18px 16px;
          border-radius: 20px;
          background: rgba(255,255,255,0.58);
          border: 1px solid rgba(29, 38, 40, 0.08);
          box-shadow: var(--shadow-soft);
        }

        .metaLabel {
          color: var(--muted);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
        }

        .metaValue {
          font-size: 1rem;
          line-height: 1.55;
        }

        .heroVisual {
          position: relative;
          min-height: 760px;
          border-radius: 38px;
          overflow: hidden;
          border: 1px solid rgba(29, 38, 40, 0.08);
          box-shadow: var(--shadow);
          background:
            radial-gradient(circle at 15% 18%, rgba(255,255,255,0.95), rgba(255,255,255,0.14) 28%, transparent 34%),
            radial-gradient(circle at 70% 22%, rgba(220,239,242,0.95), transparent 30%),
            linear-gradient(180deg, #f7fbfc 0%, #ecf6f7 28%, #f8faf8 62%, #f3f3ef 100%);
        }

        .visualNoise {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0 1px, transparent 1.2px),
            radial-gradient(circle at 80% 30%, rgba(255,255,255,0.7) 0 1px, transparent 1.2px),
            radial-gradient(circle at 40% 70%, rgba(255,255,255,0.7) 0 1px, transparent 1.2px);
          background-size: 26px 26px, 34px 34px, 30px 30px;
          mix-blend-mode: screen;
        }

        .ripple {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.55);
          opacity: 0.42;
        }

        .r1 { width: 420px; height: 420px; top: 60px; right: -120px; }
        .r2 { width: 300px; height: 300px; top: 220px; right: 60px; }
        .r3 { width: 520px; height: 520px; bottom: -160px; left: -120px; }

        .visualLabel {
          position: absolute;
          top: 26px;
          left: 26px;
          padding: 12px 14px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(29, 38, 40, 0.07);
          border-radius: 18px;
          box-shadow: var(--shadow-soft);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          max-width: 250px;
        }

        .visualLabel small {
          display: block;
          color: var(--muted);
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .visualLabel p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .floatCard {
          position: absolute;
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow: var(--shadow-soft);
          border-radius: 20px;
          padding: 16px 16px 14px;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          max-width: 230px;
        }

        .floatCard h4 {
          margin: 0 0 6px;
          font-size: 0.92rem;
          font-weight: 600;
        }

        .floatCard p {
          margin: 0;
          color: var(--muted);
          font-size: 0.86rem;
          line-height: 1.55;
        }

        .fc1 { left: 24px; bottom: 40px; }
        .fc2 { right: 26px; top: 162px; }

        .bottleWrap {
          position: absolute;
          inset: auto 0 34px 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          pointer-events: none;
        }

        .bottleShadow {
          position: absolute;
          bottom: 30px;
          width: 260px;
          height: 40px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(34,47,50,0.18), transparent 70%);
          filter: blur(12px);
        }

        .bottle {
          position: relative;
          width: 242px;
          height: 560px;
          border-radius: 48px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.95), rgba(251,252,250,0.88) 40%, rgba(242,247,246,0.92) 100%);
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow:
            inset 0 1px 1px rgba(255,255,255,0.8),
            inset -10px -10px 30px rgba(220,239,242,0.18),
            0 25px 60px rgba(20, 30, 32, 0.16);
          overflow: hidden;
        }

        .bottle::before {
          content: "";
          position: absolute;
          inset: 16px auto 16px 20px;
          width: 26px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.04));
          opacity: 0.95;
        }

        .bottleCap {
          position: absolute;
          top: -66px;
          left: 50%;
          transform: translateX(-50%);
          width: 146px;
          height: 96px;
          border-radius: 26px 26px 18px 18px;
          background:
            linear-gradient(180deg, rgba(236,246,247,0.98), rgba(214,234,238,0.98));
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow:
            inset 0 1px 1px rgba(255,255,255,0.85),
            0 18px 34px rgba(20, 30, 32, 0.10);
        }

        .sprayHead {
          position: absolute;
          top: -88px;
          left: 50%;
          transform: translateX(-50%);
          width: 82px;
          height: 36px;
          border-radius: 14px 14px 10px 10px;
          background: linear-gradient(180deg, #f3fbfc, #dceff2);
          border: 1px solid rgba(29,38,40,0.08);
        }

        .label {
          position: absolute;
          left: 24px;
          right: 24px;
          top: 104px;
          bottom: 34px;
          border-radius: 34px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.78), rgba(247,249,248,0.66));
          border: 1px solid rgba(29,38,40,0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 36px 20px 28px;
          text-align: center;
        }

        .labelBrand {
          letter-spacing: 0.42em;
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 600;
        }

        .labelName {
          font-family: var(--font-serif), serif;
          font-size: 2.55rem;
          line-height: 1;
          letter-spacing: -0.04em;
          margin-top: 18px;
        }

        .labelSub {
          margin-top: 10px;
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 13ch;
        }

        .labelMid {
          display: grid;
          gap: 10px;
          width: 100%;
        }

        .pill {
          margin: 0 auto;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(220,239,242,0.52);
          border: 1px solid rgba(29,38,40,0.05);
          font-size: 0.84rem;
          color: var(--text);
          width: fit-content;
        }

        .labelFine {
          color: var(--muted);
          font-size: 0.82rem;
          line-height: 1.5;
          text-transform: uppercase;
          letter-spacing: 0.09em;
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
          font-size: clamp(2.1rem, 4vw, 3.4rem);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 500;
        }

        .sectionHeader p {
          margin: 0;
          color: var(--muted);
          line-height: 1.8;
          max-width: 34rem;
        }

        .statRow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 38px;
        }

        .statCard {
          padding: 28px;
          border-radius: 26px;
          background: rgba(255,255,255,0.58);
          border: 1px solid rgba(29, 38, 40, 0.08);
          box-shadow: var(--shadow-soft);
        }

        .statCard h3 {
          margin: 0 0 8px;
          font-family: var(--font-serif), serif;
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .statCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .split {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 22px;
          align-items: stretch;
        }

        .panel {
          border-radius: var(--radius-xl);
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow: var(--shadow-soft);
          overflow: hidden;
          position: relative;
        }

        .panelPad {
          padding: 30px;
        }

        .visualPanel {
          min-height: 620px;
          background:
            radial-gradient(circle at 65% 24%, rgba(220,239,242,0.85), transparent 26%),
            radial-gradient(circle at 12% 72%, rgba(255,255,255,0.9), transparent 24%),
            linear-gradient(180deg, #f9fbfb 0%, #f0f6f6 42%, #f6f7f4 100%);
        }

        .waterLines {
          position: absolute;
          inset: 0;
          background:
            repeating-radial-gradient(circle at 74% 18%, rgba(255,255,255,0.52) 0 2px, transparent 2px 22px),
            repeating-linear-gradient(170deg, rgba(255,255,255,0.26) 0 2px, transparent 2px 16px);
          opacity: 0.22;
          mix-blend-mode: screen;
        }

        .formulaOrb {
          position: absolute;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.96), rgba(220,239,242,0.8) 44%, rgba(220,239,242,0.18) 72%, transparent 78%);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.7), 0 18px 40px rgba(20,30,32,0.08);
        }

        .orb1 { width: 180px; height: 180px; top: 72px; left: 52px; }
        .orb2 { width: 120px; height: 120px; top: 230px; right: 86px; }
        .orb3 { width: 240px; height: 240px; bottom: 52px; left: 34%; }

        .formulaCaption {
          position: absolute;
          left: 32px;
          bottom: 28px;
          max-width: 300px;
          padding: 18px 18px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(29,38,40,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .formulaCaption h3 {
          margin: 0 0 8px;
          font-size: 0.96rem;
        }

        .formulaCaption p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.92rem;
        }

        .featureStack {
          display: grid;
          gap: 14px;
        }

        .featureCard {
          padding: 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.52);
          border: 1px solid rgba(29,38,40,0.08);
        }

        .featureTop {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 12px;
          margin-bottom: 10px;
        }

        .featureTop h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .featureIndex {
          color: rgba(29,38,40,0.35);
          font-size: 0.85rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .featureCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .ingredientsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
        }

        .ingredientCard {
          padding: 22px 20px;
          border-radius: 24px;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow: var(--shadow-soft);
        }

        .ingredientTag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          color: var(--muted);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.11em;
        }

        .ingredientTag span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(135deg, #dceff2, #c7e5ea);
        }

        .ingredientCard h3 {
          margin: 0 0 10px;
          font-size: 1.1rem;
        }

        .ingredientCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .ritualGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
        }

        .ritualCard {
          padding: 24px;
          border-radius: 24px;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(29,38,40,0.08);
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-soft);
        }

        .ritualNum {
          color: rgba(29,38,40,0.35);
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ritualCard h3 {
          margin: 18px 0 10px;
          font-size: 1.12rem;
        }

        .ritualCard p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .quote {
          padding: 28px;
          border-radius: 26px;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow: var(--shadow-soft);
          margin-top: 18px;
        }

        .quote p {
          margin: 0;
          font-family: var(--font-serif), serif;
          font-size: clamp(1.55rem, 2.7vw, 2.4rem);
          line-height: 1.3;
          letter-spacing: -0.03em;
        }

        .quote small {
          display: block;
          margin-top: 14px;
          color: var(--muted);
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .storyGrid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 20px;
          margin-top: 18px;
        }

        .storyPanel {
          padding: 30px;
          border-radius: 28px;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow: var(--shadow-soft);
        }

        .storyPanel h3 {
          margin: 0 0 12px;
          font-size: 1.08rem;
        }

        .storyPanel p {
          margin: 0;
          color: var(--muted);
          line-height: 1.9;
        }

        .list {
          display: grid;
          gap: 16px;
        }

        .listItem {
          padding-top: 16px;
          border-top: 1px solid rgba(29,38,40,0.08);
        }

        .listItem:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .listItem h4 {
          margin: 0 0 6px;
          font-size: 1rem;
        }

        .listItem p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .ctaSection {
          padding: 70px 0 88px;
        }

        .ctaShell {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          background:
            radial-gradient(circle at 15% 20%, rgba(255,255,255,0.95), transparent 18%),
            radial-gradient(circle at 88% 16%, rgba(220,239,242,0.86), transparent 24%),
            linear-gradient(180deg, #f4f9fa 0%, #eff5f4 42%, #f7f8f6 100%);
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow: var(--shadow);
          padding: 42px;
        }

        .ctaShell::after {
          content: "";
          position: absolute;
          inset: auto -10% -35% auto;
          width: 420px;
          height: 420px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(220,239,242,0.9), transparent 66%);
          opacity: 0.6;
          pointer-events: none;
        }

        .ctaGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 22px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .ctaCopy h2 {
          margin: 0 0 12px;
          font-family: var(--font-serif), serif;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 500;
        }

        .ctaCopy p {
          margin: 0;
          max-width: 38rem;
          color: var(--muted);
          line-height: 1.85;
          font-size: 1.04rem;
        }

        .ctaButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 26px;
        }

        .ctaVisual {
          min-height: 280px;
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4)),
            radial-gradient(circle at 26% 26%, rgba(220,239,242,0.72), transparent 24%),
            linear-gradient(180deg, rgba(247,249,248,0.75), rgba(242,246,246,0.8));
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow: var(--shadow-soft);
          padding: 24px;
          display: grid;
          align-content: space-between;
        }

        .miniBottle {
          justify-self: end;
          width: 112px;
          height: 220px;
          border-radius: 28px;
          position: relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(245,247,246,0.9));
          border: 1px solid rgba(29,38,40,0.08);
          box-shadow: 0 18px 36px rgba(20,30,32,0.10);
        }

        .miniBottle::before {
          content: "";
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 62px;
          height: 42px;
          border-radius: 14px;
          background: linear-gradient(180deg, #eef9fb, #dceff2);
          border: 1px solid rgba(29,38,40,0.08);
        }

        .miniBottle::after {
          content: "NOLEA";
          position: absolute;
          top: 74px;
          left: 50%;
          transform: translateX(-50%);
          letter-spacing: 0.28em;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .miniNotes {
          display: grid;
          gap: 14px;
        }

        .miniNote {
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(29,38,40,0.08);
          font-size: 0.95rem;
          color: var(--muted);
        }

        .footer {
          padding: 0 0 42px;
        }

        .footerInner {
          width: min(var(--max), calc(100% - 40px));
          margin: 0 auto;
          padding-top: 18px;
          border-top: 1px solid rgba(29,38,40,0.08);
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
          color: var(--muted);
          font-size: 0.94rem;
        }

        .footerBrand {
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: var(--text);
          font-weight: 600;
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

          .heroVisual,
          .visualPanel {
            min-height: 620px;
          }

          .ingredientsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .heroMeta,
          .statRow,
          .ritualGrid {
            grid-template-columns: 1fr;
          }

          .sectionHeader {
            align-items: start;
            flex-direction: column;
          }

          .navLinks {
            display: none;
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
            font-size: clamp(2.7rem, 14vw, 4.2rem);
          }

          .hero p.lead {
            font-size: 1rem;
          }

          .heroVisual,
          .visualPanel {
            min-height: 520px;
            border-radius: 28px;
          }

          .bottle {
            width: 196px;
            height: 454px;
          }

          .labelName {
            font-size: 2rem;
          }

          .ctaShell {
            padding: 28px;
          }

          .panelPad,
          .storyPanel,
          .quote,
          .statCard {
            padding: 22px;
          }

          .ingredientsGrid {
            grid-template-columns: 1fr;
          }

          .footerInner {
            flex-direction: column;
            align-items: start;
          }
        }
      `}</style>

      <div className="topGlow" />
      <div className="topGlow2" />

      <header className="nav">
        <div className="navInner">
          <a href="#" className="brand">NOLEA</a>

          <nav className="navLinks">
            <a href="#formula">Formula</a>
            <a href="#science">Science</a>
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
                Swim skincare, redefined
              </div>

              <h1>
                Protection for
                <span>skin under</span>
                constant exposure.
              </h1>

              <p className="lead">
                Nolea creates a quieter kind of performance skincare — refined,
                minimal, and rooted in barrier science. Aqua Veil is a
                pre- and post-swim protective mist designed to help skin remain
                resilient through chlorine, repetition, and environmental stress.
              </p>

              <div className="heroActions">
                <a href="#shop" className="ctaPrimary">Discover Aqua Veil</a>
                <a href="#science" className="ctaSecondary">The science behind it</a>
              </div>

              <div className="heroMeta">
                <div className="metaCard">
                  <div className="metaLabel">Format</div>
                  <div className="metaValue">Ultra-fine, non-aerosol protective mist</div>
                </div>
                <div className="metaCard">
                  <div className="metaLabel">Hero Molecule</div>
                  <div className="metaValue">Ectoin, selected for skin under repeated stress</div>
                </div>
                <div className="metaCard">
                  <div className="metaLabel">Positioning</div>
                  <div className="metaValue">Luxurious, sensitive-skin swim care</div>
                </div>
              </div>
            </div>

            <div className="heroVisual" aria-hidden="true">
              <div className="visualNoise" />
              <div className="ripple r1" />
              <div className="ripple r2" />
              <div className="ripple r3" />

              <div className="visualLabel">
                <small>NOLEA / AQUA VEIL</small>
                <p>
                  A refined barrier-support mist for skin exposed to water,
                  chlorine, heat, and repetition.
                </p>
              </div>

              <div className="floatCard fc2">
                <h4>Minimal, not empty</h4>
                <p>
                  Every element is designed to feel calm, credible, and
                  beautifully restrained.
                </p>
              </div>

              <div className="floatCard fc1">
                <h4>Scientific, not clinical</h4>
                <p>
                  Performance-led care with a softer visual language.
                </p>
              </div>

              <div className="bottleWrap">
                <div className="bottleShadow" />
                <div className="bottle">
                  <div className="sprayHead" />
                  <div className="bottleCap" />

                  <div className="label">
                    <div>
                      <div className="labelBrand">NOLEA</div>
                      <div className="labelName">Aqua Veil</div>
                      <div className="labelSub">
                        Protective mist for skin under constant exposure
                      </div>
                    </div>

                    <div className="labelMid">
                      <div className="pill">With ectoin</div>
                      <div className="pill">Fragrance-free</div>
                    </div>

                    <div className="labelFine">
                      Chlorine + environmental defense
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="statRow">
            <div className="statCard">
              <h3>Quiet luxury</h3>
              <p>
                Restrained design, refined typography, and visual softness that
                feels elevated rather than loud.
              </p>
            </div>
            <div className="statCard">
              <h3>Barrier-first</h3>
              <p>
                Built around resilience, comfort, and skin behavior under
                repeated exposure.
              </p>
            </div>
            <div className="statCard">
              <h3>Swim-specific</h3>
              <p>
                Not generic skincare, and not sunscreen — a distinct category of
                care designed around the swimmer’s environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="formula">
        <div className="container">
          <div className="sectionHeader">
            <h2>The formula architecture</h2>
            <p>
              A modern protective system designed to sit lightly on the skin,
              support the barrier, and help reduce the visible aftermath of
              repeated pool exposure.
            </p>
          </div>

          <div className="split">
            <div className="panel visualPanel">
              <div className="waterLines" />
              <div className="formulaOrb orb1" />
              <div className="formulaOrb orb2" />
              <div className="formulaOrb orb3" />

              <div className="formulaCaption">
                <h3>Designed as a protective veil</h3>
                <p>
                  Lightweight, breathable, and intentionally elegant in feel.
                </p>
              </div>
            </div>

            <div className="panel panelPad">
              <div className="featureStack">
                <div className="featureCard">
                  <div className="featureTop">
                    <h3>Pre-exposure support</h3>
                    <div className="featureIndex">01</div>
                  </div>
                  <p>
                    A lightweight mist intended to sit beautifully on dry skin
                    before time in chlorinated water.
                  </p>
                </div>

                <div className="featureCard">
                  <div className="featureTop">
                    <h3>Post-swim comfort</h3>
                    <div className="featureIndex">02</div>
                  </div>
                  <p>
                    Reapplies easily after rinsing, helping skin feel calm,
                    replenished, and less visibly stressed.
                  </p>
                </div>

                <div className="featureCard">
                  <div className="featureTop">
                    <h3>Luxurious sensoriality</h3>
                    <div className="featureIndex">03</div>
                  </div>
                  <p>
                    Fast-drying, non-sticky, and visually minimal — formulated
                    to disappear into the ritual rather than dominate it.
                  </p>
                </div>

                <div className="featureCard">
                  <div className="featureTop">
                    <h3>Cosmetic category positioning</h3>
                    <div className="featureIndex">04</div>
                  </div>
                  <p>
                    Focused on barrier support, chlorine-related stress, and the
                    skin’s visible condition under environmental strain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ingredientsGrid" id="science">
            <div className="ingredientCard">
              <div className="ingredientTag"><span />Hero active</div>
              <h3>Ectoin</h3>
              <p>
                Chosen as the signature molecule for the brand story and its
                focus on skin under repeated environmental stress.
              </p>
            </div>

            <div className="ingredientCard">
              <div className="ingredientTag"><span />Support system</div>
              <h3>Panthenol</h3>
              <p>
                Included for a softer, barrier-conscious profile and a skin feel
                that reads calm rather than corrective.
              </p>
            </div>

            <div className="ingredientCard">
              <div className="ingredientTag"><span />Hydration layer</div>
              <h3>Trehalose</h3>
              <p>
                Contributes to the product’s comfort-first sensibility while
                reinforcing the elegant water-based structure.
              </p>
            </div>

            <div className="ingredientCard">
              <div className="ingredientTag"><span />Antioxidant angle</div>
              <h3>Sodium Ascorbate</h3>
              <p>
                Supports the formula narrative around chlorine-associated
                oxidative stress and post-exposure skin comfort.
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
              Not an afterthought, but a refined two-moment practice designed
              around repetition, exposure, and skin that needs a more thoughtful
              kind of support.
            </p>
          </div>

          <div className="ritualGrid">
            <div className="ritualCard">
              <div className="ritualNum">Step 01</div>
              <div>
                <h3>Before swim</h3>
                <p>
                  Apply to dry skin before entering the pool to create the first
                  layer of the ritual.
                </p>
              </div>
            </div>

            <div className="ritualCard">
              <div className="ritualNum">Step 02</div>
              <div>
                <h3>After rinse</h3>
                <p>
                  Reapply once skin has been rinsed and lightly towel-dried to
                  restore comfort and continuity.
                </p>
              </div>
            </div>

            <div className="ritualCard">
              <div className="ritualNum">Step 03</div>
              <div>
                <h3>Everyday elegance</h3>
                <p>
                  Designed to feel invisible, clean, and sophisticated enough to
                  become a natural part of daily movement.
                </p>
              </div>
            </div>
          </div>

          <div className="quote">
            <p>
              “Protection, not interference. Support, not heaviness. A quieter
              response to visible stress.”
            </p>
            <small>NOLEA / Brand language</small>
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <div className="container">
          <div className="sectionHeader">
            <h2>The brand story</h2>
            <p>
              Nolea was conceived as a new category of care — one that honors
              the realities of swimmers’ skin without resorting to a loud,
              utilitarian visual language.
            </p>
          </div>

          <div className="storyGrid">
            <div className="storyPanel">
              <h3>Why it exists</h3>
              <p>
                Nolea was created to protect skin in environments it was never
                designed for. Chlorinated water, daily repetition, heat, and
                environmental exposure can leave skin visibly dry, reactive, and
                compromised. Aqua Veil is the brand’s first answer: a protective
                mist shaped by barrier science, expressed through restraint, and
                designed to feel as beautiful as it is purposeful.
              </p>
            </div>

            <div className="storyPanel">
              <div className="list">
                <div className="listItem">
                  <h4>Minimal by intention</h4>
                  <p>
                    Every surface, sentence, and visual element is designed to
                    feel light, eloquent, and precise.
                  </p>
                </div>

                <div className="listItem">
                  <h4>Scientific without severity</h4>
                  <p>
                    The brand speaks with clarity and credibility, but never at
                    the expense of warmth.
                  </p>
                </div>

                <div className="listItem">
                  <h4>Luxury in restraint</h4>
                  <p>
                    Instead of excess, the site relies on whitespace, texture,
                    typography, and atmosphere to create emotional depth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection" id="shop">
        <div className="container">
          <div className="ctaShell">
            <div className="ctaGrid">
              <div className="ctaCopy">
                <h2>
                  A more refined way
                  <br />
                  to protect skin.
                </h2>

                <p>
                  Nolea introduces swim skincare as a category with its own
                  language: protective, modern, and beautifully measured. Aqua
                  Veil is the opening gesture — minimal in form, eloquent in
                  feel, and designed for skin under constant exposure.
                </p>

                <div className="ctaButtons">
                  <a href="#" className="ctaPrimary">Join the first release</a>
                  <a href="#" className="ctaSecondary">Request formulation deck</a>
                </div>
              </div>

              <div className="ctaVisual" aria-hidden="true">
                <div className="miniBottle" />
                <div className="miniNotes">
                  <div className="miniNote">
                    Fragrance-free. Minimal. Sensitive-skin focused.
                  </div>
                  <div className="miniNote">
                    Protective mist for chlorine + environmental stress.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">NOLEA</div>
          <div>Swim skincare, redefined.</div>
          <div className="footerLinks">
            <a href="#formula">Formula</a>
            <a href="#science">Science</a>
            <a href="#ritual">Ritual</a>
            <a href="#story">Story</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
