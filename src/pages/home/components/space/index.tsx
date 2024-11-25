import Button from "@/components/button";
import React from "react";
import "./styles.css";
import Image from "next/image";

const SpaceComponent: React.FC = () => {
  return (
    <div className="container-body">
      <div className="container-title">
        <div className="container-text-title">
          <p className="text-title">Potencia tu espacio</p>
          <p className="text-description">
            Crea un espacio único con sistemas de cultivo adaptados a tus
            necesidades
          </p>
        </div>
        <Button width="60%">Contactar</Button>
      </div>
      <div className="grid-container">
        <Image
          width={336}
          height={710}
          src="/img/space/one.jpeg"
          alt="Image 1"
          className="image"
        />
        <div className="div-image">
          <Image
            width={355}
            height={347}
            src="/img/space/two.jpeg"
            alt="Image 2"
          className="image"
          />
          <Image
            width={355}
            height={347}
            src="/img/space/three.jpeg"
            alt="Image 3"
          className="image"
          />
        </div>
        <div className="div-image">
          <Image
            width={357}
            height={402}
            src="/img/space/four.jpeg"
            alt="Image 4"
          className="image"
          />
          <Image
            width={357}
            height={290}
            src="/img/space/five.jpeg"
            alt="Image 5"
          className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceComponent;
