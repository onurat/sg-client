import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src="/img/SA.jpg" alt="supreme autoglazing" />
          <h1>Supreme Autoglazing</h1>
        </div>
        <div className="nav-buttons">
          <Link to="/">Home</Link>
          <Link to="/Contacts">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
