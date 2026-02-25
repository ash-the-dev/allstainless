export default function Home() {
  const phoneDisplay = "360-772-9079";
  const phoneLink = "3607729079";
  const email = "allstainls@gmail.com";

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <div style={styles.badge}>Site Under Construction</div>

        <h1 style={styles.h1}>All Stainless Installations</h1>

        <p style={styles.p}>
          Our website is currently being built. We specialize in professional
          stainless steel installations for residential and commercial
          projects.
        </p>

        <p style={styles.sub}>
          Need a site visit? Contact us directly and we’ll schedule it with you.
        </p>

        <div style={styles.actions}>
          <a href={`tel:${phoneLink}`} style={{ ...styles.button, ...styles.primary }}>
            Call to Book a Site Visit
          </a>

          <a href={`mailto:${email}`} style={{ ...styles.button, ...styles.secondary }}>
            Email to Request a Site Visit
          </a>
        </div>

        <div style={styles.meta}>
          <div>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${phoneLink}`} style={styles.link}>
              {phoneDisplay}
            </a>
          </div>

          <div>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${email}`} style={styles.link}>
              {email}
            </a>
          </div>
        </div>

        <p style={styles.footer}>
          © {new Date().getFullYear()} All Stainless Installations
        </p>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "24px",
    background: "linear-gradient(135deg, #f4f4f4 0%, #ffffff 100%)",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
  },
  card: {
    width: "100%",
    maxWidth: 700,
    border: "1px solid #e6e6e6",
    borderRadius: 18,
    padding: 32,
    boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
    background: "#fff",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 999,
    background: "#111",
    color: "#fff",
    fontSize: 12,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  h1: {
    fontSize: 40,
    margin: "20px 0 10px",
    lineHeight: 1.1,
  },
  p: {
    fontSize: 17,
    color: "#444",
    marginBottom: 10,
  },
  sub: {
    fontSize: 15,
    color: "#666",
    marginBottom: 20,
  },
  actions: {
    display: "flex",
    gap: 14,
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 15,
    marginBottom: 20,
  },
  button: {
    padding: "14px 20px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
  },
  primary: {
    background: "#111",
    color: "#fff",
  },
  secondary: {
    background: "#fff",
    color: "#111",
    border: "1px solid #ddd",
  },
  meta: {
    borderTop: "1px solid #eee",
    paddingTop: 16,
    fontSize: 14,
    color: "#333",
  },
  link: {
    color: "#111",
    textDecoration: "none",
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    color: "#777",
  },
};