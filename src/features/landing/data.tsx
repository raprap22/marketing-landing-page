import type { LandingPageContent } from "@/features/landing/types";

export const landingPageContent: LandingPageContent = {
  brand: "Spot",
  navItems: [
    { label: "Roasts", href: "#pricing" },
    { label: "Our Story", href: "#features" },
    { label: "Subscriptions", href: "#pricing" },
  ],
  hero: {
    eyebrow: "Small Batch. Big Impact.",
    title: (
      <>
        Dark Roast.
        <br />
        <span className="bg-linear-to-r from-primary via-primary-strong to-tertiary bg-clip-text text-transparent">
          Bold Soul.
        </span>
      </>
    ),
    description:
      "Artisanal coffee for the modern ritual. We sourcef ethically, roast meticulously, and deliver the perfect morning direct to your door.",
    primaryCta: { label: "Start Your Ritual", href: "#cta" },
    secondaryCta: { label: "The Process", href: "#features" },
    image:
      "https://images.unsplash.com/photo-1588317291755-a07b78ef7a26?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Moody shot of a barista pouring latte art into a dark ceramic cup with steam rising.",
    stats: [
      { label: "Direct trade partners", value: "18" },
      { label: "Hours from roast to ship", value: "24" },
      { label: "Five-star reviews", value: "4.9/5" },
    ],
  },
  features: {
    eyebrow: "The Spot Standard",
    title: (
      <>
        Beyond the cup,
        <span className="text-primary"> uncompromising by design.</span>
      </>
    ),
    description:
      "Every bean carries a story of origin, expertise, and care. Our process keeps that story intact from farm to first pour.",
    items: [
      {
        title: "Ethically Sourced",
        description:
          "We work directly with farmers to support fair wages and sustainable practices that protect the land and strengthen every harvest.",
        href: "#cta",
        ctaLabel: "Trace the Bean",
        icon: "leaf",
      },
      {
        title: "Master Roasters",
        description:
          "Roasted in small batches in the heart of the city, with precision heat control that unlocks richer and deeper flavor profiles.",
        href: "#pricing",
        ctaLabel: "Our Roast Profiles",
        icon: "flame",
      },
      {
        title: "Direct Trade",
        description:
          "No middlemen. We build long-term relationships with coffee cooperatives from Ethiopia to Brazil to keep quality consistent.",
        href: "#testimonials",
        ctaLabel: "Global Impact",
        icon: "handshake",
      },
    ],
  },
  testimonials: {
    eyebrow: "Spot Devotees",
    title: (
      <>
        Trusted by people who take
        <span className="text-tertiary"> their ritual seriously.</span>
      </>
    ),
    items: [
      {
        quote:
          "The Midnight Blend is unparalleled. I've tried roasts from all over the world, but this is the first one that feels like a ritual.",
        name: "Julian Vance",
        role: "Photographer & Enthusiast",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAMt0MDb-_gZDA64cMMmKUH3u-hJS4XFH4ZzDLtwYW3azoHMyPJvvKNEsNuU__ZHfdtSAow2lsKWMiDm-XwCHKRhgU_vLMetV2uIe9rm18udr6e3HXwkx6hsgmGXZTfWFWWWO80m4yBT86gEuB2Y2pAn73bcfN1KXPvqOj0tYKbtdBnmnICTdeScbL4JZI0o9JSus5pzBm0rxw_JuxZ4HqV-rG6e98xWLBXPdRLjFdqqfTq1hor4ioI7m02mjEiYVHVx4mdmdDpGGQ",
        imageAlt: "Portrait of Julian Vance, a coffee enthusiast.",
        rating: 5,
      },
      {
        quote:
          "Spot's delivery is clockwork. Freshly roasted beans every Monday morning makes my entire week. Simply the best subscription.",
        name: "Elena Rossi",
        role: "Architect",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDbl6vMBnL0HaaZ8cs09JsYPI6MAtelVCm3Q0PtSqAeJgnG8UdWMk-xPGrjkBx_Z4dxrhqnf6qUA4zgrIBjZNxpbnE4arnKuSUIjpoESSGmvWjpYnoCwiQX2tbqTLB7U8qJzqaZnXLMxlN4_cmrtEkYpcmFfaXxmVR-rydx53hLioo4vQIsM3HYXz1-AQ0Boqy-HvM3DuXcbRt2bUdqi8hciyvCEVkpM0jZIbzRyIHyeNMtS1Wv4fq-BIyp_uMuGMql0FTOU9weYWs",
        imageAlt: "Portrait of Elena Rossi.",
        rating: 5,
      },
      {
        quote:
          "The attention to detail in their roasting is phenomenal. Dark, complex, and without any of the bitterness you find elsewhere.",
        name: "Marcus Thorne",
        role: "Creative Lead",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDFkiL6qhJ3hSZ_mukQADw3mw3NvXj1HydDV_bJOgV9_wTKHCEb81A5LkK5aROTknrm76KLXB3fYLVb803M2F6KArfFFOOttl-to38E9Vl-8edwMHmqgxC7om3HVsdb7agR9NpJmpT9LLVS15bPkKnHfAlBZRmsm4UWUEd5bqIrtkkw2qhVWxJB-tVeYjma4QWIgelb9cFd8UkEjt5JwtydnBvu2xY44GDB0cI0OxVOhvy6P4vJPMkCQfOSLPHUdpQw6gWIymEhFi0",
        imageAlt: "Portrait of Marcus Thorne.",
        rating: 5,
      },
    ],
  },
  pricing: {
    eyebrow: "Signature Collections",
    title: (
      <>
        Pick the cadence that fits
        <span className="text-primary"> your mornings.</span>
      </>
    ),
    description:
      "Never run out of the beans you love. Choose a subscription tailored to your pace, palate, and brewing ritual.",
    items: [
      {
        name: "The Casual Sipper",
        description: "A flexible plan for slow and steady mornings.",
        price: "$29",
        cadence: "/mo",
        features: [
          "1 bag (12oz) bi-weekly",
          "Rotating single origins",
          "Cancel anytime",
        ],
        ctaLabel: "Subscribe Now",
        href: "#cta",
      },
      {
        name: "The Daily Grind",
        description: "Our most popular plan for everyday ritualists.",
        price: "$59",
        cadence: "/mo",
        features: [
          "2 bags (12oz) weekly",
          "Free priority shipping",
          "Early access roasts",
          "Roaster's tasting notes",
        ],
        ctaLabel: "Subscribe Now",
        href: "#cta",
        isFeatured: true,
        badge: "Daily Ritual",
      },
      {
        name: "The Connoisseur",
        description: "Rare lots and guided experiences for enthusiasts.",
        price: "$99",
        cadence: "/mo",
        features: [
          "Rare micro-lots",
          "1-on-1 brewing workshop",
          "Custom roasting profile",
        ],
        ctaLabel: "Contact Us",
        href: "#cta",
      },
    ],
  },
  cta: {
    title: (
      <>
        Refine your daily ritual
        <span className="text-primary"> with better beans.</span>
      </>
    ),
    description:
      "Join thousands of coffee lovers who upgraded to Spot Roasts for fresh, bold dark roast coffee delivered on their schedule.",
    primaryCta: { label: "Order a Sampler", href: "#pricing" },
    secondaryCta: { label: "Talk to a Roaster", href: "mailto:hello@spotroasts.example.com" },
  },
  footer: {
    legal: "© 2026 Spot Roasts. Established in the dark.",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Shipping & Returns", href: "#" },
      { label: "Contact", href: "mailto:hello@spotroasts.example.com" },
    ],
    socialLinks: [
      { label: "Instagram", href: "#", icon: "instagram" },
      { label: "X", href: "#", icon: "x" },
    ],
  },
};
