import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutPage from "./components/About";
import ProjectPage from "./components/Projects";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home page */}
        <Route path="/about" element={<AboutPage />} /> {/* About page */}
        <Route path="/project" element={<ProjectPage />} />
        {/* Project page */}
      </Routes>
    </Router>
  </StrictMode>
);
