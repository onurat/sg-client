import React from 'react';
import Description from '../../components/description/description';
import ImageButton from '../../components/buttons/imageButton';
import CheckBoxes from './CheckBoxes/CheckBoxes';
import "./home.css"

function Home() {
  return (
    <div className="section-description">

      <div className='description_section_1'>
        <Description Description="At Supreme Autoglazing, we're your trusted partner for replacing and repairing broken glass on all types of vehicles in Greater London. We take pride in delivering top-notch workmanship and quality products to get you back on the road quickly and safely." />
        <Description Description="At Supreme Autoglazing, we're your trusted partner for replacing broken glass on all types of vehicles in Greater London. We take pride in delivering top-notch workmanship and quality products to get you back on the road quickly and safely." />
        <Description Description="At Supreme Autoglazing, we're your trusted partner for replacing broken glass on all types of vehicles in Greater London. We take pride in delivering top-notch workmanship and quality products to get you back on the road quickly and safely." />
      </div>

      <ImageButton title="Glass Replacment" url="/glassreplacment" image="\img\IMG_E4310.JPG" />
      <ImageButton title="Windscreen Repair" url="/WindscreenRepair" image="\img\IMG_E4328.JPG" />
      <CheckBoxes />
    </div>
  );
}

export default Home;
