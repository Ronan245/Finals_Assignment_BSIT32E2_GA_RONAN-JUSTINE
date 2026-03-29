import { useTheme } from "../context/ThemeContext";

export default function BioContent() {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const isOcean = theme === "ocean";

  const cardBg = isDark
    ? "#1e293b"
    : isOcean
    ? "rgba(255,255,255,0.1)"
    : "#ffffff";

  const textColor = isDark || isOcean ? "#e5e7eb" : "#0f172a";
  const subTextColor = isDark || isOcean ? "#cbd5e1" : "#475569";
  const borderColor = isDark ? "#334155" : "#e5e7eb";

  return (
    <section
      style={{
        display: "grid",
        gap: "24px",
      }}
    >
      
      <div
        style={{
          backgroundColor: cardBg,
          border: `1px solid ${borderColor}`,
          borderRadius: "20px",
          padding: "28px",
          boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
          color: textColor,
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "16px" }}>
          My Story
        </h2>

        <p style={{ color: subTextColor, lineHeight: 1.9 }}>
          Hi! I’m <strong>Ronan Justine D. Ga</strong>, a 3rd year Information
          Technology student with a strong interest in web development and
          software engineering. I am currently learning how to build modern,
          user-friendly web applications using technologies like React and
          TypeScript.
        </p>

        <p style={{ color: subTextColor, lineHeight: 1.9 }}>
          As part of my academic journey, I am also exploring areas such as
          software development, information assurance and security, and other
          essential IT-related skills. I enjoy understanding how systems work
          and how technology can be used to solve real-world problems.
        </p>

        <p style={{ color: subTextColor, lineHeight: 1.9 }}>
          What excites me most about programming is the ability to turn ideas
          into real applications. Every project helps me improve my problem-
          solving skills, learn new tools, and become more confident as a
          developer.
        </p>

        <p style={{ color: subTextColor, lineHeight: 1.9, marginBottom: 0 }}>
          Outside of coding, I enjoy learning from tutorials, exploring new
          technologies, listening to music, and staying updated with trends in
          the tech industry.
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
          {
            title: "Skills I’m Building",
            text: "HTML, CSS, JavaScript, React, TypeScript, and modern frontend development practices.",
          },
          {
            title: "My Current Focus",
            text: "Web development, software development fundamentals, and building structured React applications.",
          },
          {
            title: "Areas of Interest",
            text: "Information Assurance and Security, backend systems, and full-stack development.",
          },
          {
            title: "Future Goals",
            text: "To become a skilled full-stack developer and create applications that solve real-world problems.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: "18px",
              padding: "22px",
              color: textColor,
            }}
          >
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p style={{ marginBottom: 0, color: subTextColor, lineHeight: 1.8 }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}