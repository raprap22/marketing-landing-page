import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "@/components/atoms/Button";

describe("Button", () => {
  it("renders the label and href", () => {
    render(<Button href="#pricing">Subscribe Now</Button>);

    const link = screen.getByRole("link", { name: "Subscribe Now" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#pricing");
  });

  it("calls onClick when activated", () => {
    const handleClick = vi.fn();

    render(
      <Button href="#cta" onClick={handleClick}>
        Start Your Ritual
      </Button>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Start Your Ritual" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
