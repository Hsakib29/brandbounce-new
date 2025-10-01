import React from "react";

// The InfiniteScrollRow component handles the continuous horizontal scrolling of one row.
// It accepts a className prop to define its absolute position (top/left) within its parent.
const InfiniteScrollRow = ({
  children,
  reverse = false,
  pauseOnHover = false,
  className = "", // Accepts absolute positioning classes like "left-[-753px] top-[92px]"
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  // Use a unique style key for animation to ensure it works correctly when paused
  const animationKeyframes = reverse ? "marquee-reverse" : "marquee";
  const animationDuration = "40s";

  return (
    // The content is wrapped twice for the seamless looping effect
    // Note: Tailwind doesn't support arbitrary values like 'left-[-753.79px]' directly,
    // so we use brackets where possible and rely on the style block for keyframes.
    <div
      className={`absolute inline-flex justify-start items-center gap-7 whitespace-nowrap ${className} ${
        pauseOnHover ? "hover:[animation-play-state:paused]" : ""
      }`}
      style={{
        animation: `${animationKeyframes} ${animationDuration} linear infinite`,
      }}
    >
      {/* The list of testimonial cards repeated for seamless scrolling */}
      {children}
      {children}
    </div>
  );
};

// The TestimonialCard component displays the content of a single testimonial.
const TestimonialCard = ({
  name,
  company,
  testimonial,
}: {
  name: string;
  company: string;
  testimonial: string;
}) => {
  // Using fixed w-96 (384px) to match the fixed width required in the layout
  return (
    <div className="w-96 h-80 px-3.5 py-2.5 bg-neutral-100 rounded-xl outline-1 outline-offset-[-0.90px] outline-zinc-200 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
      {/* User Info: Removed 'flex-1' from this container to stop it from 
        stretching vertically and pushing the testimonial text down.
      */}
      <div className="inline-flex justify-start items-center gap-3">
        <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div className="inline-flex flex-col justify-start items-start">
          {/* Name: Updated to text-2xl and font-bold to match the image's appearance. */}
          <div className="justify-start text-sky-950 text-2xl font-bold font-['Poppins']">
            {name}
          </div>
          <div className="justify-start text-blue-500 text-lg font-medium font-['Poppins']">
            {company}
          </div>
        </div>
      </div>
      {/* Testimonial Text */}
      <div className="p-2.5">
        <div className="text-black text-lg font-normal font-['Poppins'] break-words whitespace-normal">
          {testimonial}
        </div>
      </div>
    </div>
  );
};

// Main component to assemble the testimonial layout
const TestimonialsSection = () => {
  const testimonials = [
    "Working with this team was a game-changer for our business. Their insights were invaluable, and the execution was flawless.",
    "The branding strategy they developed helped us stand out in a crowded market. Highly recommend their services!",
    "From concept to launch, their attention to detail and creativity exceeded our expectations. A true partner in success.",
    "They transformed our outdated image into something modern and engaging. Our customers love the new look!",
    "Professional, responsive, and innovative. BrandBounce delivered results that spoke for themselves.",
    "Their marketing campaigns drove significant growth for us. We saw a 40% increase in engagement within months.",
    "The team listened to our needs and delivered a brand identity that perfectly captured our vision.",
    "Exceptional work on our website redesign. It's not just beautiful, it's functional and user-friendly.",
    "BrandBounce's expertise in digital marketing helped us reach new audiences we never thought possible.",
    "Collaborating with them was seamless. They brought fresh ideas and executed them with precision.",
  ];

  const firstRowTestimonials = [
    {
      name: "Terry Marvin",
      company: "Hand - Hills",
      testimonial: testimonials[0],
    },
    {
      name: "Eleanor Dooley",
      company: "Emmerich, Sanford and Ledner",
      testimonial: testimonials[1],
    },
    {
      name: "Jimmy Bailey",
      company: "Waters, Gleason and Feeney",
      testimonial: testimonials[2],
    },
    {
      name: "Ms. Bradford Aufderhar",
      company: "Wunsch, Farrell and Dare",
      testimonial: testimonials[3],
    },
    {
      name: "Arthur Prosacco",
      company: "Rodriguez and Sons",
      testimonial: testimonials[4],
    },
  ];

  const secondRowTestimonials = [
    {
      name: "Cecilia Considine",
      company: "Carroll Inc",
      testimonial: testimonials[5],
    },
    {
      name: "Juana Luettgen",
      company: "Schaefer - Harber",
      testimonial: testimonials[6],
    },
    {
      name: "Pamela Yost",
      company: "Lynch and Sons",
      testimonial: testimonials[7],
    },
    {
      name: "Glenn Carter",
      company: "Feest - Abbott",
      testimonial: testimonials[8],
    },
    {
      name: "Lynette Considine",
      company: "Schiller - Armstrong",
      testimonial: testimonials[9],
    },
  ];

  return (
    <>
      {/* 1. Global Keyframes for Marquee Effect */}
      <style>{`
        /* Note: Tailwind's JIT handles the animation utility classes, but defining 
           the keyframes explicitly ensures compatibility and control over the specific 
           animation logic used by the component's 'style' prop. */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        /* Custom class definitions for precise fractional offsets */
        .left-[-753\.79px] { left: -753.79px; }
        .top-\[91\.97px\] { top: 91.97px; }
        .left-[-41\.48px] { left: -41.48px; }
        .top-\[474\.28px\] { top: 474.28px; }
        .w-\[1082px\] { width: 1082px; }
        .h-\[901\.67px\] { height: 901.67px; }
      `}</style>

      {/* 2. Main Outer Container: w-[1917.01px] h-[1000px] relative bg-gray-50 */}
      {/* Using w-full and responsive classes for better adaptability while respecting the required min size. */}
      <div className="w-full min-h-[1000px] relative bg-gray-50 font-['Inter'] px-20 py-8 overflow-hidden">
        {/* 3. Static Content: Title and Description Section */}
        {/* Positioned absolutely as per the original structure, adapted for responsiveness. */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:absolute lg:top-[436px] lg:left-[78px] inline-flex flex-col justify-start items-start gap-2.5 mx-auto lg:mx-0">
          <div className="self-stretch justify-start text-sky-900 text-4xl md:text-5xl font-medium font-['Bricolage_Grotesque']">
            What Our Clients Say
          </div>
          <div className="self-stretch justify-start text-gray-600 text-base md:text-xl font-medium font-['Poppins']">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with BrandBounce.
          </div>
        </div>

        {/* 4. Marquee Viewport Container (The area holding the scrolling cards) 
             This is the w-[1082px] h-[901.67px] left-[776px] top-[49px] absolute block. 
             Note: Tailwind requires escaping dots in arbitrary values like '901.67px' or defining them in the style block.
        */}
        <div
          data-state="Marquee-Viewport"
          className="w-[1082px] h-[901.67px] absolute left-[776px] top-[49px] overflow-hidden hidden lg:block"
        >
          {/* Row 1 (Forward Scroll, starts far left and is pushed down slightly) */}
          <InfiniteScrollRow
            pauseOnHover={true}
            className="left-[-753.79px] top-[91.97px]"
          >
            {firstRowTestimonials.map((t, i) => (
              <TestimonialCard key={`f-${i}`} {...t} />
            ))}
          </InfiniteScrollRow>

          {/* Row 2 (Reverse Scroll, starts near the left and is pushed down more) */}
          <InfiniteScrollRow
            reverse={true}
            pauseOnHover={true}
            className="left-[-41.48px] top-[474.28px]"
          >
            {secondRowTestimonials.map((t, i) => (
              <TestimonialCard key={`s-${i}`} {...t} />
            ))}
          </InfiniteScrollRow>

          {/* 5. Gradient Overlay: bg-gradient-to-r from-gray-50 via-white/0 to-gray-50 */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white/0 to-gray-50 pointer-events-none" />
        </div>

        {/* Added a simpler, standard layout for mobile/tablet where absolute positioning is less useful */}
        <div className="lg:hidden mt-8 space-y-4">
          <h3 className="text-xl font-bold text-sky-900">
            Featured Testimonials
          </h3>
          <div className="space-y-4">
            {firstRowTestimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard key={`m-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
