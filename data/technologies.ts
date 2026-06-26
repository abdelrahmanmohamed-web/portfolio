import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTypescript, SiTailwindcss, SiShadcnui } from "react-icons/si";

import { RiNextjsFill, RiSupabaseLine } from "react-icons/ri";

export const technologies = [
  { id: "html", name: "HTML5", Icon: FaHtml5 },
  { id: "css", name: "CSS3", Icon: FaCss3Alt },
  { id: "js", name: "JavaScript", Icon: FaJsSquare },
  { id: "tailwind", name: "Tailwind CSS", Icon: SiTailwindcss },
  { id: "ts", name: "TypeScript", Icon: SiTypescript },
  { id: "react", name: "React", Icon: FaReact },
  { id: "next", name: "Next.js", Icon: RiNextjsFill },
  { id: "supabase", name: "Supabase", Icon: RiSupabaseLine },
  { id: "git", name: "Git", Icon: FaGitAlt },
  { id: "github", name: "GitHub", Icon: FaGithub },
  { id: "shadcn", name: "shadcn/ui", Icon: SiShadcnui },
];
