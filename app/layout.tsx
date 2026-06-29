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
        <Footer />
      </body>
    </html>
  );
}
