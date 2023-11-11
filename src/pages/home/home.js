import React from 'react';
import Description from '../../components/description/description';
import ImageButton from '../../components/buttons/imageButton';
import CheckBoxes from './CheckBoxes/CheckBoxes';
import Testimonials from '../../components/Reviews/testimonials';
import "./home.css";

function Home() {
  const testimonials = [
    { text: "Great service! They fixed my windshield quickly.", author: "Anonymous" },
    { text: "Supreme Autoglazing is the best! Highly recommend.", author: "Anonymous" },
    { text: "I'm impressed with their professionalism.", author: "Anonymous" },
    { text: "Excellent job! Quick and professional service.", author: "Anonymous" },
    { text: "I had a great experience with Supreme Autoglazing.", author: "Anonymous" },
    { text: "Their team is top-notch! I highly recommend them.", author: "Anonymous" },
  ];

  return (
    <div className="home-container">
      <div className='description-section'>
        <Description Description="At Supreme Autoglazing, we're your trusted partner for replacing and repairing broken glass on all types of vehicles in Greater London. We take pride in delivering top-notch workmanship and quality products to get you back on the road quickly and safely." />
      </div>

      <div className="service-section">
        <ImageButton title="Glass Replacement" url="/glassreplacment" image="/img/Porche1.JPG" />
        <ImageButton title="Windscreen Repair" url="/windscreenRepair" image="/img/Vwvan1.JPG" />
        <ImageButton title="Cosmetics" url="/cosmetics" image="/img/Dashcam.jpg" />
      </div>

      <div className="testimonials-section">
        <Testimonials testimonials={testimonials} />
      </div>

      <CheckBoxes />
    </div>
  );
}

export default Home;
