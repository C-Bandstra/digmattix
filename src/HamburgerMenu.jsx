import React, { useState } from 'react';
import './HamburgerMenu.css'; // We'll write this CSS below

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? 'bar change' : 'bar'}></div>
        <div className={isOpen ? 'bar change' : 'bar'}></div>
        <div className={isOpen ? 'bar change' : 'bar'}></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Utility & Rhythm</a></li>
        <li><a href="#">DIG. PLANT. BUILD.</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
