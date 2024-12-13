import React from "react";
import "./styles.css";
import Input from "@/components/input";
import Button from "@/components/button";

const UneComponent = () => {
  return (
    <div className="container-body-une">
      <div className="container-title-une">
        <div className="container-title-une">
          <p className="text-subtitle-une ">Únete a nuestro boletín</p>
        </div>
        <p className="text-description-une">
          Descubre promociones y descuentos
        </p>
      </div>
      <div className="container-form-une">
        <div className="container-input-form-une">
          <Input
            className="imput-une"
            label="Enter your email address"
            name="name"
          />
        </div>
        <Button  width="100%">Enviar</Button>
        <p className="text-description-dos">
          Somos más de <span style={{ color: "green" }}>2,000</span> clientes
          felices
        </p>
      </div>
    </div>
  );
};

export default UneComponent;
