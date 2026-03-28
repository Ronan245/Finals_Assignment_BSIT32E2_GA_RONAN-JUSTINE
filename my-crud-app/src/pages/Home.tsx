import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header
        title="Welcome to My Personal Website"
        subtitle="A simple space where I share who I am, what I’m learning, and how to reach me."
      />
      <PageContainer>
        <HeroSection />
      </PageContainer>
      <Footer />
    </>
  );
}