import React from 'react';
import './DescriptionSection.css';
import Description from '../../components/description/description';
import ImageButton from '../../components/buttons/imageButton';

function DescriptionSection() {
  return (
    <div className="section-description">
      
      <Description Description="Here at Supreme Autoglazing we replace broken glass on all types of vehicles. We are committed to provide quality workmanship and products. We offer mobile service around Greater London which we can fix your car at home or work location. We are equipped with the latest glazing tools and able to replace broken glass rapidly to get you back on the road in no time. Get in touch with us for quotes and to arrange an appointment."/>

     
      <div className="section-description-2">
        <p>
          Mobile service
          <br />
          ✅ All makes and models
          <br />
          ✅ Same day appointment
          <br />
          ✅ Chip Repair
          <br />
          ✅ Import Cars
          <br />
          ✅ Traders and Bodyshops welcome
        </p>
      </div> 
      <ImageButton title="Glass Replacment" url="/glassreplacment" image="/img/IMG_E4310.JPG" />
    </div>
  );
}

export default DescriptionSection;
