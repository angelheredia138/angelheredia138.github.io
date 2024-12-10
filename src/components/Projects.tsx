import React, { useEffect } from "react";
import AnimatedSection from "./ProjectAnimatedSection";
import { motion } from "framer-motion";
import RetroGames from "../assets/retro games.png";
import { Link } from "react-router-dom";
import { FaPython, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiNuxtdotjs,
  SiChakraui,
  SiSwift,
} from "react-icons/si";
import { DiUnitySmall } from "react-icons/di"; // Unity icon
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

      {/* Spotify Playback Controller */}
      <AnimatedSection id="spotify-playback">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Description */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(128, 90, 213, 0.4)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Spotify Playback Controller
              </h2>
              <p className="text-lg mb-6">
                This project was inspired by a need for seamless Spotify control
                during gaming. Designed for integration with a Raspberry Pi 4
                connected to a touchscreen, it provides an intuitive interface
                to skip, pause, play, and manage playlists without disrupting
                your workflow or gameplay.
              </p>
              <div className="flex justify-start gap-4 my-4">
                <SiHtml5 className="text-orange-500 text-2xl" />
                <FaReact className="text-blue-500 text-2xl" />
                <SiJavascript className="text-yellow-300 text-2xl" />
                <FaPython className="text-yellow-400 text-2xl" />
                <SiDjango className="text-green-500 text-2xl" />
                <SiChakraui className="text-teal-500 text-2xl" />
                <FaGitAlt className="text-orange-600 text-2xl" />
              </div>
              <a
                href="https://github.com/angelheredia138/spotify-playback-control-public"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              >
                Learn More
              </a>
            </div>
            {/* Demo/Screenshot */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(128, 90, 213, 0.4)" }}
            >
              <iframe
                className="w-full h-72 rounded-lg shadow-lg"
                src="https://drive.google.com/file/d/1epnYQEEVe3KQsZTN8OyXlPsyJYPs8sOY/preview?usp=drivesdk"
                allow="encrypted-media; fullscreen"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Spotify Data Visualization */}
      <AnimatedSection id="spotify-data-viz">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Description */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(0, 122, 255, 0.3)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Spotify Data Visualization
              </h2>
              <p className="text-lg mb-6">
                Interactive data visualizations to explore Spotify listening
                habits, featuring Wrapped-style scrolling and D3.js charts.
                Check it out{" "}
                <a
                  href="https://data-visualizer-angelheredia138s-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  here
                </a>
                !
              </p>
              <div className="flex justify-start gap-4 my-4">
                <SiHtml5 className="text-orange-500 text-2xl" />
                <FaReact className="text-blue-500 text-2xl" />
                <SiJavascript className="text-yellow-300 text-2xl" />
                <FaPython className="text-yellow-400 text-2xl" />
                <SiDjango className="text-green-500 text-2xl" />
                <SiNuxtdotjs className="text-green-500 text-2xl" />
                <SiChakraui className="text-teal-500 text-2xl" />
                <FaGitAlt className="text-orange-600 text-2xl" />
              </div>
              <a
                href="https://github.com/angelheredia138/data-visualizer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              >
                Learn More
              </a>
            </div>
            {/* Demo/Screenshot */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(0, 122, 255, 0.3)" }}
            >
              <div className="w-full aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-72 rounded-lg shadow-lg"
                  src="https://drive.google.com/file/d/1dAy7ze4M7QB8N6-KQNn-u1Tg7LLtmpfw/preview"
                  allow="encrypted-media; fullscreen"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Portfolio Website */}
      <AnimatedSection id="portfolio-website">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Description */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(255, 102, 0, 0.3)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Portfolio Website
              </h2>
              <p className="text-lg mb-6">
                A personal portfolio showcasing my projects and experience,
                built with React, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex justify-start gap-4 my-4">
                <SiHtml5 className="text-orange-500 text-2xl" />
                <FaReact className="text-blue-500 text-2xl" />
                <SiJavascript className="text-yellow-300 text-2xl" />
                <SiChakraui className="text-teal-500 text-2xl" />
                <SiTailwindcss className="text-teal-400 text-2xl" />
                <FaGitAlt className="text-orange-600 text-2xl" />
              </div>
              <a
                href="https://github.com/angelheredia138"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              >
                Learn More
              </a>
            </div>
            {/* Demo/Screenshot */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(255, 102, 0, 0.3)" }}
            >
              <iframe
                className="w-full h-96 rounded-lg shadow-lg"
                src="https://angel-heredia.com/"
                style={{ border: "none" }}
                allow="fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* AR Attention Analysis App */}
      <AnimatedSection id="ar-app">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Description */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(50, 205, 50, 0.3)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                AR Attention Analysis App
              </h2>
              <p className="text-lg mb-6">
                This capstone school project focuses on analyzing attention
                patterns in museum visitors using Unity and eye-tracking
                technology. The app provides insights into user engagement with
                exhibits, helping museums optimize their layouts. Unfortunately,
                a demonstration is unavailable due to the nature of the school
                project.
              </p>
              <div className="flex justify-start gap-4 my-4">
                <DiUnitySmall className="text-gray-300 text-2xl" />
                <FaGitAlt className="text-orange-600 text-2xl" />
              </div>
            </div>
            {/* Demo/Screenshot */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(50, 205, 50, 0.3)" }}
            >
              <p className="text-red-300 text-xl font-semibold text-center">
                Unable to show demonstration as it is a school project.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Retro Games */}
      <AnimatedSection id="retro-games">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Description */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(255, 165, 0, 0.3)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Retro Games in JavaScript
              </h2>
              <p className="text-lg mb-6">
                Classic games like 2048, Pong, Snake, and Minesweeper recreated
                using React for nostalgic fun.
              </p>
              <div className="flex justify-start gap-4 my-4">
                <FaReact className="text-blue-500 text-2xl" />
                <SiJavascript className="text-yellow-300 text-2xl" />
                <FaGitAlt className="text-orange-600 text-2xl" />
              </div>
              <a
                href="https://github.com/angelheredia138/retro-games-in-javascript"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              >
                Learn More
              </a>
            </div>
            {/* Screenshot */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(255, 165, 0, 0.3)" }}
            >
              <a
                href="https://angel-heredia.com/retro-games-in-javascript/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={RetroGames} // Replace with actual screenshot path
                  alt="Retro Games Screenshot"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Wardrobe App */}
      <AnimatedSection id="wardrobe-app">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Description */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(70, 130, 180, 0.3)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Wardrobe App
              </h2>
              <p className="text-lg mb-6">
                A SwiftUI app for managing your wardrobe and suggesting outfits
                based on live weather conditions.
              </p>
              <div className="flex justify-start gap-4 my-4">
                <SiSwift className="text-orange-500 text-2xl" />
              </div>
              <a
                href="https://github.com/angelheredia138/wardrobe-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              >
                Learn More
              </a>
            </div>
            {/* Demo/Screenshot */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(70, 130, 180, 0.3)" }}
            >
              <iframe
                className="w-full h-72 rounded-lg shadow-lg"
                src="https://drive.google.com/file/d/1mRC1ygp5W-lJagxYucOhRNY4ILQlZT9p/preview?usp=drivesdk"
                allow="encrypted-media; fullscreen"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProjectsPage;