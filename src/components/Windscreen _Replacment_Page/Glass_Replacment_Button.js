import React from 'react';
import { Link } from 'react-router-dom';
import './Glass_Replacment.css';

const GlassReplacementButton = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Glass Replacement</h1>
      <Link to="/WindscreenReplacement">
        <img
          src="/img/IMG_E4311.JPG"
          alt="Windscreen Replacement"
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </div>
  );
};

export default GlassReplacementButton;