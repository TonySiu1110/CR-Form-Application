import React, { useState } from "react";
import "./Styling/Option1Styling.css";

const Testing4 = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        classificationService: "",
        positionNumber: "",
        ministry: "",
        division: "",
        branch: "",
        positionTitle: "",
        jobCode: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add further submission logic here
    };

  
    return (
      <div className="form-container">
        <h2>Section 1 - Classification Service Requested</h2>
        <form onSubmit={handleSubmit}>
          {/* Section 1 */}
          <div className="form-group">
            <label htmlFor="classificationService">Classification Service Requested</label>
            <select
              id="classificationService"
              name="classificationService"
              value={formData.classificationService}
              onChange={handleChange}
            >
              <option value="">Select Classification Service</option>
              {/* Add options dynamically if needed */}
            </select>
          </div>
  
            <h2>Section 2 - Position Information</h2>
            {/* Section 2 */}
            
            {/* First Row */}

            <div className="form-group">
                <label htmlFor="positionNumber">Position Number (for existing position)</label>
                <input
                type="text"
                id="positionNumber"
                name="positionNumber"
                value={formData.positionNumber}
                onChange={handleChange}
                placeholder="Enter position number"
                />
            </div>

            {/* Second Row */}
            
            <div className='dropdown-container'>
                <label htmlFor="dropdown" className="dropdown-label">Ministry</label>
                <select
                id="dropdown"
                className="dropdown-select"
                name="ministry"
                value={formData.ministry}
                onChange={handleChange}
                >
                <option value="">Select Ministry</option>
                <option value="ministryA">Ministry A</option>
                <option value="ministryB">Ministry B</option>
                <option value="ministryC">Ministry C</option>
                <option value="moreOptions">More Options</option>
                </select>
            </div>

            {/* Third Row */}
            <div className="form-row">
                <div className="form-group">
                        <label htmlFor="division">Division</label>
                        <input
                        type="text"
                        id="division"
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        placeholder="Enter division"
                        />
                </div>
            </div>
            
            {/* Fourth Row */}
            <div className="form-row">

                <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <input
                    type="text"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Enter branch"
                    />
                </div>

            
                <div className="form-group">
                    <label htmlFor="positionTitle">Position Title</label>
                    <input
                    type="text"
                    id="positionTitle"
                    name="positionTitle"
                    value={formData.positionTitle}
                    onChange={handleChange}
                    placeholder="Enter position title"
                    />
                </div>
            </div>
          

          <div className="form-group">
            <label htmlFor="jobCode">Job Code (for existing position)</label>
            <input
              type="text"
              id="jobCode"
              name="jobCode"
              value={formData.jobCode}
              onChange={handleChange}
              placeholder="Enter job code"
            />
          </div>
  
          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  };

export default Testing4
