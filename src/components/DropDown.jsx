import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../styles/DropDown.css';

function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleDropdown();
    }
  };

  return (
    <div className={`dropdown ${isOpen ? 'active' : ''}`}>
      <div
        className="dropdown-toggle"
        onClick={toggleDropdown}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <div className="dropdown-menu">
        <ul>
          {options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dropdown;
