"use client";
import React, { useState, useEffect, useRef } from 'react';

// ProcessCard component, restored to original styling
interface ProcessCardProps {
  title: string;
  description: string;
  icon: string;
  isVisible: boolean;
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, description, icon, isVisible, index }) => {
  return (
    <div
      className={`w-[297px] h-[297px] p-4 bg-[#F6F7F8] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] overflow-hidden rounded-[20px] outline outline-[rgba(255,255,255,0.60)] outline-offset-[-1px] flex flex-col justify-start items-start gap-[10px] transition-all duration-700 ease-out transform absolute`}
      style={{
        zIndex: 4 - index,
        opacity: isVisible ? 1 : 0.9,
        transform: isVisible ? `translateX(${(index - 1.5) * 320}px)` : 'translateX(0px)',
      }}
    >
      <div className="relative flex flex-col justify-start items-start gap-[10px]">
        <div className="w-[79px] h-[79px] bg-[#D9D9D9] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] rounded-[20px]" />
        {icon && (
          <div className="w-20 h-20 absolute top-0 left-0 flex items-center justify-center">
            <img src={icon} alt={`${title} icon`} className="w-20 h-20 rounded-xl object-cover" />
          </div>
        )}
      </div>
      <div className="self-stretch text-[#11406E] text-[32px] font-['Bricolage_Grotesque'] font-semibold">
        {title}
      </div>
      <div className="self-stretch flex-1 text-[#4B5563] text-base font-['Poppins'] font-normal">
        {description}
      </div>
    </div>
  );
};

// ProcessSection component with scroll-triggered animation
const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const processSteps = [
    {
      title: 'Connect',
      description: 'Start with a free 30-minute discovery call. Pick the perfect plan for your needs, and we\'ll dive into bringing your brand vision to life.',
      icon: 'https://placehold.co/80x80/D9D9D9/D9D9D9?text=1'
    },
    {
      title: 'Submit',
      description: 'Share your project brief via our dedicated Slack channel or Notion workspace. We\'ll hit the ground running while you focus on growing your business.',
      icon: 'https://placehold.co/80x80/D9D9D9/D9D9D9?text=2'
    },
    {
      title: 'Refine',
      description: 'Receive your designs in 1–3 days. We\'ll tweak and revise as many times as needed until your brand bounces with 100% satisfaction.',
      icon: 'https://placehold.co/80x80/D9D9D9/D9D9D9?text=3'
    },
    {
      title: 'Shine',
      description: 'Get stunning results, stand out in your market, and enjoy the confidence of having BrandBounce as your creative partner on demand.',
      icon: 'https://placehold.co/80x80/D9D9D9/D9D9D9?text=4'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after the animation has been triggered once
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="w-full min-h-screen py-12 px-4 md:px-20 bg-white flex flex-col items-center justify-center gap-4 font-['Poppins']"
      >
        <div className="w-full max-w-7xl h-auto flex flex-col items-center justify-between gap-12">
          <div className={`p-4 flex flex-col items-center justify-center gap-4 max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-[#11406E] text-4xl lg:text-5xl font-['Bricolage_Grotesque'] font-semibold">
              Getting Started with BrandBounce is a Breeze
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium">
              Our process is designed for startups and small teams who need bold, professional branding without the hassle—fast, flexible, and fun.
            </p>
          </div>
          <div className="w-full flex justify-center h-[500px] relative overflow-hidden">
            <div className="relative flex items-center justify-center">
              {processSteps.map((step, index) => (
                <ProcessCard
                  key={index}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600&family=Poppins:wght@400;500&display=swap');
      </style>
    </>
  );
};

export default ProcessSection;