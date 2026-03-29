import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

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
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor:
          theme === "dark"
            ? "rgba(15, 23, 42, 0.9)"
            : "rgba(255,255,255,0.95)",
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
        {/* LOGO */}
        <div
          style={{
            fontWeight: 800,
            fontSize: "1.05rem",
            color: theme === "dark" ? "#e5e7eb" : "#111827",
          }}
        >
          My Portfolio
        </div>

        {/* NAV LINKS */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
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

          {/* THEME SWITCHER */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            style={{
              marginLeft: "10px",
              padding: "6px 10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              backgroundColor:
                theme === "dark" ? "#1e293b" : "#ffffff",
              color: theme === "dark" ? "#e5e7eb" : "#111827",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="ocean">Ocean</option>
          </select>
        </div>
      </div>
    </nav>
  );
}