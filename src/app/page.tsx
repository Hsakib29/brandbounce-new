"use client";
import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import PortfolioSection from "../components/PortfolioSection";
import BenefitsSection from "../components/BenefitsSection";

export default function HomePage() {
  const [toggleBg, setToggleBg] = useState(false);

  return (
    <>
      <Header toggleBg={toggleBg} setToggleBg={setToggleBg} />
      <main className={toggleBg ? "bg-[#FE5D26]" : "bg-white"}>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <BenefitsSection />
      </main>
    </>
  );
}
/*Chekpoint*/
