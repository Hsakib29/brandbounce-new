"use client";

import React from "react";
import Image from "next/image";
import HeroTypography from "./HeroTypography";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {
  console.log("HeroSection rendering");
  const { scrollYProgress } = useScroll();

  // Scale + fade animations
  const speedFactor = 0.2; // smaller → faster animation
  const scale = useTransform(scrollYProgress, [0, speedFactor], [1, 2]);
  const opacity = useTransform(
    scrollYProgress,
    [0, speedFactor * 0.875],
    [1, 0]
  );

  // Generate particle data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    isDark: i % 2 === 0,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 20 + Math.random() * 20, // 20-40 seconds
    delay: -(Math.random() * 40), // negative delay for mid-swirl start
  }));

  return (
    <>
      <style jsx>{`
        @keyframes move {
          100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
          }
        }

        .particle {
          position: absolute;
          width: 20vmin;
          height: 20vmin;
          border-radius: 50%;
          animation: move linear infinite;
          transform-origin: 10vw 10vh;
          backface-visibility: hidden;
        }

        .particle-dark {
          color: rgba(17, 64, 110, 0.07);
          box-shadow: 40vmin 0 3vmin currentColor;
        }

        .particle-light {
          color: rgba(74, 144, 226, 0.07);
          box-shadow: -40vmin 0 2vmin currentColor;
        }
      `}</style>

      {/* 3x taller container → more scroll-jack space */}
      <section className="relative h-[250vh] w-full overflow-visible">
        {/* Sticky hero */}
        <motion.div
          className="sticky top-0 flex h-screen w-full flex-col items-center justify-between bg-white text-center scale-90 sm:scale-100"
          style={{
            opacity,
          }}
        >
          {/* Particle background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className={`particle ${
                  particle.isDark ? "particle-dark" : "particle-light"
                }`}
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDuration: `${particle.duration}s`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Top content */}
          <div className="relative z-10 mx-auto mt-4 flex flex-col items-center md:mt-12 lg:mt-24">
            <h1 className="font-[Bricolage Grotesque] text-[#11406E] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
              We&apos;re a creative agency helping brands
              <br />
              make a splash and connect with their audience.
            </h1>
            <div className="mt-8">
              <Image
                src="/icons/downarrow.svg"
                alt="Down Arrow"
                width={48}
                height={48}
                className="w-12 h-12 sm:w-14 sm:h-14 animate-bounce"
              />
            </div>
          </div>

          {/* Typography scaling in place */}
          <motion.div
            className="relative z-10 mx-auto mb-4 flex flex-col items-center md:mb-12 lg:mb-24 overflow-visible"
            style={{
              scale,
              transformOrigin: "center center",
            }}
          >
            <HeroTypography />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
