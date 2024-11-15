import React from 'react';
import "./Styling/InstructionStyling.css";
const Testing = () => {
  return (
    <div className="request-form">
      {/* Header */}
      <h1 className="request-form-header">
        Treasury Board Secretariat - Classification Services Request Form
      </h1>

      {/* Content section */}
      <div className="request-form-content">
        <div className="request-form-text">
          If you would like to have an initial consultation with your Job Evaluation (JE) Specialist before submitting this form, select one of the Consultation Services from the ‘Select a Service’ drop-down menu below. Click on the ‘submit’ button and your JE Specialist will contact you within 3 business days. If you have further questions in filling out the form, please refer to the User Guide. After submission, you will receive a confirmation email with a tracking number.
        </div>
        <div className="request-form-text">
          If you would like to submit a classification request, select the ‘Submit a Classification Request’ option from the ‘Select a service’ drop-down menu below. Complete the mandatory fields wherever applicable and attach the required documents. Once completed, click on the ‘submit’ button and your JE Specialist will contact you within 3 business days to discuss your request. After submission, you will receive a confirmation email with a tracking number.
        </div>
      </div>

      {/* Button section */}
      <div className="request-form-buttons">
        <button className="request-form-button">Ministry Partners</button>
        <button className="request-form-button">Job Evaluation Specialist Access</button>
      </div>
    </div>
  );
};

export default Testing;
