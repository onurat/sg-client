import React from 'react';
import ImageCarousel from "../../components/Carousels/Carousel"
import "./GlassReplacment.css";
import Description from '../../components/description/description';

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
      <Description Description="At Supreme Autoglazing, we're your trusted partner for replacing and repairing broken glass on all types of vehicles in Greater London. We take pride in delivering top-notch workmanship and quality products to get you back on the road quickly and safely." />
      <ImageCarousel images={porcheImages} /> 
      <ImageCarousel images={vwVanImages} /> 
    </div>
  );
}

export default GlassReplacement;
