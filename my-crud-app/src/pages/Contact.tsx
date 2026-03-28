import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Header
        title="Contact Me"
        subtitle="Feel free to reach out if you’d like to connect, collaborate, or say hello."
      />
      <PageContainer>
        <ContactInfo />
      </PageContainer>
      <Footer />
    </>
  );
}