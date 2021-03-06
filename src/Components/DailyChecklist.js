import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
  root: {
    color: red[0],
    '&$checked': {
      color: red[700],
    },
  },
  checked: {},
})((props) => <Checkbox color="default"/>);

 const DailyChecklist = (props) => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: false,
    checkedM: false,
    checkedN: false,
    checkedO: false,
    checkedP: false,
    checkedQ: false,
    checkedR: false,
    checkedS: false,
    checkedT: false,
    checkedU: false,
    checkedV: false,
    checkedW: false,
    checkedX: false,
    checkedY: false,
    checkedZ: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

   const checkboxStyles = {
    //  marginRight: '50%',
    width: '60%',
    float: 'left',
    textAlign: 'left',
     marginLeft: '30%',
   }


    const gridStyles = {
        float: 'left',
        width: '50%',

      
    }
    const tableStyles = {
        // content: "",
        clear: 'both',
        width: '100%',
        float: 'left'
    }

    const h5Styles = {
        width: '25%',
        marginLeft: '37%',
        padding: '1%',
        backgroundColor: 'rgba(28, 67, 84, 0.5)',
        borderRadius:'10px',
        marginBottom: '2%',
  
    }

  return (
      <div style={tableStyles}>
        <h1>Checklists</h1>
        <h5 style={h5Styles}>Here you will find your Daily and Weekly duties.</h5>
     <br>
     </br>

     {/* DAILY */}
        <FormGroup column="true" style={gridStyles}>
            <h3>Daily</h3>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedA} onChange={handleChange} name="checkedG" />}
                label="Unlock student area and turn on lights"
            />
            </div>
            <div style={checkboxStyles}> 
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedB} onChange={handleChange} name="checkedG" />}
                label="Start coffee at each coffee station"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedC} onChange={handleChange} name="checkedG"/>}
                label="Refill all snack centers"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedD} onChange={handleChange} name="checkedG" />}
                label="Make sure bistro is clear of trash and looks presentable for students"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedE} onChange={handleChange} name="checkedG" />}
                label="Always be available for students"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedF} onChange={handleChange} name="checkedG" />}
                label="Be aware of staff and students reaching out on slack"
            />
            </div>
            <div style={checkboxStyles}> 
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedG} onChange={handleChange} name="checkedG" />}
                label="Greet all guests of EFA"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedH} onChange={handleChange} name="checkedG"/>}
                label="Fix any errors on TimeStation"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedI} onChange={handleChange} name="checkedG" />}
                label="Prepare setup for lunch"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedJ} onChange={handleChange} name="checkedG" />}
                label="Help catering company with all setup"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedK} onChange={handleChange} name="checkedG" />}
                label="Slack students and staff about lunch"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedL} onChange={handleChange} name="checkedG" />}
                label="Clean the bistro after lunch"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedM} onChange={handleChange} name="checkedG" />}
                label="Check for mail"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedN} onChange={handleChange} name="checkedG" />}
                label="Finish any extra tasks for the day"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedO} onChange={handleChange} name="checkedG" />}
                label="Turn off coffee machine and clean all pots at the end of your workday"
            />
            </div>
            </FormGroup>
{/* WEEKLY */}
            <FormGroup column="true" style={gridStyles}>
            <h3>Weekly</h3>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedP} onChange={handleChange} name="checkedG" />}
                label="Stock all soda machines"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedQ} onChange={handleChange} name="checkedG" />}
                label="Input student hours into google drive"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedR} onChange={handleChange} name="checkedG" />}
                label="Check office supply inventory"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedS} onChange={handleChange} name="checkedG" />}
                label="Check food and beverage inventory"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedT} onChange={handleChange} name="checkedG" />}
                label="Clean up Timestation"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedU} onChange={handleChange} name="checkedG" />}
                label="Restock all coffee cart stations"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedV} onChange={handleChange} name="checkedG" />}
                label="Perform general office tasks and errands"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedW} onChange={handleChange} name="checkedG" />}
                label="Update spreadsheets"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedX} onChange={handleChange} name="checkedG" />}
                label="Coordinating events as necessary"
            />
            </div>
            
        </FormGroup>
        
</div>
  );
}

export default DailyChecklist