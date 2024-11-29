import React from "react";
import "./styles.css";
import Image from "next/image";
const BenefictsComponent = () => {
  return (
    <div className="container-home-beneficts">
      <div className="container-beneficts">
        <Image src="/img/beneficts.png" alt="Logo" width={326} height={440} />
        <div className="container-item">
          <div className="container-text">
            <p className="text-title">Nuestros beneficios</p>
            <p className="text-description">
              Descubre las ventajas de nuestros productos
            </p>
          </div>
          <div className="container-item-card">
            <div className="card-item-beneficts">
              <div className="card-beneficts">
                <Image
                  src="/svg/benefitcs/one.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="container-text-item ">
                <p className="text-item-title">Cultivos Saludables</p>
                <p className="text-item-description">
                  Variedad de cultivos saludables en un solo lugar
                </p>
              </div>
            </div>
            <div className="card-item-beneficts">
              <div className="card-beneficts">
                <Image
                  src="/svg/benefitcs/two.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="container-text-item ">
                <p className="text-item-title">Ahorro y Sostenibilidad</p>
                <p className="text-item-description">
                  Menor costo por la producción de alimentos
                </p>
              </div>
            </div>
            <div className="card-item-beneficts">
              <div className="card-beneficts">
                <Image
                  src="/svg/benefitcs/three.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="container-text-item ">
                <p className="text-item-title">Libre de Pesticidas</p>
                <p className="text-item-description">
                  No utiliza pesticidas en el cuidado del cultivo
                </p>
              </div>
            </div>
            <div className="card-item-beneficts">
              <div className="card-beneficts">
                <Image
                  src="/svg/benefitcs/four.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="container-text-item ">
                <p className="text-item-title">Rápido y Natural</p>
                <p className="text-item-description">
                  Reducción del tiempo de crecimiento por hortaliza
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefictsComponent;
