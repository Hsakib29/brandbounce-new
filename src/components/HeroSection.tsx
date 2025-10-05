"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroTypography from "./HeroTypography";

// Main HeroSection Component
const HeroSection: React.FC = () => {
  console.log("HeroSection rendering");
  const { scrollYProgress } = useScroll();
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 1200);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Scale + fade animations
  const speedFactor = 0.1; // smaller → faster animation
  const scale = useTransform(scrollYProgress, [0, speedFactor], [1, 2]);
  const heroTypographyScale = useTransform(scale, (s) => s * 0.8); // Scale down by 20%
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

      {/* Taller container for scroll-jack on large screens */}
      <section className="relative h-[80vh] lg:h-[200vh] w-full overflow-visible">
        {/* Sticky hero */}
        <motion.div
          className="sticky top-0 flex h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen w-full flex-col items-center bg-white text-center pt-4 lg:pt-0 scale-70 sm:scale-80 md:scale-90 lg:scale-100"
          style={{
            opacity: isLarge ? opacity : 1,
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
          <div className="relative z-10 mx-auto mt-8 flex flex-col items-center md:mt-28 lg:mt-36">
            <h1 className="font-[Bricolage Grotesque] text-[#11406E] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
              We&apos;re a creative agency helping brands
              <br />
              make a splash and connect with their audience.
            </h1>
            <div className="mt-2">
              <Image
                src="/icons/downarrow.svg"
                alt="Down Arrow"
                width={48}
                height={48}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-bounce"
              />
            </div>
          </div>

          {/* Typography scaling in place */}
          <motion.div
            className="relative z-10 mx-auto mt-1 mb-2 flex flex-col items-center md:mt-12 md:mb-12 lg:mt-16 lg:mb-24 overflow-visible scale-90 sm:scale-95 md:scale-100"
            style={{
              scale: heroTypographyScale,
              transformOrigin: "center center",
            }}
          >
            <div className="max-w-[1400px] h-[10vh] md:h-[600px] flex justify-center items-center">
              <HeroTypography />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
