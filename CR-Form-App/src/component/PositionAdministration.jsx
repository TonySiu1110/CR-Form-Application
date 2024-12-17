import React, { useState } from "react";
import "./Styling/Option1Styling.css";
import Testing6 from "./Testing6";

const PositionAdministration = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth",
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    classificationService: "",
    positionNumber: "",
    ministry: "",
    division: "",
    branch: "",
    positionTitle: "",
    jobCode: "",
    securityScreening: "",
    Bilingual: "",
    licensingQualifications: "",
    Prior: "",
    Department_Description: "",
    Department_Number: "",
    directReports: "",
    numberOfPositions: "",
    job_position: "",
    is_it_excluded: "",
    is_it_team: "",
    effective_date: "",
    indirectReports: "",
    executive_development: "",
    superpositiontitle: "",
    superpositionnumber: "",
    new_positions_questions_responsibility: "",
    new_positions_questions_skills: "",
    updated_positions_reclassifications: "",
    re_organization: "",
    hr_contact: "",
    hrLastName: "",
    hrFirstName: "",
    hrTelephone: "",
    hrEmail: "",
    managerLastName: "",
    managerFirstName: "",
    managerTelephone: "",
    ministry_code: "",
    duration: "",
    positionType:"",
    security_level:"",
    headcount_status:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const totalPages = 5;
  const progressPercentage = Math.round((currentPage / totalPages) * 100);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <h2>Section 1 - Position Information</h2>
            <div className="form-group">
              <label htmlFor="positionNumber">Position Number</label>
              <input
                type="text"
                id="positionNumber"
                name="positionNumber"
                value={formData.positionNumber}
                onChange={handleChange}
                placeholder="Enter position number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ministry">Ministry</label>
              <select
                id="ministry"
                name="ministry"
                value={formData.ministry}
                onChange={handleChange}
              >
                <option value="">Select Ministry</option>
                <option value="ministryA">Ministry A</option>
                <option value="ministryB">Ministry B</option>
              </select>
            </div>
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
        <option value="temporary">Temporary</option>
        <option value="permanent">Permanent</option>
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="positionStatus">Position Type</label>
    <select
        id="positionType"
        name="positionType"
        value={formData.positionType}
        onChange={handleChange}
    >
        <option value="">Select...</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Flexible">Flexible Part-Time</option>
    </select>
    </div>
</div>

  

{/* Seventh Row */}
<div className='dropdown-container'>
    <label htmlFor="dropdown" className="dropdown-label">Language Requirement</label>
    <select
    id="dropdown"
    className="dropdown-select"
    name="Bilingual"
    value={formData.Bilingual}
    onChange={handleChange}
    >
    <option value="">Select Bilingual</option>
    <option value="bilingual">Bilingual</option>
    <option value="unbilingual">Unbilingual</option>
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
<div className="form-group">
<label htmlFor="numberOfPositions">Security level</label>
<input
type="text"
id="security_level"
name="security_level"
value={formData.security_level}
onChange={handleChange}
min="0"
/>
</div>
</div>

<div className="form-row">

<div className="form-group">
<label style={{ display: "block", marginBottom: "8px" }}>
    Headcount Status?
</label>
<div>
    <label>
    <input
        type="radio"
        name="headcount_status"
        value="Yes"
        checked={formData.headcount_status === "Yes"}
        onChange={handleChange}
    />
        Yes
    </label>
    <label style={{ marginLeft: "10px" }}>
    <input
        type="radio"
        name="headcount_status"
        value="No"
        checked={formData.headcount_status === "No"}
        onChange={handleChange}
    />
        No
    </label>
</div>
</div>
</div>

{/* tbc */}
<div className="form-row">

    <div className="form-group">
        <label htmlFor="positionTitle">Current Headcount in Position Number</label>
        <input
        type="number"
        id="positionTitle"
        name="positionTitle"
        value={formData.positionTitle}
        onChange={handleChange}
        placeholder="Enter Current Headcount in Position Number"
        />
    </div>
    <div className="form-group">
        <label htmlFor="jobCode">Supervisor's Position Title for the Requested Position</label>
        <input
            type="text"
            id="jobCode"
            name="jobCode"
            value={formData.jobCode}
            onChange={handleChange}
            placeholder="Enter Supervisor's Position Title for the Requested Position"
        />
    </div>
</div>

<div className="form-row">

    <div className="form-group">
        <label htmlFor="positionTitle">Supervisor's Position Number</label>
        <input
        type="number"
        id="positionTitle"
        name="positionTitle"
        value={formData.positionTitle}
        onChange={handleChange}
        placeholder="Enter Supervisor's Position Number"
        />
    </div>
    <div className="form-group">
        <label htmlFor="jobCode">Classification of Manager</label>
        <input
            type="text"
            id="jobCode"
            name="jobCode"
            value={formData.jobCode}
            onChange={handleChange}
            placeholder="Enter Classification of Manager"
        />
    </div>
</div>

<div className="form-row">

    <div className="form-group">
        <label htmlFor="positionTitle">Location ID</label>
        <input
        type="number"
        id="positionTitle"
        name="positionTitle"
        value={formData.positionTitle}
        onChange={handleChange}
        placeholder="Enter Location ID"
        />
    </div>
    <div className="form-group">
        <label htmlFor="jobCode">Geographic or Work Location</label>
        <input
            type="text"
            id="jobCode"
            name="jobCode"
            value={formData.jobCode}
            onChange={handleChange}
            placeholder="Enter Geographic or Work Location"
        />
    </div>
</div>

          </>
        );

      case 2:
        return <h2>Section 2 – Requested Change</h2>;

      case 3:
        return(
            <>
            <h2>Section 3 - Supporting Documents</h2>
            <p>Attach supporting documents <span className='star'>*</span></p>
            <p>Organizational chart: it is mandatory to attach a complete organizational chart (with position numbers, job titles, and existing job classification levels), see sample organizational chart for reference.</p>
            <p>Complete organizational chart is mandatory, with department number/s, position number/s and the classification levels. Insufficient information will delay the processing of the request.</p>
            <Testing6></Testing6>
            
        </>
        );

      case 4:
        return(
            <>
            <h2>Section 4 - HR Contact</h2>
            <p>Please provide contact information for your Human Resources (HR) Advisor or Strategic Business Unit (SBU) Advisor.</p>
        <div className="form-row">

            <div className='dropdown-container'>
                    <label htmlFor="dropdown" className="dropdown-label">Executive Development Committee  Approval for Organizational Structure</label>
                    <select
                        id="dropdown"
                        className="dropdown-select"
                        name="hr_contact"
                        value={formData.hr_contact}
                        onChange={handleChange}
                        >
                        <option value="">Select...</option>
                        <option value="hr_advisor">HR Advisor</option>
                        <option value="sbu_advisor">SBU Advisor</option>
                    
                    </select>
            </div>
        </div>

        <div className="form-row">
        <div className="form-group">
          <label>Last Name<span className='star'>*</span></label>
          <input
            type="text"
            name="hrLastName"
            value={formData.hrLastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            pattern="[a-zA-Z]*"
          />
        </div>
        <div className="form-group">
          <label>First Name<span className='star'>*</span></label>
          <input
            type="text"
            name="hrFirstName"
            value={formData.hrFirstName}
            onChange={handleChange}
            placeholder="First Name"
            pattern="[a-zA-Z]*"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Telephone Number<span className='star'>*</span></label>
          <input
            type="tel"
            name="hrTelephone"
            value={formData.hrTelephone}
            onChange={handleChange}
            placeholder="Telephone Number"
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address<span className='star'>*</span></label>
          <input
            type="email"
            name="hrEmail"
            value={formData.hrEmail}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
      </div>


          </>

        );

      case 5:
        return(
            <>
                <h2>Section 5 - Authorization</h2>
                <p>I authorize the classification request and confirm there is associated funding.</p>
                <h3>Manager</h3>
                <div className="form-row">
                    <div className="form-group">
                    <label>Last Name<span className='star'>*</span></label>
                    <input
                        type="text"
                        name="managerLastName"
                        value={formData.managerLastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                        pattern="[a-zA-Z]*"
                    />
                    </div>
                    <div className="form-group">
                    <label>First Name<span className='star'>*</span></label>
                    <input
                        type="text"
                        name="managerFirstName"
                        value={formData.managerFirstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        pattern="[a-zA-Z]*"
                        required
                    />
                    </div>
                </div>
                <div className="form-row">
                        <div className="form-group">
                        <label>Telephone Number<span className='star'>*</span></label>
                        <input
                            type="tel"
                            name="managerTelephone"
                            value={formData.managerTelephone}
                            onChange={handleChange}
                            placeholder="Telephone Number"
                            required
                        />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date Of Submission (MM/DD/YYYY)</label>
                            <input
                                type="date"
                                id="date"
                                name="effective_date"
                                value={formData.dateofsubmission}
                                onChange={handleChange}
                                required
                                min={new Date().toISOString().split('T')[0]} // Today's date as min
                                max={new Date().toISOString().split('T')[0]} // Today's date as max
                            />
                        </div>

                </div>

            </>

    );

      default:
        return(
            <>
                <h1>Section 2 – Requested Change</h1>
                <p>Please fill in only the fields that require changes; the other fields can be left blank.*</p>
                
            </>
        );
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#f3f3f3",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: "#4caf50",
            height: "10px",
            borderRadius: "5px",
          }}
        ></div>
      </div>
      <p>{`Step ${currentPage} of ${totalPages}`}</p>
      <form onSubmit={handleSubmit}>
        {renderPage()}
        <div className="parent-multi-button">
          {currentPage > 1 && (
            <button
              className="multi-button"
              type="button"
              onClick={() => {
                setCurrentPage(currentPage - 1);
                scrollToTop();
              }}
            >
              Previous
            </button>
          )}
          {currentPage < totalPages && (
            <button
              className="multi-button"
              type="button"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                scrollToTop();
              }}
            >
              Next
            </button>
          )}
          {currentPage === totalPages && (
            <button className="multi-button" type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PositionAdministration;
