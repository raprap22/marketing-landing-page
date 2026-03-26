import { fireEvent, render, screen, within } from "@testing-library/react";
import { Header } from "@/components/organisms/Header";

const navItems = [
  { label: "Roasts", href: "#pricing" },
  { label: "Our Story", href: "#features" },
];

describe("Header", () => {
  it("renders the brand and navigation links", () => {
    render(
      <Header
        brand="Spot"
        cta={{ label: "Start Your Ritual", href: "#cta" }}
        navItems={navItems}
      />,
    );

    expect(screen.getByRole("link", { name: "Spot" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Roasts" }).length).toBeGreaterThan(0);
  });

  it("opens and closes the mobile menu", () => {
    render(
      <Header
        brand="Spot"
        cta={{ label: "Start Your Ritual", href: "#cta" }}
        navItems={navItems}
      />,
    );

    const toggle = screen.getByRole("button", { name: "Toggle navigation menu" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const mobileNav = screen.getByRole("navigation", { name: "Mobile primary" });

    expect(mobileNav).toBeInTheDocument();

    fireEvent.click(within(mobileNav).getByRole("link", { name: "Our Story" }));

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
