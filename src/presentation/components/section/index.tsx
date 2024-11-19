import React from "react";
import "./style.css";

const Section01Component: React.FC = () => {
  return (
    <div className="section">
      <div className="sec-container">
        <div className="cont-item">
          <div className="text-0">
            <p>Captura</p>
          </div>
          <div className="cont-value">6.78 kg</div>
          <div className="cont-description">
            Co2 en 3 semanas <br />x unidad
          </div>
        </div>

        <div className="cont-item">
          <div className="text-0">
            <p>Reduce</p>
          </div>
          <div className="cont-value">95 %</div>
          <div className="cont-description">
            La Huella Hídrica <br /> de tu cultivo
          </div>
        </div>

        <div className="cont-item">
          <div className="text-0">
            <p>Cultiva</p>
          </div>
          <div className="cont-value">400 %</div>
          <div className="cont-description">Más por m2</div>
        </div>
      </div>
    </div>
  );
};

export default Section01Component;
