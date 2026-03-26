import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { SectionHeading } from '@/components/atoms/SectionHeading';
import type { LandingPageContent } from '@/features/landing/types';

type CtaSectionProps = {
  cta: LandingPageContent['cta'];
};

export function CtaSection({ cta }: CtaSectionProps) {
  const secondaryIsExternal = cta.secondaryCta.href.startsWith('mailto:');

  return (
    <section id="cta" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[2.5rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(255,144,98,0.14),rgba(255,189,89,0.04))] px-6 py-14">
          <SectionHeading align="center" description={cta.description} title={cta.title} />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={cta.primaryCta.href}>{cta.primaryCta.label}</Button>
            <Button external={secondaryIsExternal} href={cta.secondaryCta.href} variant="secondary">
              {cta.secondaryCta.label}
              <Icon className="h-4 w-4" name="arrow-up-right" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
