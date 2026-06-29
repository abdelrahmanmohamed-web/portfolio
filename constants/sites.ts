import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const SOCIAL_LINKS = [
  {
    id: "github",
    name: "GitHub",
    label: "View Profile",
    href: "https://github.com/abdelrahmanmohamed-web",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    label: "Connect",
    href: "https://www.linkedin.com/in/abdelrhman-mohammad-683632337",
  },
  {
    id: "facebook",
    name: "Facebook",
    label: "Follow",
    href: "https://www.facebook.com/profile.php?id=61557064075414",
  },
  {
    id: "gmail",
    name: "Gmail",
    label: "Email Me",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=dev.abdelrhman.mohammad@gmail.com",
  },
] as const;
export const SOCIAL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  gmail: SiGmail,
};
