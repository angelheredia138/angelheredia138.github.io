import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./components/AnimatedSection";

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
            My Portfolio
          </motion.h1>
          <div>
            <a
              href="#about"
              className="mx-4 text-gray-400 hover:text-gray-200 transition"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="mx-4 text-gray-400 hover:text-gray-200 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="mx-4 text-gray-400 hover:text-gray-200 transition"
            >
              Contact
            </a>
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
              Crafting sleek and modern digital experiences. Explore my work and
              get to know me.
            </p>
            <a
              href="#about"
              className="px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Learn More
            </a>
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
              I am a passionate developer with a love for creating beautiful,
              functional, and impactful digital products.
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
                <h3 className="text-lg font-bold mb-2 text-white">Project 1</h3>
                <p>A short description of Project 1.</p>
              </div>
              <div className="glass-container">
                <h3 className="text-lg font-bold mb-2 text-white">Project 2</h3>
                <p>A short description of Project 2.</p>
              </div>
              <div className="glass-container">
                <h3 className="text-lg font-bold mb-2 text-white">Project 3</h3>
                <p>A short description of Project 3.</p>
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
              I’d love to hear from you! Feel free to reach out.
            </p>
            <a
              href="mailto:youremail@example.com"
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
