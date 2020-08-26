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


    return (
        <div>
            <h1>Spreadsheets and Files</h1>
           <h5 style={h5Styles}>Here you will find all of the spreadsheets and filles you will need </h5>
            <Table>
                <thead>
                    <tr>
                    <th>Spreadsheet</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1NFSc8cSNT9zTNf8wFUyLTPnaRN-Jm9zKWEFGPTM6BTE/edit?usp=sharing' target="_blank">Current Cohorts List</a></td>
                    <td>Every active cohort at any given time.</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1pyN2wlLWwoeAUhjbXk8M2uIb00uXOKXoaNyJkwq15PI/edit?usp=sharing' target="_blank">Lunch Calendar</a></td>
                    <td>A calendar you can use to plan lunches.</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/forms/d/e/1FAIpQLSd9qAnb7ZyzVVtI6HiKPqKfdLQdNCeM2xuC7wGDIUtWcHmEnA/viewform?usp=pp_url' target="_blank">Core Values Survey</a></td>
                    <td>Send to a class a week before their graduation.</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/forms/d/e/1FAIpQLSec_5qnIAHWDyq08qEO0XbqyyjoW1GKa2D-xtmrjf8emAbhcA/viewform?usp=pp_url' target="_blank">Forgot to clock in form</a></td>
                    <td>Makes it easier to fix errors timestation.</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1Zmi9BFiqkAxixxY8xYZ-HVe6PYi3Ux9vSsAGGmst0Lc/edit?usp=sharing' target="_blank">Student Hours</a></td>
                    <td>To input all student hours.</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1gnvtX5aIYcoSNCKBUUo0qKH_qErPROg5fpPAs7Ssugs/edit?usp=sharing' target="_blank">Budget for snacks/soda/lunch</a></td>
                    <td>How much you should be spending monthly on snacks/soda/lunches</td>
                    </tr>
                    <tr>
                    <td> <a href='https://docs.google.com/spreadsheets/d/1A6TepP_UUQkKY1bhncVrGOKgDJkLSBNldnG7thU6NWQ/edit?usp=sharing' target="_blank">EFA Inventory Mastersheet</a></td>
                    <td>Inventory mastersheet for both locations</td>
                    </tr>
                    <tr>
                    <td> <a href='https://drive.google.com/drive/folders/1RqjTALZ-KvZSC2T2zN1xGwP3MQZfpbrD?usp=sharing' target="_blank">All Badges</a></td>
                    <td>Every Badge for every class EFA offers</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Spreadsheets;