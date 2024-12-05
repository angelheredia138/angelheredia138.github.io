import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./components/AnimatedSection";
import { Link } from "react-router-dom";

const App: React.FC = () => {
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
            Angel-Heredia.com
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

      {/* Projects Section */}
      <AnimatedSection id="projects">
        <div className="relative">
          <div className="gooey section-blob"></div>
          <div className="max-w-5xl p-8 text-center mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-container">
                <h3 className="text-lg font-bold mb-2 text-white">
                  Spotify Playback Controller
                </h3>
                <p>
                  A web app to control Spotify playback with authentication and
                  playlist features.
                </p>
              </div>
              <div className="glass-container">
                <h3 className="text-lg font-bold mb-2 text-white">
                  Spotify Data Visualization
                </h3>
                <p>
                  Interactive data visualizations to explore Spotify listening
                  habits.
                </p>
              </div>
              <div className="glass-container">
                <h3 className="text-lg font-bold mb-2 text-white">
                  Portfolio Website
                </h3>
                <p>A showcase of my work, featuring a sleek, modern design.</p>
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
