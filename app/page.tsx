export default function Page() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#f6f2ec',
        color: '#1f1b17',
        fontFamily: 'Arial, sans-serif',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <div>
        <div
          style={{
            fontSize: '14px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            opacity: 0.7,
          }}
        >
          Nolea deployment test
        </div>
        <h1
          style={{
            fontSize: '56px',
            lineHeight: 1,
            margin: '0 0 16px',
          }}
        >
          NEW NOLEA TEST
        </h1>
        <p
          style={{
            fontSize: '20px',
            margin: 0,
          }}
        >
          If you can see this page, the correct app/page.tsx is live.
        </p>
      </div>
    </main>
  );
}
