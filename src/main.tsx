import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AboutPage from "./components/About";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home page */}
        <Route path="/about" element={<AboutPage />} /> {/* About page */}
      </Routes>
    </Router>
  </StrictMode>
);
