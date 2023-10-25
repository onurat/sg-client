import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src="src\components\Header\Supreme Autoglazing logo.JPG" alt="Supreme Autoglazing logo" />
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

export default Header;
