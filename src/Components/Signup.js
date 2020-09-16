import React,  {useState} from 'react';
import {UncontrolledTooltip} from 'reactstrap'
import APIURL from '../helpers/environment';


  

const Signup = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    

    const formValidation = () => {
        if (email.includes('@elevenfifty.org') &&  password.length < 8) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }

    
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
            <button onClick={(e) => handleSubmit(e) } style={buttonStyles}>Submit</button>
         </div>
        </div>
    )

};

export default Signup;