export default function FooterSection() {
  return (
    <footer className="w-full relative">
      {/* 1. Elevated CTA / Team Section (The "Island") */}
      <section className="max-w-6xl w-11/12 mx-auto cta-island bg-gray-300/80 shadow-2xl backdrop-blur-lg rounded-[3rem] p-8 md:p-16 relative z-10 -mb-24 md:-mb-32 mt-16">
        {/* Background Blob/Watermark Effect (mimicking the faint shapes in the reference image) */}
        <div className="absolute inset-0 z-0 opacity-50">
          {/* Large, subtle, rounded shapes */}
          <div className="absolute -left-1/4 -top-1/2 w-1/2 h-full bg-gray-400/40 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute right-1/4 -bottom-1/2 w-1/2 h-full bg-gray-400/40 rounded-full blur-3xl opacity-50"></div>
          {/* Central, stylized shape (like the subtle logo shown in the reference) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-[90%] bg-sky-900/5 rounded-full blur-xl"></div>
        </div>

        {/* Main Content (Text and CTA) */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left: Title */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-sky-900 text-6xl font-bold font-bricolage leading-tight">
              Lets Create <br className="hidden md:block" />
              Together
            </h2>
          </div>

          {/* Right: Email Card (Refined to match new reference code and enhance glassmorphism) */}
          <a
            href="mailto:demo@email.com"
            className="transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]
                        px-8 py-5 bg-white/30 rounded-[20px] shadow-xl backdrop-blur-xl inline-flex justify-start items-center
                        gap-24 overflow-hidden cursor-pointer border border-transparent hover:border-white/50"
          >
            <div className="inline-flex flex-col justify-center items-start gap-1">
              {/* Text size updated to 5xl */}
              <div className="justify-start text-sky-900 text-5xl font-medium font-bricolage">
                Email Us
              </div>
              {/* Text size updated to 2xl */}
              <div className="w-56 justify-start text-sky-900 text-2xl font-medium font-poppins">
                demo@email.com
              </div>
            </div>

            {/* Email Icon (Updated to use a proper SVG envelope) */}
            <div className="w-24 h-24 relative flex items-center justify-center">
              <svg
                className="w-16 h-16 text-sky-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="M3 7l9 6 9-6"></path>
              </svg>
            </div>
          </a>
        </div>

        {/* Team Avatars Arc - Positioning updated for a smaller, tighter arc */}
        <div
          className="avatar-group w-full max-w-3xl hidden md:block"
          style={{ top: "-5rem" }}
        >
          {/* Avatar 1: Linda - Tighter arc, less rotation */}
          <div className="absolute -left-24 top-24 transform -rotate-30">
            <img
              className="w-28 h-28 rounded-full border-4 border-slate-200 object-cover shadow-lg"
              src="https://placehold.co/112x112/A0B9C9/0A2540?text=P1"
              alt="Linda, Editor"
            />
          </div>

          {/* Avatar 2: Terry - Closer to center and higher */}
          <div className="absolute left-10 top-10 transform -rotate-10">
            <img
              className="w-32 h-32 rounded-full border-4 border-slate-200 object-cover shadow-lg"
              src="https://placehold.co/128x128/B9A0C9/0A2540?text=P2"
              alt="Terry, UI/UX Designer"
            />
          </div>

          {/* Avatar 3: Sidney (Center) - Largest size, highest point, no rotation */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0">
            <img
              className="w-36 h-36 rounded-full border-4 border-slate-200 object-cover shadow-xl"
              src="https://placehold.co/144x144/C9B9A0/0A2540?text=P3"
              alt="Sidney, Founder"
            />
          </div>

          {/* Avatar 4: Sara - Closer to center and higher */}
          <div className="absolute right-10 top-10 transform rotate-10">
            <img
              className="w-32 h-32 rounded-full border-4 border-slate-200 object-cover shadow-lg"
              src="https://placehold.co/128x128/A0C9B9/0A2540?text=P4"
              alt="Sara, Developer"
            />
          </div>

          {/* Avatar 5: Mandy - Tighter arc, less rotation */}
          <div className="absolute -right-24 top-24 transform rotate-30">
            <img
              className="w-28 h-28 rounded-full border-4 border-slate-200 object-cover shadow-lg"
              src="https://placehold.co/112x112/B9A0B9/0A2540?text=P5"
              alt="Mandy, Designer"
            />
          </div>
        </div>
      </section>

      {/* 2. Main Footer Body (Sky-950) - UPDATED BACKGROUND STRUCTURE */}
      <div className="bg-sky-900 rounded-tl-3xl rounded-tr-3xl pt-32 relative overflow-hidden">
        {/* New Background Container Structure */}
        <div className="absolute inset-x-0 top-0 h-[350px] md:h-[450px] mx-auto z-10 overflow-hidden">
          {/* Inner element applying the new gradient, anchored to the bottom */}
          <div className="absolute inset-x-0 bottom-0 w-full h-full bg-radial-new"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          {/* Main Content Row: Description & Nav Links */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 mb-16">
            {/* Column 1: Description */}
            <div className="lg:col-span-2">
              <p className="text-white text-lg md:text-2xl font-normal font-bricolage max-w-md">
                We&apos;re not your average branding agency. We&apos;re a
                vibrant, fun-loving crew passionate about crafting **bold brands
                for startups** that pop and deliver standout results.
              </p>
            </div>

            {/* Column 2-4: Navigation Links */}
            <div className="grid grid-cols-3 gap-8 lg:col-span-3">
              {/* Navigate */}
              <div>
                <h3 className="text-white text-base font-normal font-bricolage mb-4 opacity-70">
                  Navigate
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social & Stuff */}
              <div>
                <h3 className="text-white text-base font-normal font-bricolage mb-4 opacity-70">
                  Social & Stuff
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      Twitter (X)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      Dribbble
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      Behance
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white text-base font-normal font-bricolage mb-4 opacity-70">
                  Contact
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      000-000-0000
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:demo@email.com"
                      className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                    >
                      demo@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Massive Logo Section */}
          <div className="mt-16 mb-4 flex justify-start items-center relative z-20">
            {/* SVG logo representing 'brandbounce' to replace the image */}
            <svg
              viewBox="0 0 1000 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-white max-w-3xl lg:max-w-5xl"
            >
              {/* This SVG is a placeholder, mimicking the bold, sans-serif style of the reference logo image */}
              <text
                x="0"
                y="100"
                fontFamily="Bricolage Grotesque"
                fontSize="120"
                fontWeight="700"
                fill="currentColor"
              >
                brandbounce
              </text>
            </svg>
          </div>

          {/* Footer Bottom: Copyright and Legal Links - Adjusted layout to match image */}
          {/* Removed border-t and moved content into separate columns */}
          <div className="pt-4 pb-8 flex flex-col sm:flex-row justify-between items-center text-sm md:text-base font-medium font-bricolage">
            {/* Left: Copyright */}
            <div className="text-white/70 order-2 sm:order-1 mb-2 sm:mb-0">
              &copy; Copyright Brandbounce
            </div>

            {/* Right: Legal Links */}
            <div className="flex justify-center items-center gap-4 text-white/70 order-1 sm:order-2">
              <a href="#" className="hover:text-white transition duration-150">
                Terms of service
              </a>
              <span className="text-white/50">|</span>
              <a href="#" className="hover:text-white transition duration-150">
                Privacy Policy
              </a>
              <span className="text-white/50">|</span>
              <a href="#" className="hover:text-white transition duration-150">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
