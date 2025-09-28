"use client";

import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";

// Assumes Tailwind CSS is available
export default function ProjectCarousel() {
  const projects = useMemo(
    () => [
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
        description:
          "A dynamic portfolio website showcasing modern animations.",
      },
    ],
    []
  );

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  const handleNext = useCallback(() => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [projects.length]);

  const handlePrevious = useCallback(() => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  }, [projects.length]);

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

  const getCardTransform = useCallback(
    (index: number) => {
      const offset = index - currentProjectIndex;
      return `translateX(${offset * (256 + 16)}px)`; // 256px card width + 16px gap
    },
    [currentProjectIndex]
  );

  const getCardStyles = useCallback(
    (index: number) => ({
      transform: `${getCardTransform(index)} translateY(-50%)`,
      left: "0px",
    }),
    [getCardTransform]
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => {
      const width = node.clientWidth;
      const s = Math.min(1, width / 1104.94);
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
  }, []);

  return (
    <main
      ref={containerRef}
      className={`relative w-full h-[520px] p-0 box-border bg-transparent font-['Poppins']`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="application"
      aria-label="Project carousel"
    >
      <div
        className="absolute right-0 top-0"
        style={{
          width: 1104.94,
          height: 520,
          transformOrigin: "right center",
          transform: `scale(${scale})`,
        }}
      >
        <section
          className="w-full h-full relative overflow-hidden"
          aria-label="Projects showcase"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`
              w-64 h-80 p-2.5 absolute top-1/2 cursor-pointer
              transition-all duration-500 ease-in-out
              ${
                index === currentProjectIndex
                  ? "opacity-100 scale-105 z-10"
                  : "opacity-50 scale-95"
              }
            `}
              style={getCardStyles(index)}
              aria-hidden={index !== currentProjectIndex}
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
                  sizes="256px"
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
          ))}
        </section>

        <div className="absolute bottom-3 left-0 right-0 pr-4 pl-2 flex justify-between items-center w-full">
          <div role="status" aria-live="polite">
            <span className="text-black text-base font-medium">
              {`0${projects.length}/`}
            </span>
            <span className="text-zinc-300 text-base font-medium">
              Projects
            </span>
            <span className="sr-only">
              Currently viewing project {currentProjectIndex + 1} of{" "}
              {projects.length}
            </span>
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
