import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import type { PricingTier } from "@/features/landing/types";

type PricingCardProps = {
  tier: PricingTier;
};

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-[2rem] border p-8 sm:p-10",
        tier.isFeatured
          ? "border-primary/70 bg-surface-strong shadow-[0_24px_64px_rgba(255,144,98,0.16)]"
          : "border-white/5 bg-surface-muted",
      ].join(" ")}
    >
      {tier.badge ? (
        <span className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#561b00]">
          {tier.badge}
        </span>
      ) : null}
      <p className={`mb-3 text-xs font-black uppercase tracking-[0.2em] ${tier.isFeatured ? "text-primary" : "text-on-surface-muted"}`}>
        {tier.name}
      </p>
      <p className="mb-8 text-sm leading-7 text-on-surface-muted">{tier.description}</p>
      <div className="mb-8 flex items-end gap-2">
        <span className="font-headline text-5xl font-black tracking-[-0.06em] text-on-surface">
          {tier.price}
        </span>
        <span className="pb-2 text-sm text-on-surface-muted">{tier.cadence}</span>
      </div>
      <ul className="mb-10 flex flex-1 flex-col gap-4">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-on-surface-muted">
            <span className="mt-1 text-primary">
              <Icon className="h-4 w-4" name="check" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={tier.href}
        variant={tier.isFeatured ? "primary" : "secondary"}
        className="w-full"
      >
        {tier.ctaLabel}
      </Button>
    </article>
  );
}
