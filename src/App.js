import React, {useState, useEffect} from 'react';
import Covid from './Components/Covid';
import Food from './Components/Food';
import DailyChecklist from './Components/DailyChecklist';
import Spreadsheets from './Components/Spreadsheets';
import TaxExempt from './Components/TaxExempt'
import Timestation from './Components/Timestation';
import Navigation from './Navbar/Navbar';
import Welcome from './Components/Welcome'
import Login from './Auth/Login'
import Signup from './Components/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [token, setToken] = useState('')
  

  const protectedViews = (sessionToken)=> {
    setToken(sessionToken)
    localStorage.setItem("token",sessionToken)
    setIsAuthenticated(true)
    console.log(token)
  }
  console.log(token)

  // LOG OUT = cleartoken
  const clearToken = () => {
    localStorage.clear();
    setToken('')
    setIsAuthenticated(false)
  }

  const h5Styles = {
    width: '50%',
    marginLeft: '23%',
    padding: '1%',
    backgroundColor: 'rgba(28, 67, 84, 0.5)',
    borderRadius:'10px',
    marginBottom: '2%',

  }

  useEffect(() => {
    if (localStorage.getItem('token')){
      let temp = localStorage.getItem('token')
      if (temp) {setToken(temp); setIsAuthenticated(true)}
        else {setToken('')}
       
      }
  }, [])


  if(isAuthenticated){

 
  return (
    <div className="App">
        <Router>
            <Navigation token={token} clearToken={clearToken}/>
            <Switch>
              <Route path='/dailychecklists' >
                  <DailyChecklist h5Styles={h5Styles} token={token} />
              </Route>
              <Route path='/food' >
                  <Food h5Styles={h5Styles} token={token}/>
              </Route>
              <Route path='/spreadsheets'>
                <Spreadsheets token={token}/> 
              </Route>
              <Route path='/timestation'>
                <Timestation/>
              </Route>
              <Route path='/covidchecklist'>
                <Covid h5Styles={h5Styles} token={token}/>
              </Route>
              <Route path='/taxexempt'>
                <TaxExempt token={token}/>
              </Route>
              <Route path='/timestation'>
                <Timestation token={token}/>
              </Route >
              <Route path='/signup'>
                <Signup token={token} h5Styles={h5Styles} protectedViews={protectedViews}/>
              </Route>
              <Route path='/'>
              <Welcome token={token}/>
              </Route>
            </Switch>
          </Router>

     
          
          </div>
  );
  } else {
    return <Login protectedViews={protectedViews}/>
  }
}

export default App;

