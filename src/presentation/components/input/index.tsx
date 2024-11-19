import React from "react";
import "./styles.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="input-container">
      <input className="input-field" placeholder={label} {...props} />
    </div>
  );
};

export default Input;
