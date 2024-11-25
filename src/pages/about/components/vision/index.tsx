import React from "react";
import "./styles.css";
import DividerComponent from "../divider";

const VisionComponent = () => {
  return (
    <div className="container-home-hero-vi">
      <div className="vision-card">
        <h2 className="vision-title">Nuestra visión</h2>
        <DividerComponent/>
        <p className="vision-description">
          Nuestro sistema modular hidropónico reduce el impacto ambiental de la producción de alimentos,
          estableciendo un modelo más sostenible y eficiente. Al enfrentar los desafíos del sistema
          alimentario actual, nuestra tecnología ofrece soluciones que minimizan el daño a la biodiversidad
          y el cambio climático.
        </p>
      </div>
  
    </div>
  );
};

export default VisionComponent;
