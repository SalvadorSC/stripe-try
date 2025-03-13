import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button label="Click Me!" />);
    expect(screen.getByText("Click Me!")).toBeInTheDocument();
  });

  // Check Class is added correctly
  it("has classes added properly", () => {
    render(<Button label="Primary" primary size="large" />);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("btn-primary btn-large");
  });
  // Check if it's accessible compliant (has button role)
  it("is accessible compliant (has button role)", () => {
    render(<Button label="Primary" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  // Check if it call the onClick function passed
  it("calls onClick function passed", () => {
    const handleClick = vi.fn();
    render(<Button label="Primary" onClick={handleClick} />);
    const button = screen.getByText("Primary");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
