import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src="/img/SA.jpg" alt="Supreme Autoglazing logo" />
      <div className="navbar-logo-name">SUPREME AUTOGLAZING</div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-button">
          Home
        </Link>
        <Link to="/Contacts">
          <button type="button" className="navbar-button">Contact</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
