import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">FoodZone</h2>
          <p className="footer-text">
            Fresh, fast and delicious food delivered right to your door. We care
            about quality and taste.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>Menu</li>
            <li>Orders</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Tashkent, Uzbekistan</p>
          <p>📞 +998 90 123 45 67</p>
          <p>✉️ info@foodzone.uz</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FoodZone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
