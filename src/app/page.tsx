"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import PortfolioSection from "../components/PortfolioSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

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
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
/*Chekpoint*/
