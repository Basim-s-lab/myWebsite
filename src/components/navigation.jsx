import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function Navigation({
  theme,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  mobileMenuClasses,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`border-b border-b-emerald-500 px-8 py-4 transition-all ease-in-out dark:border-b-gray-400 ${isScrolled ? "bg-slate-900/90 text-gray-400 shadow-lg backdrop-blur-md dark:bg-slate-900/90" : "bg-white/90 backdrop-blur-md dark:bg-slate-900/90"} `}
    >
      <div className="lg-px-8 mx-auto flex max-w-6xl justify-between px-4 sm:px-6">
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
            className="cursor-pointer rounded-full p-2 transition-all ease-in-out hover:bg-gray-200 hover:text-emerald-400 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </nav>
      </div>
      <div className="bar-container flex cursor-pointer justify-center gap-1 md:hidden">
        <button
          onClick={toggleTheme}
          className="cursor-pointer rounded-full p-2 transition-all ease-in-out hover:bg-gray-200 hover:text-emerald-400 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
        <div
          className="hamburger justify-start self-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`${mobileMenuClasses} bar ${isScrolled ? "bg-gray-400" : "bg-gray-700"} hover:bg-emerald-500 dark:bg-gray-400`}
          ></span>
          <span
            className={`${mobileMenuClasses} bar ${isScrolled ? "bg-gray-400" : "bg-gray-700"} hover:bg-emerald-500 dark:bg-gray-400`}
          ></span>
          <span
            className={`${mobileMenuClasses} bar ${isScrolled ? "bg-gray-400" : "bg-gray-700"} hover:bg-emerald-500 dark:bg-gray-400`}
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
  );
}
export default Navigation;
