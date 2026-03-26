import type { IconName } from "@/features/landing/types";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const sharedProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "arrow-right":
      return (
        <svg {...sharedProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...sharedProps}>
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...sharedProps}>
          <path d="M6 13c0-5 4.5-8 11-8 0 6.5-3 11-8 11-2 0-3-1.2-3-3Z" />
          <path d="M8 16c1-3 3.8-5.8 8-8" />
        </svg>
      );
    case "flame":
      return (
        <svg {...sharedProps}>
          <path d="M12 3c1 3-1 4.5-1 6.5S13 13 13 15a3 3 0 1 1-6 0c0-2.5 1.5-4.5 3.5-6.5C12 7 12.5 5.2 12 3Z" />
          <path d="M15 8c1.7 1.6 3 3.7 3 6a6 6 0 1 1-12 0c0-1.4.4-2.6 1.1-3.8" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...sharedProps}>
          <path d="m3 12 4-4 3 3 4-4 7 7" />
          <path d="m10 11 3 3a2 2 0 0 0 2.8 0l3.2-3.2" />
          <path d="m2 13 3 3" />
          <path d="m19 9 3 3" />
        </svg>
      );
    case "star":
      return (
        <svg {...sharedProps}>
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z" />
        </svg>
      );
    case "check":
      return (
        <svg {...sharedProps}>
          <path d="m5 12.5 4.2 4.2L19 7.5" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...sharedProps}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    case "x":
      return (
        <svg {...sharedProps}>
          <path d="M5 5 19 19" />
          <path d="m19 5-8 9" />
          <path d="m8 14-3 5" />
        </svg>
      );
    default:
      return null;
  }
}
