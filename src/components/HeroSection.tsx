"use client";

import React from "react";
import Image from "next/image";
import HeroTypography from "./HeroTypography";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Scale + fade animations
  const speedFactor = 0.2; // smaller → faster animation
  const scale = useTransform(scrollYProgress, [0, speedFactor], [1, 2]);
  const opacity = useTransform(
    scrollYProgress,
    [0, speedFactor * 0.875],
    [1, 0]
  );

  return (
    // 3x taller container → more scroll-jack space
    <section className="relative h-[250vh] w-full overflow-visible">
      {/* Sticky hero */}
      <motion.div
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-between bg-cover bg-center text-center"
        style={{
          backgroundImage: 'url("/bg/hero-bg.png")',
          opacity,
        }}
      >
        {/* Top content */}
        <div className="mx-auto mt-4 flex flex-col items-center md:mt-12 lg:mt-24">
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

        {/* Typography scaling in place */}
        <motion.div
          className="mx-auto mb-4 flex flex-col items-center md:mb-12 lg:mb-24 overflow-visible"
          style={{
            scale,
            transformOrigin: "center center",
          }}
        >
          <HeroTypography />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
