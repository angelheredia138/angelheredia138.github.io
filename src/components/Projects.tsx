import React, { useEffect, useState } from "react";
import AnimatedSection from "./ProjectAnimatedSection";
import { motion } from "framer-motion";
import RetroGames from "../assets/retro games.png";
import { Link } from "react-router-dom";
import { FaPython, FaReact, FaGitAlt, FaAws } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiTailwindcss,
  SiDjango,
  SiVuedotjs,
  SiDotnet,
  SiJavascript,
  SiHtml5,
  SiChakraui,
  SiSwift,
  SiTypescript,
  SiFramer,
  SiGraphql,
  SiMongodb,
  SiRedux,
  SiTerraform,
  SiXcode,
} from "react-icons/si";
import { DiUnitySmall } from "react-icons/di";
import { updateBlobPositions } from "./blobPositionRandomizer";

const ProjectsPage: React.FC = () => {
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
      {/* Progress Residential Notification System */}
      <AnimatedSection id="notification-system">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Description */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(0, 255, 127, 0.2)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Real-Time Notification System
              </h2>
              <p className="text-lg mb-6">
                Professional project developed during my Software Engineering
                Internship at Progress Residential. A comprehensive notification
                system designed to handle an estimated 15,000+ monthly events,
                planned to serve thousands of users across the customer portal
                platform. Built with serverless architecture using AWS Lambda,
                GraphQL, and MongoDB with real-time WebSocket subscriptions.
              </p>

              {/* Technology Icons - Outside colored rectangles */}
              <div className="flex justify-center flex-wrap gap-4 my-6">
                <FaAws
                  className="text-4xl text-orange-500 hover:scale-110 transition-transform"
                  title="AWS Lambda"
                />
                <SiGraphql
                  className="text-4xl text-pink-500 hover:scale-110 transition-transform"
                  title="GraphQL"
                />
                <SiMongodb
                  className="text-4xl text-green-600 hover:scale-110 transition-transform"
                  title="MongoDB"
                />
                <FaReact
                  className="text-4xl text-blue-500 hover:scale-110 transition-transform"
                  title="React"
                />
                <SiRedux
                  className="text-4xl text-purple-600 hover:scale-110 transition-transform"
                  title="Redux"
                />
                <SiTerraform
                  className="text-4xl text-purple-700 hover:scale-110 transition-transform"
                  title="Terraform"
                />
              </div>

              {/* Technology Labels - Just text */}
              <div className="flex justify-center flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">
                  AWS Lambda
                </span>
                <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-sm">
                  GraphQL
                </span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
                  Redux
                </span>
                <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-sm">
                  Terraform
                </span>
              </div>

              <div className="text-center">
                <p className="text-gray-300 italic">
                  Professional internship project - source code proprietary
                </p>
              </div>
            </div>
            {/* Demo/Screenshot*/}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(0, 255, 127, 0.2)" }}
            >
              <div className="text-center">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Projected Achievements
                  </h3>
                  <ul className="text-left space-y-2">
                    <li>
                      <strong>15,000+</strong> estimated monthly events to be
                      processed
                    </li>
                    <li>
                      <strong>Thousands</strong> of users expected to be served
                    </li>
                    <li>
                      <strong>Real-time</strong> WebSocket subscriptions planned
                    </li>
                    <li>
                      <strong>Serverless</strong> AWS architecture designed
                    </li>
                    <li>
                      <strong>Cross-functional</strong> team collaboration
                      experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Valorant Franchising Database/API */}
      <AnimatedSection id="vlr-database">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(253, 8, 28, 0.2)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Valorant Franchising Database/API
              </h2>
              <p className="text-lg mb-6">
                The VALORANT Franchising Database is a web application
                accompanied by a custom made API designed to provide a
                centralized hub of information about the franchised teams,
                players, and regions participating in VALORANT esports, built
                with Vue.js, and .NET 8 + Azure.
              </p>

              {/* Technology Icons */}
              <div className="flex justify-center flex-wrap gap-4 my-6">
                <SiVuedotjs
                  className="text-4xl text-green-500 hover:scale-110 transition-transform"
                  title="Vue.js"
                />
                <SiDotnet
                  className="text-4xl text-purple-400 hover:scale-110 transition-transform"
                  title=".NET 8"
                />
                <span className="text-4xl text-blue-500 hover:scale-110 transition-transform">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                    title="Azure"
                    alt="Azure logo"
                    className="w-10 h-10"
                  />
                </span>
                <SiJavascript
                  className="text-4xl text-yellow-300 hover:scale-110 transition-transform"
                  title="JavaScript"
                />
              </div>

              {/* Technology Labels */}
              <div className="flex justify-center flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-purple-700 text-white rounded-full text-sm">
                  .NET 8
                </span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  Azure
                </span>
                <span className="px-3 py-1 bg-yellow-300 text-black rounded-full text-sm">
                  JavaScript
                </span>
              </div>

              <a
                href="https://github.com/angelheredia138/vlr-franchising-database"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition mb-2"
              >
                Learn More (web app)
              </a>
              <a
                href="https://github.com/angelheredia138/vlr-franchising-database"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              >
                Learn More (API)
              </a>
            </div>
            {/* Demo/Screenshot - existing code */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(253, 8, 28, 0.2)" }}
            >
              <iframe
                className="w-full h-96 rounded-lg shadow-lg"
                title="VLR Franchising Database Demo"
                src="https://angel-heredia.com/vlr-franchising-database/"
                style={{ border: "none" }}
                allow="fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Spotify Playback Controller */}
      <AnimatedSection id="spotify-playback">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(128, 90, 213, 0.2)" }}
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

              {/* Technology Icons */}
              <div className="flex justify-center flex-wrap gap-4 my-6">
                <FaReact
                  className="text-4xl text-blue-500 hover:scale-110 transition-transform"
                  title="React"
                />
                <SiJavascript
                  className="text-4xl text-yellow-300 hover:scale-110 transition-transform"
                  title="JavaScript"
                />
                <FaPython
                  className="text-4xl text-yellow-400 hover:scale-110 transition-transform"
                  title="Python"
                />
                <SiDjango
                  className="text-4xl text-green-500 hover:scale-110 transition-transform"
                  title="Django"
                />
                <SiChakraui
                  className="text-4xl text-teal-500 hover:scale-110 transition-transform"
                  title="Chakra UI"
                />
                <FaGitAlt
                  className="text-4xl text-orange-600 hover:scale-110 transition-transform"
                  title="Git"
                />
              </div>

              {/* Technology Labels */}
              <div className="flex justify-center flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-yellow-300 text-black rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                  Django
                </span>
                <span className="px-3 py-1 bg-teal-500 text-white rounded-full text-sm">
                  Chakra UI
                </span>
                <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">
                  Git
                </span>
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
            {/* Demo/Screenshot - existing code */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(128, 90, 213, 0.2)" }}
            >
              <iframe
                className="w-full h-72 rounded-lg shadow-lg"
                title="Spotify Playback Controller Demo"
                src="https://drive.google.com/file/d/1epnYQEEVe3KQsZTN8OyXlPsyJYPs8sOY/preview?usp=drivesdk"
                allow="encrypted-media; fullscreen"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Portfolio Website */}
      <AnimatedSection id="portfolio-website">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="project-container max-w-6xl p-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className="glass-container p-6 rounded-lg shadow-lg grid place-items-center"
              style={{ background: "rgba(255, 102, 0, 0.2)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Portfolio Website
              </h2>
              <p className="text-lg mb-6">
                A personal portfolio showcasing my projects and experience,
                built with React, TypeScript, and Tailwind CSS. Features dynamic
                animations, glassmorphism design, and responsive layouts.
              </p>

              {/* Technology Icons */}
              <div className="flex justify-center flex-wrap gap-4 my-6">
                <FaReact
                  className="text-4xl text-blue-500 hover:scale-110 transition-transform"
                  title="React"
                />
                <SiTypescript
                  className="text-4xl text-blue-600 hover:scale-110 transition-transform"
                  title="TypeScript"
                />
                <SiTailwindcss
                  className="text-4xl text-teal-400 hover:scale-110 transition-transform"
                  title="Tailwind CSS"
                />
                <SiFramer
                  className="text-4xl text-purple-500 hover:scale-110 transition-transform"
                  title="Framer Motion"
                />
                <FaGitAlt
                  className="text-4xl text-orange-600 hover:scale-110 transition-transform"
                  title="Git"
                />
              </div>

              {/* Technology Labels */}
              <div className="flex justify-center flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-teal-400 text-white rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                  Framer Motion
                </span>
                <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">
                  Git
                </span>
              </div>

              <a
                href="https://github.com/angelheredia138/angelheredia138.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
              >
                Learn More
              </a>
            </div>
            {/* Demo/Screenshot - existing code */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(255, 102, 0, 0.2)" }}
            >
              <iframe
                className="w-full h-96 rounded-lg shadow-lg"
                title="Portfolio Website Demo"
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
              style={{ background: "rgba(50, 205, 50, 0.2)" }}
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

              {/* Technology Icons */}
              <div className="flex justify-center flex-wrap gap-4 my-6">
                <DiUnitySmall
                  className="text-4xl text-gray-300 hover:scale-110 transition-transform"
                  title="Unity"
                />
                <TbBrandCSharp
                  className="text-4xl text-blue-400 hover:scale-110 transition-transform"
                  title="C#"
                />
                <FaGitAlt
                  className="text-4xl text-orange-600 hover:scale-110 transition-transform"
                  title="Git"
                />
              </div>

              {/* Technology Labels */}
              <div className="flex justify-center flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                  Unity
                </span>
                <span className="px-3 py-1 bg-blue-700 text-white rounded-full text-sm">
                  C#
                </span>
                <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">
                  Git
                </span>
              </div>
            </div>
            {/* Demo/Screenshot */}
            <div
              className="glass-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(50, 205, 50, 0.2)" }}
            >
              <iframe
                className="w-full h-72 rounded-lg shadow-lg"
                title="AR Attention Analysis App Demo"
                src="https://www.youtube.com/embed/mDsBi_6jCAw"
                allow="encrypted-media; fullscreen"
                style={{ border: "none" }}
              ></iframe>
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
              style={{ background: "rgba(255, 165, 0, 0.2)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Retro Games in JavaScript
              </h2>
              <p className="text-lg mb-6">
                Classic games like 2048, Pong, Snake, and Minesweeper recreated
                using React for nostalgic fun. Features pixel-perfect
                recreations with modern web technologies.
              </p>

              {/* Technology Icons */}
              <div className="flex justify-center flex-wrap gap-4 my-6">
                <FaReact
                  className="text-4xl text-blue-500 hover:scale-110 transition-transform"
                  title="React"
                />
                <SiJavascript
                  className="text-4xl text-yellow-300 hover:scale-110 transition-transform"
                  title="JavaScript"
                />
                <SiHtml5
                  className="text-4xl text-orange-500 hover:scale-110 transition-transform"
                  title="HTML5 Canvas"
                />
                <FaGitAlt
                  className="text-4xl text-orange-600 hover:scale-110 transition-transform"
                  title="Git"
                />
              </div>

              {/* Technology Labels */}
              <div className="flex justify-center flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-yellow-300 text-black rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">
                  HTML5 Canvas
                </span>
                <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">
                  Git
                </span>
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
              className="retro-container p-6 rounded-lg shadow-lg flex justify-center items-center"
              style={{ background: "rgba(255, 165, 0, 0.2)" }}
            >
              <a
                href="https://angel-heredia.com/retro-games-in-javascript/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={RetroGames}
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
              style={{ background: "rgba(70, 130, 180, 0.2)" }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Wardrobe App
              </h2>
              <p className="text-lg mb-6">
                A SwiftUI app for managing your wardrobe and suggesting outfits
                based on live weather conditions. Features photo management,
                outfit recommendations, and weather integration.
              </p>

              {/* Technology Icons */}
              <div className="flex justify-center flex-wrap gap-4 my-6">
                <SiSwift
                  className="text-4xl text-orange-500 hover:scale-110 transition-transform"
                  title="Swift"
                />
                <SiSwift
                  className="text-4xl text-blue-500 hover:scale-110 transition-transform"
                  title="SwiftUI"
                />
                <SiXcode
                  className="text-4xl text-blue-500 hover:scale-110 transition-transform"
                  title="Xcode"
                />
              </div>

              {/* Technology Labels */}
              <div className="flex justify-center flex-wrap gap-2 my-4">
                <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">
                  Swift
                </span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  SwiftUI
                </span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                  Xcode
                </span>
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
              style={{ background: "rgba(70, 130, 180, 0.2)" }}
            >
              <iframe
                className="w-full h-72 rounded-lg shadow-lg"
                title="Wardrobe App Demo"
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
