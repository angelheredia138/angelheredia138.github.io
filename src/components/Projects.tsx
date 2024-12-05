import React, { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { updateBlobPositions } from "./blobPositionRandomizer";

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    updateBlobPositions();
  }, []);

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
              to="/projects"
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

      {/* Spotify Playback Controller */}
      <AnimatedSection id="spotify-playback">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div
            className="glass-container max-w-4xl p-8 text-center mx-auto"
            style={{ background: "rgba(128, 90, 213, 0.4)" }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Spotify Playback Controller
            </h2>
            <p className="text-lg mb-6">
              A web app to control Spotify playback with authentication,
              playlist features, and a user-friendly interface.
            </p>
            <a
              href="https://github.com/angelheredia138/spotify-playback-control-public"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Spotify Data Visualization */}
      <AnimatedSection id="spotify-data-viz">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div
            className="glass-container max-w-4xl p-8 text-center mx-auto"
            style={{ background: "rgba(0, 122, 255, 0.3)" }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Spotify Data Visualization
            </h2>
            <p className="text-lg mb-6">
              Interactive data visualizations to explore Spotify listening
              habits, featuring Wrapped-style scrolling and D3.js charts.
            </p>
            <a
              href="https://angel-heredia.com/spotify-visualizer-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Portfolio Website */}
      <AnimatedSection id="portfolio-website">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div
            className="glass-container max-w-4xl p-8 text-center mx-auto"
            style={{ background: "rgba(255, 102, 0, 0.3)" }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Portfolio Website
            </h2>
            <p className="text-lg mb-6">
              A personal portfolio showcasing my projects and experience, built
              with React, TypeScript, and Tailwind CSS.
            </p>
            <a
              href="https://github.com/angelheredia138"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* AR Attention Analysis App */}
      <AnimatedSection id="ar-app">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div
            className="glass-container max-w-4xl p-8 text-center mx-auto"
            style={{ background: "rgba(50, 205, 50, 0.3)" }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              AR Attention Analysis App
            </h2>
            <p className="text-lg mb-6">
              An AR app analyzing attention patterns in museum visitors using
              Unity and eye-tracking technology.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Retro Games */}
      <AnimatedSection id="retro-games">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div
            className="glass-container max-w-4xl p-8 text-center mx-auto"
            style={{ background: "rgba(255, 165, 0, 0.3)" }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Retro Games in JavaScript
            </h2>
            <p className="text-lg mb-6">
              Classic games like 2048, Pong, Snake, and Minesweeper recreated
              using React for nostalgic fun.
            </p>
            <a
              href="https://github.com/angelheredia138/retro-games-in-javascript"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Wardrobe App */}
      <AnimatedSection id="wardrobe-app">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div
            className="glass-container max-w-4xl p-8 text-center mx-auto"
            style={{ background: "rgba(70, 130, 180, 0.3)" }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Wardrobe App
            </h2>
            <p className="text-lg mb-6">
              A SwiftUI app for managing your wardrobe and suggesting outfits
              based on live weather conditions.
            </p>
            <a
              href="https://github.com/angelheredia138/wardrobe-app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProjectsPage;
