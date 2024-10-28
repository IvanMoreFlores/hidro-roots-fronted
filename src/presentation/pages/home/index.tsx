"use client";
import React from "react";
import "./style.css";
import FooterComponent from "@/presentation/components/footer";
import ComponentNavbar from "@/presentation/components/navbar";
import Button from "@/presentation/components/button";
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie/hero-photo.json";
import categoryOne from "../../../../public/lottie/category1.json";
import categoryTwo from "../../../../public/lottie/category2.json";
import categoryThree from "../../../../public/lottie/category3.json";
import categoryFour from "../../../../public/lottie/category4.json";
import categoryFive from "../../../../public/lottie/category5.json";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="landing-page">
      <ComponentNavbar />
      <main className="content">
        <div className="container-home-hero">
          <div className="container-text-hero">
            <p className="text-title-hero">Cultiva hoy, transforma el mañana</p>
            <p className="text-description-hero">
              Sistemas hidropónicos diseñados para familias y empresas.
            </p>
            <Button
              icon={
                <Image
                  src="/svg/icon/right.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
              }
            >
              Ver productos
            </Button>
          </div>
          <div className="container-lottie-hero">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
        <div className="container-home-products">
          <div className="contenedor-grid-padre">
            <div className="contenedor-total">
              <div className="contenedor-data-one">
                <div className="contenedor-insumos">
                  <div className="div_textos">
                    <h3 className="title-card">Insumos</h3>
                    <p className="sub-title-card">
                      Todo lo que necesitas para tu cultivo
                    </p>
                  </div>
                  <div className="div_imagen">
                    <Lottie animationData={categoryOne} loop={true} />
                  </div>
                </div>
                <div className="contenedor-curso">
                  <div className="div_textos">
                    <h3 className="title-card">Cursos y talleres</h3>
                    <p className="sub-title-card">
                      Aprende y mejora tus conocimientos
                    </p>
                  </div>
                  <div className="div_imagen">
                    <Lottie animationData={categoryTwo} loop={true} />
                  </div>
                </div>
              </div>
              <div className="contenedor-data-two">
                <div className="contenedor-cultivo">
                  <div className="div_textos">
                    <h3 className="title-card">Sistema de cultivo</h3>
                    <p className="sub-title-card">
                      Soluciones eficientes para cultivar
                    </p>
                  </div>
                  <div className="div_imagen">
                    <Lottie animationData={categoryThree} loop={true} />
                  </div>
                </div>
                <div className="contenedor-plantulas">
                  <div className="div_textos">
                    <h3 className="title-card">Plántulas</h3>
                    <p className="sub-title-card">
                      Comienza tu cultivo desde el inicio
                    </p>
                  </div>
                  <div className="div_imagen">
                    <Lottie animationData={categoryFour} loop={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="contenedor-membresia">
              <div className="div_textos">
                <h3 className="title-card">Membresías</h3>
                <p className=" sub-title-card">
                  Accede a beneficios exclusivos
                </p>
              </div>
              <div className="div_imagen">
                <Lottie animationData={categoryFive} loop={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-divider">
          <div className="divider-home"
          />
        </div>
        <div className="container-home-beneficts"></div>
        <div className="container-home-contacto"></div>
      </main>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
