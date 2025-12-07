export default function FooterSection() {
  return (
    <footer className="w-full relative">
      {/* === CTA Section (Island) === */}
      <section className="max-w-6xl w-11/12 mx-auto cta-island bg-slate-200/80 shadow-2xl backdrop-blur-lg rounded-[3rem] p-8 md:p-16 relative z-40 -mb-24 md:-mb-32 mt-16">
        {/* Team Avatars Arc */}
        <div className="absolute top-[-5rem] left-1/2 -translate-x-1/2 w-full max-w-3xl hidden md:block">
          {/* Avatar 1 */}
          <div className="absolute -left-24 top-24 transform -rotate-30">
            <img
              className="w-28 h-28 rounded-full border-4 border-slate-200 object-cover shadow-lg"
              src="https://placehold.co/112x112/A0B9C9/0A2540?text=P1"
              alt="Linda, Editor"
            />
          </div>
          {/* Avatar 2 */}
          <div className="absolute left-10 top-10 transform -rotate-10">
            <img
              className="w-32 h-32 rounded-full border-4 border-slate-200 object-cover shadow-lg"
              src="https://placehold.co/128x128/B9A0C9/0A2540?text=P2"
              alt="Terry, UI/UX Designer"
            />
          </div>
          {/* Avatar 3 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0">
            <img
              className="w-36 h-36 rounded-full border-4 border-slate-200 object-cover shadow-xl"
              src="https://placehold.co/144x144/C9B9A0/0A2540?text=P3"
              alt="Sidney, Founder"
            />
          </div>
          {/* Avatar 4 */}
          <div className="absolute right-10 top-10 transform rotate-10">
            <img
              className="w-32 h-32 rounded-full border-4 border-slate-200 object-cover shadow-lg"
              src="https://placehold.co/128x128/A0C9B9/0A2540?text=P4"
              alt="Sara, Developer"
            />
          </div>
          {/* Avatar 5 */}
          <div className="absolute -right-24 top-24 transform rotate-30">
            <img
              className="w-28 h-28 rounded-full border-4 border-slate-200 object-cover shadow-lg"
              src="https://placehold.co/112x112/B9A0B9/0A2540?text=P5"
              alt="Mandy, Designer"
            />
          </div>
        </div>

        {/* Background Blobs */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -left-1/4 -top-1/2 w-1/2 h-full bg-slate-300/40 rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 -bottom-1/2 w-1/2 h-full bg-slate-300/40 rounded-full blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-[90%] bg-sky-900/10 rounded-full blur-xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-sky-900 text-5xl font-bold font-bricolage leading-tight">
              Lets Create <br className="hidden md:block" /> Together
            </h2>
          </div>

          {/* Email Card */}
          <a
            href="mailto:demo@email.com"
            className="transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]
                        px-6 py-4 bg-white/80 rounded-[20px] shadow-lg backdrop-blur-xl inline-flex justify-start items-center
                        gap-24 overflow-hidden cursor-pointer border border-transparent hover:border-white/50"
          >
            <div className="inline-flex flex-col justify-center items-start gap-1">
              <div className="text-sky-900 text-5xl font-medium font-bricolage">
                Email Us
              </div>
              <div className="text-sky-900 text-2xl font-medium font-poppins">
                demo@email.com
              </div>
            </div>

            <div className="w-24 h-24 relative flex items-center justify-center">
              <svg
                className="w-16 h-16 text-sky-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
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
      </section>

      {/* === Footer Body === */}
      <div className="bg-sky-900 rounded-tl-3xl rounded-tr-3xl pt-32 relative overflow-hidden z-10">
        <div className="absolute inset-x-0 top-0 h-[350px] md:h-[450px] mx-auto z-0 overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 w-full h-full bg-radial-new"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Description & Links */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 mb-16">
            <div className="lg:col-span-2">
              <p className="text-white text-lg md:text-2xl font-normal font-bricolage max-w-md">
                We&apos;re not your average branding agency. We&apos;re a
                vibrant, fun-loving crew passionate about crafting
                <strong> bold brands for startups </strong>
                that pop and deliver standout results.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 lg:col-span-3">
              {/* Navigate */}
              <div>
                <h3 className="text-white text-base font-normal font-bricolage mb-4 opacity-70">
                  Navigate
                </h3>
                <ul className="space-y-2">
                  {["Services", "Projects", "Pricing", "About", "Blog"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-white text-base font-normal font-bricolage mb-4 opacity-70">
                  Social & Stuff
                </h3>
                <ul className="space-y-2">
                  {[
                    "Twitter (X)",
                    "Instagram",
                    "LinkedIn",
                    "Dribbble",
                    "Behance",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white text-xl font-normal font-bricolage hover:text-gray-300 transition duration-150"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
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

          {/* Logo */}
          <div className="mt-16 mb-4 flex justify-start items-center relative z-10">
            <img
              src="/footer-logo.png"
              className="w-full h-auto text-white max-w-3xl lg:max-w-5xl"
              alt="Brandbounce Logo"
            />
          </div>

          {/* Bottom */}
          <div className="pt-4 pb-8 flex flex-col sm:flex-row justify-between items-center text-sm md:text-base font-medium font-bricolage">
            <div className="text-white/70 order-2 sm:order-1 mb-2 sm:mb-0">
              &copy; Copyright Brandbounce
            </div>
            <div className="flex justify-center items-center gap-4 text-white/70 order-1 sm:order-2">
              {["Terms of service", "Privacy Policy", "Sitemap"].map(
                (item, i) => (
                  <>
                    <a
                      key={item}
                      href="#"
                      className="hover:text-white transition duration-150"
                    >
                      {item}
                    </a>
                    {i < 2 && <span className="text-white/50">|</span>}
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
