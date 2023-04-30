import React, { useState } from "react";
import ArrowLeft from "../assets/SlideShow/arrowLeft.png";
import ArrowRight from "../assets/SlideShow/arrowRight.png";

function Slideshow({ images, alt }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isManyImg = images.length > 1;

  const previousImage = () => {
    if (isImageLoaded) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
    }
    setIsImageLoaded(false);
  };

  const nextImage = () => {
    if (isImageLoaded) {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
    setIsImageLoaded(false);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="slideshow">
      <img
        src={images[currentImageIndex]}
        alt={`${alt}`}
        onLoad={handleImageLoad}
      />
      <div className="slideshow-controls">
        {isManyImg && (
          <>
            <span className="arrow-left" onClick={previousImage}>
              <img src={ArrowLeft} alt="arrow" />
            </span>
            <span className="arrow-right" onClick={nextImage}>
              <img src={ArrowRight} alt="arrow" />
            </span>
          </>
        )}
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
