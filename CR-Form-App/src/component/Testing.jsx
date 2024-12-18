import React from 'react';
import "./Styling/Testing5Styling.css";
import { Link } from 'react-router-dom';
import Header from './Head';
import Footer1 from './Footer1';

const Testing = () => {
  return (

<>
      <Header />
      {/* Navbar */}
      <header className="navbar1">
        <div className="container">
          <h1 className="logo">Treasury Board Secretariat &mdash; JEIB</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#feature">Feature</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
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

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>
          Landing Page 
          </h2>
          <Link to="/login" className="btn">
            Get Started
          </Link>
        </div>
        
      </section>
    <Footer1 />
    </>
  
  );
};

export default Testing;
