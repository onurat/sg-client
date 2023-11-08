import React from 'react';
import ImageCarousel from "../../components/Carousels/Carousel"
import "./GlassReplacment.css";
import ServiceInfo from '../../components/JobDiscription/ServiceInfo';

function GlassReplacement() {
  const porcheImages = [
    { src: '/img/Porche1.JPG', description: 'Porsche GT3RS - windscreen replacement' },
    { src: '/img/Porche2.jpg', description: 'Porsche GT3RS - windscreen replacement' },
    { src: '/img/Porche3.JPG', description: 'Porsche GT3RS - windscreen replacement' }
  ];
  const bmwImages = [
    { src: '/img/Bmw1.JPG', description: 'BMW X5 - Laminated Door Glass replacement' },
    { src: '/img/Bmw2.jpg', description: 'BMW X5 - Laminated Door Glass replacement' },
    { src: '/img/Bmw3.JPG', description: 'BMW X5 - Laminated Door Glass replacement' }
  ];
  const miniImages = [
    { src: '/img/MiniMain.JPG', description: 'MINI - Heated Rear windscreen replacement' },
    { src: '/img/Mini1.JPG', description: 'MINI - Heated Rear windscreen replacement' },
    { src: '/img/Mini2.jpg', description: 'MINI -Heated Rear windscreen replacement' },
    { src: '/img/Mini3.JPG', description: 'MINI - Heated Rear windscreen replacement' },
    { src: '/img/Mini4.JPG', description: 'MINI - Heated Rear windscreen replacement' }
  ];

  return (
    <div className="glass-replacement">
      <h1 className="main-title">Glass Replacement</h1>
      <ServiceInfo title="Windscreen Replacement" description="Windscreen replacement is crucial when the damage to the front windscreen is extensive and cannot be safely repaired. This includes large cracks, deep chips, or damage that impairs the driver's line of sight. At our windscreen company, we use high-quality glass and adhere to strict safety standards to ensure your vehicle's structural integrity is maintained." />
      <ImageCarousel images={porcheImages} />
      <ServiceInfo title="Door Glass Replacement" description="Our windscreen company specializes in replacing damaged door glass. Whether your door glass has been shattered by an accident, a break-in, or vandalism, we offer prompt and reliable replacement services. We use high-quality glass materials and professional installation techniques to ensure the safety and security of your vehicle." />
      <ImageCarousel images={bmwImages} />
      <ServiceInfo title="Rear Windscreen Replacement" description="Our professional team specializes in rear windscreen replacement to address various issues, whether it's due to accidents, vandalism, or other unforeseen circumstances. We understand that rear windscreens cannot be repaired, so we ensure a seamless replacement process. With our high-quality materials and adherence to industry standards, we guarantee your vehicle's rear glass will be restored to its optimal condition, ensuring your safety and peace of mind." />
      <ImageCarousel images={miniImages} />
    </div>
  );
}

export default GlassReplacement;
