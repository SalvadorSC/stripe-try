import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders with default placeholder", () => {
    render(<Input />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  it("renders with a custom placeholder", () => {
    render(<Input placeholder="Custom Placeholder" />);
    expect(
      screen.getByPlaceholderText("Custom Placeholder")
    ).toBeInTheDocument();
  });

  it("accepts text input", () => {
    const handleChange = vi.fn();
    render(<Input value="Hello" onChange={handleChange} />);

    const input = screen.getByDisplayValue("Hello");
    fireEvent.change(input, { target: { value: "Hello World" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders different input types", () => {
    render(<Input type="email" placeholder="Enter email" />);
    const emailInput = screen.getByPlaceholderText("Enter email");
    expect(emailInput).toHaveAttribute("type", "email");
  });
});
