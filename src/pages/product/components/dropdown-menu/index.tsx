import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Nombre A - Z",
    "Nombre Z - A",
    "Precio (menor a mayor)",
    "Precio (mayor a menor)",
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}

        <Image
          src="/img/menu-desplegable/menu.png" 
          alt="Ordenar"
         
          className={styles.icon}
          width={20}
          height={20}
        />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default function menu() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Resultados: (10) elementos</p>
      <div className={styles.div_text}>
        <p className={styles.title2}>Ordenar por</p>
        <DropdownMenu />
      </div>
    </div>
  );
}
