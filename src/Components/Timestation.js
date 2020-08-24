import React from 'react';
import Logo from '../assets/timestation.jpg';
import Landing from '../assets/landingpage.png';
import NewStudent from '../assets/newstudent.png';
import NewDepartment from '../assets/newdepartment.png';
import EmployeeView from '../assets/employeeview.png';
import EditDepartment from '../assets/editdepartments.png';
import EditEmployee from '../assets/editemployee.png';
import EditLogo from '../assets/editlogo.png';


const Timestation = () => {



    const h5Styles = {
        width: '30%',
        marginLeft: '35%',
        padding: '1%',
        backgroundColor: 'rgba(28, 67, 84, 0.5)',
        borderRadius:'10px',
        marginBottom: '2%',
    }


    const flexStyles = {
        display: 'block',
        float: 'left',
        height: '90vh',
        width: '30vw',
        borderRadius: '1%',
        boxShadow: '.1px .1px .1px grey',
        borderWidth: '.1px',
        backgroundColor: 'rgba(28, 67, 84, 0.5)',
        padding: '1%',
        borderRadius:'10px',
        height: '30%',
        marginLeft: '10%',
        marginTop: '10%',
    }

    const flexStyles1 = {
        display: 'block',
        float: 'left',
        height: '90vh',
        width: '30vw',
        borderRadius: '1%',
        boxShadow: '.1px .1px .1px grey',
        borderWidth: '.1px',
        backgroundColor: 'rgba(28, 67, 84, 0.5)',
        padding: '1%',
        borderRadius:'10px',
        height: '30%',
        marginLeft: '10%',
        marginTop: '6.5%',
    }



    return (
        <div 
        style={{ marginTop: '10%'}}>
            <div id='landing_page' >
            <img src={Logo} style={{width: '20%'}}/>
            <h5 style={h5Styles}>Timestation is the system EFA uses for keeping track of student hours. You will receive
                login info, but you will not be using this system until we open back up to full capacity.
                This page will basically be a tutorial for adding students, classes, and editing hours.
            </h5>
            </div>
           
          
            <div style={{borderStyle: 'solid', borderWidth: '1px', marginTop: '20%'}}/>
            <br>
            </br>
        {/* ADDING STUDENTS */}
        <div id='adding_students'>
            <br></br>
            <br></br>
            <br></br>
            <h1>Adding students</h1>
            <h5 style={h5Styles}>When adding students you will first click on "Create New Employee"</h5>
            <img src={Landing} style={{width: '50%', marginBottom: '5%'}}/>
            
                <div>
                    <h5 style={flexStyles}>After this you will start inputing the students information. Syntax goes as follows: 
                    <br></br>
                    <br></br>
                        <ul style={{textAlign: 'left', marginBottom: '5%'}}>
                            <li> Name : Last, First</li>
                            <li> Department: Choose from dropdown list of classes</li>
                            <li> Employee ID: First 4 letters of their last name - 4 numbers (as long as the ID isnt the same as another student, the numbers don't matter)</li>
                            <li> Title: Will ALWAYS be 'student'</li>
                            <li style={{fontWeight: 'bold'}}> You will not need to fill out any other fields at any time, unless specified.</li>
                        </ul>
                    </h5>
                    <img src={NewStudent} style={{width: '50%', marginRight: '10%', marginBottom: '5%'}}/>
                </div>
                </div>


    {/* Adding Cohorts */}
    <div id='adding_cohorts'> 
                <div style={{borderStyle: 'solid', borderWidth: '1px'}}/>
                    <br>
                    </br>
                    <br></br>
                    <br></br>
                    <h1>Adding Cohorts</h1>
                    <h5 style={h5Styles}>When adding students you will first click on "Create New Department"</h5>
                    <img src={Landing} style={{width: '50%', marginBottom: '5%'}}/>
                <div>
                    <h5 style={flexStyles1}>After this you will start inputing the Department information. Syntax goes as follows: 
                    <br></br>
                    <br></br>
                        <ul style={{textAlign: 'left'}}>
                            <li> Department Name : WD, SD, CB, UX/UI (FT or PT) start date - location</li>
                            <li style={{fontWeight: 'bold'}}> *WD - Web Development</li>
                            <li style={{fontWeight: 'bold'}}> *SD - Software Development</li>
                            <li style={{fontWeight: 'bold'}}> *CB - Cyber Security</li>
                            <li style={{fontWeight: 'bold'}}> *UX/UI - User Interface Design</li>
                            <li style={{fontWeight: 'bold'}}> *PT - Part Time</li>
                            <li style={{fontWeight: 'bold'}}> *FT - Full Time</li>
                        </ul>
                    </h5>
                    <img src={NewDepartment} style={{width: '50%', marginRight: '10%', marginBottom: '15%'}}/>
                </div>
     </div>
{/* EDIT STUDENTS */}
     <div id='edit_students'>
                <div style={{borderStyle: 'solid', borderWidth: '1px'}}/>
                <br></br>
                <br></br>
                <br></br>
                <h1>Editing Students and Departments</h1>
                <br></br>
                <h5 style={h5Styles}> To edit a student you must first navigate to the 'Employee' section and 
                click on a name.</h5>
                <img src={EmployeeView} style={{width: '40%', marginBottom: '10%'}} />
                <br></br>
                <br></br>

                <div>
                    <h5 style={flexStyles1}>After this, you can press 'Edit Employee' and change whichever fields necessary.</h5>
                    <img src={EditEmployee} style={{width: '40%', marginRight: '10%', marginBottom: '10%'}}/>
                </div>
    </div>
                <br></br>
                <br></br>
{/* EDIT COHORTS */}
    <div id='edit_cohorts'>
    <br></br>
    <br></br>
    <br></br>
    <h1>Edit Cohorts</h1>
                <h5 style={h5Styles}> To edit a Department you must first navigate to the 'Department' section and 
                click on a name.</h5>
                <img src={EditDepartment} style={{width: '40%', marginBottom: '5%'}} />
                <div>
                    <h5 style={h5Styles}>After this, you can press this Icon and change whichever fields necessary.</h5>
                    <img src={EditLogo} style={{width: '5%',  marginTop: '2%',}}/>
                </div>
        </div>
    </div>
    )
}

export default Timestation;

