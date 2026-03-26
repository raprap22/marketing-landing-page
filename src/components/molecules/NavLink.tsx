import Link from "next/link";
import type { NavItem } from "@/features/landing/types";

type NavLinkProps = {
  item: NavItem;
  active?: boolean;
  onNavigate?: () => void;
};

export function NavLink({ item, active = false, onNavigate }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={[
        "text-sm font-bold uppercase tracking-[0.18em] transition-colors",
        active ? "text-primary" : "text-on-surface-muted hover:text-on-surface",
      ].join(" ")}
    >
      {item.label}
    </Link>
  );
}
