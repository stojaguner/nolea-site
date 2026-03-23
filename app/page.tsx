export default function Home() {
  return (
    <main style={{
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      background: "#F7F9F8",
      color: "#1F2A2E"
    }}>

      {/* HERO */}
      <section style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px"
      }}>
        <h1 style={{letterSpacing: "10px", fontSize: "48px"}}>NOLEA</h1>
        <h2 style={{marginTop: "20px", fontWeight: "400"}}>
          Protection for skin under constant exposure.
        </h2>
        <p style={{marginTop: "10px", opacity: 0.7}}>
          Chlorine. Sun. Repetition.
        </p>

        <button style={{
          marginTop: "30px",
          padding: "14px 28px",
          background: "#DCEFF2",
          border: "none",
          cursor: "pointer"
        }}>
          Shop Aqua Veil
        </button>
      </section>

      {/* PRODUCT */}
      <section style={{padding: "80px 20px", textAlign: "center"}}>
        <h2>Aqua Veil Protective Mist</h2>
        <p style={{maxWidth: "500px", margin: "20px auto", opacity: 0.8}}>
          A lightweight mist designed for pre and post swim use,
          helping support the skin barrier under environmental stress.
        </p>
      </section>

      {/* SCIENCE */}
      <section style={{padding: "80px 20px", textAlign: "center"}}>
        <h3>Powered by Ectoin</h3>
        <p style={{maxWidth: "500px", margin: "20px auto", opacity: 0.8}}>
          A molecule known to help protect and stabilize skin in extreme environments.
        </p>
      </section>

      {/* RITUAL */}
      <section style={{padding: "80px 20px", textAlign: "center"}}>
        <h3>Ritual</h3>
        <p><strong>Before swim</strong> — Apply to dry skin</p>
        <p><strong>After swim</strong> — Reapply after rinsing</p>
      </section>

    </main>
  );
}
