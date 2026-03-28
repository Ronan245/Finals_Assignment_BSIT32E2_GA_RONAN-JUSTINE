type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
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
          color: "#3b82f6",
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
          color: "#f8fafc",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "#cbd5e1",
          fontSize: "1.05rem",
          lineHeight: 1.7,
        }}
      >
        {subtitle}
      </p>
    </header>
  );
}