import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Eğlence Adası Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/rehber">Rehber</Link></li>
          <li><Link to="/icerikler">İçerikler</Link></li>
          <li><Link to="/iletisim">İletişim</Link></li>
        </ul>
      </nav>
      <div className="user-actions">
      </div>
    </header>
  );
};

export default Header;
