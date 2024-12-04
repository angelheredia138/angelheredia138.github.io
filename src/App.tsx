import React from "react";

// Sections
const App: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="fixed w-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
          <div>
            <a href="#about" className="text-white mx-4 hover:underline">
              About Me
            </a>
            <a href="#projects" className="text-white mx-4 hover:underline">
              Projects
            </a>
            <a href="#contact" className="text-white mx-4 hover:underline">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white"
      >
        <div className="text-center p-8">
          <h1 className="text-6xl font-extrabold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum.
          </p>
          <a
            href="#about"
            className="px-6 py-3 text-lg font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-800 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
      >
        <div className="text-center max-w-4xl p-8 glass-container">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white"
      >
        <div className="text-center max-w-4xl p-8">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg mb-4">
            Here are some of the projects I've worked on. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p>A short description of Project 1.</p>
            </div>
            <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p>A short description of Project 2.</p>
            </div>
            <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p>A short description of Project 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gray-900 flex items-center justify-center text-white"
      >
        <div className="text-center max-w-4xl p-8 glass-container">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg mb-6">
            Want to get in touch? Reach out through the following:
          </p>
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 text-lg font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
