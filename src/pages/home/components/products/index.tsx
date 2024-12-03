import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import "./styles.css";
import categoryOne from "../../../../../public/lottie/category1.json";
import categoryTwo from "../../../../../public/lottie/category2.json";
import categoryThree from "../../../../../public/lottie/category3.json";
import categoryFour from "../../../../../public/lottie/category4.json";
import categoryFive from "../../../../../public/lottie/category5.json";

const ProductsComponent = () => {
  return (
    <div className="container-home-products">
      <div className="contenedor-grid-padre">
        <div className="contenedor-total">
          <div className="contenedor-data-one">
            <Link
              href="/product"
              className="contenedor-insumos"
            >
              <div className="div_textos">
                <h3 className="title-card">Insumos</h3>
                <p className="sub-title-card">
                  Todo lo que necesitas para tu cultivo
                </p>
              </div>
              <div className="div_imagen">
                <Lottie animationData={categoryOne} loop={true} className="lottie" />
              </div>
            </Link>
            <Link
              href="/product"
              className="contenedor-curso"
            >
              <div className="div_textos">
                <h3 className="title-card">Cursos y talleres</h3>
                <p className="sub-title-card">
                  Aprende y mejora tus conocimientos
                </p>
              </div>
              <div className="div_imagen">
                <Lottie animationData={categoryTwo} loop={true} className="lottie2" />
              </div>
            </Link>
          </div>
          <div className="contenedor-data-two">
            <Link
              href="/product"
              className="contenedor-cultivo"
            >
              <div className="div_textos">
                <h3 className="title-card">Sistema de cultivo</h3>
                <p className="sub-title-card">
                  Soluciones eficientes para cultivar
                </p>
              </div>
              <div className="div_imagen">
                <Lottie animationData={categoryThree} loop={true} className="lottie2" />
              </div>
            </Link>
            <Link
              href="/product"
              className="contenedor-plantulas"
            >
              <div className="div_textos">
                <h3 className="title-card">Plántulas</h3>
                <p className="sub-title-card">
                  Comienza tu cultivo desde el inicio
                </p>
              </div>
              <div className="div_imagen">
                <Lottie animationData={categoryFour} loop={true} className="lottie" />
              </div>
            </Link>
          </div>
        </div>
        <Link
          href="/product"
          className="contenedor-membresia"
        >
          <div className="div_textos">
            <h3 className="title-card">Membresías</h3>
            <p className="sub-title-card">Accede a beneficios exclusivos</p>
          </div>
          <div className="div_imagen">
            <Lottie animationData={categoryFive} loop={true} className="lottie" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductsComponent;
