import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const isOcean = theme === "ocean";

  const bgColor = isDark
    ? "#0f172a"
    : isOcean
    ? "rgba(255,255,255,0.1)"
    : "#f9fafb";

  const borderColor = isDark ? "#334155" : isOcean ? "#7dd3fc" : "#e5e7eb";

  const headingColor = isDark || isOcean ? "#f8fafc" : "#111827";
  const textColor = isDark || isOcean ? "#cbd5e1" : "#6b7280";

  return (
    <footer
      style={{
        borderTop: `1px solid ${borderColor}`,
        marginTop: "48px",
        backgroundColor: bgColor,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "24px 20px",
          textAlign: "center",
          color: textColor,
          lineHeight: 1.7,
        }}
      >
        <p
          style={{
            margin: "0 0 6px",
            fontWeight: 600,
            color: headingColor,
          }}
        >
          Thanks for visiting my personal website
        </p>

        <p style={{ margin: 0 }}>
          © 2026 Ronan Justine D. Ga. Built with React and TypeScript.
        </p>
      </div>
    </footer>
  );
}