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
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "288px 288px 288px 320px",
    gridTemplateRows: "auto auto auto",
    gridTemplateAreas:
      '"area1 area2 area2 area3" "area5 area9 area7 area4" "area6 area9 area8 ."',
    gap: "20px",
    alignItems: "start",
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      {/* Heading */}
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center font-[Bricolage Grotesque] text-4xl md:text-5xl font-normal">
          <span className="text-sky-900">Why Choose </span>
          <span className="text-blue-500">brand</span>
          <span className="text-orange-500">bounce</span>
        </h2>

        {/* Bento grid layout */}
        <div className="mx-auto w-fit" style={gridStyle}>
          {/* Stat card */}
          <BenefitCard
            containerClassName="h-96 bg-sky-950"
            textClassName="text-white"
            style={{ gridArea: "area1" }}
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

          {/* Bold Brand Identity */}
          <BenefitCard
            containerClassName="h-96 bg-neutral-900"
            imageSrc="https://placehold.co/620x400"
            filterClassName="bg-gradient-to-r from-zinc-300/50 to-neutral-500/50"
            textClassName="text-white"
            align="center"
            style={{ gridArea: "area2" }}
            title={
              <span className="font-[Poppins] text-6xl leading-none">Bold</span>
            }
            subtitle={
              <span className="font-[Poppins] text-3xl">Brand Identity</span>
            }
          />

          {/* Flawless Every Pixel */}
          <BenefitCard
            containerClassName="h-48 bg-neutral-400"
            imageSrc="https://placehold.co/320x200"
            textClassName="text-white"
            style={{ gridArea: "area3" }}
            title={
              <span className="font-[Poppins] text-base">
                Flawless Every Pixel
              </span>
            }
          />

          {/* Motto card */}
          <BenefitCard
            containerClassName="h-48 bg-neutral-400"
            imageSrc="https://placehold.co/320x620"
            filterClassName="bg-gradient-to-b from-zinc-300/50 to-neutral-500/50"
            textClassName="text-white"
            style={{ gridArea: "area4" }}
          >
            <div className="flex h-full flex-col justify-end gap-4">
              <GlassBadge text="Our Motto" />
              <div className="font-[Poppins] text-base">
                We Don&apos;t Just Design. We Unleash Brands That Stick and
                Soar.
              </div>
            </div>
          </BenefitCard>

          {/* Lightning Fast */}
          <BenefitCard
            containerClassName="h-48 bg-neutral-400"
            imageSrc="https://placehold.co/300x200"
            filterClassName="bg-gradient-to-l from-zinc-300 to-neutral-500/80"
            textClassName="text-white"
            style={{ gridArea: "area5" }}
            title={
              <span className="font-[Poppins] text-base">
                Lightning-Fast, Zero Shortcuts
              </span>
            }
          />

          {/* Impact That Echoes */}
          <BenefitCard
            containerClassName="h-48 bg-neutral-400"
            imageSrc="https://placehold.co/300x200"
            filterClassName="bg-gradient-to-l from-zinc-300 to-neutral-500/80"
            textClassName="text-white"
            style={{ gridArea: "area6" }}
            title={
              <span className="font-[Poppins] text-base">
                Impact That Echoes
              </span>
            }
          />

          {/* Your Triumph */}
          <BenefitCard
            containerClassName="h-48 bg-neutral-400"
            imageSrc="https://placehold.co/300x200"
            filterClassName="bg-gradient-to-l from-zinc-300 to-neutral-500/80"
            textClassName="text-white"
            style={{ gridArea: "area7" }}
            title={
              <span className="font-[Poppins] text-base">
                Your Triumph Fuels Our Cheer
              </span>
            }
          />

          {/* Testimonial */}
          <div
            className="h-48 rounded-[20px] [outline-style:solid] outline-1 outline-offset-[-1px] outline-gray-600 relative overflow-hidden"
            style={{ gridArea: "area8" }}
          >
            <div className="w-52 left-[18px] top-[24px] absolute justify-start text-gray-600 text-xs font-normal font-[Poppins]">
              &quot;BrandBounce didn&apos;t just redesign our look—they infused
              it with energy that doubled our social engagement overnight. Total
              game-changer!&quot;
            </div>
            <div className="left-[18px] top-[129px] absolute justify-start text-gray-600 text-base font-[Poppins]">
              Sarah Patel, Co-Founder, UrbanEats Cafe
            </div>
          </div>
                    {/* Digital Designs That Pop */}
          <BenefitCard
            containerClassName="h-[404px] bg-neutral-400"
            textClassName="text-white"
            style={{ gridArea: "area9" }}
            title={
              <span className="font-[Poppins] text-base">
                Digital Designs That Pop
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
