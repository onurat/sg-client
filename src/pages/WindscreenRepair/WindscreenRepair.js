import React from 'react';
import ImageCarousel from "../../components/Carousels/Carousel"
import ServiceInfo from '../../components/JobDiscription/ServiceInfo';
import "./windscreenRepair.css"

function WindscreenRepair() {
  const audiImages = [
    { src: '/img/AudiChip1.JPG', description: 'Audi A4 - Chip Repair' },
    { src: '/img/AudiChip2.jpg', description: 'Audi A4 - Chip Repair' },
    { src: '/img/AudiChip3.jpg', description: 'Audi A4 - Chip Repair' }
  ];


  return (
    <div className="windscreen-repair">
      <ServiceInfo title="Chip Repair" description="Windscreen repair is a cost-effective solution for minor damage to the front windscreen. If the damage is a small chip or crack that is not directly in the driver's line of sight and meets the UK guidelines, repair can often be performed swiftly. Repairing instead of replacing saves you time and money while maintaining the integrity of your vehicle." />
      <ImageCarousel images={audiImages} />
      
    </div>
  );
}

export default WindscreenRepair;