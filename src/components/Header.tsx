"use client";
import React, { useState, useEffect } from "react";
import switchStyles from "./SwitchToggle.module.css";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

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

interface HeaderProps {
  toggleBg: boolean;
  setToggleBg: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ toggleBg, setToggleBg }) => {
  const { scrollY } = useScroll();
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroHeight = typeof window !== "undefined" ? window.innerHeight : 1000; // fallback

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolledPastHero(latest > heroHeight);
    });
    return unsubscribe;
  }, [scrollY, heroHeight]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services" },
    { name: "Projects" },
    { name: "Pricing" },
    { name: "About" },
  ];

  const handleMobileMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[120px] flex items-center z-50 pointer-events-none px-4 sm:px-6 lg:px-8">
      <div className="w-full flex items-center justify-between pointer-events-auto">
        {/* Logo Container, aligned to the left */}
        <div className="relative w-[158px] h-[40px] flex flex-row items-center text-white [mix-blend-mode:plus-darker]">
          {/* Logo Text - fades out */}
          <motion.div
            animate={{ opacity: isScrolledPastHero ? 0 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center"
          >
            <Image
              src="/logo-text.svg"
              alt="Logo Text"
              width={158}
              height={40}
              className="object-contain"
              priority
            />
          </motion.div>
          {/* Logo Icon - scales up from bottom left */}
          <motion.div
            animate={{
              scale: isScrolledPastHero ? 1 : 0,
              opacity: isScrolledPastHero ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: isScrolledPastHero ? 0.2 : 0, // Delay when appearing
            }}
            style={{ transformOrigin: "bottom left" }}
            className="absolute inset-0 flex items-center"
          >
            <Image
              src="/logo-icon.svg"
              alt="Logo Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </motion.div>
        </div>
        <div className="flex items-center gap-6">
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:block">
            <AnimatedNavbar />
          </div>

          {/* Hamburger Menu Button - Visible on mobile */}
          <button
            className="hamburger-button lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 bg-white/5 rounded-lg outline-1 outline-white/50 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/60 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-[#11406E] rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-[#11406E] rounded-full"
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-[#11406E] rounded-full"
            />
          </button>
          {/* Animated Switch Toggle - outside navbar, right of navbar */}
          <label className={switchStyles.switch}>
            <input
              type="checkbox"
              checked={toggleBg}
              onChange={() => setToggleBg((prev) => !prev)}
            />
            <span className={switchStyles.slider}></span>
          </label>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mobile-menu fixed top-0 right-0 w-full sm:w-80 h-screen bg-white/95 backdrop-blur-lg shadow-2xl lg:hidden z-40 pt-32"
      >
        <nav className="flex flex-col items-center gap-8 px-8">
          {/* Navigation Links */}
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                delay: isMobileMenuOpen ? index * 0.1 : 0,
              }}
              className="w-full"
            >
              <div
                onClick={handleMobileMenuLinkClick}
                className="flex items-center justify-center gap-2.5 cursor-pointer text-[#11406E] py-3 px-6 rounded-lg hover:bg-white/60 transition-all duration-200 border-b border-[#11406E]/10"
              >
                <span className="text-xl font-poppins font-medium">
                  {link.name}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Language Selector in Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : 50,
            }}
            transition={{
              duration: 0.3,
              delay: isMobileMenuOpen ? navLinks.length * 0.1 : 0,
            }}
            className="flex items-center justify-center gap-2 mt-4 py-3 px-6 bg-white/5 rounded-lg outline-1 outline-[#11406E]/20"
          >
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
            <span className="text-lg font-poppins text-[#11406E]">En</span>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
