// src/presentation/components/NavbarComponent.tsx
import React from "react";
import "./style.css";
import Image from "next/image";
//import { FaUser, FaShoppingCart } from "react-icons/fa"; // Puedes cambiar estos iconos si prefieres otros

const NavbarComponent: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/img/logo.png" alt="Logo" width={132} height={26} />
      </div>

      {/* Opciones de navegación */}
      <div className="navbar-options">
        <a href="#nosotros">Nosotros</a>
        <a href="#productos">Productos</a>
        <a href="#membresia">Membresía</a>
        <a href="#blogs">Blogs</a>
        <a href="#contacto">Contacto</a>
      </div>

      {/* Iconos */}
      <div className="navbar-icons">
        <div className="icon-container-car">
          <Image src="/svg/car.svg" alt="Logo" width={24} height={24} />
        </div>
        <div className="icon-container-whatsapp">
          <Image src="/svg/whatsapp.svg" alt="Logo" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
