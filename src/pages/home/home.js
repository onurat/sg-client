import React from 'react';
import Description from '../../components/description/description';
import ImageButton from '../../components/buttons/imageButton';
import CheckBoxes from './CheckBoxes/CheckBoxes';
import Testimonials from '../../components/Reviews/testimonials';
import "./home.css"

function Home() {
  const testimonials = [
    { text: "Great service! They fixed my windshield quickly.", author: "Anonymous" },
    { text: "Supreme Autoglazing is the best! Highly recommend.", author: "Anonymous" },
    { text: "I'm impressed with their professionalism.", author: "Anonymous" },
  ];

  return (
    <div className="section-description">
      <div className='description_section_1'>
        <Description Description="At Supreme Autoglazing, we're your trusted partner for replacing and repairing broken glass on all types of vehicles in Greater London. We take pride in delivering top-notch workmanship and quality products to get you back on the road quickly and safely." />
      </div>

      <ImageButton title="Glass Replacement" url="/glassreplacement" image="\img\Porche1.JPG" />
      <ImageButton title="Windscreen Repair" url="/windscreenRepair" image="\img\Vwvan1.JPG" />
      <ImageButton title="Cosmetics" url="/cosmetics" image="\img\Dashcam.jpg" />
      <CheckBoxes />
      <Testimonials testimonials={testimonials} />

    </div>
  );
}

export default Home;
