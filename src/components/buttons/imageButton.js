import React from 'react';
import { Link } from 'react-router-dom';
import "./ImageButton.css";

const ImageButton = ({title , image, url}) => {
  return (
    <div className='ImageButton'>
      <h1>{title}</h1>
      <div>
        <Link to={url}>
          <img src={image} alt="" />
        </Link>
       
      </div>
    </div>
  );
};

export default ImageButton;
