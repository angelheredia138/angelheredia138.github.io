import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [captchaValid, setCaptchaValid] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

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

      {/* Contact Section */}
      <AnimatedSection id="contact">
        <div className="relative pt-20">
          <div className="gooey section-blob"></div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-8 m-4">
            <a
              href="https://www.linkedin.com/in/herediafangel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-3xl hover:text-blue-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/angelheredia138"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-3xl hover:text-gray-200 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:herediafangel@gmail.com"
              className="text-red-500 text-3xl hover:text-red-300 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Resume Section */}
          <div className="flex justify-center items-center pb-10">
            <div className="glass-container max-w-6xl p-10 text-center">
              <h2 className="text-4xl font-semibold mb-6 text-white">
                My Resume
              </h2>
              <iframe
                className="responsive-iframe"
                src="https://drive.google.com/file/d/1uD1lZ9NWn00GGXm8gFbmg0Rp7CZ9TEoq/preview?usp=drivesdk"
              ></iframe>
              <p className="text-lg mt-6">
                You can also download my resume{" "}
                <a
                  href="https://drive.google.com/file/d/1V6YAgkM5emvPH_1b02Fr1g5U4r5RH2MR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-300"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="glass-container max-w-4xl p-8 text-center mx-auto mt-10">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Get in Touch
            </h2>
            <form
              action="https://formspree.io/f/xjkvdrnn"
              method="POST"
              className="space-y-6"
            >
              {/* Honeypot Field */}
              <div style={{ display: "none" }}>
                <label>
                  Don’t fill this out if you’re human:
                  <input type="text" name="_honeypot" />
                </label>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              {/* Google reCAPTCHA */}
              <div className="recaptcha-container">
                <ReCAPTCHA
                  sitekey="6Lf7K5cqAAAAABUl34eg3Fx-bLf8SSeZ4FZxljab"
                  onChange={handleCaptchaChange}
                />
              </div>

              <button
                type="submit"
                disabled={!captchaValid}
                className={`w-full px-6 py-3 ${
                  captchaValid
                    ? "bg-purple-600 hover:bg-purple-500"
                    : "bg-gray-500 cursor-not-allowed"
                } text-white rounded-lg transition`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
