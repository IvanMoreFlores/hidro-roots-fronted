// src/presentation/components/FooterComponent.tsx
import React from "react";
import "./style.css";
import Image from "next/image";

const FooterComponent: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-row footer-logo">
        <Image src="/img/logo.png" alt="Logo" width={178} height={36} />
      </div>
      <div className="footer-row footer-columns">
        <div className="footer-column">
          <h4>Productos</h4>
          <p>Sistema de cultivos</p>
          <p>Insumos para el cultivo</p>
          <p>Plantulas</p>
          <p>eBooks</p>
        </div>
        <div className="footer-column">
          <h4>Educación</h4>
          <p>Artículos</p>
          <p>Cursos</p>
          <p>Talleres</p>
        </div>
        <div className="footer-column">
          <h4>Membresía</h4>
          <p>Ver todas las membresías</p>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <p>Libro de reclamaciones</p>
          <p>Política de privacidad</p>
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>+51 999 999 999</p>
          <p>contact@hidroroots.pe</p>
        </div>
      </div>
      <div className="footer-row footer-icons">
        <Image src="/svg/facebook.svg" alt="Logo" width={40} height={40} />
        <Image src="/svg/instagram.svg" alt="Logo" width={40} height={40} />
        <Image src="/svg/linkedin.svg" alt="Logo" width={40} height={40} />
      </div>
      <div className="footer-row footer-divider">
        <div className="divider" />
        <span className="span-font">Hidro Roots ©2024</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
