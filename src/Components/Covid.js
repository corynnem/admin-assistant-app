import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
    root: {
      color: red[0],
      '&$checked': {
        color: red[700],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  

const Covid = (props) => {

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
    width: '60%',
    textAlign: 'left',

   }


    const gridStyles = {
        width: '80%',
        marginLeft: '30%'
      
    }

    return (
        <div>
            <h1>Covid Checklist</h1>
            <h5 style={props.h5Styles}>This checklist will be relevant daily until the pandemic is over.</h5>
            <h3>Daily</h3>
            
            <FormGroup column style={gridStyles}>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedA} onChange={handleChange} name="checkedG" />}
                label="Wipe down your desk, and any desk a student used from the day before"
            />
            </div>
            <div style={checkboxStyles}> 
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedB} onChange={handleChange} name="checkedG" />}
                label="Make sure there are easily accessible masks, and gloves near food and beverages."
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedC} onChange={handleChange} name="checkedG"/>}
                label="Complete health checks for all onsite employees, students, and any visitors"
            />
            <div style={{marginLeft: '10%', width: '100%'}}>
            <h5 style={{marginRight: '50%'}}>Health Check</h5>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedD} onChange={handleChange} name="checkedG" />}
                label="Temp must be below 100 degrees"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedD} onChange={handleChange} name="checkedG" />}
                label="Ask if they have had any symptops on the EFA Covid check"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedD} onChange={handleChange} name="checkedG" />}
                label="If they do not have a mask, provide them with one"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedD} onChange={handleChange} name="checkedG" />}
                label="All students, staff and visitors must sanitize before entering"
            />
            </div>
            </div>
             <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={setState.checkedE} onChange={handleChange} name="checkedG" />}
                label="Periodically wipe down door handles and common areas"
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedF} onChange={handleChange} name="checkedG" />}
                label="At the end of the day wipe down all door handles, desks, and common areas."
            />
            </div>
            <div style={checkboxStyles}>
            <FormControlLabel
                control={<GreenCheckbox onClick={state.checkedF} onChange={handleChange} name="checkedG" />}
                label={<h6 style={{fontWeight: 'bold'}}>Weekly, check stock of wipes, gloves, and hand sanitizer. Message Robin Holler
                    if anything needs ordered. 
                </h6>}
            />
            </div>
            </div>
            </FormGroup>
        </div>
    )
}

export default Covid;