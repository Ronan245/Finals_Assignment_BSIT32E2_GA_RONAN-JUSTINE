import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "28px",
        alignItems: "center",
        padding: "20px 0 10px",
      }}
    >
      <div>
        <p
          style={{
            color: "#60a5fa",
            fontWeight: 700,
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            fontSize: "0.9rem",
          }}
        >
          Hello, I’m Ronan Justine D. Ga
        </p>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            lineHeight: 1.2,
            margin: "0 0 16px",
            color: "#f8fafc",
          }}
        >
          An aspiring web developer building simple, clean, and meaningful user
          experiences.
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: 1.8,
            fontSize: "1rem",
            marginBottom: "24px",
            maxWidth: "620px",
          }}
        >
          I enjoy learning modern web development and creating projects that
          help me grow as a developer. This website is a space where I share a
          little about myself, my interests, and the skills I am building with
          React and TypeScript.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              backgroundColor: "#3b82f6",
              color: "#ffffff",
              padding: "12px 18px",
              borderRadius: "12px",
              fontWeight: 700,
              boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
            }}
          >
            About Me
          </Link>

          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              backgroundColor: "#ffffff",
              color: "#0f172a",
              border: "1px solid #d1d5db",
              padding: "12px 18px",
              borderRadius: "12px",
              fontWeight: 700,
            }}
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #dbeafe, #f8fafc)",
          border: "1px solid #bfdbfe",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.2)",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            padding: "22px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: "14px", color: "#0f172a" }}>
            Quick Snapshot
          </h3>

          <div style={{ display: "grid", gap: "14px" }}>
            <div>
              <p style={{ margin: "0 0 4px", fontWeight: 700, color: "#0f172a" }}>
                Currently learning
              </p>
              <p style={{ margin: 0, color: "#475569" }}>
                React, TypeScript, React Router, and reusable UI components
              </p>
            </div>

            <div>
              <p style={{ margin: "0 0 4px", fontWeight: 700, color: "#0f172a" }}>
                Interests
              </p>
              <p style={{ margin: 0, color: "#475569" }}>
                Frontend development, clean design, and building responsive pages
              </p>
            </div>

            <div>
              <p style={{ margin: "0 0 4px", fontWeight: 700, color: "#0f172a" }}>
                Goal
              </p>
              <p style={{ margin: 0, color: "#475569" }}>
                To become a confident full-stack developer and create useful projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}