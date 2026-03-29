import { useTheme } from "../context/ThemeContext";

type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const isOcean = theme === "ocean";

  const titleColor = isDark || isOcean ? "#f8fafc" : "#0f172a";
  const subtitleColor = isDark || isOcean ? "#cbd5e1" : "#475569";
  const accentColor = isOcean ? "#7dd3fc" : "#3b82f6";

  return (
    <header
      style={{
        textAlign: "center",
        padding: "56px 20px 24px",
      }}
    >
      <p
        style={{
          margin: "0 0 10px",
          color: accentColor,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontSize: "0.85rem",
        }}
      >
        Personal Website
      </p>

      <h1
        style={{
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          margin: "0 0 12px",
          color: titleColor,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: subtitleColor,
          fontSize: "1.05rem",
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </p>
    </header>
  );
}