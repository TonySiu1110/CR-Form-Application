import React, { useState } from 'react';
import Option1 from './Option1';
import "./Styling/DropdownTableStyling.css";
import Head from './Head';
import Navbar from './Navbar';
import Testing4 from './Testing4';
import Testing5 from './Testing5';
import Footer1 from './Footer1';
import Po from './PositionAdministration'


const ConsultationService = () => (
    <Option1 />
  );
  
  const ClassificationRequest = () => (
    // <div>
    //   <h3>Submit a Classification Request</h3>
    //   <p>Please submit a classification request by following the procedure outlined here.</p>
    // </div>
    <Testing5 />
  );
  
  const PositionAdministration = () => (
    <div>
    <Po />
    </div>
  );
  
  const DropdownTable = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    // Handle dropdown change
    const handleDropdownChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    return (
      <>
        <Head />
        <Navbar />
        <div className="dropdown-container">
        {/* Dropdown */}
        <label htmlFor="dropdown" className="dropdown-label">
          Classification Service Required
        </label>
        <select
          id="dropdown"
          onChange={handleDropdownChange}
          value={selectedOption}
          className="dropdown-select"
        >
          <option value="">Select...</option>
          <option value="ConsultationService">
            Consultation Service: I would like to consult a JE Specialist on what I
            need to do
          </option>
          <option value="ClassificationRequest">
            Submit a Classification Request
          </option>
          <option value="PositionAdministration">
            Position Administration
          </option>
        </select>
      
        {/* Conditionally render components based on the selected option */}
        {selectedOption === "ConsultationService" && <ConsultationService />}
        {selectedOption === "ClassificationRequest" && <ClassificationRequest />}
        {selectedOption === "PositionAdministration" && <PositionAdministration />}
      </div>
      
      </>
    );
  };

export default DropdownTable;
