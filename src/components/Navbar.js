import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Math wizards</h1>
      <div
        className="hamburger"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
        aria-label="Toggle menu"
      >
        <div />
        <div />
        <div />
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/calculator" onClick={toggleMenu}>Calculator</Link></li>
        <li><Link to="/quote" onClick={toggleMenu}>Quote</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
