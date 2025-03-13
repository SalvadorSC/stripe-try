import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders correctly with label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies correct classes based on props", () => {
    render(<Button label="Primary" primary size="large" />);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("btn-primary btn-large");
  });

  it("fires onClick event when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is accessible (has button role)", () => {
    render(<Button label="Accessible Button" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
