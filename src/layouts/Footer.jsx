import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section id="contact">
        <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-neutral-600/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
            <div>
              <h2 className="text-white uppercase text-2xl font-bold mb-4 tracking-widest">
                Avengers
              </h2>
              <p className="text-sm text-gray-400">
                Building exceptional digital experiences that leave a lasting
                impression.
              </p>
            </div>

          
            <div>
              <h4 className="text-cyan-400 font-semibold mb-4 tracking-wide">
                SKILLS
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  JavaScript / TypeScript
                </li>
                <li className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  Redux Toolkit
                </li>
                <li className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  Node.js / Express
                </li>
                <li className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  MongoDB / MySQL
                </li>
                <li className="text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  Tailwind CSS
                </li>
              </ul>
            </div>

         
            <div>
              <h4 className="text-cyan-400 font-semibold mb-4 tracking-wide">
                CONTACT
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  Email:{" "}
                  <span className="text-white hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                    joydeeprnp8821@gmail.com
                  </span>
                </li>
                <li>
                  Phone:{" "}
                  <span className="text-white hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                    9635172639
                  </span>
                </li>
                <li>
                  Location:{" "}
                  <span className="text-white hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                    Asansol, India
                  </span>
                </li>
              </ul>
            </div>

           
            <div>
              <h4 className="text-cyan-400 font-semibold mb-4 tracking-wide">
                SOCIALS
              </h4>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="https://github.com/joydeep-07"
                  target="blank"
                  className="hover:text-cyan-400 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/joydeep-paul-06b37926a"
                  target="blank"
                  className="hover:text-cyan-400 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/joydeep.paul.568089"
                  target="blank"
                  className="hover:text-cyan-400 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/mr.paul_16"
                  target="blank"
                  className="hover:text-cyan-400 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

         
          <div className="mt-12 text-center text-sm text-gray-500 border-t border-neutral-600/20 pt-6">
            © {new Date().getFullYear()} Joydeep Paul. All rights reserved.
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
