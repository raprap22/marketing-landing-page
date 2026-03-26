import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment}`}>
      {eyebrow ? <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">{eyebrow}</span> : null}
      <h2 className="font-headline text-4xl font-black leading-[0.95] tracking-[-0.06em] text-on-surface sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-on-surface-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
