// src/components/MobileMenu.tsx
import React from "react";
import "./styles.css";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="mobile-menu">
            <div className="mobile-menu-header">

                <Image src="/img/logo.png" alt="Logo" width={
                    104} height={21} />
            </div>
            <div className="padre-mini-menu">
                <Image src="/img/nv.png" alt="Logo" width={
                    890} height={890} className="imagen-n"/>
                <ul className="mobile-menu-list">
                    <li className="Inicio"><Link href="/">Inicio</Link></li>
                    <li className="Nosotros"><Link href="/about">Nosotros</Link></li>
                    <li className="Productos"><Link href="/product">Productos</Link></li>
                    <li className="Membresia"><Link href="/membership">Membresía</Link></li>
                    <li className="Blog"><Link href="/blogs">Blog</Link></li>
                    <li className="Contact"><Link href="/contact">Contacto</Link></li>
                    <span className="close-button" onClick={onClose}>X</span>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;