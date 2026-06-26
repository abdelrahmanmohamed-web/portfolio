import { technologies } from "@/data/technologies";
import { services } from "@/data/services";
import { stats } from "@/data/stats";

export default function About() {
  return (
    <div
      id="about"
      className="dynamic-container mx-auto w-full flex flex-col gap-16 py-8"
    >
      {/* Tech Stack */}
      <div className="flex overflow-x-auto md:flex-wrap items-center justify-start md:justify-center gap-6 rounded-xl bg-card-primary p-4 scrollbar-none snap-x snap-mandatory">
        {technologies.map(({ id, name, Icon }) => (
          <div
            key={id}
            className="flex min-w-[150px] md:min-w-44 flex-1 shrink-0 items-center justify-center gap-3 rounded-lg py-4 md:py-5 snap-center"
          >
            <Icon className="text-3xl md:text-4xl text-accent-primary shrink-0" />
            <span className="font-semibold text-text-primary text-sm md:text-base whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile About */}
      <div className="md:hidden bg-card-primary grid grid-cols-3 items-start gap-4 p-4 text-center rounded-xl">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 items-center">
            <span className="text-xl font-bold text-text-primary">
              {stat.value}
            </span>
            <p className="text-text-secondary text-xs sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop About */}
      <div className="hidden md:grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start w-full mt-8">
        {/* Left Side */}
        <div className="flex flex-col gap-8 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="relative flex items-center gap-6 border-l-2 border-accent-primary pl-8 py-5"
              >
                <div className="relative flex h-14 w-14 items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-full bg-accent-primary/35 blur-lg" />
                  <div className="relative z-10 flex items-center justify-center">
                    <Icon className="text-text-primary w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text-primary text-lg md:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-base text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {index !== services.length - 1 && (
                  <div className="absolute left-0 -bottom-4 -translate-x-1/2 translate-y-1/2 size-3.5 rounded-full bg-accent-primary" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="w-full">
          <div className="flex flex-col gap-8 text-left w-full">
            <h2 className="text-4xl font-extrabold text-text-primary tracking-tight">
              About Me
            </h2>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg">
              I am a passionate Full-Stack developer who enjoys building
              performant and user-centric applications, transitioning from a
              foundation in design to scalable system architecture. I love
              solving complex technical challenges with clean, typed code.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 rounded-xl border border-white/5 bg-card-primary/40 p-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-1 flex-col items-center gap-2 text-center"
                >
                  <span className="text-2xl font-black text-text-primary">
                    {stat.value}
                  </span>

                  <p className="text-sm font-medium leading-relaxed text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
