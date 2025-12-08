import Button from "./ui/button.jsx";
import SocialLinks from "./ui/socialLinks.jsx";
import SocialSection from "./ui/socialLinks.jsx";

export default function HeroSection() {
  const socialClasses =
    "text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 text-2xl";
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const buttonClasses =
    "focus-visible:ring-ring hover-scale h-10 items-center rounded-md px-8 py-3 text-sm font-medium whitespace-nowrap ring-offset-cyan-50 transition-all hover:bg-emerald-600 focus-visible:ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 inline-flex items-center justify-center dark:hover:bg-emerald-500 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

  return (
    <section
      id="home"
      className="hero-section flex min-h-screen items-center pt-16"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-6xl dark:text-gray-100">
              Hi, I'm{" "}
              <span className="text-emerald-500 dark:text-emerald-400">
                Basim Aljzaeri
              </span>
            </h1>
            <h2 className="mb-6 text-xl text-gray-700 sm:text-2xl dark:text-gray-300">
              Full Stack Developer specializing in{" "}
              <span className="font-semibold text-blue-500 dark:text-blue-400">
                Node.js
              </span>{" "}
              &{" "}
              <span className="font-semibold text-red-500 dark:text-red-400">
                Ruby on Rails
              </span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-400">
              I build scalable web applications with modern technologies,
              focusing on clean code, user experience, and performance
              optimization. Let's create something amazing together.
            </p>
            <div className="buttons flex flex-col gap-4 sm:flex-row">
              <Button
                content="View My Work"
                onClick={() => scrollToSection("work")}
                className={
                  buttonClasses +
                  " bg-emerald-500 text-white dark:bg-emerald-400 dark:text-gray-900"
                }
              />
              <Button
                content="Get In Touch"
                onClick={() => scrollToSection("contact")}
                className={
                  buttonClasses +
                  " border-2 border-emerald-500 bg-white text-emerald-600 hover:text-white dark:bg-black dark:text-emerald-400"
                }
              />
            </div>
            <div className="social mt-8 flex space-x-6">
              <SocialLinks className={socialClasses} />
            </div>
          </div>
          <div className="animate-fade-in lg:text-center">
            <img
              className="mx-auto h-64 w-64 rounded-full border-4 border-emerald-400/20 object-cover shadow-2xl sm:h-80 sm:w-80"
              src="https://avatars.githubusercontent.com/u/30289772?s=400&u=6655f2e98a0b24d79f07cedd0ca66c35a1b59ff4&v=4"
              alt="personal avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
