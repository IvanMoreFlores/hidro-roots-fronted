import React from "react";
import "./styles.css";
import categoryFive from "../../../../../public/lottie/category5.json";
import Lottie from "lottie-react";
const MenComponent = () => {
  return (
    <div className="container-men-products">
      <div className="contenedor-padre-men">
        <div className="contenedor-membresia-men">
          <div className="div_textos-men">
            <h3 className="title-card-men">Membresías</h3>
            <p className="sub-title-card-men">Planes exclusivos para tu crecimiento corporativo.</p>
          </div>
          <div className="div_imagen-men">
            <Lottie animationData={categoryFive} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenComponent;
