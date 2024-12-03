// src/component/Footer.jsx
import React from 'react';
import "./Styling/Testing5Styling.css";

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Treasury Board Secretariat - JEIB  All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer1;
