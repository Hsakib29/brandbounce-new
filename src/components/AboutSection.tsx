"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import FloatingCard from "./FloatingCard";

const AboutSection: React.FC = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const floatingCardsRef = useRef<HTMLDivElement | null>(null);
  const [activeCards, setActiveCards] = useState<boolean[]>(
    Array(6).fill(false)
  );
  const [scrollProgress, setScrollProgress] = useState(0); // 0 → 1
  const [cardsInView, setCardsInView] = useState(false);
  const [stage1Complete, setStage1Complete] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Monitor floating cards visibility (70% threshold)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCardsInView(entry.isIntersecting);
      },
      {
        threshold: 0.7, // 70% of the floating cards must be visible
        rootMargin: "0px",
      }
    );

    if (floatingCardsRef.current) {
      observer.observe(floatingCardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stage 1: Activate all cards at once when cards are 70% in view
  useEffect(() => {
    if (cardsInView && !stage1Complete) {
      setActiveCards(Array(6).fill(true));
      setTimeout(() => setStage1Complete(true), 400); // Add small delay after activation
    }
  }, [cardsInView, stage1Complete]);

  // Stage 2: Smooth, reversible scroll-driven animation
  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      if (!sectionRef.current || !stage1Complete) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on section's position in viewport
      // When section center is at viewport center, progress should be 0.5
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = viewportCenter - sectionCenter;

      // Use 35% of window height in each direction for a slower, more controlled animation
      const animationRange = windowHeight * 0.35;

      // Calculate progress: -1 to 1 range, then normalize to 0 to 1
      // Add easeInOutCubic easing for smoother acceleration/deceleration
      const progressRaw = distanceFromCenter / animationRange;
      const normalizedProgress = (progressRaw + 1) / 2;
      const clampedProgress = Math.min(Math.max(normalizedProgress, 0), 1);

      // Apply easing function for smoother motion
      const easeInOutCubic = (x: number): number => {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
      };

      const progress = easeInOutCubic(clampedProgress);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stage1Complete, hasMounted]); // Only re-run when stage1 completion changes

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
              ref={floatingCardsRef}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: `${containerWidth}px`,
                maxWidth: "100vw",
                height: 600,
                zIndex: 2,
                pointerEvents: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "width 0.6s ease-in-out",
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
                    transition: "transform 0.6s ease-in-out",
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
                    transition: "transform 0.6s ease-in-out",
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
                    transition: "transform 0.6s ease-in-out",
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
                    transition: "transform 0.6s ease-in-out",
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
                    transition: "transform 0.6s ease-in-out",
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
                    transition: "transform 0.6s ease-in-out",
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

      {/* Debug Overlay */}
      {/* <div className="fixed top-4 left-4 bg-black/80 text-white p-4 rounded-lg text-sm z-50 font-mono space-y-2">
        <div>🎯 Animation States:</div>
        <div className={cardsInView ? "text-green-400" : "text-red-400"}>
          ▸ 70% Visible: {cardsInView ? "YES" : "NO"}
        </div>
        <div className={stage1Complete ? "text-green-400" : "text-yellow-400"}>
          ▸ Stage 1 Complete: {stage1Complete ? "YES" : "NO"}
        </div>
        <div>▸ Active Cards: {activeCards.filter(Boolean).length}/6</div>
        <div className="flex items-center gap-2">
          <span>▸ Progress:</span>
          <div className="flex-1 h-2 bg-gray-700 rounded overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-100"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span>{Math.round(scrollProgress * 100)}%</span>
        </div>
        <div>▸ Container Width: {Math.round(containerWidth)}px</div>
        <div className="text-xs text-gray-400 mt-2">
          Stage 2 Animation:
          <br />
          {!stage1Complete && "- Waiting for Stage 1 to complete"}
          <br />
          {stage1Complete && "✓ Scroll to animate (reversible)"}
        </div>
      </div> */}
    </section>
  );
};

export default AboutSection;
