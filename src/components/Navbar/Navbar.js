import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);

    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <img className="navbar-logo" src="/img/SA.jpg" alt="Supreme Autoglazing logo" />
      <div className="navbar-logo-name">SUPREME AUTOGLAZING</div>
      <div className="navbar-menu">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`navbar-button ${isMenuOpen ? 'open' : ''}`} ref={sidebarRef}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/contacts" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/windscreenrepair" onClick={toggleMenu}>
            Windscreen Repair
          </Link>
          <Link to="/glassreplacment" onClick={toggleMenu}>
            Glass Replacement
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
