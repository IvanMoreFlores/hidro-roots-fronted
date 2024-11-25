import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

const Nav1Component: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/img/logo.png" alt="Logo" width={132} height={26} />
      </div>
      <div className="navbar-options">
        <Link href="/">Inicio</Link>
        <Link href="/about">Nosotros</Link>
        <Link href="/home/productos">Productos</Link>
        <Link href="/home/membresia">Membresía</Link>
        <Link href="/home/blogs">Blogs</Link>
        <Link href="/home/contacto">Contacto</Link>
      </div>
      <div className="navbar-icons">
        <div className="icon-container-car">
          <Image src="/svg/car.svg" alt="Carrito" width={24} height={24} />
        </div>
        <div className="icon-container-whatsapp">
          <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
};

export default Nav1Component;
