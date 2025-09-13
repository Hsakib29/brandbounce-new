import React from "react";

// This component inlines the hero-text.svg for direct access and animation
const HeroTypography: React.FC = () => (
  <svg
    width="1440"
    height="592"
    viewBox="0 0 1440 592"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>{`
        .background-text { fill: #A3ABB5; }
        .main-text { fill: #11406E; }
        .accent-text { fill: #436B92; }
        .highlight-text { fill: white; }
        .blend-mode { mix-blend-mode: plus-darker; }
      `}</style>
    </defs>
    {/* ...SVG content copied from hero-text.svg... */}
    {/* Background Text Layer (lightest color) */}
    <g className="background-layer blend-mode">
      {/* "brands" text in background */}
      <path
        className="background-text"
        d="M0.928223 585.371V306.259H116.802C134 306.259 149.365 307.81 162.898 310.911C176.43 313.73 187.99 318.1 197.575 324.021C207.443 329.941 214.914 337.695 219.989 347.28C225.346 356.584 228.024 367.72 228.024 380.689C228.024 391.684 225.627 401.27 220.835 409.446C216.324 417.622 209.134 424.247 199.267 429.322C189.681 434.397 176.994 437.921 161.206 439.895V446.238C187.99 448.212 207.584 454.978 219.989 466.537C232.676 477.814 239.019 493.039 239.019 512.21C239.019 528.28 234.79 541.813 226.332 552.808C218.156 563.522 205.751 571.698 189.117 577.336C172.483 582.693 151.902 585.371 127.374 585.371H0.928223ZM58.8651 536.315H126.529C144.572 536.315 157.964 533.637 166.704 528.28C175.444 522.642 179.814 514.043 179.814 502.483C179.814 489.233 174.316 479.365 163.321 472.881C152.325 466.114 135.691 462.731 113.419 462.731H58.8651V536.315ZM58.8651 424.67H104.538C126.529 424.67 142.599 421.71 152.748 415.79C163.18 409.587 168.395 400.565 168.395 388.724C168.395 376.883 163.744 368.284 154.44 362.927C145.136 357.289 130.899 354.47 111.727 354.47H58.8651V424.67Z"
      />
      {/* ...remaining <path> elements for background layer... */}
      {/* ...existing code... */}
    </g>
    {/* Main Text Layer (darker blue) */}
    <g className="main-layer">
      {/* ...main text paths... */}
      {/* ...existing code... */}
    </g>
    {/* Accent Text Layer (medium blue) */}
    <g className="accent-layer">
      {/* ...accent text paths... */}
      {/* ...existing code... */}
    </g>
    {/* Highlight Text Layer (white) */}
    <g className="highlight-layer">
      {/* ...highlight text paths... */}
      {/* ...existing code... */}
    </g>
  </svg>
);

export default HeroTypography;
