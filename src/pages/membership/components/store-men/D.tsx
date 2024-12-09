import React from "react";
import "./styles.css";
const Dropdown = ({
  label,
  content,
  isOpen,
  onToggle,
}: {
  label: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <>
    <div className="dropdown-store-men" onClick={onToggle}>
      <span>{label}</span>
      <i className={`arrow-store-men ${isOpen ? "up" : "down"}`}></i>
    </div>
    {isOpen && <div className="dropdown-content-store-men">{content}</div>}
  </>
);

export default Dropdown;
