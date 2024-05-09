import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about">
        <p>
          Eğlence Adası, size en eğlenceli oyunları, heyecan verici yarışmaları ve 
          bilgilendirici içerikleri sunmak için kurulmuştur.
        </p>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Eğlence Adası. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
