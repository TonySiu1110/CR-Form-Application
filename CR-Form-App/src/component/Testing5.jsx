import React, { useState } from "react";
import "./Styling/Option1Styling.css";

const MultiPageForm = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // State to track form data
  const [formData, setFormData] = useState({
    classificationService: "",
    positionNumber: "",
    ministry: "",
    division: "",
    branch: "",
    positionTitle: "",
    jobCode: "",
    securityScreening: "",
    Bilingual:"",
    licensingQualifications:"",
    Prior:"",
    Department_Description:"",
    Department_Number:"",
    directReports:"",
    numberOfPositions:"",
    job_position:"",
    is_it_excluded:"",
    is_it_team:"",
    effective_date:"",
    indirectReports:"",
    executive_development:"",
    superpositiontitle:"",
    superpositionnumber:"",


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
    
  // Page Components
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
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
          </form>


          </>
        );
      case 2:
        return (
          <>
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
            </div>

            {/* fourth Row */}
        <div className="form-row">
            <div className="form-group">
            <label htmlFor="Department-Description">Department Description</label>
            <input
                type="text"
                id="Department-Description"
                name="Department-Description"
                value={formData.Department_Description}
                onChange={handleChange}
                placeholder="Enter Department Description"
            />
            </div>
            <div className="form-group">
            <label htmlFor="Department-Number">Department Number</label>
            <input
                type="text"
                id="Department Number"
                name="Department Number"
                value={formData.Department_Number}
                onChange={handleChange}
                placeholder="Enter Department Number"
            />
            </div>
        </div>
            
            {/* Fifth Row */}
            <div className="form-row">
            
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
            </div>

        {/* Sixth Row */}
        <div className="form-row">
            <div className="form-group">
            <label htmlFor="positionStatus">Position Status</label>
            <select
                id="positionStatus"
                name="positionStatus"
                value={formData.positionStatus}
                onChange={handleChange}
            >
                <option value="">Select...</option>
                <option value="status1">Status 1</option>
                <option value="status2">Status 2</option>
            </select>
            </div>
        </div>

        {/* Seventh Row */}
        <div className='dropdown-container'>
                <label htmlFor="dropdown" className="dropdown-label">Designated Bilingual Position</label>
                <select
                id="dropdown"
                className="dropdown-select"
                name="Bilingual"
                value={formData.Bilingual}
                onChange={handleChange}
                >
                <option value="">Select Bilingual</option>
                <option value="ministryA">French</option>
                <option value="ministryB">Chinese</option>
                <option value="ministryC">Hindi</option>
                <option value="moreOptions">More Options</option>
                </select>
        </div>
        

      

      {/* Eigth Row */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="numberOfPositions">Number of Positions</label>
          <input
            type="number"
            id="numberOfPositions"
            name="numberOfPositions"
            value={formData.numberOfPositions}
            onChange={handleChange}
            min="0"
          />
        </div>
        
      </div>
      {/* Ninth Row */}

      <div className="form-row">
            <div className="form-group">
                    <label style={{ display: "block", marginBottom: "8px" }}>
                        Has a prior classification request been submitted for this position?
                    </label>
                    <div>
                        <label>
                        <input
                            type="radio"
                            name="Prior"
                            value="Yes"
                            checked={formData.Prior === "Yes"}
                            onChange={handleChange}
                        />
                            Yes
                        </label>
                        <label style={{ marginLeft: "10px" }}>
                        <input
                            type="radio"
                            name="Prior"
                            value="No"
                            checked={formData.Prior === "No"}
                            onChange={handleChange}
                        />
                            No
                        </label>
                        <label style={{ marginLeft: "10px" }}>
                        <input
                            type="radio"
                            name="Prior"
                            value="idk"
                            checked={formData.Prior === "idk"}
                            onChange={handleChange}
                        />
                            I don't know
                        </label>
                    </div>
            </div>
        </div>
      {/* tenth Row */}
      <div className="form-row">
        
        <div className="form-group">
            <label style={{ display: "block", marginBottom: "8px" }}>
                Licensing/Mandatory Qualifications?
            </label>
            <div>
                <label>
                <input
                    type="radio"
                    name="licensingQualifications"
                    value="Yes"
                    checked={formData.licensingQualifications === "Yes"}
                    onChange={handleChange}
                />
                    Yes
                </label>
                <label style={{ marginLeft: "10px" }}>
                <input
                    type="radio"
                    name="licensingQualifications"
                    value="No"
                    checked={formData.licensingQualifications === "No"}
                    onChange={handleChange}
                />
                    No
                </label>
            </div>
        </div>
    
        <div className="form-group">
            <label style={{ display: "block", marginBottom: "8px" }}>
                Security Screening?
            </label>
            <div>
                <label>
                <input
                    type="radio"
                    name="securityScreening"
                    value="Yes"
                    checked={formData.securityScreening === "Yes"}
                    onChange={handleChange}
                />
                    Yes
                </label>
                <label style={{ marginLeft: "10px" }}>
                <input
                    type="radio"
                    name="securityScreening"
                    value="No"
                    checked={formData.securityScreening === "No"}
                    onChange={handleChange}
                />
                    No
                </label>
            </div>
        </div>
      </div>
          
        <div className="form-row">
            <div className="form-group">
                    <label htmlFor="job_position">Title of Position from previous classification, if different from the above title</label>
                    <input
                        type="text"
                        id="job_position"
                        name="job_position"
                        value={formData.jobCode}
                        onChange={handleChange}
                        placeholder="Title of Position"
                    />
            </div>
        </div>

        <div className="form-row">

            <div className="form-group">
                <label style={{ display: "block", marginBottom: "8px" }}>
                    Is the position proposed as excluded (Executive, Management Compensation Plan, including Individual Contributor or OPSEUParallel)?
                </label>
                <div>
                    <label>
                    <input
                        type="radio"
                        name="is_it_excluded"
                        value="Yes"
                        checked={formData.is_it_excluded === "Yes"}
                        onChange={handleChange}
                    />
                        Yes
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                    <input
                        type="radio"
                        name="is_it_excluded"
                        value="No"
                        checked={formData.is_it_excluded === "No"}
                        onChange={handleChange}
                    />
                        No
                    </label>
                </div>
            </div>


        </div>
        


        <div className="form-row">
            <div className="form-group">
                <label htmlFor="directReports">Number of Direct Reports</label>
                <input
                    type="number"
                    id="directReports"
                    name="directReports"
                    value={formData.directReports}
                    onChange={handleChange}
                    min="0"
                />
            </div>

            <div className="form-group">
                <label htmlFor="indirectReports">Number of Indirect Reports</label>
                <input
                    type="number"
                    id="indirectReports"
                    name="indirectReports"
                    value={formData.indirectReports}
                    onChange={handleChange}
                    min="0"
                />
            </div>


        </div>

        <div className="form-row">

            <div className='dropdown-container'>
                    <label htmlFor="dropdown" className="dropdown-label">Executive Development Committee  Approval for Organizational Structure</label>
                    <select
                    id="dropdown"
                    className="dropdown-select"
                    name="Executive_Development"
                    value={formData.executive_development}
                    onChange={handleChange}
                    >
                    <option value="">Executive Development Committee (EDC) Approval for Organizational Structure</option>
                    <option value="">????</option>
                    
                    </select>
            </div>

        </div>

        <div className="form-row">

            <div className="form-group">
                        <label htmlFor="positionTitle">Supervisor’s Position Title for the Requested Position</label>
                        <input
                            type="text"
                            id="positionTitle"
                            name="superpositiontitle"
                            value={formData.superpositiontitle}
                            onChange={handleChange}
                            placeholder="Enter Supervisor’s Position title"
                        />
                    </div>

        </div>

        <div className="form-row">
        <div className="form-group">
                        <label htmlFor="jobCode">Supervisor’s Position Number</label>
                        <input
                            type="text"
                            id="positionTitle"
                            name="superpositionnumber"
                            value={formData.jobCode}
                            onChange={handleChange}
                            placeholder="Enter Supervisor’s Position Number"
                        />
                    </div>
        </div>

        <div className="form-row">

            <div className="form-group">
                    <label style={{ display: "block", marginBottom: "8px" }}>
                        Is this request for a team/Group Lead position?
                    </label>
                    <div>
                        <label>
                        <input
                            type="radio"
                            name="is_it_team"
                            value="Yes"
                            checked={formData.is_it_team === "Yes"}
                            onChange={handleChange}
                        />
                            Yes
                        </label>
                        <label style={{ marginLeft: "10px" }}>
                        <input
                            type="radio"
                            name="is_it_team"
                            value="No"
                            checked={formData.is_it_team === "No"}
                            onChange={handleChange}
                        />
                            No
                        </label>
                    </div>
            </div>

        </div>

        <div className="form-row">

            <div className="form-group">
                <label htmlFor="date">Date (MM/DD/YYYY)</label>
                <input
                    type="date"
                    id="date"
                    name="effective_date"
                    value={formData.date}
                    onChange={handleChange}
                    required 
                />
            </div>
        </div>
          </>
        );
      case 3:
        return (
          <>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </label>
          </>
        );
      case 4:
        return (
          <>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
          </>
        );
      default:
        return <p>Invalid Page</p>;
    }
  };

  return (
    <div>
      <form>
        {/* Render the current page's fields */}
        {renderPage()}
        
        {/* Navigation Buttons */}
        <div className="parent-muti-button">
          {currentPage > 1 && (
            <button className="muti-button" type="button" onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          )}
          {currentPage < 4 && (
            <button className="muti-button" type="button" onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          )}
          {currentPage === 4 && (
            <button className="muti-button" type="submit" onClick={() => console.log(formData)}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiPageForm;
