import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Math wizard</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
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
