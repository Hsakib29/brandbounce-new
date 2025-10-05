"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// HeroTypography Component
const HeroTypography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const textSequence = [
    {
      text: "Designs",
      weight: "font-bold",
      size: "text-[500px]",
      color: "#11406E",
    },
    {
      text: "that build",
      weight: "font-medium",
      size: "text-[400px]",
      color: "#436B92",
    },
    {
      text: "Brands",
      weight: "font-bold",
      size: "text-[500px]",
      color: "#A3ABB5",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textSequence.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const current = textSequence[currentIndex];

  return (
    <>
      <style jsx>{`
        .jt {
          position: relative;
          font-family: "Bricolage Grotesque", sans-serif;
          text-transform: none;
          font-display: swap;
          line-height: 1;
        }

        .jt__row {
          display: block;
        }

        .jt__row:nth-child(1) {
          clip-path: polygon(-10% 75%, 110% 75%, 110% 110%, -10% 110%);
        }

        .jt__row:nth-child(2) {
          clip-path: polygon(-10% 50%, 110% 50%, 110% 75.3%, -10% 75.3%);
        }

        .jt__row:nth-child(3) {
          clip-path: polygon(-10% 25%, 110% 25%, 110% 50.3%, -10% 50.3%);
        }

        .jt__row:nth-child(4) {
          clip-path: polygon(-10% 0%, 110% 0%, 110% 25.3%, -10% 25.3%);
        }

        .jt__row.jt__row--sibling {
          position: absolute;
          top: 0;
          left: 0;
          user-select: none;
          width: 100%;
        }

        .jt__text {
          display: block;
          transform-origin: bottom center;
          animation: moveIn 2s 0s cubic-bezier(0.36, 0, 0.06, 1) forwards;
        }

        .jt__row:nth-child(1) .jt__text {
          transform: translateY(-0.1em);
        }

        .jt__row:nth-child(2) .jt__text {
          transform: translateY(-0.3em) scaleY(1.1);
        }

        .jt__row:nth-child(3) .jt__text {
          transform: translateY(-0.5em) scaleY(1.2);
        }

        .jt__row:nth-child(4) .jt__text {
          transform: translateY(-0.7em) scaleY(1.3);
        }

        @keyframes moveIn {
          0% {
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            transform: translateY(0em);
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>

      <h1
        className={`jt ${current.weight} ${current.size} text-center`}
        style={{ color: current.color }}
        key={currentIndex}
      >
        <span className="jt__row">
          <span className="jt__text">{current.text}</span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <span className="jt__text">{current.text}</span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <span className="jt__text">{current.text}</span>
        </span>
        <span className="jt__row jt__row--sibling" aria-hidden="true">
          <span className="jt__text">{current.text}</span>
        </span>
      </h1>
    </>
  );
};

// Main HeroSection Component
const HeroSection: React.FC = () => {
  console.log("HeroSection rendering");
  const { scrollYProgress } = useScroll();

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

      {/* 2x taller container → scroll-jack space */}
      <section className="relative h-[200vh] w-full overflow-visible">
        {/* Sticky hero */}
        <motion.div
          className="sticky top-0 flex h-screen w-full flex-col items-center justify-between bg-white text-center scale-70 sm:scale-80 md:scale-90 lg:scale-100"
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
          <div className="relative z-10 mx-auto mt-8 flex flex-col items-center md:mt-16 lg:mt-32">
            <h1 className="font-[Bricolage Grotesque] text-[#11406E] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
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
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-bounce"
              />
            </div>
          </div>

          {/* Typography scaling in place */}
          <motion.div
            className="relative z-10 mx-auto mb-4 flex flex-col items-center md:mb-12 lg:mb-24 overflow-visible scale-90 sm:scale-95 md:scale-100"
            style={{
              scale: heroTypographyScale,
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
