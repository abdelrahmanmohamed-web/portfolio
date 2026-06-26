import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
export default function Home() {
  return (
      <main className="space-y-24 md:space-y-36">
        <Hero />
        <About />
      </main>
  );
}
