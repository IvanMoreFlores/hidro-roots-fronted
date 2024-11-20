
import React from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../divider";
const DesignnComponent: React.FC = () => {
  return (
    
    <div className="container-d">
      <div className="div2">
      <DividerComponent width="80%" height="2px" color=" background: rgba(229, 229, 229, 1);
)" />
      </div>
      <div className="container-title-d">
        <div className="container-text-title-d">
          <p className="text-title-d">Diseñamos construimos y gestionamos</p>
          <p className="text-description-d">
          Transformamos tus espacios en entornos ideales para el cultivo hidropónico.
          </p>
        </div>
      </div>
      <div className="grid-container-d">
        <div className="image-desi">
          <Image
          width={308}
          height={400}
          src="/img/about/one.jpeg"
          alt="Image 1"
          className="image"
        />
        <p className="p-desi">Familiar</p>
       </div>
       <div className="image-desi">
          <Image
          width={308}
          height={400}
          src="/img/about/two.jpeg"
          alt="Image 1"
          className="image"
        />
        <p className="p-desi">Balcon</p>
       </div>
       <div className="image-desi">
          <Image
          width={308}
          height={400}
          src="/img/about/three.jpeg"
          alt="Image 1"
          className="image"
        />
        <p className="p-desi">Patio</p>
       </div>
      </div>
    </div>
  );
};

export default DesignnComponent;
