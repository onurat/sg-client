import React from 'react';
import { Link } from 'react-router-dom';

function JobsButton() {
  return (
    <div>
      <header>
        <h1>Windscreen Replacement</h1>
      </header>
      <main>
        <Link to="/new-page">
        <img src="path_to_your_image.jpg" alt="Windscreen Replacement Logo" />
        </Link>
      </main>
    </div>
  );
}

export default JobsButton;
