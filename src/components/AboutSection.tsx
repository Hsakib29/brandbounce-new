import FloatingCard from "./FloatingCard";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] min-h-[1024px] mx-auto flex flex-col items-center justify-center px-8 py-16 mt-24">
      <div
        style={{
          position: "relative",
          width: 600,
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 31,
        }}
      >
        {/* Layered FloatingCard container */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1920,
            height: 600,
            zIndex: 2,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left 300x600 div with 3 FloatingCards, variant='right' */}
          <div
            style={{
              width: 300,
              height: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div style={{ transform: "rotate(15deg)" }}>
              <FloatingCard
                text="Video Editing"
                theme="purple"
                variant="right"
                icon="mdi:video"
                active={false}
              />
            </div>
            <FloatingCard
              text="Print Design"
              theme="yellow"
              variant="right"
              icon="mdi:printer"
              active={false}
            />
            <div style={{ transform: "rotate(-15deg)" }}>
              <FloatingCard
                text="Motion Graphic"
                theme="blue"
                variant="right"
                icon="mdi:motion"
                active={false}
              />
            </div>
          </div>
          {/* Right 300x600 div with 3 FloatingCards, variant='left' */}
          <div
            style={{
              width: 300,
              height: 600,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ transform: "rotate(-15deg)" }}>
              <FloatingCard
                text="Brand Identity"
                theme="purple"
                variant="left"
                icon="mdi:palette"
                active={false}
              />
            </div>
            <FloatingCard
              text="Marketing"
              theme="lime"
              variant="left"
              icon="mdi:bullhorn"
              active={false}
            />
            <div style={{ transform: "rotate(15deg)" }}>
              <FloatingCard
                text="Web Design"
                theme="orange"
                variant="left"
                icon="mdi:web"
                active={false}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            {/* Left line with dot as a group */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 70,
                  height: 2,
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.7) 100%)",
                  marginRight: 0,
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#111",
                  boxShadow: "0 0 8px 0 rgba(0,0,0,0.15)",
                  marginLeft: 0,
                }}
              />
            </div>
            {/* Text */}
            <div
              style={{
                color: "#0A2540",
                fontSize: 24,
                fontFamily: "Poppins",
                fontWeight: 400,
                wordWrap: "break-word",
                textAlign: "center",
                minWidth: 100,
              }}
            >
              Hey there!
            </div>
            {/* Right line with dot as a group */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#111",
                  boxShadow: "0 0 8px 0 rgba(0,0,0,0.15)",
                  marginRight: 0,
                }}
              />
              <div
                style={{
                  width: 70,
                  height: 2,
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.0) 100%)",
                  marginLeft: 0,
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              textAlign: "center",
              color: "#0A2540",
              fontSize: 36,
              fontFamily: "Bricolage Grotesque",
              fontWeight: 400,
              wordWrap: "break-word",
            }}
          >
            We spark vibrant brand identities for startups, connecting your
            vision to thrilled customers with bold, creative designs.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
