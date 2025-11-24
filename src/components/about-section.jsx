import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20 dark:bg-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-gray-100">
            About Me
          </h2>
          <p className="max-2-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Passionate about crafting elegant solutions to complex problems
          </p>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <h3 className="mb-6 text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Full-stack Web Developer with over 2 years of experience
                building scalable applications using Ruby on Rails, Node.js,
                React, and Express.
              </p>
              <p className="leading-relaxed">
                I’ve contributed to 25+ projects, combining clean architecture
                with creative problem-solving to deliver high-quality,
                user-focused features.
              </p>
              <p className="leading-relaxed">
                I thrive in agile, collaborative environments and bring strong
                communication skills, especially in remote teams. Always eager
                to learn, I proactively adopt new tools and technologies to
                improve both product quality and team workflows.
              </p>
            </div>
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                What I Bring
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Clean, maintainable code
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Agile methodology
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Test-driven development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Performance optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt=""
              className="h-auto w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
