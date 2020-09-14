import React,  {useState} from 'react';
import {UncontrolledTooltip, Tooltip} from 'reactstrap'
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import APIURL from '../helpers/environment';

const PurpleSwitch = withStyles({
    switchBase: {
      color: red[900],
      '&$checked': {
        color: red[500],
      },
      '&$checked + $track': {
        backgroundColor: red[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  
  

const Signup = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    const [admin, setAdmin] = useState(false);
    const [checked, setChecked] = useState(false)
    const [notChecked, setNotChecked] = useState(true)

    const formValidation = () => {
        if (email.includes('@elevenfifty.org') &&  password.length < 8) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }

    // const authenticatedViews = (e) => {
    //     if(email.includes('@elevenfifty.org')){
    //     setIsFormValid(true)
    //     } 
    // }
    
    const handleSubmit = (e) => {
        console.log('handling submit')

        const url = `${APIURL}/user/signup`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(
                {
                    user: {
                        email: email.includes('@elevenfifty.org') ? email : 
                        alert('If @elevenfifty.org is in your email, you already have an account!') && null, 
                        password: password,
                        admin: admin,
                    }
                }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        )
            .then((data => {
                props.protectedViews(data.sessionToken)
                alert('Account Created Successfully')
            }))
            // .then()
            .catch(err => console.log(err))
    };

   
   
    const adminViews = (checked) => {
       
    }

    const loginStyles = {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: '30%',
        padding:'1%',
        color: 'white',
        textAlign: 'center',
        width:'20%',
        marginLeft: '39%',
        borderRadius: '10px'
    }

    const buttonStyles = {
        textDecoration: 'none',
        borderStyle: 'solid',
        borderRadius: '50px',
        borderWidth: '.5px',
        borderColor:'rgba(0, 0, 0, 0.8)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white'
    }
    
    

    return (
        <div>
           
            <h1>Signup</h1>

            <h5 style={props.h5Styles}>If at any point an EFA employee needs to use this app, or when you pass the position off, you can sign them up. 
                This feature will only work with an EFA email, and an 8 character password, due to the sensitive information
                we deal with. 
            </h5>
    <div style={loginStyles}>
            <h5>Email</h5>
            <input 
            //  onClick={(e) => authenticatedViews(e)}
            style={{borderRadius: '10px', border: 'none', width: '10vw'}}
            id="toolTip"
            onChange={(e) => {
                setEmail(e.target.value);
                formValidation();
            }}/>
            <UncontrolledTooltip target="toolTip" >
                        Email must contain:
                        <br/>
                        @elevenfifty.org
                    </UncontrolledTooltip>
            <h5>Password</h5>
            <input 
            //  onClick={(e) => authenticatedViews(e)}
            style={{borderRadius: '10px', border: 'none', width: '10vw'}}
            id='password'
            onChange={(e) => {
                setPassword(e.target.value);
                formValidation();
            }}/>
             <UncontrolledTooltip target="password">
                        Passwords must contain:
                        <br/>
                        8 characters
                    </UncontrolledTooltip>
                    <br></br>
                    <br></br>
                    <h5>Admin?</h5>
                {/* <div>
                    <PurpleSwitch id='switch' onChange={(e) => adminViews(checked)}/>
                </div>
                    <UncontrolledTooltip target="switch" >
                       *ONLY CHECK THIS BOX IF MAKING
                        ACCOUNT FOR ADMINISTRATIVE ASSISTANT*
                    </UncontrolledTooltip>
 */}

           <br></br>
            <button onClick={(e) => handleSubmit(e) } style={buttonStyles}>Submit</button>
         </div>
        </div>
    )

};

export default Signup;