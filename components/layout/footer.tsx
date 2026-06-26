import { SOCIAL_LINKS, SOCIAL_ICONS } from "@/constants/sites";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-main border-t border-white/5 py-8 md:py-12 mt-20">
      <div className="dynamic-container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-text-secondary">
            © {currentYear}{" "}
            <span className="text-text-primary font-semibold">
              Abdelrahman Mohamed
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs text-text-secondary/50 mt-1">
            Built with Next.js & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.id];
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="p-2.5 bg-card-primary border border-white/5 rounded-lg text-text-secondary hover:text-accent-primary hover:border-accent-primary/20 transition-all duration-300"
              >
                {Icon && <Icon className="size-4" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
