import React, { useState } from 'react';
import "./Styling/Option1Styling.css";


const Option1 = () => {
  
  // State variables for form data
  const [ministry, setMinistry] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [hrContact, setHrContact] = useState('');
  const [hrLastName, setHrLastName] = useState('');
  const [hrFirstName, setHrFirstName] = useState('');
  const [hrTelephone, setHrTelephone] = useState('');
  const [hrEmail, setHrEmail] = useState('');
  const [questions, setQuestions] = useState('');
  
  const maxChars = 500;
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'ministry':
        setMinistry(value);
        break;
      case 'lastName':
        if (/^[a-zA-Z]*$/.test(value)) {
            setLastName(value);
          }
        break;
      case 'firstName':
        if (/^[a-zA-Z]*$/.test(value)){
            setFirstName(value);
        }
        
        break;
      case 'telephone':
        setTelephone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'hrContact':
        setHrContact(value);
        break;
      case 'hrLastName':
        if (/^[a-zA-Z]*$/.test(value)){
            setHrLastName(value);
        }
        break;
      case 'hrFirstName':
        if (/^[a-zA-Z]*$/.test(value)){
        setHrFirstName(value);
        }
        break;
      case 'hrTelephone':
        setHrTelephone(value);
        break;
      case 'hrEmail':
        setHrEmail(value);
        break;
      case 'questions':
        setQuestions(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data or handle submission
    console.log({
      ministry,
      lastName,
      firstName,
      telephone,
      email,
      hrContact,
      hrLastName,
      hrFirstName,
      hrTelephone,
      hrEmail,
      questions,
    });

    // Optionally reset the form after submission
    // resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Dropdown Table */}
      <div className='dropdown-container'>
        <label htmlFor="dropdown" className="dropdown-label">Ministry<span className='star'>*</span></label>
        <select
          id="dropdown"
          className="dropdown-select"
          name="ministry"
          value={ministry}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="ministryB">Ministry A</option>
          <option value="ministryB">Ministry B</option>
          <option value="ministryC">Ministry C</option>
          <option value="moreOptions">More Options</option>
        </select>
      </div>

      {/* First Row */}
      <div className="form-row">
        <div className="form-group">
          <label>Last Name<span className='star'>*</span></label>
          <input
            type="text"
            name="lastName"
            value={lastName}
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
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            pattern="[a-zA-Z]*"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="form-row">
        <div className="form-group">
          <label>Telephone Number<span className='star'>*</span></label>
          <input
            type="tel"
            name="telephone"
            value={telephone}
            onChange={handleChange}
            placeholder="Telephone Number"
            pattern="[\d\s\-\+\(\)]{7,15}"
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address<span className='star'>*</span></label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
      </div>

      {/* Contact Advisor Section */}
      <p>
        A JE Specialist may engage your Human Resources (HR) Advisor or Strategic Business Unit (SBU) Advisor in the classification process. Please provide their contact information.
      </p>

      {/* Contact Advisor Fields */}
      <div className="form-group">
        <label>HR Contact<span className='star'>*</span></label>
        <select
          name="hrContact"
          value={hrContact}
          onChange={handleChange}
          required
        >
          <option value="">Select Contact...</option>
          <option value="hr1">HR Contact 1</option>
          <option value="hr2">HR Contact 2</option>
        </select>
      </div>

      {/* HR Contact Fields */}
      <div className="form-row">
        <div className="form-group">
          <label>Last Name<span className='star'>*</span></label>
          <input
            type="text"
            name="hrLastName"
            value={hrLastName}
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
            value={hrFirstName}
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
            value={hrTelephone}
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
            value={hrEmail}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
      </div>

      {/* Question Section */}
      <p>
        Please outline below what questions and/or issues you have. This will help the JE specialist to prepare for your consultation. Please note, a classification request may be required following the consultation.
      </p>
      <div className="form-group">
        <textarea
          name="questions"
          value={questions}
          onChange={handleChange}
          placeholder="Enter your questions or issues here..."
          rows="4"
          maxLength={maxChars}
        ></textarea>
            <div className={`character-count ${questions.length > maxChars ? "over-limit" : ""}`}>
                {questions.length}/{maxChars} characters
            </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  )
}

export default Option1
