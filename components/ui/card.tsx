import Image from "next/image";
import FeaturedProject from "@/types/project";
import getFeaturedProjects from "@/lib/services/github.service";

export default async function Card() {
  const data: FeaturedProject[] = await getFeaturedProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {data.map((p) => (
        <div
          key={p.id}
          className="bg-card-primary border border-white/5 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-accent-primary/40 hover:shadow-[0_0_30px_rgba(123,31,53,0.15)] group"
        >
          <div className="relative w-full aspect-[16/9] bg-main border-b border-white/5 overflow-hidden">
            {p.imageUrl && (
              <Image
                src={p.imageUrl}
                alt={p.title || "Project image"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>

          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight line-clamp-1">
                {p.title}
              </h3>

              {p.technologies && p.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2.5 py-1 rounded bg-main border border-white/5 text-text-secondary uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p className="text-base text-text-secondary leading-relaxed line-clamp-3">
              {p.description}
            </p>

            <div className="pt-2 mt-auto flex items-center justify-between gap-6">
              {p.liveDemoUrl && (
                <a
                  className="text-sm font-semibold text-text-primary hover:text-accent-primary transition-colors duration-200"
                  href={p.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <span className="ml-1">→</span>
                </a>
              )}

              {p.repositoryUrl && (
                <a
                  className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors duration-200"
                  href={p.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
