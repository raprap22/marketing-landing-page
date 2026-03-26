import { SectionHeading } from "@/components/atoms/SectionHeading";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import type { LandingPageContent } from "@/features/landing/types";

type TestimonialsSectionProps = {
  testimonials: LandingPageContent["testimonials"];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.items.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
