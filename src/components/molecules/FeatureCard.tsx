import Link from "next/link";
import { Icon } from "@/components/atoms/Icon";
import type { Feature } from "@/features/landing/types";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/5 bg-surface-muted p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-surface-strong">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/20 text-primary">
        <Icon className="h-7 w-7" name={feature.icon} />
      </div>
      <h3 className="mb-4 font-headline text-2xl font-bold tracking-tight text-on-surface">
        {feature.title}
      </h3>
      <p className="mb-6 text-base leading-8 text-on-surface-muted">
        {feature.description}
      </p>
      <Link
        className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-primary transition-all hover:gap-3"
        href={feature.href}
      >
        {feature.ctaLabel}
        <Icon className="h-4 w-4" name="arrow-right" />
      </Link>
    </article>
  );
}
