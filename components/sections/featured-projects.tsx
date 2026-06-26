import Card from "../ui/card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="dynamic-container mx-auto w-full py-16 flex flex-col gap-12"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight text-center md:text-left">
        Featured Projects
      </h2>
      <Card />
    </section>
  );
}
