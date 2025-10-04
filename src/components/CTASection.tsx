"use client";

import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-7">
        {/* Text Content */}
        <div className="w-full flex flex-col items-center gap-2 sm:gap-2.5">
          <h2 className="text-center text-gray-600 text-2xl sm:text-3xl md:text-4xl font-normal font-['Poppins'] leading-tight">
            Bounce into Branding -
          </h2>
          <h3 className="text-center text-[#11406E] text-3xl sm:text-4xl md:text-5xl font-normal font-['Bricolage_Grotesque'] leading-tight">
            Claim 20% Off Your First Project Now
          </h3>
        </div>

        {/* CTA Button */}
        <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-[#11406E] hover:bg-[#0d3558] transition-colors duration-300 rounded-3xl inline-flex justify-center items-center gap-2 sm:gap-2.5 overflow-hidden group">
          <span className="text-center text-white text-lg sm:text-xl font-normal font-['Poppins']">
            Start a project
          </span>
          {/* Arrow Icon - Simplified SVG */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
