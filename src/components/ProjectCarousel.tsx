"use client";

import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";

// Assumes Tailwind CSS is available
export default function ProjectCarousel() {
  const originalProjects = [
    {
      id: 1,
      src: "https://placehold.co/230x330/556950/fff?text=Project+1",
      alt: "Project 1",
      title: "Project Alpha",
      description: "A design project exploring minimal aesthetics.",
    },
    {
      id: 2,
      src: "https://placehold.co/230x330/506969/fff?text=Project+2",
      alt: "Project 2",
      title: "Project Beta",
      description: "An interactive web app with a focus on user experience.",
    },
    {
      id: 3,
      src: "https://placehold.co/230x330/695050/fff?text=Project+3",
      alt: "Project 3",
      title: "Project Gamma",
      description: "A mobile application for creative content collaboration.",
    },
    {
      id: 4,
      src: "https://placehold.co/230x330/695069/fff?text=Project+4",
      alt: "Project 4",
      title: "Project Delta",
      description: "A dynamic portfolio website showcasing modern animations.",
    },
    {
      id: 5,
      src: "https://placehold.co/230x330/506950/fff?text=Project+5",
      alt: "Project 5",
      title: "Project Epsilon",
      description: "An e-commerce platform with seamless checkout.",
    },
    {
      id: 6,
      src: "https://placehold.co/230x330/695096/fff?text=Project+6",
      alt: "Project 6",
      title: "Project Zeta",
      description: "A data visualization dashboard for analytics.",
    },
  ];

  const updateSizes = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setCardWidth(192);
      setGap(12);
    } else if (width < 1024) {
      setCardWidth(224);
      setGap(14);
    } else {
      setCardWidth(256);
      setGap(16);
    }
  }, []);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [gap, setGap] = useState(16);
  const [cardWidth, setCardWidth] = useState(256);

  const handleNext = useCallback(() => {
    setCurrentProjectIndex((prevIndex) => prevIndex + 1);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentProjectIndex((prevIndex) => prevIndex - 1);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    },
    [handleNext, handlePrevious]
  );

  useEffect(() => {
    updateSizes();
    const ro = new ResizeObserver(updateSizes);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updateSizes);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateSizes);
    };
  }, [updateSizes]);

  return (
    <main
      ref={containerRef}
      className={`w-full h-[400px] md:h-[480px] lg:h-[520px] p-0 box-border bg-transparent font-['Poppins']`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="application"
      aria-label="Project carousel"
    >
      <div className="relative w-full md:w-[938px] lg:w-[1072px] lg:ml-auto h-[400px] md:h-[480px] lg:h-[520px]">
        <section
          className="w-full h-full relative overflow-hidden"
          aria-label="Projects showcase"
        >
          {Array(100)
            .fill(0)
            .map((_, i) => {
              const project = originalProjects[i % originalProjects.length];
              const offset = i - currentProjectIndex;
              return (
                <article
                  key={i}
                  className={`
                w-48 h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 p-2.5 absolute top-1/2 cursor-pointer
                transition-all duration-500 ease-in-out
                opacity-100 scale-105 z-10
              `}
                  style={{
                    transform: `translateX(${
                      offset * (cardWidth + gap)
                    }px) translateY(-50%)`,
                    left: "0px",
                  }}
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                >
                  {/* The main card element with dynamic shape */}
                  <div
                    className={`
                  w-full h-full bg-zinc-300 relative
                  transition-all duration-300 ease-in-out
                  ${
                    hoveredCardId === project.id
                      ? "rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[110px] rounded-br-[20px]"
                      : "rounded-[20px]"
                  }
                `}
                  >
                    <Image
                      className={`
                    w-full h-full object-cover
                    transition-all duration-300 ease-in-out
                    ${
                      hoveredCardId === project.id
                        ? "rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[110px] rounded-br-[20px]"
                        : "rounded-[20px]"
                    }
                  `}
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 767px) 192px, (max-width: 1023px) 224px, 256px"
                    />
                  </div>

                  {/* The button layered behind the card */}
                  <div
                    className={`
                  w-7 h-7 px-1.5 py-2 absolute bottom-3 left-5 rounded-2xl
                  [outline-style:solid] outline-[0.60px] outline-offset-[-0.60px] outline-sky-900
                  inline-flex justify-center items-center gap-1.5 overflow-hidden
                  bg-white z-[-1]
                `}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4V20"
                        stroke="#005B96"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 12H20"
                        stroke="#005B96"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </article>
              );
            })}
        </section>

        <div className="absolute bottom-3 left-0 right-0 pr-0 pl-0 flex justify-between items-center w-full">
          <div role="status" aria-live="polite">
            <span className="text-black text-base font-medium">
              {`0${originalProjects.length}/`}
            </span>
            <span className="text-zinc-300 text-base font-medium">
              Projects
            </span>
            <span className="sr-only">Currently viewing projects</span>
          </div>

          <nav
            className="flex justify-center items-center gap-4"
            aria-label="Project navigation"
          >
            <button
              onClick={handlePrevious}
              className="w-12 h-12 px-3 py-2.5 bg-white rounded-3xl [outline-style:solid] outline-1 outline-offset-[-1px] outline-black flex justify-center items-center transform transition-transform duration-200 hover:scale-110 active:scale-95 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Previous Project"
              type="button"
            >
              <svg
                className="w-6 h-6 rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 5L16 12L8 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 px-2.5 py-3 rounded-3xl [outline-style:solid] outline-1 outline-offset-[-1px] outline-black flex justify-center items-center transform transition-transform duration-200 hover:scale-110 active:scale-95 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Next Project"
              type="button"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 5L16 12L8 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
}
