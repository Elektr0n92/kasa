import React, { useState } from "react";
import ArrowLeft from "../assets/SlideShow/arrowLeft.png";
import ArrowRight from "../assets/SlideShow/arrowRight.png";

function Slideshow({ images, alt }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="slideshow">
      <img src={images[currentImageIndex]} alt={`${alt}`} />
      <div className="slideshow-controls">
        <span className="arrow-left" onClick={previousImage}>
          <img src={ArrowLeft} alt="arrow" />
        </span>
        <span className="arrow-right" onClick={nextImage}>
          <img src={ArrowRight} alt="arrow" />
        </span>
        <div className="slideshow-index-container">
          <span className="slideshow-index">
            {currentImageIndex + 1}/{images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
