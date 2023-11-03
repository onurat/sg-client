import React, { useState } from 'react';
import "./Carousel.css";

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (direction) => {
    let newIndex = currentImageIndex + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="section-1-images">
      <button className="carousel-control image-control-prev" onClick={() => changeImage(-1)}>
        &#10094;
      </button>
      <img id="porche-image" src={images[currentImageIndex].src} alt={images[currentImageIndex].description} />
      <button className="carousel-control image-control-next" onClick={() => changeImage(1)}>
        &#10095;
      </button>
      <div className="image-description-porche">{images[currentImageIndex].description}</div>
    </div>
  );
}

export default ImageCarousel;
