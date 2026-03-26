import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { SectionEyebrow } from "@/components/atoms/SectionEyebrow";
import type { LandingPageContent } from "@/features/landing/types";

type HeroSectionProps = {
  hero: LandingPageContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(255,144,98,0.18),_transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end lg:px-12">
        <div className="max-w-3xl">
          <SectionEyebrow>{hero.eyebrow}</SectionEyebrow>
          <h1 className="mt-8 font-headline text-5xl font-black leading-[0.9] tracking-[-0.08em] text-on-surface sm:text-7xl lg:text-[6.5rem]">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-on-surface-muted sm:text-xl">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
              <Icon className="h-4 w-4" name="arrow-right" />
            </Button>
          </div>
          <dl className="mt-12 grid gap-6 rounded-[2rem] border border-white/5 bg-white/5 p-6 backdrop-blur-xl sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-[0.18em] text-on-surface-muted">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-headline text-2xl font-black tracking-[-0.05em] text-on-surface">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -right-8 top-10 hidden h-56 w-56 rounded-full bg-primary/10 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                alt={hero.imageAlt}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                src={hero.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
