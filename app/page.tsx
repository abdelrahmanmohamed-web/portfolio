import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/featured-projects";
export default function Home() {
  return (
    <main className="space-y-24 md:space-y-36">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
