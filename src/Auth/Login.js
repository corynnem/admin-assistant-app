import React, { useState } from 'react';
import EFA from '../assets/EFA.png'
import { Tooltip } from 'reactstrap';
import APIURL from '../helpers/environment';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const handleSubmit = (e) => {
        const url = `${APIURL}/user/login`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: email,
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
                console.log(data)
                if (data.sessionToken !== undefined){
                props.protectedViews(data.sessionToken)}
                else {
                    alert('Invalid Email or Password')
                }
             
            }))
            .catch(err => console.log(err))
    }

  const toggle = () => setTooltipOpen(!tooltipOpen);
 
    const authenticatedViews = (e) => {
        if(email.includes('@elevenfifty.org'))
        setIsFormValid(true)
    }

    const authStyles = {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: '35vh',
        padding:'1%',
    }
        

    const loginStyles = {
        marginTop: '-8%',
        color: 'white',
        textAlign: 'center',
        padding: '10%',
        width:'46.8%',
        marginLeft: '26%',
    }

    

    return (
        <div style={loginStyles} >
            <img src={EFA} style={{height:'50vh', width: '26.75vw'}} alt="Eleven fifty academy logo"/> 
            <div style={authStyles}>
            <h1>Login</h1>
            <h5>Email</h5>
            <input 
            id='email'
            style={{borderStyle: 'solid', borderWidth: '0.5px', borderRadius: '10px', width: '90%'}}
            onChange={(e) => {
                setEmail(e.target.value);
                authenticatedViews(e)
            }}
         
           />
           
        { isFormValid ? 
             <Tooltip placement="right" isOpen={tooltipOpen} target="#email" toggle={toggle}>
                    Must be an Eleven Fifty employee to Login.
                </Tooltip>
                :
                <Tooltip placement="right" isOpen={tooltipOpen} target="#email" toggle={toggle}>
                    You are not an Eleven Fifty Employee
                </Tooltip>
}
            <h5>Password</h5>
            <input
            type="password"
            style={{borderStyle: 'solid', borderWidth: '0.5px', borderRadius: '10px', width: '90%'}} 
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            />
           
                    <br></br>
                    <br></br>
                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    <br></br>
                    <br></br>
            </div>
        </div>
    )
}


export default Login;