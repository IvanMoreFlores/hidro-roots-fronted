import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../../../product/components/divider/index";
import Dropdown from "./Dropdown";

const HComponent = () => {
  const dropdownItems = [
    {
      key: "cantidad",
      label: "Cantidad: 40 plántulas",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      key: "cultivo",
      label: "Cultivo: Lechuga",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      key: "frecuencia",
      label: "Frecuencia: 1 vez al mes",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      key: "tiempo",
      label: "Tiempo: 3 meses",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];


  const [openDropdowns, setOpenDropdowns] = useState<(string | null)[]>([
    null, 
    null, 
    null, 
  ]);

  const toggleDropdown = (cardIndex: number, key: string) => {
    setOpenDropdowns((prevState) =>
      prevState.map((openKey, index) =>
        index === cardIndex ? (openKey === key ? null : key) : openKey
      )
    );
  };

  const renderCard = (cardIndex: number) => (
    <div className="pricing-card-store-men" key={`card-${cardIndex}`}>
      <div className="card-image-store-men">
        <Image
          src="/img/men-store/1.png"
          alt="Plántulas hidropónicas"
          width={340}
          height={150}
        />
      </div>
      <div className="princing-padre">
        <div className="card-type-store-men">
          <p className="plantulas-s">Plántulas</p>
        </div>
        <div className="card-title-store-men">
          Plántulas sembradas en bandejas
        </div>
        <div className="card-description-store-men">
          Plántulas listas para trasplante en 3-4 semanas optimizando tu
          producción.
        </div>
        <div className="price-store-men">
          <p className="p-price-sore">S/ 600.00</p>
          <p className="p2-price-sore">c/mes</p>
        </div>

        <div className="dropdown-section-store-men">
          {dropdownItems.map((item) => (
            <Dropdown
              key={item.key}
              label={item.label}
              content={item.content}
              isOpen={openDropdowns[cardIndex] === item.key}
              onToggle={() => toggleDropdown(cardIndex, item.key)}
            />
          ))}
        </div>

        <button className="select-plan-store-men">Elegir plan</button>
        <DividerComponent
          width="308px"
          height="1px"
          color="rgba(229, 229, 229, 1)"
        />
        <div className="features-store-men">
          <div className="feature-item-store-men2">INCLUYE TODO ESTO</div>
          <div className="feature-item-store-men1">
            <Image
              src="/img/men-store/2i.png"
              alt="Plántulas hidropónicas"
              width={16}
              height={16}
            />
            Compra de unidad de cultivo
          </div>
          <div className="feature-item-store-men1">
            <Image
              src="/img/men-store/2i.png"
              alt="Plántulas hidropónicas"
              width={16}
              height={16}
            />
            Asesoría gratuita y un mantenimiento
          </div>
          <div className="feature-item-store-men1">
            <Image
              src="/img/men-store/2i.png"
              alt="Plántulas hidropónicas"
              width={16}
              height={16}
            />
            Insumos hasta 5 meses
          </div>
          <div className="feature-item-store-men1">
            <Image
              src="/img/men-store/2i.png"
              alt="Plántulas hidropónicas"
              width={16}
              height={16}
            />
            Recibe HidroBeneficios (Comisiones, Promociones y acceso
            gratuito a clases hidropónica, cultivo y desarrollo
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-home-hero-store-men">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="pricing-container-store-men" key={index}>
          {renderCard(index)}
        </div>
      ))}
    </div>
  );
};

export default HComponent;
