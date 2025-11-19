import React from "react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
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
    theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white";
  const mobileMenuClasses = isMenuOpen ? "active" : "";
  return (
    <>
      <header
        className={`flex justify-between border-b border-b-emerald-500 px-8 py-4 transition-all ease-in-out ${themeClasses}`}
      >
        <div className="text-emerald-400">Logo</div>
        <nav className="hidden items-center gap-6 md:flex">
          <ul className="flex space-x-4">
            <li className="hover:text-emerald-400">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-emerald-400">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-emerald-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-full p-2 transition-all ease-in-out hover:bg-gray-200 hover:text-emerald-400 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </nav>
        <div className="bar-container flex cursor-pointer justify-center gap-1 md:hidden">
          <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-full p-2 transition-all ease-in-out hover:bg-gray-200 hover:text-emerald-400 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <div
            className="hamburger justify-start self-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`${mobileMenuClasses} bar hover:bg-emerald-500`}
            ></span>
            <span
              className={`${mobileMenuClasses} bar hover:bg-emerald-500`}
            ></span>
            <span
              className={`${mobileMenuClasses} bar hover:bg-emerald-500`}
            ></span>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu absolute top-16 left-0 w-full border-t border-gray-200 bg-white shadow-md md:hidden dark:border-slate-700 dark:bg-gray-800">
            <ul className="flex flex-col gap-2">
              <li className="block w-full border-t border-gray-200 px-3 pt-2 text-left text-gray-700 transition-colors duration-200 hover:text-emerald-400 dark:text-gray-300 dark:hover:text-emerald-400">
                <a href="#home">Home</a>
              </li>
              <li className="block w-full px-3 text-left text-gray-700 transition-colors duration-200 hover:text-emerald-400 dark:text-gray-300 dark:hover:text-emerald-400">
                <a href="#about">About</a>
              </li>
              <li className="block w-full px-3 text-left text-gray-700 transition-colors duration-200 hover:text-emerald-400 dark:text-gray-300 dark:hover:text-emerald-400">
                <a href="#skills">Skills</a>
              </li>
              <li className="block w-full px-3 text-left text-gray-700 transition-colors duration-200 hover:text-emerald-400 dark:text-gray-300 dark:hover:text-emerald-400">
                <a href="#projects">Projects</a>
              </li>
              <li className="block w-full px-3 pb-2 text-left text-gray-700 transition-colors duration-200 hover:text-emerald-400 dark:text-gray-300 dark:hover:text-emerald-400">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default App;
