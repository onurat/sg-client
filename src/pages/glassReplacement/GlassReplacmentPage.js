import React from 'react';
import ImageCarousel from "../../components/Carousels/Carousel"
import "./GlassReplacment.css";

function GlassReplacement() {
  const porcheImages = [
    { src: '/img/Porche1.JPG', description: 'Porsche GT3RS - windscreen replacement' },
    { src: '/img/porche2.jpg', description: 'Porsche GT3RS - windscreen replacement' },
    { src: '/img/porche3.jpg', description: 'Porsche GT3RS - windscreen replacement' }
  ];

  const vwVanImages = [
    { src: '/img/Vwvan1.JPG', description: 'VW transporter - windscreen replacement' },
    { src: '/img/Vwvan2.JPG', description: 'VW transporter - windscreen replacement' },
    { src: '/img/Vwvan3.JPG', description: 'VW transporter - windscreen replacement' }
  ];

  return (
    <div className="glass-replacement">
      <h1>Glass Replacement</h1>
      
      <ImageCarousel images={porcheImages} /> 
      <ImageCarousel images={vwVanImages} /> 
    </div>
  );
}

export default GlassReplacement;