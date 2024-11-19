// src/presentation/components/Button.tsx

import React from "react";
import "./style.css"; // Asegúrate de crear un archivo CSS para los estilos

type ButtonVariant =
  | "text"
  | "outlined"
  | "contained"
  | "elevated"
  | "contained-tonal";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode; // Para permitir agregar iconos
  loading?: boolean; // Para mostrar un estado de carga
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
        <span className="loader" /> // Aquí puedes implementar un spinner si lo deseas
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
