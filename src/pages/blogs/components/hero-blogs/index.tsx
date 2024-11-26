import React from "react";
import "./styles.css";
const HeroBlogsComponent = () => {
  return (
    <div className="hero-blogs-container">
      <div className="container-text-hero">
        <p className="text-title-hero">Hidro Blog</p>
        <p className="text-description-hero">
          Descubre tips, tendencias y soluciones en el mundo del cultivo
          hidropónico
        </p>
        <div className="arrow-down">↓</div>
      </div>
    </div>
  );
};

export default HeroBlogsComponent;
