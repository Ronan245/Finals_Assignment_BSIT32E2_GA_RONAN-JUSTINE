import type{ ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "32px 20px 48px",
      }}
    >
      {children}
    </main>
  );
}