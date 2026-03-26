import { Icon } from "@/components/atoms/Icon";
import type { LandingPageContent } from "@/features/landing/types";

type FooterProps = {
  brand: string;
  footer: LandingPageContent["footer"];
};

export function Footer({ brand, footer }: FooterProps) {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <p className="font-headline text-xl font-black uppercase tracking-[-0.06em] text-primary">
            {brand} Roasts
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-on-surface-muted">
            {footer.legal}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-col gap-3 text-sm uppercase tracking-[0.18em] text-on-surface-muted sm:flex-row sm:flex-wrap sm:gap-6"
        >
          {footer.links.map((link) => (
            <a key={link.label} className="transition-colors hover:text-primary" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {footer.socialLinks.map((link) => (
            <a
              key={link.label}
              aria-label={link.label}
              className="rounded-full border border-white/10 p-3 text-on-surface-muted transition-colors hover:text-primary"
              href={link.href}
            >
              <Icon className="h-4 w-4" name={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
