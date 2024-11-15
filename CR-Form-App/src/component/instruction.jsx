import React from 'react'
import MinistryPartner from './Buttons/MinistryPartner'
import EvaluationSpecialistAccess from './Buttons/EvaluationSpecialistAccess'
import Head from './Head'

const instruction = () => {
  return (
    <div>
        {/* header  */}
        <Head />

        {/* the two container things */}

        <div className='content-instructions-parent'>
            <div className='content-instructions-child'>
                If you would like to have an initial consultation with your Job Evaluation (JE) Specialist before submitting this form, select one of the Consultation Services from the ‘Select a Service’ drop-down menu below. Click on the ‘submit’ button and your JE Specialist will contact you within 3 business days. If you have further questions in filling out the form, please refer to the User Guide. After submission, you will receive a confirmation
            </div>
            <div className='content-instructions-child'>
                If you would like to submit a classification request, select the ‘Submit a Classification Request’ option from the ‘Select a service’ drop-down menu below. Complete the mandatory fields wherever applicable and attach the required documents. Once completed, click on the ‘submit’ button and your JE Specialist will contact you within 3 business days to discuss your request. After submission, you will receive a confirmation email with a tracking number.
            </div>
        </div>
        {/* parents of the buttons */}
        <div className='button-instructions-parent'>
            {/* put Ministry Partner Component below */}
            <MinistryPartner />
            {/* put Job Evaluation Specialist Access component below */}
            <EvaluationSpecialistAccess />
            
        </div>
    </div>
  )
}

export default instruction
