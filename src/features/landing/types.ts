import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type Feature = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: IconName;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  rating: number;
};

export type PricingTier = {
  name: string;
  description: string;
  price: string;
  cadence: string;
  features: string[];
  ctaLabel: string;
  href: string;
  isFeatured?: boolean;
  badge?: string;
};

export type FooterLinkGroup = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type LandingPageContent = {
  brand: string;
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    title: ReactNode;
    description: string;
    primaryCta: NavItem;
    secondaryCta: NavItem;
    image: string;
    imageAlt: string;
    stats: HeroStat[];
  };
  features: {
    eyebrow: string;
    title: ReactNode;
    description: string;
    items: Feature[];
  };
  testimonials: {
    eyebrow: string;
    title: ReactNode;
    items: Testimonial[];
  };
  pricing: {
    eyebrow: string;
    title: ReactNode;
    description: string;
    items: PricingTier[];
  };
  cta: {
    title: ReactNode;
    description: string;
    primaryCta: NavItem;
    secondaryCta: NavItem;
  };
  footer: {
    legal: string;
    links: FooterLinkGroup[];
    socialLinks: SocialLink[];
  };
};

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "leaf"
  | "flame"
  | "handshake"
  | "star"
  | "check"
  | "instagram"
  | "x";
