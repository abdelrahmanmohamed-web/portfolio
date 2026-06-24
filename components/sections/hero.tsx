import { AnimatedOrb } from "@/components/ui/animated-orb";

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-4 md:pt-12 md:px-20">
      {/* Mobile Hero */}
      <div className="md:hidden flex flex-col items-center text-center gap-8">
        <div className="relative shrink-0 w-72 h-72 flex items-center justify-center">
          <AnimatedOrb />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary whitespace-nowrap">
            Hello, I{"'"}m Abdelrhman
          </h1>
          <h2 className="text-text-secondary text-lg leading-relaxed max-w-sm">
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

      {/* Desktop Hero */}
      <div className="hidden md:flex items-center justify-between gap-12 w-full">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-text-primary whitespace-nowrap">
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

        <div className="relative shrink-0 w-[320px] h-[320px] flex items-center justify-center">
          <AnimatedOrb />
        </div>
      </div>
    </section>
  );
}
