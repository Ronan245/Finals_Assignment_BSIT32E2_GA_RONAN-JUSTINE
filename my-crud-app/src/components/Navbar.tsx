import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: "none",
    color: isActive ? "#ffffff" : "#374151",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    fontWeight: isActive ? 700 : 600,
    padding: "10px 16px",
    borderRadius: "999px",
    transition: "all 0.2s ease",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: "1.05rem",
            color: "#111827",
          }}
        >
          My Portfolio
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About Me
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
}