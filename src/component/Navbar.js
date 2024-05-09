import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/oyunlar/kategoriler">Kategoriler</Link></li>
        <li><Link to="/oyunlar/populer">Popüler</Link></li>
        <li><Link to="/yarismalar/aktif">Aktif Yarışmalar</Link></li>
        <li><Link to="/yarismalar/gecmis">Geçmiş Yarışmalar</Link></li>
        <li><Link to="/icerikler/blog">Blog</Link></li>
        <li><Link to="/icerikler/rehberler">Rehberler</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
