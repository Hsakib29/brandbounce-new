"use client";
import React, { useState, useEffect } from "react";

const HeroTypography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const textSequence = [
    {
      text: "Designs",
      weight: "font-bold",
      size: "text-[20vw] sm:text-[22vw] md:text-[24vw] lg:text-[26vw] xl:text-[28vw]",
      color: "#11406E",
    },
    {
      text: "that build",
      weight: "font-medium",
      size: "text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[18vw] xl:text-[20vw]",
      color: "#436B92",
    },
    {
      text: "Brands",
      weight: "font-bold",
      size: "text-[20vw] sm:text-[22vw] md:text-[24vw] lg:text-[26vw] xl:text-[28vw]",
      color: "#A3ABB5",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textSequence.length);
    }, 4000);
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
        }

        .jt__row {
          display: block;
          width: 100%;
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
          right: 0;
          user-select: none;
        }

        .jt__text {
          display: block;
          transform-origin: bottom center;
          animation: moveIn 2s 0s cubic-bezier(0.36, 0, 0.06, 1) alternate
            infinite;
          white-space: nowrap;
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
          50%,
          100% {
            transform: translateY(0em);
          }
          0% {
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>

      <h1
        className={`${current.weight} ${current.size} text-center`}
        style={{ color: current.color }}
        key={currentIndex}
      >
        <div className="jt flex justify-center items-center relative inline-block">
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
        </div>
      </h1>
    </>
  );
};

export default HeroTypography;
