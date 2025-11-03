import React, { useState, useEffect } from "react";
import av6 from "../assets/Avengers/av3.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={av6}
          alt="Avengers"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isLoaded
              ? "scale-100 brightness-90 contrast-110"
              : "scale-110 brightness-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>

        {/* Cool tone overlay to balance red dominance */}
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>

        {/* Cinematic accent lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/15 to-red-600/10"></div>
      </div>

      {/* Enhanced vignette for focus */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9),inset_0_0_100px_rgba(139,0,0,0.2)] pointer-events-none"></div>

      {/* Content with high contrast for red background */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Marvel Studios badge */}
        <div className="mb-8 opacity-90">
          <div className="w-16 h-1 bg-gray-300 mx-auto mb-2"></div>
          <span className="text-gray-300 text-sm tracking-widest font-semibold uppercase">
            MARVEL STUDIOS
          </span>
        </div>

        {/* High-contrast title */}
        <h1
          className={`text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            AVENGERS
          </span>
        </h1>

        {/* High-contrast subtitle */}
        <p
          className={`mt-8 text-xl md:text-2xl text-gray-100 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          When an unexpected threat emerges that jeopardizes global safety and
          security,
          <span className="text-white font-semibold drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            {" "}
            Earth's Mightiest Heroes{" "}
          </span>
          must reassemble to restore peace.
        </p>

        {/* High-contrast CTA button */}
        <button
          className={`group mt-12 px-12 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-700 hover:to-gray-900 text-white text-lg font-semibold rounded-lg shadow-2xl transition-all duration-500 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] border border-gray-600/50 relative overflow-hidden`}
        >
          <span className="relative z-10 flex items-center justify-center">
            ASSEMBLE THE TEAM
            <svg
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 transition-all duration-1000 group-hover:translate-x-full"></div>
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Additional cinematic elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      {/* Subtle film grain for cinematic texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="h-screen w-full bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%271%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url%28%23noise%29%27/%3E%3C/svg%3E')]"></div>
      </div>

      {/* Top gradient for better text contrast */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
