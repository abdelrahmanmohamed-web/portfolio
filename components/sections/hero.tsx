import Link from "next/link";
import { AnimatedOrb } from "@/components/ui/animated-orb";

export default function Hero() {
  return (
    <section
      id="hero"
      className="dynamic-container w-full overflow-x-hidden py-12 lg:py-20"
    >
      {/* Mobile + Tablet */}
      <div className="lg:hidden flex flex-col items-center text-center gap-10">
        <div className="relative flex items-center justify-center">
          <AnimatedOrb />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary text-balance">
            Hello, I{"'"}m Abdelrhman
          </h1>

          <h2 className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-prose mx-auto">
            Front-End Software Engineer Specializing in TS/Next.js/Supabase.
            Building performant, modern, and scalable web applications.
          </h2>
        </div>

        <div className="flex flex-col gap-3.5 w-full max-w-xs">
          <Link
            href="#contact"
            className="bg-accent-primary text-text-primary py-3.5 rounded-full font-medium hover:bg-accent-hover transition-colors text-center text-base"
          >
            Start a Project
          </Link>

          <Link
            href="https://abdelrhman.online/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-text-secondary/20 text-text-primary py-3.5 rounded-full hover:border-text-primary transition-colors text-center text-base"
          >
            My Resume
          </Link>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-[1.2fr_auto] items-center gap-[clamp(3rem,6vw,8rem)] w-full">
        <div className="flex flex-col gap-8 max-w-2xl">
          <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight text-text-primary text-balance">
            Hello, I{"'"}m Abdelrhman
          </h1>

          <h2 className="text-text-secondary text-xl max-w-xl leading-8">
            Front-End Software Engineer Specializing in TS/Next.js/Supabase.
            Building performant, modern, and scalable web applications.
          </h2>

          <div className="flex gap-4 pt-2">
            <Link
              href="#contact"
              className="bg-accent-primary text-text-primary px-8 py-3.5 rounded-full font-medium hover:bg-accent-hover transition-colors text-base md:text-lg text-center min-w-[170px]"
            >
              Start a Project
            </Link>

            <Link
              href="/cv.pdf"
              target="_blank"
              className="border border-text-secondary/20 text-text-primary px-8 py-3.5 rounded-full hover:border-text-primary transition-colors text-base md:text-lg text-center min-w-[170px]"
            >
              My Resume
            </Link>

            {/* <a href="/resume" target="_blank"></a> */}
          </div>
        </div>

        <AnimatedOrb />
      </div>
    </section>
  );
}
