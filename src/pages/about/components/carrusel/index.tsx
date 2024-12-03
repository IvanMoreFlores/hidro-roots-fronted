import React, { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/img/about/one.jpeg", alt: "Familiar", caption: "Familiar" },
  { src: "/img/about/two.jpeg", alt: "Balcón", caption: "Balcón" },
  { src: "/img/about/three.jpeg", alt: "Patio", caption: "Patio" },
];

const MobileCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const delta = touchStartX - touchEndX;

    if (delta > 50 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTouchStartX(null);
    } else if (delta < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTouchStartX(null);
    }
  };

  return (
    <div className="mobile-carousel">
      <div
        className="carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="image-slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <div className="card">
                <div className="image-wrapper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className={`image ${currentIndex === index ? "active" : ""}`}
                  />
                </div>
                <p className="caption">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;