import React, { useEffect, useState } from "react";
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
  SiDotnet,
  SiVuedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { updateBlobPositions } from "./components/blobPositionRandomizer"; // Adjust the path based on your file structure

const App: React.FC = () => {
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

      {/* Home Section */}
      <AnimatedSection id="home">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-3xl p-8 text-center mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg mb-6">
              Hi, I’m Angel Heredia, a Computer Science student at Arizona State
              University. Here, you’ll find my latest projects, updates, and
              experience as I prepare for my career in tech.
            </p>
            <p className="text-lg font-medium text-white">
              Scroll down to learn some more about me!
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* About Me Section */}
      <AnimatedSection id="about">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="glass-container max-w-4xl p-8 text-center mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-white">About Me</h2>
            <p className="mb-6">
              I’m passionate about building impactful software and constantly
              growing as a developer. With graduation in 2025, I’m excited to
              begin my career and take on challenges in full-stack development
              and data visualization.
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

      <AnimatedSection id="projects">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="max-w-5xl p-8 text-center mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Valorant Franchising Database/API */}
              <div
                className="glass-container"
                style={{ background: "rgba(253, 8, 28, 0.2)" }}
              >
                <h3 className="text-lg font-bold mb-2 text-white">
                  Valorant Franchising Database/API
                </h3>
                <p>
                  A web app and API designed to provide a centralized hub of
                  information about the franchised teams, players, and regions
                  in VALORANT.
                </p>
                <Link
                  to="/project#vlr-database"
                  className="text-red-300 hover:underline font-bold"
                >
                  Learn More
                </Link>
                <div className="flex justify-center gap-4 my-4">
                  <SiVuedotjs className="text-green-500 text-2xl" />
                  <SiDotnet className="text-purple-700 text-2xl" />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
                    alt="Azure Logo"
                    className="w-6 h-6"
                  />
                  <SiJavascript className="text-yellow-300 text-2xl" />
                </div>
              </div>

              {/* Spotify Data Visualization */}
              <div
                className="glass-container"
                style={{ background: "rgba(0, 122, 255, 0.2)" }}
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
                style={{ background: "rgba(255, 102, 0, 0.2)" }}
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
              href="mailto:herediafangel@gmail.com"
              className="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition block mb-4"
            >
              Email Me
            </a>
            <p className="text-lg">
              Or{" "}
              <Link to="/contact" className="text-purple-400 hover:underline">
                check out my contact page
              </Link>{" "}
              to see my resume and write a message for me!
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default App;
