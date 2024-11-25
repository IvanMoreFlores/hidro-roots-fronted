import Button from "@/components/button";
import React from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../../../membership/components/divider/index";

const SpacebComponent: React.FC = () => {
  return (
    <div className="container-body-buildi-m">
      <div className="container-title-servi">
        <div className="container-text-title-servi-buildi-m">
          <p className="text-title-servi-buildi-m">
            Diseñamos construimos y gestionamos
          </p>
          <p className="text-description-servi-buildi-m">
            Transformamos tus espacios en entornos ideales para el cultivo
            hidropónico.
          </p>
        </div>

        <Button width="350px">Contactar</Button>
      </div>
      <div className="grid-container-buildi-m">
        <Image
          width={336}
          height={710}
          src="/img/space/one.jpeg"
          alt="Image 1"
          className="image-buildi-m"
        />
        <div className="div-image-buildi-m">
          <Image
            width={355}
            height={347}
            src="/img/space/two.jpeg"
            alt="Image 2"
            className="image-buildi-m"
          />
          <Image
            width={355}
            height={347}
            src="/img/space/three.jpeg"
            alt="Image 3"
            className="image-buildi-m"
          />
        </div>
        <div className="div-image-buildi-m">
          <Image
            width={357}
            height={402}
            src="/img/space/four.jpeg"
            alt="Image 4"
            className="image-buildi-m"
          />
          <Image
            width={357}
            height={290}
            src="/img/space/five.jpeg"
            alt="Image 5"
            className="image-buildi-m"
          />
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

export default SpacebComponent;
