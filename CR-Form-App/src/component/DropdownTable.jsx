import React, { useState } from 'react';
import Option1 from './Option1';

const ConsultationService = () => (
    <Option1 />
  );
  
  const ClassificationRequest = () => (
    <div>
      <h3>Submit a Classification Request</h3>
      <p>Please submit a classification request by following the procedure outlined here.</p>
    </div>
  );
  
  const PositionAdministration = () => (
    <div>
      <h3>Position Administration</h3>
      <p>Details about position administration will appear here.</p>
    </div>
  );
  
  const DropdownTable = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    // Handle dropdown change
    const handleDropdownChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    return (
      <div>
        {/* Dropdown */}
        <label htmlFor="dropdown">Select an Option:</label>
        <select id="dropdown" onChange={handleDropdownChange} value={selectedOption}>
          <option value="">Select...</option>
          <option value="ConsultationService">Consultation Service: I would like to consult a JE Specialist on what I need to do</option>
          <option value="ClassificationRequest">Submit a Classification Request</option>
          <option value="PositionAdministration">Position Administration</option>
        </select>
  
        {/* Conditionally render components based on the selected option */}
        {selectedOption === 'ConsultationService' && <ConsultationService />}
        {selectedOption === 'ClassificationRequest' && <ClassificationRequest />}
        {selectedOption === 'PositionAdministration' && <PositionAdministration />}
      </div>
    );
  };

export default DropdownTable;
