import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../../../product/components/divider/index";
import Dropdown from "./Dropdown";

const HComponent = () => {
  const dropdownItems = [
    {
      key: "cantidad",
      label: "Cantidad: 40 unidades",
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

  const [openDropdowns, setOpenDropdowns] = useState<(string | null)[]>([null, null, null]);
  const [activeFilter, setActiveFilter] = useState<string>("plántulas");

  const toggleDropdown = (cardIndex: number, key: string) => {
    setOpenDropdowns((prevState) =>
      prevState.map((openKey, index) =>
        index === cardIndex ? (openKey === key ? null : key) : openKey
      )
    );
  };

  const cards = [
    { id: 1, type: "plántulas", title: "Plántulas", content: "Detalles sobre las plántulas" },
    { id: 2, type: "cosecha", title: "Cosecha", content: "Detalles sobre la cosecha" },
    { id: 3, type: "gestión", title: "Gestión", content: "Información sobre la gestión" },
  ];

  const filteredCards = activeFilter === "plántulas" ? cards.filter((card) => card.type === activeFilter) : cards.filter((card) => card.type === activeFilter);

  const renderCard = (cardIndex: number, cardType: string, cardTitle: string, cardContent: string) => (
    <div className="pricing-card-store-men" key={`card-${cardIndex}`}>
      <div className="card-image-store-men">
        <Image
          src="/img/men-store/1.png"
          alt="Hidropónicos"
          width={340}
          height={150}
        />
      </div>
      <div className="princing-padre">
        <div className="card-type-store-men">
          <p className="plantulas-s">{cardTitle}</p>
        </div>
        <div className="card-title-store-men">{cardContent}</div>
        <div className="card-description-store-men">
          Información optimizada para maximizar tu producción.
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
              alt="Hidropónicos"
              width={16}
              height={16}
            />
            Compra de unidad de cultivo
          </div>
          <div className="feature-item-store-men1">
            <Image
              src="/img/men-store/2i.png"
              alt="Hidropónicos"
              width={16}
              height={16}
            />
            Asesoría gratuita y un mantenimiento
          </div>
          <div className="feature-item-store-men1">
            <Image
              src="/img/men-store/2i.png"
              alt="Hidropónicos"
              width={16}
              height={16}
            />
            Insumos hasta 5 meses
          </div>
          <div className="feature-item-store-men1">
            <Image
              src="/img/men-store/2i.png"
              alt="Hidropónicos"
              width={16}
              height={16}
            />
            Recibe HidroBeneficios (Comisiones, Promociones y acceso gratuito a clases de cultivo y desarrollo)
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-home-hero-store-men">
      {/* Filtros */}
      <div className="filters-store-men">
        {["plántulas", "cosecha", "gestión"].map((filter) => (
          <button
            key={filter}
            className={`filter-button-store-men ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Tarjetas filtradas */}
      <div className="pricing-container-store-men">
        {filteredCards.map((card, index) =>
          renderCard(index, card.type, card.title, card.content)
        )}
      </div>
    </div>
  );
};

export default HComponent;
