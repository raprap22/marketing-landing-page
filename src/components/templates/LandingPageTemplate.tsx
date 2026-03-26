import { CtaSection } from "@/components/organisms/CtaSection";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { HeroSection } from "@/components/organisms/HeroSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import type { LandingPageContent } from "@/features/landing/types";

type LandingPageTemplateProps = {
  content: LandingPageContent;
};

export function LandingPageTemplate({ content }: LandingPageTemplateProps) {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header
        brand={content.brand}
        cta={content.hero.primaryCta}
        navItems={content.navItems}
      />
      <main>
        <HeroSection hero={content.hero} />
        <FeaturesSection features={content.features} />
        <TestimonialsSection testimonials={content.testimonials} />
        <PricingSection pricing={content.pricing} />
        <CtaSection cta={content.cta} />
      </main>
      <Footer brand={content.brand} footer={content.footer} />
    </div>
  );
}
