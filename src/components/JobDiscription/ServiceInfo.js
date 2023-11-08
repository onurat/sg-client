import React from 'react';
import "./ServiceInfo.css"

function ServiceInfo({ title, description }) {
  return (
    <div className="service-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceInfo;
