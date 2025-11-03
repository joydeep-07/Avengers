import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-2xl py-2 border-b border-gray-800"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-20">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl tracking-wider bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                AVENGERS
              </span>
            </div>

           
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Characters", "Story", "Gallery", "About"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:text-white font-medium tracking-wide transition-all duration-300 hover:scale-105 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>

           
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

      
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {["Home", "Characters", "Story", "Gallery", "About"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300 border-l-2 border-transparent hover:border-red-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border border-red-500/30">
                Join The Battle
              </button>
            </div>
          </div>
        </div>
      </nav>

    
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
