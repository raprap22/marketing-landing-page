import Image from "next/image";
import { Icon } from "@/components/atoms/Icon";
import type { Testimonial } from "@/features/landing/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div>
        <div className="mb-6 flex gap-1 text-tertiary">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Icon key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-current" name="star" />
          ))}
        </div>
        <blockquote className="mb-8 text-lg leading-8 text-on-surface sm:text-xl">
          “{testimonial.quote}”
        </blockquote>
      </div>
      <div className="flex items-center gap-4">
        <Image
          alt={testimonial.imageAlt}
          className="h-14 w-14 rounded-full border border-primary/50 object-cover"
          height={56}
          src={testimonial.image}
          width={56}
        />
        <div>
          <p className="font-headline text-lg font-bold text-on-surface">{testimonial.name}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-on-surface-muted">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}
