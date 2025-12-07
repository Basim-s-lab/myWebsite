import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./components/navigation";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";
import FooterSection from "./components/footer-section";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const themeClasses =
    theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-gray-300";
  const mobileMenuClasses = isMenuOpen ? "active" : "";
  return (
    <>
      <div
        className={`font-inter min-h-screen antialiased transition-colors duration-200 ${themeClasses}`}
      >
        <Navigation
          theme={theme}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          mobileMenuClasses={mobileMenuClasses}
        />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
