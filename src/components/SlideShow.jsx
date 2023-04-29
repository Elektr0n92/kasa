import React, { useState } from "react";

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
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default Slideshow;
