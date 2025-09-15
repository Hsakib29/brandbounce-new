"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import FloatingCard from "./FloatingCard";

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeCards, setActiveCards] = useState<boolean[]>(
    Array(6).fill(false)
  );
  const [scrollProgress, setScrollProgress] = useState(0); // 0 → 1

  // Stage 1: Activate cards with stagger when section enters view
  useEffect(() => {
    if (inView) {
      Array(6)
        .fill(0)
        .forEach((_, i) => {
          setTimeout(() => {
            setActiveCards((prev) => {
              const newState = [...prev];
              newState[i] = true;
              return newState;
            });
          }, i * 200); // 200ms stagger
        });
    }
  }, [inView]);

  // Stage 2: Scroll-driven animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScroll = rect.height + windowHeight;
      const progressRaw = (windowHeight - rect.top) / totalScroll;

      // Remap: complete animation by halfway (0.5)
      const normalize = (value: number, start: number, end: number) => {
        return Math.min(Math.max((value - start) / (end - start), 0), 1);
      };

      const progress = normalize(progressRaw, 0, 0.5);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerWidth = 1920 - 670 * scrollProgress; // 1920 → 1250
  const getRotation = (initial: number) => initial * (1 - scrollProgress);

  return (
    <section ref={ref} className="relative w-full max-w-[1920px] mx-auto mt-24">
      {/* Tall wrapper to give scroll room */}
      <div
        ref={sectionRef}
        style={{
          height: "250vh", // << gives enough space for scroll-jacking
          position: "relative",
        }}
      >
        {/* Sticky content */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "4rem 2rem",
          }}
        >
          {/* Core Layout */}
          <div
            style={{
              position: "relative",
              width: 600,
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 31,
            }}
          >
            {/* Floating cards */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: `${containerWidth}px`,
                height: 600,
                zIndex: 2,
                pointerEvents: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "width 0.1s linear",
              }}
            >
              {/* Left column */}
              <div
                style={{
                  width: 300,
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    transform: `rotate(${getRotation(15)}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <FloatingCard
                    text="Video Editing"
                    theme="purple"
                    variant="right"
                    icon="mdi:video"
                    active={activeCards[0]}
                  />
                </div>
                <div
                  style={{
                    transform: `rotate(${getRotation(0)}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <FloatingCard
                    text="Print Design"
                    theme="yellow"
                    variant="right"
                    icon="mdi:printer"
                    active={activeCards[1]}
                  />
                </div>
                <div
                  style={{
                    transform: `rotate(${getRotation(-15)}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <FloatingCard
                    text="Motion Graphic"
                    theme="blue"
                    variant="right"
                    icon="mdi:motion"
                    active={activeCards[2]}
                  />
                </div>
              </div>

              {/* Right column */}
              <div
                style={{
                  width: 300,
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    transform: `rotate(${getRotation(-15)}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <FloatingCard
                    text="Brand Identity"
                    theme="purple"
                    variant="left"
                    icon="mdi:palette"
                    active={activeCards[3]}
                  />
                </div>
                <div
                  style={{
                    transform: `rotate(${getRotation(0)}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <FloatingCard
                    text="Marketing"
                    theme="lime"
                    variant="left"
                    icon="mdi:bullhorn"
                    active={activeCards[4]}
                  />
                </div>
                <div
                  style={{
                    transform: `rotate(${getRotation(15)}deg)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  <FloatingCard
                    text="Web Design"
                    theme="orange"
                    variant="left"
                    icon="mdi:web"
                    active={activeCards[5]}
                  />
                </div>
              </div>
            </div>

            {/* Middle line + Hey there! */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 30,
                width: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: 70,
                      height: 2,
                      background:
                        "linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.7) 100%)",
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#111",
                      boxShadow: "0 0 8px 0 rgba(0,0,0,0.15)",
                    }}
                  />
                </div>
                <div
                  style={{
                    color: "#0A2540",
                    fontSize: 24,
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    textAlign: "center",
                    minWidth: 100,
                  }}
                >
                  Hey there!
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#111",
                      boxShadow: "0 0 8px 0 rgba(0,0,0,0.15)",
                    }}
                  />
                  <div
                    style={{
                      width: 70,
                      height: 2,
                      background:
                        "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.0) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div
              style={{
                alignSelf: "stretch",
                padding: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  textAlign: "center",
                  color: "#0A2540",
                  fontSize: 36,
                  fontFamily: "Bricolage Grotesque",
                  fontWeight: 400,
                }}
              >
                We spark vibrant brand identities for startups, connecting your
                vision to thrilled customers with bold, creative designs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
