import React from "react";

import "./button.css";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

/** Mock analytics function */
export const trackEvent = (
  event: string,
  details?: Record<string, unknown>
) => {
  console.log(`Analytics Event: ${event}`, details);
};

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  onClick,
}) => {
  const handleClick = () => {
    trackEvent("button_click", { label, primary, size });
    if (onClick) onClick();
  };

  return (
    <button
      className={`btn ${primary ? "btn-primary" : "btn-secondary"} btn-${size}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
