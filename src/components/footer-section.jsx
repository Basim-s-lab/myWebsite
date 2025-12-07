import SocialLinks from "./ui/socialLinks.jsx";
export default function FooterSection() {
  const date = new Date().getFullYear();
  const socialClasses =
    "text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200";
  return (
    <footer className="dark:bordr-slate-700 border-t border-gray-200 bg-gray-100 py-8 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {date} Basim Aljazaeri. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <SocialLinks className={socialClasses} />
          </div>
        </div>
      </div>
    </footer>
  );
}
