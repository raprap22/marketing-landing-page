import { render, screen } from "@testing-library/react";
import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate";
import { landingPageContent } from "@/features/landing/data";

describe("LandingPageTemplate", () => {
  it("renders the key landing page sections", () => {
    render(<LandingPageTemplate content={landingPageContent} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /dark roast\.\s*bold soul\./i,
    );
    expect(screen.getByText(/trusted by people who take/i)).toBeInTheDocument();
    expect(screen.getByText("The Daily Grind")).toBeInTheDocument();
    expect(screen.getByText(/© 2026 Spot Roasts/i)).toBeInTheDocument();
  });
});
