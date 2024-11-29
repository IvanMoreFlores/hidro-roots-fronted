import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  backgroundColor?: string;
}

const NavbarComponent: React.FC<NavbarProps> = ({
  backgroundColor = "#EAF9DE",
}) => {
  return (
    <nav className="navbar" style={{ backgroundColor }}>
      <div className="navbar-left">
        <Image src="/img/logo.png" alt="Logo" width={132} height={26} />
      </div>
      <div className="navbar-options">
        <Link href="/about">Nosotros</Link>
        <Link href="/product">Productos</Link>
        <Link href="/membership">Membresía</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contacto</Link>
      </div>
      <div className="navbar-icons">
        <div className="icon-container-car">
          <Image src="/svg/car.svg" alt="Carrito" width={24} height={24} />
        </div>
        <div className="icon-container-whatsapp">
          <Image
            src="/svg/whatsapp.svg"
            alt="WhatsApp"
            width={24} height={24}
          />
        </div>
        <div className="icon-container-extra">
          <Image
            src="/svg/Icon.svg"
            alt="Extra Icon"
            width={24} height={24}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;