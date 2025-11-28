export default function SkillsSection() {
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </section>
  );
}
