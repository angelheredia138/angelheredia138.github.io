import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="glass-container p-8 rounded-xl max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <button className="px-6 py-3 text-lg font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-800 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
