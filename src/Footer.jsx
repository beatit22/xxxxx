import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-left">
          <strong>Erkan Küpçü</strong> • Bu site Erkan Küpçü tarafından geliştirildi.
        </div>
        <nav className="footer-nav" aria-label="Alt menü">
          <a href="#">Hakkında</a>
          <a href="#">İletişim</a>
          <a href="#">Gizlilik</a>
        </nav>
        <div className="footer-right">© {year} Tüm hakları saklıdır.</div>
      </div>
    </footer>
  );
}
