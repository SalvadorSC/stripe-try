import React from "react";
import { mockTrackingEvents } from "../../utils/mockTraickingEvents";

interface InputProps {
  type: "text" | "password" | "email" | "number";
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  size = "medium",
  onChange,
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    const delayDebounceFn = setTimeout(() => {
      mockTrackingEvents({
        event: "Input Typed in",
        description: { value: e.target.value, placeholder, type },
      });
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  };
  return (
    <input
      className={`input-${type} input-${size}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default Input;
