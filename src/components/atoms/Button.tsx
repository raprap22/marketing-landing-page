import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-primary to-primary-strong text-[#561b00] shadow-[0_20px_50px_rgba(255,144,98,0.24)] hover:scale-[1.01] hover:shadow-[0_24px_56px_rgba(255,144,98,0.3)]",
  secondary:
    "border border-white/10 bg-white/5 text-on-surface hover:border-white/20 hover:bg-white/[0.08]",
  ghost: "text-on-surface hover:text-primary",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 sm:text-sm text-[11px] font-extrabold uppercase tracking-[0.18em] transition-all duration-300",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
