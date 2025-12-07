import { Github, Linkedin, Twitter } from "lucide-react";
export default function SocialLinks({ className }) {
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
    <>
      {sociallinks.map((social, index) => {
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            className={className}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        );
      })}
    </>
  );
}
