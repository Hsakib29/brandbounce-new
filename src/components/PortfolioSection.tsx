"use client";

import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import Link from "next/link";

const PortfolioSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] h-[600px] mx-auto relative bg-gray-50 overflow-hidden">
      {/* Carousel container (right side) */}
      <div
        className="absolute right-[20px] top-[40px] h-[520px] overflow-hidden"
        style={{ width: "min(1104.94px, calc(100% - 80px - 384px - 80px))" }}
      >
        <ProjectCarousel />
      </div>

      {/* Text content (left side) */}
      <div className="absolute left-[80px] top-[175px] w-96 inline-flex flex-col justify-start items-start gap-11">
        <div className="w-96 flex flex-col justify-start items-start gap-2.5">
          <div className="text-sky-900 text-5xl font-medium font-['Bricolage_Grotesque']">
            Success Stories
          </div>
          <div className="w-96 text-gray-600 text-xl font-medium font-['Poppins']">
            From startups to small businesses, we turn bold ideas into vibrant brand identities that spark growth and engagement.
          </div>
        </div>
        <div className="w-60 h-12 relative">
          <Link
            href="#portfolio"
            className="inline-block text-gray-600 text-2xl font-semibold font-['Poppins'] hover:text-sky-900 transition-colors"
          >
            See more work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
