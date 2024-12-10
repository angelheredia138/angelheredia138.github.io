import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./components/AnimatedSection";
import { FaPython, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiNuxtdotjs,
  SiChakraui,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { updateBlobPositions } from "./components/blobPositionRandomizer"; // Adjust the path based on your file structure

const App: React.FC = () => {
  useEffect(() => {
    updateBlobPositions();
  }, []);
  return (
    <div className="font-sans text-gray-300 relative">
      {/* Navbar */}
      <header className="fixed w-full bg-black bg-opacity-50 shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-lg font-bold tracking-wide text-white flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="flex items-center text-lg font-bold tracking-wide text-white"
            >
              <span className="mr-2">
                {/* Home Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M10 20v-6h4v6a2 2 0 002 2h4a2 2 0 002-2v-8h1.293a1 1 0 00.707-1.707l-10-10a1 1 0 00-1.414 0l-10 10A1 1 0 003.293 12H4v8a2 2 0 002 2h4a2 2 0 002-2z" />
                </svg>
              </span>
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
              to="/project"
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

      {/* Home Section */}
      <AnimatedSection id="home">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-3xl p-8 text-center mx-auto">
            <h1 className="text-5xl font-extrabold mb-4 text-white">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg mb-6">
              Hi, I’m Angel Heredia, a Computer Science student at Arizona State
              University. Here, you’ll find my latest projects, updates, and
              experience as I prepare for my career in tech.
            </p>
            <Link
              to="/about"
              className="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* About Me Section */}
      <AnimatedSection id="about">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-4xl p-8 text-center mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-white">About Me</h2>
            <p>
              I’m passionate about building impactful software and constantly
              growing as a developer. With graduation in 2025, I’m excited to
              begin my career and take on challenges in full-stack development
              and data visualization.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="projects">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="max-w-5xl p-8 text-center mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Spotify Playback Controller */}
              <div
                className="glass-container"
                style={{ background: "rgba(128, 90, 213, 0.4)" }}
              >
                <h3 className="text-lg font-bold mb-2 text-white">
                  Spotify Playback Controller
                </h3>
                <p>
                  A web app to control Spotify playback with authentication and
                  playlist features.
                </p>
                <Link
                  to="/project#spotify-playback"
                  className="text-purple-300 hover:underline font-bold"
                >
                  Learn More
                </Link>
                <div className="flex justify-center gap-4 my-4">
                  <SiHtml5 className="text-orange-500 text-2xl" />
                  <FaReact className="text-blue-500 text-2xl" />
                  <SiJavascript className="text-yellow-300 text-2xl" />
                  <FaPython className="text-yellow-400 text-2xl" />
                </div>
                <div className="flex justify-center gap-4 my-4">
                  <SiDjango className="text-green-500 text-2xl" />
                  <SiChakraui className="text-teal-500 text-2xl" />
                  <FaGitAlt className="text-orange-600 text-2xl" />
                </div>
              </div>

              {/* Spotify Data Visualization */}
              <div
                className="glass-container"
                style={{ background: "rgba(0, 122, 255, 0.3)" }}
              >
                <h3 className="text-lg font-bold mb-2 text-white">
                  Spotify Data Visualization
                </h3>
                <p>
                  A web app to with interactive data visualizations to explore
                  Spotify listening habits.
                </p>
                <Link
                  to="/project#spotify-data-viz"
                  className="text-blue-300 hover:underline font-bold"
                >
                  Learn More
                </Link>
                <div className="flex justify-center gap-4 my-4">
                  <SiHtml5 className="text-orange-500 text-2xl" />
                  <FaReact className="text-blue-500 text-2xl" />
                  <SiJavascript className="text-yellow-300 text-2xl" />
                  <FaPython className="text-yellow-400 text-2xl" />
                </div>
                <div className="flex justify-center gap-4 my-4">
                  <SiDjango className="text-green-500 text-2xl" />
                  <SiNuxtdotjs className="text-green-500 text-2xl" />
                  <SiChakraui className="text-teal-500 text-2xl" />
                  <FaGitAlt className="text-orange-600 text-2xl" />
                </div>
              </div>

              {/* Portfolio Website */}
              <div
                className="glass-container"
                style={{ background: "rgba(255, 102, 0, 0.3)" }}
              >
                <h3 className="text-lg font-bold mb-2 text-white">
                  Portfolio Website
                </h3>
                <p>A showcase of my work, featuring a sleek, modern design.</p>
                <Link
                  to="/project#portfolio-website"
                  className="text-orange-300 hover:underline font-bold"
                >
                  Learn More
                </Link>
                <div className="flex justify-center gap-4 my-4">
                  <SiHtml5 className="text-orange-500 text-2xl" />
                  <FaReact className="text-blue-500 text-2xl" />
                  <SiJavascript className="text-yellow-300 text-2xl" />
                  <SiChakraui className="text-teal-500 text-2xl" />
                </div>
                <div className="flex justify-center gap-4 my-4">
                  <SiTailwindcss className="text-teal-400 text-2xl" />
                  <FaGitAlt className="text-orange-600 text-2xl" />
                </div>
              </div>

              {/* Many More */}
              <div className="glass-container bg-gray-700 lg:col-span-3 md:col-span-2">
                <h3 className="text-lg font-bold mb-2 text-white">
                  And Many More...!
                </h3>
                <p>
                  Check out my{" "}
                  <Link to="/project" className="text-blue-400 hover:underline">
                    projects page
                  </Link>{" "}
                  for a full list of exciting projects I've worked on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-4xl p-8 text-center mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>
            <p className="text-lg mb-6">
              Let’s connect! Whether you’d like to collaborate, chat, or just
              say hello, feel free to reach out.
            </p>
            <a
              href="mailto:herediafangel@gmail.com.com"
              className="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Email Me
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default App;
