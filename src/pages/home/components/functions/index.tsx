import React from "react";
import "./styles.css";
import Image from "next/image";

const FunctionsComponent = () => {
  return (
    <div className="container-home-functions">
      <div className="container-text">

        <p className="text-title-functions">¿Cómo funciona?</p>
        <p className="text-description1">Sigue estos 5 pasos con nosotros</p>

      </div>
      <div className="container-card-home">
        <Image
          src="/img/functions/one.png"
          alt="Logo"
          width={441}
          height={340}
        />
        <div className="container-text-item-right">
          <p className="text-title">Paso 1</p>
          <p className="text-subtitle">Elige tu sistema</p>
          <p className="text-description">
            Primero selecciona el Hidro Roots que mejor se adapte a tus
            necesidades.
          </p>
        </div>
      </div>
      <div className="container-card-home">
        <div className="container-text-item-left">
          <p className="text-title">Paso 2</p>
          <p className="text-subtitle">Prepara el espacio</p>
          <p className="text-description">
            Instala tu sistema en el espacio disponible y asegúrate de contar
            con luz y ventilación adecuadas.
          </p>
        </div>
        <Image
          src="/img/functions/two.png"
          alt="Logo"
          width={441}
          height={340}
        />
      </div>
      <div className="container-card-home">
        <Image
          src="/img/functions/three.png"
          alt="Logo"
          width={441}
          height={340}
        />
        <div className="container-text-item-right">
          <p className="text-title">Paso 3</p>
          <p className="text-subtitle">Siembra tus plantas</p>
          <p className="text-description">
            Coloca las plántulas en el sistema y sigue nuestras recomendaciones
            de cuidado.
          </p>
        </div>
      </div>
      <div className="container-card-home">
        <div className="container-text-item-left">
          <p className="text-title">Paso 4</p>
          <p className="text-subtitle">Monitorea y nutre</p>
          <p className="text-description">
            Controla el crecimiento de tus plantas y ajusta los nutrientes según
            las indicaciones.
          </p>
        </div>
        <Image
          src="/img/functions/four.png"
          alt="Logo"
          width={441}
          height={340}
        />
      </div>
      <div className="container-card-home">
        <Image
          src="/img/functions/five.png"
          alt="Logo"
          width={441}
          height={340}
        />
        <div className="container-text-item-right">
          <p className="text-title">Paso 5</p>
          <p className="text-subtitle">Cosecha y disfruta</p>
          <p className="text-description">
            Recoge tus cultivos frescos y disfruta de alimentos saludables y
            sostenibles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunctionsComponent;