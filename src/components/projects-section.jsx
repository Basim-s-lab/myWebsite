import Badge from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";
import bookishImage from "../Bookish.svg";
import myWorldImage from "../my-world.svg";
import foodoImage from "../foodo.svg";
import spaceHubImage from "../Space-Travelers-Hub.svg";
import holaImage from "../hola-app.svg";
import goMovieImage from "../go-movie.svg";
export default function ProjectsSection() {
  const projects = [
    {
      id: "1",
      title: "My World",
      description:
        "This project is about building a mobile web application to compare metrics from different countries. This project utilizes an API to retrieve information about countries and continents, which is then displayed through the use of React functions.",
      technologies: ["React", "Redux", "CSS"],
      image: myWorldImage,
      liveLink: "https://my-world-sems.onrender.com/",
      githubUrl: "https://github.com/ShiroYaksha90/react-redux-capstone",
    },
    {
      id: "2",
      title: "Foodo",
      description:
        "Foodo is a full-Stack application built with Ruby on Rails. It allows users to create, edit, and delete their own unique recipes. Users can also add ingredients, and follow step-by-step cooking instructions. The app features user authentication, and a responsive design for an optimal user experience",
      technologies: ["Ruby on Rails", "Bootstrap", "Rspec", "Postgres"],
      image: foodoImage,
      liveLink: "https://foodo.onrender.com/",
      githubUrl: "https://github.com/ShiroYaksha90/Foodo",
    },
    {
      id: "3",
      title: "Bookish",
      description:
        "ookstore is a web app that allows users to add, remove, and display books. The app is built with React and Redux. It also uses an external API to store and retrieve data",
      technologies: ["React", "Redux", "CSS"],
      image: bookishImage,
      liveLink: "https://book-store-jigy.onrender.com/",
      githubUrl: "https://github.com/ShiroYaksha90/bookstore-react",
    },
    {
      id: "4",
      title: "Space Hub",
      description:
        "Space Hub utilizes the SpaceX API to fetch information about the various spaceships details and allow visitors to join the various missions. It's built with the React framework to utilize the fluidity of SPA's and Redux for state management.",
      technologies: ["React", "Redux", "CSS"],
      image: spaceHubImage,
      liveLink: "https://space-hub-osb.netlify.app/",
      githubUrl: "https://github.com/ShiroYaksha90/space-hub-traveler",
    },
    {
      id: "5",
      title: "Hola",
      description:
        "Hola is a full stack social app that allows users to sign up, log in, follow/unfollow other users, and create posts. It let's users activate their account, change their password via email using a hashed token.",
      technologies: ["Ruby on Rails", "Postgres", "Bootstrap", "Hotwire"],
      image: holaImage,
      liveLink: "https://hola-fvhk.onrender.com/",
      githubUrl: "https://github.com/ShiroYaksha90/hola",
    },
    {
      id: "6",
      title: "Go movies",
      description:
        "Go Movies is a simple web app that fetches and stores data in multiple APIs and displays them, it uses modular architecture as well as webpack.",
      technologies: ["Javascript", "Webpack", "CSS"],
      image: goMovieImage,
      liveLink: "https://dheerajsachdeva.github.io/capstone2/dist/",
      githubUrl: "https://github.com/ShiroYaksha90/javascript-capstone",
    },
  ];

  const getTechBadgeColor = (tech) => {
    const colorMap = {
      React: "bg-blue-500/20 text-emerald-400",
      Redux: "bg-emerald-500/20 text-emerald-400",
      Javascript: "bg-orange-500/20 text-orange-400",
      "Ruby on Rails": "bg-red-500/20 text-red-400",
      Postgres: "bg-purple-500/20 text-purple-400",
      Bootstrap: "bg-purple-400 textpurple-500",
      Rspec: "bg-yellow-500/20 text-yellow-400",
      CSS: "bg-green-500/20 text-green-400",
      "Tailwind CSS": "bg-sky-500/20 text-sky-400",
      "Express.js": "bg-orange-500/20 text-orange-400",
      "Node.js": "bg-lime-500/20 text-lime-400",
      Hotwire: "bg-red-500/20 text-red-400",
    };
    return colorMap[tech] || "bg-gray-200 text-gray-600";
  };
  return (
    <section className="bg-gray-50 py-20 dark:bg-slate-800/50" id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-gray-100">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A showcase of my latest work
          </p>
        </div>
        {/* <div className="mb-12 flex flex-wrap justify-center gap-4"></div> */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="transhition-all transform overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800"
              >
                <img
                  className="h-48 w-full object-cover"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        content={tech}
                        className={`rounded-full px-2 py-1 text-xs ${getTechBadgeColor(tech)}`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      className="flex items-center text-sm text-emerald-600 transition-colors duration-200 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    <a
                      className="flex items-center text-sm text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
