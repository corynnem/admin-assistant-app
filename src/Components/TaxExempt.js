import React from 'react';
import taxExempt from '../assets/taxExempt.pdf';

const TaxExempt = () => {

    const taxStyles = {
        width:' 60vw',
        height: '65vh'

    }

    const h5Styles = {
        width: '50%',
        marginLeft: '25%',
        padding: '1%',
        backgroundColor: 'rgba(28, 67, 84, 0.5)',
        borderRadius:'10px',
        marginBottom: '2%',
  
    }
    return (
        <div>
        <h1>Tax Exempt Form</h1>
            <div style={h5Styles}>
                <h5>EFA is a non profit organization so our lunches provided to the students is tax exempt.
                    When students return in person you will need to print one form per day to give to the catering deliverers.
                </h5>
            </div>
            <a href={taxExempt}>
                <embed
                src={taxExempt}
                type="application/pdf"
                style={taxStyles}
                >
                </embed>
            </a>
        </div>
    )
}

export default TaxExempt;