import React from 'react';
import './CheckBoxes.css';

function CheckBoxes() {
  const listItems = [
    "Mobile service",
    "All makes and models",
    "Same day appointment",
    "Traders and Bodyshops welcome",
    "Windscreen Replacement",
    "Chip Repair",
    "Wiper Change",
   
  ];

  return (
    <div className="section-description-2">
      <ul className="custom-list">
        {listItems.map((item, index) => (
          <li key={index}>
            <span className="tick-symbol">✅</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckBoxes;
