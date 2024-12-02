import React, { useEffect, useState } from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../divider";
import MobileCarousel from "../carrusel";

const DesignnComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si la pantalla es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definir el ancho máximo para móvil
    };

    handleResize(); // Verifica en el montaje inicial
    window.addEventListener("resize", handleResize); // Agrega un listener para cambios de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el listener
    };
  }, []);

  return (
    <div className="container-d">
      <div className="div2">
        <DividerComponent
          width="80%"
          height="2px"
          color="rgba(229, 229, 229, 1)"
        />
      </div>
      <div className="container-title-d">
        <div className="container-text-title-d">
          <p className="text-title-d">Diseñamos construimos y gestionamos</p>
          <p className="text-description-d">
            Transformamos tus espacios en entornos ideales para el cultivo hidropónico.
          </p>
        </div>
      </div>

      {/* Mostrar carrusel solo en móviles */}
      {isMobile ? (
        <MobileCarousel />
      ) : (
        <div className="grid-container-d">
          <div className="image-desi">
            <Image
              width={308}
              height={400}
              src="/img/about/one.jpeg"
              alt="Familiar"
              className="image"
            />
            <p className="p-desi">Familiar</p>
          </div>
          <div className="image-desi">
            <Image
              width={308}
              height={400}
              src="/img/about/two.jpeg"
              alt="Balcón"
              className="image"
            />
            <p className="p-desi">Balcón</p>
          </div>
          <div className="image-desi">
            <Image
              width={308}
              height={400}
              src="/img/about/three.jpeg"
              alt="Patio"
              className="image"
            />
            <p className="p-desi">Patio</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignnComponent;
