export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        marginTop: "48px",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "24px 20px",
          textAlign: "center",
          color: "#6b7280",
          lineHeight: 1.7,
        }}
      >
        <p style={{ margin: "0 0 6px", fontWeight: 600, color: "#111827" }}>
          Thanks for visiting my personal website
        </p>
        <p style={{ margin: 0 }}>
          © 2026 Ronan Justine D. Ga. Built with React and TypeScript.
        </p>
      </div>
    </footer>
  );
}