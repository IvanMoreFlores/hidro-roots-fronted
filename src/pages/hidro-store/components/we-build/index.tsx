import React from "react";
import "./styles.css";
import DividerComponent from "../../../product/components/divider";

const BuildComponent: React.FC = () => {
  return (
    <div className="container-d">
      <div className="div2">
        <DividerComponent
          width="714px"
          height="2px"
          color="rgba(229, 229, 229, 1)"
        />
      </div>
      <div className="container-title-d">
        <div className="container-text-title-d">
          <p className="text-title-d">Diseñamos construimos y gestionamos</p>
          <p className="text-description-d">
            Transformamos tus espacios en entornos ideales para el cultivo
            hidropónico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildComponent;
