export default function Home() {
  return (
    <main style={{fontFamily: "sans-serif", padding: "40px", maxWidth: "800px", margin: "auto"}}>
      
      <h1 style={{fontSize: "42px", letterSpacing: "4px"}}>NOLEA</h1>
      
      <h2 style={{marginTop: "20px"}}>Protection for skin under stress.</h2>
      
      <p style={{marginTop: "10px"}}>
        Chlorine. Sun. Daily exposure. A new layer of defense.
      </p>

      <button style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#DCEFF2",
        border: "none",
        cursor: "pointer"
      }}>
        Shop Aqua Veil
      </button>

      <section style={{marginTop: "60px"}}>
        <h3>Why Nolea</h3>
        <p>
          Swimming shouldn’t come at the cost of skin health. 
          Nolea is designed to support the skin barrier before and after exposure to chlorine and environmental stress.
        </p>
      </section>

      <section style={{marginTop: "40px"}}>
        <h3>Powered by Ectoin</h3>
        <p>
          A powerful molecule known to support skin resilience under environmental stress.
        </p>
      </section>

      <section style={{marginTop: "40px"}}>
        <h3>How to Use</h3>
        <p><strong>Before swim:</strong> Apply to dry skin</p>
        <p><strong>After swim:</strong> Reapply after rinsing</p>
      </section>

    </main>
  );
}
