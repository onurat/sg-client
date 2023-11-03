import React from 'react';
import ImageCarousel from "../../components/Carousels/Carousel"
import "./Cosmetics.css";

function Cosmetics() {
  const Cosmetics = [
    { src: '/img/Dashcam.JPG', description: 'Dashcam Instilation' },
    { src: '/img/WiperReplacment.jpg', description: 'Wiper replacement' },
  ];

  return (
    <div className="Cosmetics">
      <h1>Cosmetics</h1>
      
      <ImageCarousel images={Cosmetics} /> 
      
    </div>
  );
}

export default Cosmetics;