type Props = {
  data: { sender: string; message: string };
  onClose: () => void;
  theme: string;
};

export default function SubmissionModal({ data, onClose, theme }: Props) {
  const isDark = theme === "dark";
  const isOcean = theme === "ocean";

  const bg = isDark
    ? "#1e293b"
    : isOcean
    ? "rgba(255,255,255,0.15)"
    : "#ffffff";

  const text = isDark || isOcean ? "#f8fafc" : "#0f172a";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          background: bg,
          color: text,
          padding: "24px",
          borderRadius: "16px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2>Message Submitted</h2>
        <p><strong>Sender:</strong> {data.sender}</p>
        <p><strong>Message:</strong> {data.message}</p>

        <button
          onClick={onClose}
          style={{
            marginTop: "12px",
            background: "#3b82f6",
            color: "white",
            padding: "8px 14px",
            borderRadius: "10px",
            border: "none",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}