import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdelrhman.online"),

  title: "Abdelrhman Mohamed | Frontend Developer",

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Supabase. Explore my projects and modern web development portfolio.",

  keywords: [
    "Abdelrhman Mohamed",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Supabase",
    "Portfolio",
  ],

  authors: [{ name: "Abdelrhman Mohamed" }],
  creator: "Abdelrhman Mohamed",

  openGraph: {
    title: "Abdelrhman Mohamed | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Supabase.",
    url: "https://abdelrhman.online",
    siteName: "Abdelrhman Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdelrhman Mohamed Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdelrhman Mohamed | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Supabase.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://abdelrhman.online/#person",

  name: "Abdelrhman Mohamed",

  url: "https://abdelrhman.online",

  image: "https://abdelrhman.online/profile.jpg",

  jobTitle: "Frontend Developer",

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Supabase.",

  sameAs: [
    "https://github.com/abdelrahmanmohamed-web",
    "https://www.linkedin.com/in/abdelrhman-mohammad-683632337/",
  ],

  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Supabase",
    "HTML",
    "CSS",
    "REST APIs",
    "Git",
    "GitHub",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://abdelrhman.online/#website",

  name: "Abdelrhman Mohamed Portfolio",

  url: "https://abdelrhman.online",

  description:
    "Personal portfolio of Abdelrhman Mohamed, Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and Supabase.",

  inLanguage: "en",

  about: {
    "@id": "https://abdelrhman.online/#person",
  },

  publisher: {
    "@id": "https://abdelrhman.online/#person",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
