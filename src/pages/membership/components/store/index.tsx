import React from "react";
import "./styles.css";
import Image from "next/image";
import { useRouter } from "next/router";

const StoreComponent: React.FC = () => {
  const router = useRouter();

  const handleDetailClick = (id: string) => {
    router.push({
      pathname: "/hidro-store", // La ruta del componente destino
      query: { id }, // Pasamos el ID como query
    });
  };
  return (
    <div className="container-store">
      <div className="grid-container-store">
        <div className="card-store">
          <Image
            width={308}
            height={400}
            src="/img/store/one.png"
            alt="Hidro Boost 8 Plantas"
            className="image"
          />
          <div className="card-content">
            <div className="text-hidro">
              <p className="product-name">Hidro Boost 8 Plantas</p>
              <p className="price">S/ 321.00</p>
            </div>
            <div className="store-div">
              <button className="comprar-btn">Comprar</button>
              <button
                className="detalle-btn"
                onClick={() => handleDetailClick("12345")}
              >
                Detalle
              </button>
            </div>
          </div>
        </div>

        <div className="card-store">
          <div className="div-envios">
            <p className="envios-1">ENVIOS A TODO EL PERÚ </p>
          </div>
          <Image
            width={308}
            height={400}
            src="/img/store/one.png"
            alt="Hidro Boost 8 Plantas"
            className="image"
          />
          <div className="card-content">
            <div className="text-hidro">
              <p className="product-name">Hidro Boost 8 Plantas</p>
              <p className="price">S/ 321.00</p>
            </div>
            <div className="store-div">
              <button className="comprar-btn">Comprar</button>
              <button
                className="detalle-btn"
                onClick={() => handleDetailClick("12345")}
              >
                Detalle
              </button>
            </div>
          </div>
        </div>

        <div className="card-store">
          <div className="tag vendido">10% DSCTO</div>
          <Image
            width={308}
            height={400}
            src="/img/store/one.png"
            alt="Hidro Boost 8 Plantas"
            className="image"
          />
          <div className="card-content">
            <div className="text-hidro">
              <p className="two-text-store-1">Quedan 4 unidades</p>
              <p className="product-name">Hidro Boost 8 Plantas</p>
              <p className="price">S/ 321.00</p>
              <p className="two-text-store">S/ 321.00</p>
            </div>
            <div className="store-div">
              <button className="comprar-btn">Comprar</button>
              <button className="detalle-btn">Detalle</button>
            </div>
          </div>
        </div>

        <div className="card-store">
          <div className="tag vendido">10% DSCTO</div>
          <Image
            width={308}
            height={400}
            src="/img/store/one.png"
            alt="Hidro Boost 8 Plantas"
            className="image"
          />
          <div className="card-content">
            <div className="text-hidro">
              <p className="two-text-store-1">Quedan 4 unidades</p>
              <p className="product-name">Hidro Boost 8 Plantas</p>
              <p className="price">S/ 321.00</p>
              <p className="two-text-store">S/ 321.00</p>
            </div>
            <div className="store-div">
              <button className="comprar-btn">Comprar</button>
              <button className="detalle-btn">Detalle</button>
            </div>
          </div>
        </div>

        <div className="card-store">
          <div className="div-envios">
            <p className="envios-1">ENVIOS A TODO EL PERÚ </p>
          </div>
          <Image
            width={308}
            height={400}
            src="/img/store/one.png"
            alt="Hidro Boost 8 Plantas"
            className="image"
          />
          <div className="card-content">
            <div className="text-hidro">
              <p className="product-name">Hidro Boost 8 Plantas</p>
              <p className="price">S/ 321.00</p>
            </div>
            <div className="store-div">
              <button className="comprar-btn">Comprar</button>
              <button className="detalle-btn">Detalle</button>
            </div>
          </div>
        </div>

        <div className="card-store">
          <Image
            width={308}
            height={400}
            src="/img/store/one.png"
            alt="Hidro Boost 8 Plantas"
            className="image"
          />
          <div className="card-content">
            <div className="text-hidro">
              <p className="two-text-store-1">Quedan 4 unidades</p>
              <p className="product-name">Hidro Boost 8 Plantas</p>
              <p className="price">S/ 321.00</p>
            </div>
            <div className="store-div">
              <button className="comprar-btn">Comprar</button>
              <button className="detalle-btn">Detalle</button>
            </div>
          </div>
        </div>

        <div className="card-store">
          <div className="tag vendido">10% DSCTO</div>
          <Image
            width={308}
            height={400}
            src="/img/store/one.png"
            alt="Hidro Boost 8 Plantas"
            className="image"
          />
          <div className="card-content">
            <div className="text-hidro">
              <p className="product-name">Hidro Boost 8 Plantas</p>
              <p className="price">S/ 321.00</p>
              <p className="two-text-store">S/ 321.00</p>
            </div>
            <div className="store-div">
              <button className="comprar-btn">Comprar</button>
              <button className="detalle-btn">Detalle</button>
            </div>
          </div>
        </div>

        <div className="card-store">
          <div className="card-store-padre">
            <div className="agotado-tag-a">
              <div className="tag1 agotado">Agotado</div>
            </div>
            <Image
              width={308}
              height={400}
              src="/img/store/one.png"
              alt="Hidro Boost 8 Plantas"
              className="image disabled"
            />
          </div>
          <div className="card-content">
            <div className="text-hidro">
              <p className="product-name">Hidro Boost 8 Plantas</p>
              <p className="price">S/ 321.00</p>
            </div>
            <div className="store-div">
              <button className="comprar-btn-agotado">Comprar</button>
              <button className="detalle-btn-agotado">Detalle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreComponent;
