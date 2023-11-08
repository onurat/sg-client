import React from 'react';
import './Cosmetics.css';
import ServiceInfo from '../../components/JobDiscription/ServiceInfo';

function Cosmetics() {
  return (
    <div className="Cosmetics">
      <h1 className="main-title">Cosmetics</h1>
      <ServiceInfo
        title="Dashcam Fitting Services"
        description="Our windscreen company specializes in replacing damaged door glass. Whether your door glass has been shattered by an accident, a break-in, or vandalism, we offer prompt and reliable replacement services. We use high-quality glass materials and professional installation techniques to ensure the safety and security of your vehicle."
      />
      <img src="/img/Dashcam.jpg" alt="Dashcam" className="service-image" />
      <ServiceInfo
        title="Wiper Replacement Services"
        description="Clear, unobstructed visibility during adverse weather is a priority for safe driving. We offer top-notch wiper replacement services. Our experts will replace worn-out wiper blades with precision and ensure the right fit for your vehicle. We understand the importance of maintaining your wipers, and our professional approach ensures you have blades that efficiently clear your windshield. Count on us for a safer and more comfortable driving experience."
      />
      <img src="/img/WiperReplacment.jpg" alt="Wiper Replacement" className="service-image" />
    </div>
  );
}

export default Cosmetics;
