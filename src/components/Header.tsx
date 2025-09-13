import React from "react";

const AnimatedNavbar = () => {
  const navLinks = [
    { name: "Services" },
    { name: "Projects" },
    { name: "Pricing" },
    { name: "About" },
  ];

  return (
    <nav
      className="
        flex flex-col justify-center items-center gap-2.5 px-5 py-1.5 h-10
        bg-white/5 rounded-[23px] outline-1 outline-white/50 backdrop-blur-sm
        transition-all duration-300 ease-in-out
        hover:bg-white/60 hover:px-10
      "
    >
      <div className="flex items-center justify-center self-stretch gap-5">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="
              flex items-center justify-center gap-2.5 cursor-pointer relative group
              text-blue-900
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-900
              after:origin-left after:transition-transform after:duration-300
              after:scale-x-0 group-hover:after:scale-x-100
            "
          >
            <span className="text-lg font-poppins">{link.name}</span>
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
          <div
            className={
              "flex items-center justify-center gap-2.5 cursor-pointer text-blue-900 transition-colors duration-200"
            }
          >
            <span className="text-lg font-poppins">En</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[120px] flex items-center z-50 pointer-events-none">
      <div className="container mx-auto flex items-center justify-between pointer-events-auto">
        {/* Logo Container, aligned to the left */}
        <div className="w-[158px] h-[40px] flex items-center justify-center border-2 border-white rounded-md text-white">
          Logo Placeholder
        </div>
        <AnimatedNavbar />
      </div>
    </header>
  );
};

export default Header;
