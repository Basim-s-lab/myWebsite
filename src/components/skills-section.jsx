import { Server, Laptop, Database } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="text-2xl text-emerald-400" />,
      skills: [
        { name: "Node.js", level: "4" },
        { name: "Ruby on Rails", level: "4" },
        { name: "Express.js", level: "4" },
        { name: "RESTful APIs", level: "5" },
      ],
    },
    {
      title: "Frontend",
      icon: <Laptop className="text-2xl text-blue-400" />,
      skills: [
        { name: "React", level: "5" },
        { name: "Redux", level: "4" },
        { name: "CSS3", level: "4" },
        { name: "Tailwind CSS", level: "4" },
      ],
    },
    {
      title: "Database & tools",
      icon: <Database className="text-2xl text-purple-400" />,
      skills: [
        { name: "MongoDB", level: "4" },
        { name: "PostgreSQL", level: "4" },
        { name: "Git & GitHub", level: "5" },
        { name: "CLI & Bash scripting", level: "3" },
      ],
    },
  ];

  const skillDots = ({ level }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`skill-dot ${dot <= level ? "active-dot" : "inactive-dot"}`}
        ></div>
      ))}
    </div>
  );
  return (
    <section id="skills" className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-gray-100">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in-up rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-4 flex items-center">
                {category.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    {skillDots({ level: skill.level })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
