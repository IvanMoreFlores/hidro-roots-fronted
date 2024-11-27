// src/presentation/components/Button.tsx

import React from "react";
import "./style.css"; 

type ButtonVariant =
  | "text"
  | "outlined"
  | "contained"
  | "elevated"
  | "contained-tonal";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  loading?: boolean; 
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  icon,
  loading = false,
  width = "auto",
  children,
  ...props
}) => {
  return (
    <button
      style={{ width }}
      className={`button ${variant}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="loader" /> 
      ) : (
        <>
          {children}
          {icon && <span className="icon">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
