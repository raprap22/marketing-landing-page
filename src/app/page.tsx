import { landingPageContent } from "@/features/landing/data";
import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate";

export default function Home() {
  return <LandingPageTemplate content={landingPageContent} />;
}
