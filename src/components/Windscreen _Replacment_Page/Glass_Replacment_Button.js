import React from 'react';
import { Link } from 'react-router-dom';
import './Glass_Replacment.css';

const GlassReplacementButton = () => {
  return (
    <div>
      <h1>Glass Replacement</h1>
      <div>
        <Link to="/pages/WindscreenReplacment">
          <img src="/img/IMG_E4310.JPG" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default GlassReplacementButton;
