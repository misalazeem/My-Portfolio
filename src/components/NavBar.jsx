import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/NavBar.css';

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <nav>
        <h2>Misal</h2>
        <ul className="desktop-menu">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#about-me">About</a></li>
          <li><a href="#Contact-Me">Contact</a></li>
        </ul>
        <div className="mobile-menu">
          <button
            type="button"
            className="hamburger"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-inner">
              <div className="menu-close-container">
                <button
                  type="button"
                  className="mobile-close-icon"
                  onClick={handleMobileMenuClose}
                  aria-label="Close mobile menu"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <ul className="mobile-links">
                <li>
                  <a href="#portfolio" onClick={handleMobileMenuClose}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#Projects" onClick={handleMobileMenuClose}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about-me" onClick={handleMobileMenuClose}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#Contact-Me" onClick={handleMobileMenuClose}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
