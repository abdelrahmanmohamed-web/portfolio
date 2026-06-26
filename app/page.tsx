import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/featured-projects";
import Contact from "@/components/sections/contact";
export default function Home() {
  return (
    <main className="space-y-24 md:space-y-36">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
