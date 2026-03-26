"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { NavLink } from "@/components/molecules/NavLink";
import type { NavItem } from "@/features/landing/types";

type HeaderProps = {
  brand: string;
  navItems: NavItem[];
  cta: NavItem;
};

export function Header({ brand, navItems, cta }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a
          className="font-headline text-2xl font-black uppercase tracking-[-0.08em] text-primary"
          href="#top"
        >
          {brand}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <NavLink key={item.label} active={index === 0} item={item} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={cta.href}>{cta.label}</Button>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-on-surface md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-white/5 px-6 py-5 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile primary">
            {navItems.map((item, index) => (
              <NavLink
                key={item.label}
                active={index === 0}
                item={item}
                onNavigate={closeMenu}
              />
            ))}
            <Button className="mt-2 w-full" href={cta.href} onClick={closeMenu}>
              {cta.label}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
