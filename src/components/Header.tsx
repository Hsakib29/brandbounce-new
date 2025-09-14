"use client";
import React from "react";
import switchStyles from "./SwitchToggle.module.css";
import Image from "next/image";
import { useState } from "react";

const AnimatedNavbar: React.FC = () => {
  const navLinks = [
    { name: "Services" },
    { name: "Projects" },
    { name: "Pricing" },
    { name: "About" },
  ];
  return (
    <nav className="flex flex-col justify-center items-center gap-2.5 px-5 py-1.5 h-10 bg-white/5 rounded-[23px] outline-1 outline-white/50 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/60 hover:px-10">
      <div className="flex items-center justify-center self-stretch gap-5">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="flex items-center justify-center gap-2.5 cursor-pointer relative group text-[#11406E] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#11406E] after:origin-left after:transition-transform after:duration-300 after:scale-x-0 group-hover:after:scale-x-100"
          >
            <span className="text-lg font-poppins hover:underline">
              {link.name}
            </span>
          </div>
        ))}
        {/* Language selector section */}
        <div className="flex items-center justify-center w-auto gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#11406E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <div className="flex items-center justify-center gap-2.5 cursor-pointer text-[#11406E] transition-colors duration-200">
            <span className="text-lg font-poppins hover:underline">En</span>
          </div>
        </div>
      </div>
    </nav>
  );
  // Remove stray closing tags
};

const Header = () => {
  const [toggleBg, setToggleBg] = useState(false);

  // Change main background color when toggled
  if (typeof window !== "undefined") {
    const main = document.querySelector("main");
    if (main) {
      main.style.background = toggleBg ? "#FE5D26" : "white";
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full h-[120px] flex items-center z-50 pointer-events-none px-[30px]">
      <div className="w-full flex items-center justify-between pointer-events-auto">
        {/* Logo Container, aligned to the left */}
        <div className="w-[158px] h-[40px] flex flex-row items-center text-white [mix-blend-mode:plus-darker]">
          <Image
            src="/logo-text.svg"
            alt="Logo"
            width={158}
            height={40}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center gap-6">
          <AnimatedNavbar />
          {/* Animated Switch Toggle - outside navbar, right of navbar */}
          <label className={switchStyles.switch}>
            <input
              type="checkbox"
              checked={toggleBg}
              onChange={() => setToggleBg((prev: boolean) => !prev)}
            />
            <span className={switchStyles.slider}></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
