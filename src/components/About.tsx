import React from "react";
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

const AboutPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-300 relative">
      {/* Navbar */}
      <header className="fixed w-full bg-black bg-opacity-50 shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-lg font-bold tracking-wide text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="text-lg font-bold tracking-wide text-white">
              Angel-Heredia.com
            </Link>
          </motion.h1>
          <div>
            <Link
              to="/about"
              className="mx-4 text-gray-400 hover:text-gray-200 transition"
            >
              About Me
            </Link>
            <Link
              to="/Projects"
              className="mx-4 text-gray-400 hover:text-gray-200 transition"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="mx-4 text-gray-400 hover:text-gray-200 transition"
            >
              Contact
            </Link>
          </div>
        </nav>
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
              className="w-40 h-40 rounded-full mx-auto border-4 border-purple-600 shadow-lg"
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
                  {[
                    {
                      Icon: FaPython,
                      name: "Python",
                      color: "text-yellow-400",
                      years: 3,
                      width: "90%",
                    },
                    {
                      Icon: SiJavascript,
                      name: "JavaScript",
                      color: "text-yellow-300",
                      years: 2,
                      width: "70%",
                    },
                    {
                      Icon: SiHtml5,
                      name: "HTML/CSS",
                      color: "text-orange-500",
                      years: 2,
                      width: "70%",
                    },
                    {
                      Icon: SiPostgresql,
                      name: "SQL",
                      color: "text-blue-400",
                      years: 1,
                      width: "50%",
                    },
                  ].map(({ Icon, name, color, years, width }) => (
                    <div className="group text-center" key={name}>
                      <Icon
                        className={`text-4xl ${color} mx-auto group-hover:scale-110 transition-transform`}
                      />
                      <p>{name}</p>
                      <p className="text-sm text-gray-400">{years} years</p>
                      <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`absolute h-2 rounded-full ${color.replace(
                            "text",
                            "bg"
                          )}`}
                          initial={{ width: 0 }}
                          animate={{ width }}
                          transition={{ duration: 1 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Frameworks & Tools:
                </h3>
                <div className="grid grid-cols-2 gap-6 justify-center">
                  {[
                    {
                      Icon: FaReact,
                      name: "React",
                      color: "text-blue-500",
                      years: 2,
                      width: "80%",
                    },
                    {
                      Icon: SiTailwindcss,
                      name: "Tailwind CSS",
                      color: "text-teal-400",
                      years: 1,
                      width: "50%",
                    },
                    {
                      Icon: SiDjango,
                      name: "Django",
                      color: "text-green-500",
                      years: 1,
                      width: "50%",
                    },
                    {
                      Icon: FaGitAlt,
                      name: "Git",
                      color: "text-orange-600",
                      years: 4,
                      width: "100%",
                    },
                  ].map(({ Icon, name, color, years, width }) => (
                    <div className="group text-center" key={name}>
                      <Icon
                        className={`text-4xl ${color} mx-auto group-hover:scale-110 transition-transform`}
                      />
                      <p>{name}</p>
                      <p className="text-sm text-gray-400">{years} years</p>
                      <div className="relative w-4/5 mx-auto bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`absolute h-2 rounded-full ${color.replace(
                            "text",
                            "bg"
                          )}`}
                          initial={{ width: 0 }}
                          animate={{ width }}
                          transition={{ duration: 1 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
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
