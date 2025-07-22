import React, { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import myFace from "../assets/my face.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPython, FaReact, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiGraphql,
  SiMongodb,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { updateBlobPositions } from "./blobPositionRandomizer";

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    updateBlobPositions();
  }, []);
  return (
    <div className="font-sans text-gray-300 relative">
      {/* Navbar */}
      <header className="fixed bg-black bg-opacity-50 shadow-md z-50 w-full">
        <nav className=" px-10 py-4 flex justify-between items-center ml-auto">
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-black bg-opacity-75 text-white flex flex-col items-center py-4 space-y-2 md:hidden"
          >
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
          </motion.div>
        )}
      </header>

      {/* About Header */}
      <AnimatedSection id="about">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-4xl p-8 text-center mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-white">About Me</h1>
            <p className="text-lg mb-6">
              Hi! I recently graduated <strong>summa cum laude</strong> from
              Arizona State University with a degree in Computer Science (2025),
              I'm currently looking for a full-time position in full stack
              software development. I’ve found my passion in web development
              because it lets me express my creativity while building sick and
              meaningful user experiences. I love being able to mix creativity
              with technology!
            </p>
            <img
              src={myFace}
              alt="Angel Heredia"
              className="w-43 h-40 rounded-full mx-auto border-4 border-purple-600 shadow-lg transition-transform transform hover:scale-110"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Skills and Experience Section - Side by Side */}
      <AnimatedSection id="skills-experience">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="max-w-7xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills Pane */}
            <div className="glass-container p-8">
              <h2 className="text-3xl font-semibold mb-6 text-white text-center">
                Technical Skills
              </h2>

              {/* Languages */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Programming Languages:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group text-center">
                    <SiTypescript className="text-3xl text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
                    <p>TypeScript</p>
                    <p className="text-xs text-gray-400">3 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-blue-400 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <FaPython className="text-3xl text-yellow-400 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Python</p>
                    <p className="text-xs text-gray-400">3 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-yellow-400 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="group text-center">
                    <SiJavascript className="text-3xl text-yellow-300 mx-auto group-hover:scale-110 transition-transform" />
                    <p>JavaScript</p>
                    <p className="text-xs text-gray-400">3 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-yellow-300 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiHtml5 className="text-3xl text-orange-500 mx-auto group-hover:scale-110 transition-transform" />
                    <p>HTML/CSS</p>
                    <p className="text-xs text-gray-400">2 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-orange-500 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Frameworks & Tools:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group text-center">
                    <FaReact className="text-3xl text-blue-500 mx-auto group-hover:scale-110 transition-transform" />
                    <p>React</p>
                    <p className="text-xs text-gray-400">2 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-blue-500 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiTailwindcss className="text-3xl text-teal-400 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Tailwind CSS</p>
                    <p className="text-xs text-gray-400">1 year</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-teal-400 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiDjango className="text-3xl text-green-500 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Django</p>
                    <p className="text-xs text-gray-400">1 year</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-green-500 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <FaGitAlt className="text-3xl text-orange-600 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Git</p>
                    <p className="text-xs text-gray-400">4 years</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-orange-600 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Cloud & DevOps:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group text-center">
                    <FaAws className="text-3xl text-orange-500 mx-auto group-hover:scale-110 transition-transform" />
                    <p>AWS Lambda</p>
                    <p className="text-xs text-gray-400">Recent</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-orange-500 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiGraphql className="text-3xl text-pink-500 mx-auto group-hover:scale-110 transition-transform" />
                    <p>GraphQL</p>
                    <p className="text-xs text-gray-400">Recent</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-pink-500 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiMongodb className="text-3xl text-green-600 mx-auto group-hover:scale-110 transition-transform" />
                    <p>MongoDB</p>
                    <p className="text-xs text-gray-400">Recent</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-green-600 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="group text-center">
                    <SiTerraform className="text-3xl text-purple-700 mx-auto group-hover:scale-110 transition-transform" />
                    <p>Terraform</p>
                    <p className="text-xs text-gray-400">Recent</p>
                    <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2">
                      <div
                        className="absolute h-2 bg-purple-500 rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience Pane */}
            <div className="glass-container p-8">
              <h2 className="text-3xl font-semibold mb-6 text-white text-center">
                Professional Experience
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold text-white">
                    Software Engineering Intern
                  </h3>
                  <p className="text-lg text-gray-400 mb-2">
                    Progress Residential • June 2025 - August 2025
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      Designed and developed a real-time notification system
                      projected to handle 15,000+ monthly events
                    </li>
                    <li>
                      Built serverless architecture using AWS Lambda, GraphQL,
                      MongoDB, and React
                    </li>
                    <li>
                      Implemented Redux state management and real-time WebSocket
                      subscriptions
                    </li>
                    <li>
                      Led technical design meetings and contributed to
                      infrastructure decisions
                    </li>
                    <li>
                      Collaborated with UX and Product teams using agile
                      development methodologies
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-white">
                    Personal Projects & Education
                  </h3>
                  <p className="text-lg text-gray-400 mb-2">
                    Arizona State University • 2021 - 2025
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      Graduated <strong>summa cum laude</strong> with Computer
                      Science degree
                    </li>
                    <li>
                      Built <strong>Spotify Playback Controller</strong> and{" "}
                      <strong>Data Visualization</strong> projects
                    </li>
                    <li>
                      Developed portfolio website using React, TypeScript, and
                      Tailwind CSS
                    </li>
                    <li>
                      Completed capstone AR app in Unity for attention analysis
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-bold text-white">
                    Key Achievements
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong>Summa Cum Laude</strong> graduate from Arizona
                      State University
                    </li>
                    <li>
                      Completed professional software engineering internship
                    </li>
                    <li>
                      Gained hands-on experience with cloud technologies and
                      serverless architecture
                    </li>
                    <li>Built and deployed multiple full-stack applications</li>
                    <li>
                      Experience in cross-functional team collaboration and
                      technical leadership
                    </li>
                  </ul>
                </div>
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
                I’ve just completed my first internship at Progress Residential
                as a Software Engineer Intern.
              </li>
              <li>I have three years of experience in web development.</li>
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
