import React from "react";
import "./style.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarComponent: React.FC = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path); // Asegura rutas absolutas
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/img/logo.png" alt="Logo" width={132} height={26} />
      </div>
      <div className="navbar-options">
        <a onClick={() => handleClick("/")}>Inicio</a>
        <a onClick={() => handleClick("/about")}>Nosotros</a>
        <a onClick={() => handleClick("/home/productos")}>Productos</a>
        <a onClick={() => handleClick("/home/membresia")}>Membresía</a>
        <a onClick={() => handleClick("/home/blogs")}>Blogs</a>
        <a onClick={() => handleClick("/home/contacto")}>Contacto</a>
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

export default NavbarComponent;
