import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BioContent from "../components/BioContent";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";

export default function About() {
  return (
    <>
      <Navbar />
      <Header
        title="About Me"
        subtitle="Get to know more about my background, interests, and goals as an aspiring developer."
      />
      <PageContainer>
        <BioContent />
      </PageContainer>
      <Footer />
    </>
  );
}