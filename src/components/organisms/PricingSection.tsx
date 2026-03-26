import { SectionHeading } from "@/components/atoms/SectionHeading";
import { PricingCard } from "@/components/molecules/PricingCard";
import type { LandingPageContent } from "@/features/landing/types";

type PricingSectionProps = {
  pricing: LandingPageContent["pricing"];
};

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section id="pricing" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          description={pricing.description}
          eyebrow={pricing.eyebrow}
          title={pricing.title}
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.items.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
