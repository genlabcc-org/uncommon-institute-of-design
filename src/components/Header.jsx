import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <img 
        src="/logo.png" 
        alt="Uncommon Institute of Design Logo" 
        className="header-logo"
      />
    </header>
  );
};

export default Header;
