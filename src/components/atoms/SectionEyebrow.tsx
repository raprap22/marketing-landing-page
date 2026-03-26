type SectionEyebrowProps = {
  children: string;
};

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <span className="inline-flex rounded-full border border-primary/15 bg-tertiary-strong/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-tertiary">
      {children}
    </span>
  );
}
