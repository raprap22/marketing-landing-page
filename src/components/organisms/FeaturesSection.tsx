import { SectionHeading } from "@/components/atoms/SectionHeading";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import type { LandingPageContent } from "@/features/landing/types";

type FeaturesSectionProps = {
  features: LandingPageContent["features"];
};

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          description={features.description}
          eyebrow={features.eyebrow}
          title={features.title}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.items.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
