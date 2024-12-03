import React, { useState } from "react";
import styles from "./ButtonContainer.module.css";
import Image from "next/image";

const Button = ({ id, activeButton, setActiveButton, text, imgSrc, alt }) => {
  const isActive = activeButton === id;

  const handleClick = () => {
    setActiveButton(id);
    // Aquí podrías agregar una lógica para iniciar una animación, como cambiar una clase o iniciar una transición CSS.
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.button} ${isActive ? styles.green : styles.lightGreen}`}
        onClick={handleClick}
      >
        <div className={styles.imageContainer}>
          <Image src={imgSrc} alt={alt} width={40} height={40} />
        </div>
        <span className={isActive ? styles.buttonText01 : styles.buttonText}>{text}</span>
      </button>
    </div>
  );
};

const ButtonContainer = () => {
  const [activeButton, setActiveButton] = useState(1); // Por defecto, el primer botón es el activo.

  return (
    <div className={styles.grid}>
      <Button
        id={1}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        text="Insumos"
        imgSrc="/img/botton/botton-one.png"
        alt="Insumos"
      />
      <Button
        id={2}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        text="Sistema de costeo"
        imgSrc="/img/botton/botton-two.png"
        alt="Sistema de costeo"
      />
      <Button
        id={3}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        text="Planillas"
        imgSrc="/img/botton/botton-three.png"
        alt="Planillas"
      />
      <Button
        id={4}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        text="Cursos y talleres"
        imgSrc="/img/botton/botton-four.png"
        alt="Cursos y talleres"
      />
    </div>
  );
};

export default ButtonContainer;
