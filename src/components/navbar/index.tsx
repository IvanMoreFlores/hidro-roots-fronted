import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

const NavbarComponent: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/home" className="navbar-logo">
        <Image src="/img/logo.png" alt="Logo" width={132} height={26} />
      </Link>
      <div className="navbar-options">
        <Link href="/about">Nosotros</Link>
        <Link href="/membership">Productos</Link>
        <Link href="/Hydro-Members">Membresía</Link>
        <Link href="/blog-small">Blogs</Link>
        <Link href="/home/contacto">Contacto</Link>
      </div>
      <div className="navbar-icons">
        <div className="icon-container-car">
          <Image src="/svg/car.svg" alt="Carrito" width={24} height={24} />
        </div>
        <div className="icon-container-whatsapp">
          <Image
            src="/svg/whatsapp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
