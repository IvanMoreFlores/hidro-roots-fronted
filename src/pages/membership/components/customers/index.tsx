import React, { useState, useEffect } from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../../../product/components/divider/index";

const CustComponent = () => {
  const testimonials = [
    {
      text: "“Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo.Esto es un texto de referencia.”",
      name: "Thalia Vargas",
      date: "Cliente hace 6 meses",
    },
    {
      text: "“Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo.Esto es un texto de referencia.”",
      name: "Pepito Mandela",
      date: "Cliente hace 6 meses",
    },
    {
      text: "“Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo. Esto es un texto de referencia para este párrafo.Esto es un texto de referencia.”",
      name: "Juan Perez",
      date: "Cliente hace 6 meses",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeTestimonial = (next: boolean) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        next
          ? prevIndex === testimonials.length - 1
            ? 0
            : prevIndex + 1
          : prevIndex === 0
          ? testimonials.length - 1
          : prevIndex - 1
      );
      setIsVisible(true);
    }, 500);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {}, 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="container-home-cus">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <Image
            src="/img/men-store/“”.png"
            alt="Comillas"
            width={76}
            height={25}
            className="quotes-image"
          />
          <h2>Lo que dicen nuestros clientes</h2>
          <p>
            Nuestros sistemas han mejorado la vida y los cultivos de nuestros
            clientes
          </p>
        </div>

        <div
          className={`testimonial-content ${
            isVisible ? "fade-in" : "fade-out"
          }`}
        >
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          <p className="testimonial-name">{testimonials[currentIndex].name}</p>
          <p className="testimonial-date">{testimonials[currentIndex].date}</p>
        </div>

        <div className="testimonial-navigation">
          <button
            onClick={() => handleChangeTestimonial(false)}
            className="nav-button"
          >
            <Image
              src="/img/men-store/primero.png"
              alt="Prev"
              width={32}
              height={32}
              className="quotes-image"
            />
          </button>
          <button
            onClick={() => handleChangeTestimonial(true)}
            className="nav-button"
          >
            <Image
              src="/img/men-store/segundo.png"
              alt="Next"
              width={32}
              height={32}
              className="quotes-image"
            />
          </button>
        </div>
        <DividerComponent
          width="714px"
          height="1px"
          color="rgba(255, 255, 255, 1);"
        />
      </div>
    </div>
  );
};

export default CustComponent;
