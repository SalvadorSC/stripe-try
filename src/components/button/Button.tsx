import React from "react";

import "./Button.css";
import { mockTrackingEvents } from "../../utils/mockTraickingEvents";

interface ButtonProps {
  onClick?: () => void;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  primary = true,
  size = "medium",
  label,
}) => {
  const handleOnClick = () => {
    mockTrackingEvents({
      event: "Button Clicked",
      description: { label, primary, size },
    });
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className={`btn-${size} ${primary ? "btn-primary" : "btn-secondary"}`}
    >
      {label}
    </button>
  );
};

export default Button;
