import React from 'react'
import Navbar from './Navbar'
import Head from './Head'
import Footer from './Footer1';
import { Link } from 'react-router-dom';
import pic from "../assets/CR.png";
import "./Styling/MenuStyling.css";

const Menu = () => {
  return (
    <>
        <Head />
        <Navbar />
        <h2>Menu</h2>
        <div className="button-container">
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                CR Form
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Off Chart
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                ADMO/DMO
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
        </div>
        <div className="button-container">
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
        </div>

        <div className="button-container">
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={pic} alt="" />
                </Link>
                Coming Soon
            </div>
        </div>
        
        <Footer />
    </>
  )
}

export default Menu
