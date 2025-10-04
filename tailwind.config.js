import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11406E",
        "brand-blue": "#11406E",
      },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      fontSize: {
        64: "64px",
      },
      backgroundImage: {
        "radial-new":
          "radial-gradient(ellipse 133.06% 77.69% at 50% 100%, #6e869f 0%, rgba(10, 37, 64, 0) 100%)",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
        shine: "shine 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shine: {
          "0%": { left: "-25%" },
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".avatar-group": {
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
        },
        ".cta-island": {
          "@media (max-width: 768px)": {
            "padding-top": "2rem",
            "padding-bottom": "2rem",
          },
        },
      });
    }),
  ],
};
