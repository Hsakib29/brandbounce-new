import React from "react";

export type BenefitCardProps = {
  // Image behind the card (optional)
  imageSrc?: string;
  // Tailwind classes for the overlay/filter layer (e.g., gradients, opacity)
  filterClassName?: string;
  // Outer container classes (width/height/rounded/bg, etc.)
  containerClassName?: string;
  // Text blocks (optional)
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  body?: React.ReactNode;
  // Tailwind classes to control text color and font styling
  textClassName?: string;
  // Control text alignment
  align?: "left" | "center" | "right";
  // Custom content completely overrides default title/subtitle/body rendering
  children?: React.ReactNode;
  // Inline styles
  style?: React.CSSProperties;
};

// Generic Card with optional background image and overlay filter
export const BenefitCard: React.FC<BenefitCardProps> = ({
  imageSrc,
  filterClassName,
  containerClassName = "",
  title,
  subtitle,
  body,
  textClassName = "text-white",
  align = "left",
  children,
  style,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] ${containerClassName}`}
      style={style}
    >
      {imageSrc ? (
        // Background image
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {/* Overlay / filter layer */}
      {filterClassName ? (
        <div className={`absolute inset-0 ${filterClassName}`} />
      ) : null}

      {/* Content */}
      <div
        className={`relative z-[1] p-4 sm:p-5 md:p-6 ${textClassName} ${
          align === "center"
            ? "text-center"
            : align === "right"
            ? "text-right"
            : "text-left"
        }`}
      >
        {children ? (
          children
        ) : (
          <div className="flex h-full w-full flex-col gap-2">
            {title ? (
              <div className="text-2xl md:text-3xl font-normal font-[Poppins] leading-tight">
                {title}
              </div>
            ) : null}
            {subtitle ? (
              <div className="text-base md:text-lg font-normal font-[Poppins] opacity-90">
                {subtitle}
              </div>
            ) : null}
            {body ? (
              <div className="text-sm md:text-base font-normal font-[Poppins] opacity-80">
                {body}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

// Small avatar group used in the stat card
const AvatarGroup: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="flex items-center gap-2">
      {images.slice(0, 4).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-10 w-10 rounded-full shadow-[0px_4.8px_4.8px_0px_rgba(255,255,255,0.25)]"
        />
      ))}
    </div>
  );
};

// Subtle glassy badge used on the motto card
const GlassBadge: React.FC<{ text: string; className?: string }> = ({
  text,
  className = "",
}) => {
  return (
    <div
      className={[
        "inline-flex h-10 items-center justify-center rounded-3xl px-[12px]",
        "bg-white/60 [outline-style:solid] outline-[0.5px] outline-white/5 outline-offset-2",
        "shadow-[inset_0px_2px_4px_0px_rgba(255,255,255,0.40)]",
        "backdrop-blur-[5px]",
        className,
      ].join(" ")}
    >
      <div className="text-sm font-normal font-[Poppins] text-white">
        {text}
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      {/* Heading */}
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center font-[Bricolage Grotesque] text-4xl md:text-5xl font-normal">
          <span className="text-sky-900">Why Choose </span>
          <span className="text-blue-500">brand</span>
          <span className="text-orange-500">bounce</span>
        </h2>

        {/* Responsive Bento Grid (mobile and desktop) */}
        <div className="grid grid-cols-3 md:grid-cols-4 [grid-template-rows:repeat(6,minmax(0,135px))] md:[grid-template-rows:repeat(7,minmax(0,200px))] gap-2 md:gap-5 m-4">
          {/* 0 - 50+ Brands Ignited */}
          <BenefitCard
            containerClassName="col-start-1 row-start-1 row-span-2 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2 bg-sky-950"
            textClassName="text-white"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="font-[Poppins] text-base">
                  50+ Brands Ignited
                </div>
                <AvatarGroup
                  images={[
                    "https://placehold.co/42x42",
                    "https://placehold.co/42x42",
                    "https://placehold.co/42x42",
                    "https://placehold.co/42x42",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-[Poppins] text-6xl leading-none">100%</div>
                <div className="font-[Poppins] text-base">Tailored Vibes</div>
              </div>
            </div>
          </BenefitCard>

          {/* 1 - Bold Brand Identity */}
          <BenefitCard
            containerClassName="col-start-2 row-start-1 col-span-2 row-span-2 md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-2 bg-neutral-900"
            imageSrc="https://placehold.co/620x400"
            filterClassName="bg-gradient-to-r from-zinc-300/50 to-neutral-500/50"
            textClassName="text-white"
            align="center"
            title={
              <span className="font-[Poppins] text-6xl leading-none">Bold</span>
            }
            subtitle={
              <span className="font-[Poppins] text-3xl">Brand Identity</span>
            }
          />

          {/* 2 - Flawless Every Pixel */}
          <BenefitCard
            containerClassName="col-start-1 row-start-3 col-span-2 md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-1 bg-neutral-400"
            imageSrc="https://placehold.co/320x200"
            textClassName="text-white"
            title={
              <span className="font-[Poppins] text-base">
                Flawless Every Pixel
              </span>
            }
          />

          {/* 3 - Lightning-Fast, Zero Shortcuts */}
          <BenefitCard
            containerClassName="col-start-3 row-start-3 row-span-2 md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1 bg-neutral-400"
            imageSrc="https://placehold.co/300x200"
            filterClassName="bg-gradient-to-l from-zinc-300 to-neutral-500/80"
            textClassName="text-white"
            title={
              <span className="font-[Poppins] text-base">
                Lightning-Fast, Zero Shortcuts
              </span>
            }
          />

          {/* 4 - Digital Designs That Pop */}
          <BenefitCard
            containerClassName="col-start-1 row-start-4 md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-2 bg-neutral-400"
            textClassName="text-white"
            title={
              <span className="font-[Poppins] text-base">
                Digital Designs That Pop
              </span>
            }
          />

          {/* 5 - Your Triumph Fuels Our Cheer */}
          <BenefitCard
            containerClassName="col-start-2 row-start-4 md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-1 bg-neutral-400"
            imageSrc="https://placehold.co/300x200"
            filterClassName="bg-gradient-to-l from-zinc-300 to-neutral-500/80"
            textClassName="text-white"
            title={
              <span className="font-[Poppins] text-base">
                Your Triumph Fuels Our Cheer
              </span>
            }
          />

          {/* 6 - Our Motto */}
          <BenefitCard
            containerClassName="col-start-1 row-start-5 row-span-2 md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-3 bg-neutral-400"
            imageSrc="https://placehold.co/320x620"
            filterClassName="bg-gradient-to-b from-zinc-300/50 to-neutral-500/50"
            textClassName="text-white"
          >
            <div className="flex h-full flex-col justify-end gap-4">
              <GlassBadge text="Our Motto" />
              <div className="font-[Poppins] text-base">
                We Don&apos;t Just Design. We Unleash Brands That Stick and
                Soar.
              </div>
            </div>
          </BenefitCard>

          {/* 7 - Impact That Echoes */}
          <BenefitCard
            containerClassName="col-start-2 row-start-5 col-span-2 md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-1 bg-neutral-400"
            imageSrc="https://placehold.co/300x200"
            filterClassName="bg-gradient-to-l from-zinc-300 to-neutral-500/80"
            textClassName="text-white"
            title={
              <span className="font-[Poppins] text-base">
                Impact That Echoes
              </span>
            }
          />

          {/* 8 - Testimonial */}
          <BenefitCard
            containerClassName="col-start-2 row-start-6 col-span-2 md:col-start-3 md:row-start-4 md:col-span-1 md:row-span-1 rounded-[20px] [outline-style:solid] outline-1 outline-offset-[-1px] outline-gray-300 bg-white"
            textClassName="text-gray-700"
          >
            <div className="flex h-full flex-col justify-between">
              <p className="text-sm md:text-xs font-[Poppins]">
                "BrandBounce didn&apos;t just redesign our look—they infused it
                with energy that doubled our social engagement overnight. Total
                game-changer!"
              </p>
              <p className="mt-4 text-sm font-[Poppins]">
                Sarah Patel, Co-Founder, UrbanEats Cafe
              </p>
            </div>
          </BenefitCard>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
