export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-slate-900">
      <div className="lg-px-8 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="animate-fade-in-up mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-gray-100">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <h3 className="mb-6 text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
              Let's Connect
            </h3>
            <p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
              I'm always interested in new opportunities and exciting projects.
              Whether you're a startup looking to build your MVP or an
              established company needing to scale your application, I'd love to
              hear from you.
            </p>
          </div>
          <div className="animate-fade-in-up"></div>
        </div>
      </div>
    </section>
  );
}
