import React, { useState } from "react";
import "./styles.css";
import Img from "next/image";
import DividerComponent from "../../../product/components/divider/index";

const HidroStor = () => {
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [showSpecifications, setShowSpecifications] = useState(false);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="container-hidro-store">
      <div className="product-grid">
        <div className="product-image">
          <Img
            src="/img/hidro-store/one.png"
            width={623}
            height={665}
            alt="Hidro Roots 8 Plantas"
            className="main-image"
          />
        </div>

        <div className="product-info">
          <div className="store-s">
            <div className="discount-tag">10% DSCTO</div>
            <div className="product-header">
              <h1>Hidro Roots 8 Plantas</h1>
              <div className="price-container">
                <p className="current-price">S/ 321.00</p>
                <p className="original-price">S/ 340.00</p>
              </div>
            </div>
          </div>
          <div className="container-productos-detail">
            <div className="product-details">
              <div className="detail-section">
                <div
                  className="section-header"
                  onClick={() => setShowDescription(!showDescription)}
                >
                  <p>Descripción del producto</p>
                  <span className={`arrow ${showDescription ? "rotated" : ""}`}>
                    <Img
                      src="/img/hidro-store/botton1.png"
                      width={11.67}
                      height={5.83}
                      alt="Hidro Roots 8 Plantas"
                      className="main-image"
                    />
                  </span>
                </div>
                {showDescription && (
                  <div className="description-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                )}
                <div className="divider-store">
                  <DividerComponent
                    width="417px"
                    height="1px"
                    color="rgba(229, 229, 229, 1)"
                  />
                </div>
              </div>

              <div className="detail-section">
                <div
                  className="section-header"
                  onClick={() => setShowSpecifications(!showSpecifications)}
                >
                  <p>Especificaciones</p>
                  <span
                    className={`arrow ${showSpecifications ? "rotated" : ""}`}
                  >
                    <Img
                      src="/img/hidro-store/botton1.png"
                      width={11.67}
                      height={5.83}
                      alt="Hidro Roots 8 Plantas"
                      className="main-image"
                    />
                  </span>
                </div>
                {showSpecifications && (
                  <div className="description-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                )}
                <div className="divider-store">
                  <DividerComponent
                    width="417px"
                    height="1px"
                    color="rgba(229, 229, 229, 1)"
                  />
                </div>
              </div>

              <div className="stock-info">
                <div className="stock-icon">
                  <Img
                    src="/img/hidro-store/icono.png"
                    width={36}
                    height={36}
                    alt="Hidro Roots 8 Plantas"
                    className="main-image"
                  />
                </div>
                <div className="stock-text">
                  <p className="stock-title">Envío a todo el Perú</p>
                  <p className="stock-detail">
                    Disfruta de envíos rápidos y seguros a cualquier ciudad{" "}
                  </p>
                  <p className="stock-detail">o región del Perú.</p>

                  <p className="stock-detail">
                    ¡Nosotros nos encargamos del resto!
                  </p>
                </div>
              </div>
            </div>

            <div className="purchase-section">
              <button className="add-to-cart-btn">Añadir al carrito</button>
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={handleDecrement}>
                  <Img
                    src="/img/hidro-store/menos.png"
                    width={32}
                    height={32}
                    alt="Hidro Roots 8 Plantas"
                  />
                </button>
                <input
                  type="number"
                  value={quantity}
                  className="quantity-input"
                  readOnly
                />
                <button className="quantity-btn" onClick={handleIncrement}>
                  <Img
                    src="/img/hidro-store/más.png"
                    width={32}
                    height={32}
                    alt="Hidro Roots 8 Plantas"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HidroStor;
