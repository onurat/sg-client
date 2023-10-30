import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src="/img/GJUAE9646.JPG" alt="Supreme Autoglazing logo" />
      <div className="navbar-logo-name">SUPREME AUTOGLAZING</div>
      <div className="navbar-menu">
        <button type="button" className="navbar-button">Home</button>
        <button type="button" className="navbar-button">About</button>
        <a href="form.html">
          <button type="button" className="navbar-button">Contact</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
