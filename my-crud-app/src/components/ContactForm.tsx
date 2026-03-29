import { useForm, type SubmitHandler } from "react-hook-form";

type ContactValues = {
  sender: string;
  message: string;
};

type Props = {
  onSubmitSuccess: (data: ContactValues) => void;
  theme: string;
};

export default function ContactForm({ onSubmitSuccess, theme }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>();

  const isDark = theme === "dark";
  const isOcean = theme === "ocean";

  const inputBg = isDark
    ? "#0f172a"
    : isOcean
    ? "rgba(255,255,255,0.9)"
    : "#ffffff";

  const textColor = isDark || isOcean ? "#f8fafc" : "#0f172a";
  const borderColor = isDark ? "#334155" : "#e5e7eb";

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    onSubmitSuccess(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Sender */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ color: textColor }}>Sender Name</label>
        <input
          {...register("sender", { required: "Required" })}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: `1px solid ${borderColor}`,
            backgroundColor: inputBg,
            color: textColor,
          }}
        />
        {errors.sender && <p style={{ color: "red" }}>{errors.sender.message}</p>}
      </div>

      {/* Message */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ color: textColor }}>Message</label>
        <textarea
          rows={5}
          {...register("message", { required: "Required" })}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: `1px solid ${borderColor}`,
            backgroundColor: inputBg,
            color: textColor,
          }}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "10px 16px",
          borderRadius: "10px",
          border: "none",
          fontWeight: 700,
        }}
      >
        Submit
      </button>
    </form>
  );
}