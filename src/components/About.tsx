import React, { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import myFace from "../assets/my face.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPython, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
} from "react-icons/si";
import { updateBlobPositions } from "./blobPositionRandomizer"; // Adjust the path based on your file structure

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    updateBlobPositions();
  }, []);
  return (
    <div className="font-sans text-gray-300 relative">
      {/* Navbar */}
      <header className="fixed bg-black bg-opacity-50 shadow-md z-50 w-full">
        <nav className="container px-4 py-4 flex justify-between items-center">
          {/* Website Name */}
          <motion.h1
            className="text-lg font-bold tracking-wide text-white flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="flex items-center">
              angel-heredia.com
            </Link>
          </motion.h1>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-white focus:outline-none md:hidden"
          >
            {isMenuOpen ? "Close" : "navigate"}
          </button>

          {/* Regular Navbar Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/about"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              about
            </Link>
            <Link
              to="/project"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              contact
            </Link>
          </div>
        </nav>

        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div className="bg-black bg-opacity-75 text-white flex flex-col items-center py-4 space-y-2 md:hidden">
            <Link
              to="/about"
              className="text-gray-400 hover:text-gray-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </Link>
            <Link
              to="/project"
              className="text-gray-400 hover:text-gray-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-gray-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </Link>
          </div>
        )}
      </header>

      {/* About Header */}
      <AnimatedSection id="about">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-4xl p-8 text-center mx-auto">
            <h1 className="text-5xl font-extrabold mb-4 text-white">
              About Me
            </h1>
            <p className="text-lg mb-6">
              Hello! I’m Angel Heredia, a Computer Science student at Arizona
              State University, graduating in 2025. I’ve found my passion in web
              development because it lets me express my creativity while
              building sleek and meaningful user experiences. From coding
              intuitive interfaces to experimenting with cool designs, I love
              bringing ideas to life on the web!
            </p>
            <img
              src={myFace}
              alt="Angel Heredia"
              className="w-43 h-40 rounded-full mx-auto border-4 border-purple-600 shadow-lg transition-transform transform hover:scale-110"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="skills">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-6xl p-8 mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Skills & Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Languages */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Languages:
                </h3>
                <div className="grid grid-cols-2 gap-6 justify-center">
                  <div className="group text-center">
                    <FaPython className="text-4xl text-yellow-400 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Python</p>
                    <p className="text-sm text-gray-400">3 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-yellow-400 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiJavascript className="text-4xl text-yellow-300 mx-auto group-hover:scale-110 transition-transform" />
                    <p>JavaScript</p>
                    <p className="text-sm text-gray-400">2 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-yellow-300 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiHtml5 className="text-4xl text-orange-500 mx-auto group-hover:scale-110 transition-transform" />
                    <p>HTML/CSS</p>
                    <p className="text-sm text-gray-400">2 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-orange-500 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiPostgresql className="text-4xl text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
                    <p>SQL</p>
                    <p className="text-sm text-gray-400">1 year</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-blue-400 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Frameworks & Tools:
                </h3>
                <div className="grid grid-cols-2 gap-6 justify-center">
                  <div className="group text-center">
                    <FaReact className="text-4xl text-blue-500 mx-auto group-hover:scale-110 transition-transform" />
                    <p>React</p>
                    <p className="text-sm text-gray-400">2 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-blue-500 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiTailwindcss className="text-4xl text-teal-400 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Tailwind CSS</p>
                    <p className="text-sm text-gray-400">1 year</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-teal-400 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiDjango className="text-4xl text-green-500 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Django</p>
                    <p className="text-sm text-gray-400">1 year</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-green-500 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <FaGitAlt className="text-4xl text-orange-600 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Git</p>
                    <p className="text-sm text-gray-400">4 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-orange-600 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Experience:
                </h3>
                <ul className="list-disc list-inside text-left">
                  <li>
                    Built <strong>Spotify Playback Controller</strong> and{" "}
                    <strong>Data Visualization</strong> projects.
                  </li>
                  <li>
                    Developed portfolio website using React, TypeScript, and
                    Tailwind CSS.
                  </li>
                  <li>
                    Currently working on an AR app in Unity for attention
                    analysis as part of my capstone.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Fun Facts Section */}
      <AnimatedSection id="fun">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-4xl p-8 text-center mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Fun Facts
            </h2>
            <ul className="text-lg list-disc list-inside">
              <li>
                I’m currently working on an augmented reality app in Unity for
                my capstone project.
              </li>
              <li>
                I have two years of experience in web development and recently
                completed a project using Nuxt.
              </li>
              <li>
                My favorite game to play at the moment is Valorant! I peaked
                Ascendant 1.
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
