import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import ContactForm from "../components/ContactForm";
import SubmissionModal from "../components/SubmissionModal";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const [data, setData] = useState<any>(null);

  return (
    <>
      <Navbar />
      <Header title="Contact Me" subtitle="Send me a message" />

      <PageContainer>
        <ContactForm
          onSubmitSuccess={(formData) => setData(formData)}
          theme={theme}
        />

        {data && (
          <SubmissionModal
            data={data}
            onClose={() => setData(null)}
            theme={theme}
          />
        )}
      </PageContainer>

      <Footer />
    </>
  );
}