import React from 'react';
import taxExempt from '../assets/taxExempt.pdf';

const TaxExempt = () => {

   

    const h5Styles = {
        width: '60%',
        marginLeft: '20%',
        padding: '1%',
        backgroundColor: 'rgba(28, 67, 84, 0.5)',
        borderRadius:'10px',
        marginBottom: '2%',
  
    }
    return (
        <div>
            <h1>Hello Office Support Administrator!</h1>
            <h2>Welcome to Eleven Fifty Academy.</h2>
            <h5 style={h5Styles}>This is a little app that will help you in your time here. This job requires
            keeping track of an array of things, so we put them all in one place to make your life a little easier!
            If you have questions at any time feel free to call or text Corynne Moody at (317) 517-8298. Here at Eleven Fifty
            we have quite a few acronyms we use day to day, below you will find the most common you'll want to get comfortable with.
            <ul style={{textAlign: 'left'}}>
            <br></br>
                <li>EFA - Eleven Fifty Academy</li>
                <br></br>
                <li>SD - Our Software Development course. This includes languages like C#</li>
                <br></br>
                <li>WD - Our Web Development course. This includes languages like Javascript</li>
                <br></br>
                <li>CB - Our Cyber Security course. This includes the Sec+ and Net+ learning materials and exams.</li>
                <br></br>
            </ul>
            Now, this might sound a little intimidating, but no need to worry! The more time you spend here, 
            the easier it will get. The most important aspect of this job, however, is making sure the needs of the students
            are always being met, and exceeded. 
            
            </h5>
        </div>
    )
}

export default TaxExempt;