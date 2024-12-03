// src/presentation/components/FooterComponent.tsx
import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link"; // Importamos Link de Next.js

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
        <Link href="https://www.facebook.com/hidroroots.pe/" target="_blank" rel="noopener noreferrer">
          <Image src="/svg/facebook.svg" alt="Facebook" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/hidroroots.pe/" target="_blank" rel="noopener noreferrer">
          <Image src="/svg/instagram.svg" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="https://pe.linkedin.com/company/hidroroots" target="_blank" rel="noopener noreferrer">
          <Image src="/svg/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>
      <div className="footer-row footer-divider">
        <div className="divider" />
        <span className="span-font">Hidro Roots ©2024</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
