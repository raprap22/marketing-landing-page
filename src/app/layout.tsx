import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spotroasts.example.com"),
  title: "Spot Roasts | Small Batch Dark Roast Coffee",
  description:
    "Discover Spot Roasts, a modern dark roast subscription built around ethical sourcing, master roasting, and ritual-worthy coffee.",
  openGraph: {
    title: "Spot Roasts | Small Batch Dark Roast Coffee",
    description:
      "Artisanal dark roast subscriptions with ethically sourced beans, small-batch roasting, and direct-to-door delivery.",
    url: "https://spotroasts.example.com",
    siteName: "Spot Roasts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spot Roasts | Small Batch Dark Roast Coffee",
    description:
      "Refine your daily ritual with bold, small-batch dark roasts delivered fresh.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
