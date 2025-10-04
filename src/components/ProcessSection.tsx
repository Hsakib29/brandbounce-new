"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Bricolage_Grotesque, Poppins } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

// ProcessCard component, restored to original styling
interface ProcessCardProps {
  title: string;
  description: string;
  icon: string;
  isVisible: boolean;
  index: number;
  isMobile: boolean;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  description,
  icon,
  isVisible,
  index,
  isMobile,
}) => {
  return (
    <div
      className={`w-[297px] h-[297px] p-4 bg-[#F6F7F8] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] overflow-hidden rounded-[20px] outline outline-[rgba(255,255,255,0.60)] outline-offset-[-1px] flex flex-col justify-start items-start gap-[10px] transition-all duration-700 ease-out transform absolute`}
      style={{
        zIndex: 4 - index,
        opacity: isVisible ? 1 : 0.9,
        left: "50%",
        top: "40%",
        transform: isVisible
          ? `translateX(-50%) translateY(-50%) ${
              isMobile
                ? `translateY(${index * 320 + 100}px)`
                : `translateX(${(index - 1.5) * 320}px)`
            }`
          : isMobile
          ? "translateX(-50%) translateY(-50%) translateY(100px)"
          : "translateX(-50%) translateY(-50%)",
      }}
    >
      <div className="relative flex flex-col justify-start items-start gap-[10px]">
        <div className="w-[79px] h-[79px] bg-[#D9D9D9] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] rounded-[20px]" />
        {icon && (
          <div className="w-20 h-20 absolute top-0 left-0 flex items-center justify-center">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={80}
              height={80}
              className="w-20 h-20 rounded-xl object-cover"
            />
          </div>
        )}
      </div>
      <div
        className={`self-stretch text-[#11406E] text-[32px] font-semibold ${bricolage.className}`}
      >
        {title}
      </div>
      <div
        className={`self-stretch flex-1 text-[#4B5563] text-base font-normal ${poppins.className}`}
      >
        {description}
      </div>
    </div>
  );
};

// ProcessSection component with scroll-triggered animation
const ProcessSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardsRef = useRef<HTMLDivElement | null>(null); // more specific
  const textRef = useRef<HTMLDivElement | null>(null); // for text animation
  const [scale, setScale] = useState(1);
  const BASE_WIDTH = 1280;
  const scaledWrapperStyle: React.CSSProperties = useMemo(() => {
    return {
      width: BASE_WIDTH,
      height: "100%",
      position: "absolute" as const,
      top: isMobile ? "298px" : "50%",
      left: "50%",
      transformOrigin: "center center",
      transform: `translate(-50%, -50%) scale(${isMobile ? 1 : scale})`,
    };
  }, [scale, isMobile]);

  const processSteps = [
    {
      title: "Connect",
      description:
        "Start with a free 30-minute discovery call. Pick the perfect plan for your needs, and we&apos;ll dive into bringing your brand vision to life.",
      icon: "https://placehold.co/80x80/D9D9D9/D9D9D9?text=1",
    },
    {
      title: "Submit",
      description:
        "Share your project brief via our dedicated Slack channel or Notion workspace. We&apos;ll hit the ground running while you focus on growing your business.",
      icon: "https://placehold.co/80x80/D9D9D9/D9D9D9?text=2",
    },
    {
      title: "Refine",
      description:
        "Receive your designs in 1–3 days. We&apos;ll tweak and revise as many times as needed until your brand bounces with 100% satisfaction.",
      icon: "https://placehold.co/80x80/D9D9D9/D9D9D9?text=3",
    },
    {
      title: "Shine",
      description:
        "Get stunning results, stand out in your market, and enjoy the confidence of having BrandBounce as your creative partner on demand.",
      icon: "https://placehold.co/80x80/D9D9D9/D9D9D9?text=4",
    },
  ];

  useEffect(() => {
    const element = cardsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  // Mobile detection effect
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Separate text animation effect
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        }
      },
      {
        threshold: 0.3, // Lower threshold for earlier text animation
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const node = cardsRef.current;
    if (!node || isMobile) return;

    const updateScale = () => {
      const width = node.clientWidth;
      const s = Math.min(1, width / BASE_WIDTH);
      setScale(s);
    };

    updateScale();

    const ro = new ResizeObserver(updateScale);
    ro.observe(node);
    window.addEventListener("resize", updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [isMobile]);

  return (
    <>
      <div
        className={`w-full min-h-screen py-12 px-4 md:px-20 bg-white flex flex-col items-center justify-center gap-4 ${poppins.className}`}
      >
        <div className="w-full max-w-7xl h-auto flex flex-col items-center justify-between gap-12">
          <div
            ref={textRef}
            className={`p-4 flex flex-col items-center justify-center gap-4 max-w-4xl text-center transition-all duration-1000 ${
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1
              className={`text-[#11406E] text-4xl lg:text-5xl font-semibold ${bricolage.className}`}
            >
              Getting Started with BrandBounce is a Breeze
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium">
              Our process is designed for startups and small teams who need
              bold, professional branding without the hassle—fast, flexible, and
              fun.
            </p>
          </div>
          <div
            className={`w-[100vw] mx-[calc(50%-50vw)] flex justify-center relative overflow-visible ${
              isMobile ? "h-[1500px]" : "h-[500px]"
            }`}
          >
            <div
              ref={cardsRef}
              className="relative flex items-center justify-center w-full h-full overflow-visible"
            >
              <div style={scaledWrapperStyle}>
                {processSteps.map((step, index) => (
                  <ProcessCard
                    key={index}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    index={index}
                    isVisible={isVisible}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessSection;
