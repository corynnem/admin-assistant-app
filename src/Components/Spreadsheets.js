import React from 'react';
import { Table } from 'reactstrap';


const Spreadsheets = () => {

    const h5Styles = {
        width: '50%',
        marginLeft: '25%',
        padding: '1%',
        backgroundColor: 'rgba(28, 67, 84, 0.5)',
        borderRadius:'10px',
        marginBottom: '2%',
  
    }

    const tableStyles = {
    width: '40%', 
    textAlign: 'left' ,
    }
    return (
        <div>
            <h1>Spreadsheets and Files</h1>
           <h5 style={h5Styles}>Here you will find all of the spreadsheets and filles you will need </h5>
            <Table >
                <thead style={tableStyles}>
                    <tr>
                    <th>Spreadsheet</th>
                    <th>Description</th>
                    <th>Extra Info</th>
                    </tr>
                </thead>
                <tbody style={tableStyles}>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1NFSc8cSNT9zTNf8wFUyLTPnaRN-Jm9zKWEFGPTM6BTE/edit?usp=sharing' target="_blank">Current Cohorts List</a></td>
                    <td>Every active cohort at any given time.</td>
                    <td>This is updated by Mary Dougherty, if you have questions regarding this spreadsheet, contact her.</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1pyN2wlLWwoeAUhjbXk8M2uIb00uXOKXoaNyJkwq15PI/edit?usp=sharing' target="_blank">Lunch Calendar</a></td>
                    <td>A calendar you can use to plan lunches.</td>
                    <td>This is completely up to the both of you, you can utilize it if you think it helps you personally,
                        but you are not required to keep it updated. I found it very helpful.
                    </td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/forms/d/e/1FAIpQLSd9qAnb7ZyzVVtI6HiKPqKfdLQdNCeM2xuC7wGDIUtWcHmEnA/viewform?usp=pp_url' target="_blank">Core Values Survey</a></td>
                    <td>Send to a class a week before their graduation.</td>
                    <td>This will be managed by you guys, if any changes need to be made feel free to do so.</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/forms/d/e/1FAIpQLSec_5qnIAHWDyq08qEO0XbqyyjoW1GKa2D-xtmrjf8emAbhcA/viewform?usp=pp_url' target="_blank">Forgot to clock in form</a></td>
                    <td>Makes it easier to fix errors timestation.</td>
                    <td>This will also be managed by you, when timestation starts being utilized again.</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1Zmi9BFiqkAxixxY8xYZ-HVe6PYi3Ux9vSsAGGmst0Lc/edit?usp=sharing' target="_blank">Student Hours</a></td>
                    <td>To input all student hours.</td>
                    <td>You will be in charge of all updates made to this spreadsheet. At EFA students must maintain a minimum of 
                        90% attendance to graduate so you keep track of that.
                    </td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1gnvtX5aIYcoSNCKBUUo0qKH_qErPROg5fpPAs7Ssugs/edit?usp=sharing' target="_blank">Budget for snacks/soda/lunch</a></td>
                    <td>How much you should be spending monthly on snacks/soda/lunches.</td>
                    <td>For now, purchases should not be an issue. During covid if students show up, order food via doordash/grubhub/ubereats, or straight 
                        from the restaurants near you. In fishers, if you feel comfortable feel free to just pickup the food, in indy you can but its more 
                        difficult due to parking.
                    </td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1A6TepP_UUQkKY1bhncVrGOKgDJkLSBNldnG7thU6NWQ/edit?usp=sharing' target="_blank">EFA Inventory Mastersheet</a></td>
                    <td>Inventory mastersheet for both locations.</td>
                    <td>You ladies are also in charge of keeping this spreadsheet up to date. There is no longer swag
                        at the fishers location so only downtown needs to worry about that section.
                    </td>
                    </tr>
                    <tr>
                    <td> <a href='https://drive.google.com/drive/folders/1RqjTALZ-KvZSC2T2zN1xGwP3MQZfpbrD?usp=sharing' target="_blank">All Badges</a></td>
                    <td>Every Badge for every class EFA offers.</td>
                    <td>Again, during covid, unless a student reaches out and needs a physical copy of their badges, you should not need to worry 
                        about this. If they do, just edit the Name and Date and print!
                    </td>
                    </tr>
                    <tr>
                    <td> <a href='https://forms.office.com/Pages/ResponsePage.aspx?id=PrSYHnE3Ik2ASIvHyWE_afneQihCwChNlr1G0hSUGvFUNzE3R1JTU0VCM0lOMlJQTUQ3QjhBTE9BSS4u' target="_blank">Liability Waiver</a></td>
                    <td>In person liability waiver for students.</td>
                    <td>
                        When a student responds to the in person request form, send them this liability waiver along with the below 
                        COPY & PASTE section. It is EXTREMELY important every student fill this out before utilizing our spaces
                    </td>
                    </tr>
                    <tr>
                    <td> <a href='https://forms.office.com/Pages/DesignPage.aspx#FormId=PrSYHnE3Ik2ASIvHyWE_aZ7Pis2BXoJDtIcz0lpE8uVUMVVLR05KN1JLTko0SE5QUkpZVTRBNURNOS4u&Token=c2e1387c48a5406389bcaa6491b09819' target="_blank">In person request form</a></td>
                    <td style={tableStyles}>Here you will find a copy of the 'In person request form', this needs to be periodically checked and it is your job to respond to the students.
                        Below, I have included a template for what this email to students who fill this form out, should look like. 

                        *COPY & PASTE
                    </td>
                    <td style={{width: '30%'}}>*YOU ARE RECEIVING THIS EMAIL BECAUSE YOU HAVE EXPRESSED INTEREST IN USING EFA'S CLASSROOMS AT EITHER THE LAUNCH FISHERS LOCATION OR THE INDIANAPOLIS LOCATION. IF YOU NO LONGER WISH TO USE THE SPACE PLEASE RESPOND AND LET US KNOW*


Hello Students,

Im emailing you because you have expressed interest in using our space during your class time hours. We are open at both locations from 9am-5pm, Monday-Friday. There will be someone at both locations to guide you to the classroom spaces upon arrival. 

If you plan on using the Launch location you must fill out this form DAILY in order to use the space. All doors in both spaces are locked so if you plan to go downtown slack message Ryan Tamanini, and for Fishers slack Corynne Moody or Eli Drumm. 

Masks are required in both spaces and before entering classrooms you will receive a mandatory *Health check* to ensure the safety of those around you. 

If you have any questions or concerns regarding using the spaces feel free to email cmoody@elevenfifty.org or helpdesk@elevenfifty.org. EFA is doing everything possible to ensure the safety and comfort of our students during this time, and to do this we encourage you to sanitize as often as possible, and maintain a 6 foot distance from those around you.

We look forward to seeing you!



*Health check will be completed everyday upon arrival. Health check will include: 
Taking students temperature (Must not exceed 100 degrees).
Symptom checks (Have you felt any symptoms on the health screen checklist in the past 48 hours?).
Sanitizing before you enter classrooms.
Masks will be provided to students who do not have one. 

FISHERS DAILY SURVEY LINK: https://pgi.formstack.com/forms/lfsafetyplan_1150</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Spreadsheets;