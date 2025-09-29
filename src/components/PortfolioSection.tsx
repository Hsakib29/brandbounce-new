"use client";

import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import Link from "next/link";

const PortfolioSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto relative bg-gray-50 overflow-visible lg:overflow-hidden lg:h-[600px] py-10 md:py-12">
      <div className="grid lg:grid-cols-[384px_1fr] items-start lg:items-center gap-y-8 lg:gap-y-0 px-6 md:px-10 lg:px-0 lg:pl-[80px] lg:pr-[80px]">
        {/* Text content (left column on lg, stacked on small) */}
        <div className="lg:w-96 inline-flex flex-col justify-start items-start gap-11">
          <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-2.5">
            <div className="text-sky-900 text-4xl md:text-5xl font-medium font-['Bricolage_Grotesque']">
              Success Stories
            </div>
            <div className="w-full lg:w-96 text-gray-600 text-lg md:text-xl font-medium font-['Poppins']">
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

        {/* Carousel container (right column on lg, stacked on small) */}
        <div className="relative h-[520px]">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
