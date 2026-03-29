import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const isOcean = theme === "ocean";

  const headingColor = isDark || isOcean ? "#f8fafc" : "#0f172a";
  const subTextColor = isDark || isOcean ? "#cbd5e1" : "#475569";
  const accentColor = isOcean ? "#7dd3fc" : "#60a5fa";

  const outerCardBg = isDark
    ? "linear-gradient(135deg, #1e293b, #334155)"
    : isOcean
    ? "linear-gradient(135deg, rgba(125, 211, 252, 0.25), rgba(255, 255, 255, 0.12))"
    : "linear-gradient(135deg, #dbeafe, #f8fafc)";

  const outerCardBorder = isDark ? "#334155" : isOcean ? "#7dd3fc" : "#bfdbfe";

  const innerCardBg = isDark
    ? "#0f172a"
    : isOcean
    ? "rgba(255, 255, 255, 0.9)"
    : "#ffffff";

  const innerCardText = isDark ? "#f8fafc" : "#0f172a";
  const innerCardSubText = isDark ? "#cbd5e1" : "#475569";
  const innerCardBorder = isDark ? "#334155" : "#e5e7eb";

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
            color: accentColor,
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
            color: headingColor,
          }}
        >
          An aspiring web developer building simple, clean, and meaningful user
          experiences.
        </h2>

        <p
          style={{
            color: subTextColor,
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
              backgroundColor: isDark ? "#1e293b" : "#ffffff",
              color: isDark ? "#f8fafc" : "#0f172a",
              border: `1px solid ${isDark ? "#334155" : "#d1d5db"}`,
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
          background: outerCardBg,
          border: `1px solid ${outerCardBorder}`,
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.2)",
        }}
      >
        <div
          style={{
            backgroundColor: innerCardBg,
            borderRadius: "18px",
            padding: "22px",
            border: `1px solid ${innerCardBorder}`,
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "14px",
              color: innerCardText,
            }}
          >
            Quick Snapshot
          </h3>

          <div style={{ display: "grid", gap: "14px" }}>
            <div>
              <p
                style={{
                  margin: "0 0 4px",
                  fontWeight: 700,
                  color: innerCardText,
                }}
              >
                Currently learning
              </p>
              <p style={{ margin: 0, color: innerCardSubText }}>
                React, TypeScript, React Router, and reusable UI components
              </p>
            </div>

            <div>
              <p
                style={{
                  margin: "0 0 4px",
                  fontWeight: 700,
                  color: innerCardText,
                }}
              >
                Interests
              </p>
              <p style={{ margin: 0, color: innerCardSubText }}>
                Frontend development, clean design, and building responsive pages
              </p>
            </div>

            <div>
              <p
                style={{
                  margin: "0 0 4px",
                  fontWeight: 700,
                  color: innerCardText,
                }}
              >
                Goal
              </p>
              <p style={{ margin: 0, color: innerCardSubText }}>
                To become a confident full-stack developer and create useful
                projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}