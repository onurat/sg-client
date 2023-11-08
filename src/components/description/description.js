import React from 'react';
import "./description.css"

function Description({Description}) {
  return (
    <div className="section-description">
      <div className="section-description-1">
        <p>
         {Description}
        </p>
      </div> 
    </div>
  );
}

export default Description;
