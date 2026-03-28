export default function ContactInfo() {
  const buttonStyle = (bgColor: string) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    backgroundColor: bgColor,
    color: "#ffffff",
    padding: "10px 14px",
    borderRadius: "10px",
    fontWeight: 600,
    transition: "0.2s",
  });

  return (
    <section
      style={{
        display: "grid",
        gap: "24px",
      }}
    >

      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "20px",
          padding: "28px",
          boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
          color: "#0f172a",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "12px" }}>
          Let’s Connect
        </h2>

        <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: 0 }}>
          Thank you for visiting my personal website. I’m always open to
          friendly conversations, learning opportunities, collaborations, and
          feedback about my work.
        </p>
      </div>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
        }}
      >
        {[
          { title: "Email", value: "ronanjustinega44@email.com" },
          { title: "Phone", value: "099-349-87886" },
          { title: "Location", value: "San Pedro, Laguna, Philippines" },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              padding: "22px",
              textAlign: "center",
              color: "#0f172a",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p style={{ margin: 0, color: "#475569" }}>{item.value}</p>
          </div>
        ))}
      </div>


      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "18px",
          padding: "22px",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#0f172a" }}>
          Connect With Me
        </h3>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "12px",
          }}
        >

          <a
            href="https://github.com/Ronan245"
            target="_blank"
            style={buttonStyle("#111827")}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.012-1.23-.017-2.23-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.832 2.807 1.303 3.492.996.108-.775.418-1.303.76-1.603-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.526.116-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.006-.404c1.02.005 2.047.138 3.006.404 2.292-1.552 3.3-1.23 3.3-1.23.652 1.65.24 2.873.116 3.176.768.84 1.236 1.912 1.236 3.222 0 4.61-2.804 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>


          <a
            href="https://facebook.com/rjga245"
            target="_blank"
            style={buttonStyle("#1877f2")}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.1v-2.9h2.34V9.41c0-2.31 1.38-3.59 3.5-3.59.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.9h-2.1V22c4.78-.75 8.44-4.91 8.44-9.93z" />
            </svg>
            Facebook
          </a>


          <a
            href="mailto:ronanjustinega44@email.com"
            style={buttonStyle("#ea4335")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="white" d="M12 13.065L0 6V18h24V6l-12 7.065z" />
              <path fill="white" d="M12 10.935L24 4H0l12 6.935z" />
            </svg>
            Gmail
          </a>
        </div>
      </div>
    </section>
  );
}