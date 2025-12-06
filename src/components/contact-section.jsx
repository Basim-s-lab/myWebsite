import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const contactClasses = "text-emerald-400 text-2xl";
  const socialClasses =
    "w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors duration-200";
  const contactInfo = [
    {
      icon: <Mail className={`${contactClasses}`} />,
      title: "Email",
      value: "aljazaeribasim@gmail.com",
    },
    {
      icon: <Phone className={`${contactClasses}`} />,
      title: "Phone",
      value: "+964 7854 701 930",
    },
    {
      icon: <MapPin className={`${contactClasses}`} />,
      title: "Location",
      value: "Baghdad, Iraq",
    },
  ];

  const sociallinks = [
    {
      icon: <Github />,
      url: "https://github.com/ShiroYaksha90",
      label: "Link to Basim Aljazaeri's Github repository",
    },
    {
      icon: <Linkedin />,
      url: "https://www.linkedin.com/in/basimaljazaeri",
      label: "Link to Basim Aljazaeri's Linkedin profile",
    },
    {
      icon: <Twitter />,
      url: "https://x.com/basimcode",
      label: "Link to Basim Aljazaeri's Twitter profile",
    },
  ];
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
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-slate-700">
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {sociallinks.map((social, index) => {
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      className={socialClasses}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="animate-fade-in-up"></div>
        </div>
      </div>
    </section>
  );
}
