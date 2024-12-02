// src/components/MobileCarousel.tsx

import React, { useState, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/img/about/one.jpeg", alt: "Familiar", caption: "Familiar" },
  { src: "/img/about/two.jpeg", alt: "Balcón", caption: "Balcón" },
  { src: "/img/about/three.jpeg", alt: "Patio", caption: "Patio" },
];

const MobileCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEndX === 0) return;

    const delta = touchStartX - touchEndX;

    if (delta > 50) {
      // Swipe left: next slide
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (delta < -50) {
      // Swipe right: previous slide
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mobile-carousel">
      <div
        className="image-container"
        ref={slideRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          width={308}
          height={400}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="image"
        />
        <p className="p-desi">{images[currentIndex].caption}</p>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;