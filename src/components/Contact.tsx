import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactPage: React.FC = () => {
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

      {/* Contact Section */}
      <AnimatedSection id="contact">
        <div className="relative pt-20">
          <div className="gooey section-blob"></div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-8 mb-8">
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
          <div className="flex justify-center items-center min-h-screen">
            <div className="glass-container max-w-6xl p-10 text-center">
              <h2 className="text-4xl font-semibold mb-6 text-white">
                My Resume
              </h2>
              <iframe
                style={{
                  width: "600px",
                  height: "800px",
                  border: "none",
                  borderRadius: "16px",
                }}
                src="https://drive.google.com/file/d/1gbb_tn8U5nGCmtv3xNW-Tam0zdH0yjiX/preview?usp=drivesdk"
              ></iframe>
              <p className="text-lg mt-6">
                You can also download my resume{" "}
                <a
                  href="https://drive.google.com/file/d/1gbb_tn8U5nGCmtv3xNW-Tam0zdH0yjiX/view?usp=sharing"
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
              <ReCAPTCHA
                sitekey="6Lf7K5cqAAAAABUl34eg3Fx-bLf8SSeZ4FZxljab"
                onChange={handleCaptchaChange}
              />

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
