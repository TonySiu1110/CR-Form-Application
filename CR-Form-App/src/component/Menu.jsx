import React from 'react'
import Navbar from './Navbar'
import Head from './Head'
import Footer from './Footer1';
import { Link } from 'react-router-dom';
import pic from "../assets/CR.png";
import admo from "../assets/ADMO.png";
import off from "../assets/offchart.png";
import "./Styling/MenuStyling.css";
import db from "../assets/db.jpg";
import coming from "../assets/coming.png";


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
                <b>CR Form</b>
            </div>
            <div className="CR-button">
            <a href="file:///Y:/02-Knowledge%20Centre/Job%20Evaluation%20Tools/01.%20Org%20Chart%20Tool/orgchart3.html" target="_blank" rel="noopener noreferrer">
                    <img src={off} alt="" />
            </a>
                <b>Org Chart</b>
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img className="admo-img" src={admo} alt="" />
                </Link>
                <b>ADMO/DMO</b>
            </div>
            <div className="CR-button">
                <a href="https://gsic-hrm-jei-prod.crm3.dynamics.com/main.aspx?appid=4afbdb48-7ca1-4163-9214-fe16deaaf9a7&forceUCI=1&pagetype=entitylist&etn=crf97_position_information&viewid=bb171a5f-db8c-eb11-b1ac-000d3a09de2b&viewType=1039" target="_blank" rel="noopener noreferrer">
                    <img src={db} alt="CR App" />
                </a>
                <b>CR App</b>
            </div>
        </div>
        <div className="button-container">
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={coming} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={coming} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={coming} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={coming} alt="" />
                </Link>
                Coming Soon
            </div>
        </div>

        <div className="button-container">
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={coming} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={coming} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={coming} alt="" />
                </Link>
                Coming Soon
            </div>
            <div className="CR-button">
                <Link to="/cr-form">
                    <img src={coming} alt="" />
                </Link>
                Coming Soon
            </div>
        </div>
        
        <Footer />
    </>
  )
}

export default Menu
