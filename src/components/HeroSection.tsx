import React from "react";

import Image from "next/image";
import HeroTypography from "./HeroTypography";

const HeroSection: React.FC = () => (
  <section
    className="relative flex h-screen w-full flex-col items-center justify-between bg-cover bg-center text-center"
    style={{ backgroundImage: 'url("/bg/hero-bg.png")' }}
  >
    {/* Top-aligned content block */}
    <div
      className="mx-auto mt-4 flex flex-col items-center md:mt-12 lg:mt-24"
      style={{ width: 700, height: 160 }}
    >
      <h1
        className="font-[Bricolage Grotesque] text-[#11406E]"
        style={{ fontSize: 30, fontWeight: 500 }}
      >
        We&apos;re a creative agency helping brands
        <br />
        make a splash and connect with their audience.
      </h1>
      <div className="mt-8">
        <Image
          src="/icons/downarrow.svg"
          alt="Down Arrow"
          width={49}
          height={50}
          className="animate-bounce"
        />
      </div>
    </div>

    {/* Bottom-aligned content block */}
    <div
      className="mx-auto mb-4 flex flex-col items-center md:mb-12 lg:mb-24"
      style={{ width: 1920, height: 790 }}
    >
      <HeroTypography />
    </div>
  </section>
);

export default HeroSection;
