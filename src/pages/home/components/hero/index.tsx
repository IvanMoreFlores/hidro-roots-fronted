import heroLottie from "../../../../../public/lottie/hero-photo.json";
import Button from "@/components/button";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import "./styles.css";

const HeroComponent = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-home-hero">
      <div className="container-text-hero">
        <p className="text-title-hero">Cultiva hoy, transforma el mañana</p>
        <p className="text-description-hero">
          Sistemas hidropónicos diseñados para familias y empresas.
        </p>
        {!isMobile && (
          <Button
            icon={
              <Image
                src="/svg/icon/right.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            }
          >
            Ver productos
          </Button>
        )}
      </div>
      <div className="container-lottie-hero">
        <Lottie animationData={heroLottie} loop={true} />
      </div>
      {isMobile && (
        <Button
          icon={
            <Image
              src="/svg/icon/right.svg"
              alt="Logo"
              width={20}
              height={20}
            />
          }
        >
          Ver productos
        </Button>
      )}
    </div>
  );
};

export default HeroComponent;