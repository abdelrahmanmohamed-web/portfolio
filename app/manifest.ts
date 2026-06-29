import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdelrhman Mohamed Portfolio",
    short_name: "Abdelrhman",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Supabase.",

    start_url: "/",

    display: "standalone",

    background_color: "#12141d",

    theme_color: "#12141d",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "1254x1254",
        type: "image/x-icon",
      },
    ],
  };
}
