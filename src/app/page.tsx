import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <HeroSection />
        <AboutSection />
        <ProcessSection />
      </main>
    </>
  );
}
/*Chekpoint*/
