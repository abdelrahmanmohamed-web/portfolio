import { AnimatedOrb } from "@/components/ui/animated-orb";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-6 lg:pt-12 px-6 lg:px-20 overflow-x-hidden"
    >
      {/* Mobile + Tablet */}
      <div className="lg:hidden flex flex-col items-center text-center gap-8">
        <div className="relative flex items-center justify-center">
          <AnimatedOrb />
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary text-balance">
            Hello, I{"'"}m Abdelrhman
          </h1>

          <h2 className="text-text-secondary text-lg leading-relaxed max-w-md mx-auto">
            Front-End Software Engineer Specializing in TS/Next.js/Supabase.
            Building performant, modern, and scalable web applications.
          </h2>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          <a
            href="#contact"
            className="bg-accent-primary text-text-primary py-3 rounded-full font-medium hover:bg-accent-hover transition-colors text-center"
          >
            Start a Project
          </a>

          <a
            href="/resume"
            className="border border-text-secondary/20 text-text-primary py-3 rounded-full hover:border-text-primary transition-colors text-center"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between gap-12 w-full">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-5xl xl:text-6xl font-bold tracking-tight text-text-primary text-balance">
            Hello, I{"'"}m Abdelrhman
          </h1>

          <h2 className="text-text-secondary text-xl leading-relaxed">
            Front-End Software Engineer Specializing in TS/Next.js/Supabase.
            Building performant, modern, and scalable web applications.
          </h2>

          <div className="flex gap-4 pt-2">
            <a
              href="#contact"
              className="bg-accent-primary text-text-primary px-8 py-3 rounded-full font-medium hover:bg-accent-hover transition-colors"
            >
              Start a Project
            </a>

            <a
              href="/resume"
              className="border border-text-secondary/20 text-text-primary px-8 py-3 rounded-full hover:border-text-primary transition-colors"
            >
              My Resume
            </a>
          </div>
        </div>

        <AnimatedOrb />
      </div>
    </section>
  );
}
