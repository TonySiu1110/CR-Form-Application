import React from 'react';
import { Link } from 'react-router-dom';
import './Styling/Navbar.css';

const Navbar = () => {
  return (
    <>
        <header className="navbar1">
        <div className="container">
          <h1 className="logo">Treasury Board Secretariat &mdash; JEIB</h1>
          <nav>
            <ul className="nav-links">
              <li>
              <Link to="/instruction">Home</Link>
              </li>
              <li>
                <Link to="/menu">Application Menu</Link>
              </li>
              <li>
                <a href="#feature">Feature</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              
              <li>
                <a href="#pricing">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
