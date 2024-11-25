import Button from "@/components/button";
import React from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../../../membership/components/divider/index";

const ServiComponent: React.FC = () => {
  return (
    <div className="container-body-servi">
      <DividerComponent
        width="714px"
        height="1px"
        color="rgba(229, 229, 229, 1)"
      />
      <div className="container-title-servi">
        <div className="container-text-title-servi">
          <p className="text-title-servi">Servicios especializados</p>
          <p className="text-description-servi">
            Innovación y soporte para el crecimiento empresarial
          </p>
        </div>
        <Button width="350px">Contactar</Button>
      </div>
      <div className="grid-container-servi">
        <div className="div-image-servi">
          <Image
            width={400}
            height={500}
            src="/img/men-store/hidro.png"
            alt="Image 1"
            className="image1"
          />
          <div className="image-overlay">
            <p className="overlay-text">Servicios especializados</p>
          </div>
        </div>
        <div className="div-image-servi">
          <Image
            width={400}
            height={500}
            src="/img/men-store/hidro2.png"
            alt="Image 2"
            className="image1"
          />
          <div className="image-overlay">
            <p className="overlay-text">Capacitaciones</p>
          </div>
        </div>
      </div>
      <DividerComponent
        width="714px"
        height="1px"
        color="rgba(229, 229, 229, 1)"
      />
    </div>
  );
};

export default ServiComponent;
