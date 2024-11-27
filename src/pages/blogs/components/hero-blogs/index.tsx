import React from "react";
import "./styles.css";

const HeroBlogsComponent = () => {
  return (
    <div className="hero-blogs-container">
      <div className="container-text-blog">
        <p className="text-title-blog">Hidro Blog</p>
        <p className="text-description-blog">
          Descubre tips, tendencias y soluciones en el mundo del cultivo
          hidropónico
        </p>
        <div className="arrow-down">↓</div>
      </div>
    </div>
  );
};

export default HeroBlogsComponent;
