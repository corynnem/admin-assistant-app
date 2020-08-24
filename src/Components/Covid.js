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

  

const Covid = () => {

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
    float: 'left',
    textAlign: 'left',
     marginLeft: '30%',
   }


    const gridStyles = {
        float: 'left',
        width: '50%',

      
    }
    const tableStyles = {
        content: "",
        clear: 'both',
        width: '100%',
        float: 'left'
    }

    return (
        <div>
            <h1>Covid Checklist</h1>
            <FormGroup column style={gridStyles}>
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
        </div>
    )
}

export default Covid;