import React from 'react';
import Contacts from './Components/Covid';
import Food from './Components/Food';
import DailyChecklist from './Components/DailyChecklist';
import Spreadsheets from './Components/Spreadsheets';
import TaxExempt from './Components/TaxExempt'
import Timestation from './Components/Timestation';
import Navigation from './Navbar/Navbar';
import Welcome from './Components/Welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {

  const h5Styles = {
    width: '30%',
    marginLeft: '35%',
    padding: '1%',
    backgroundColor: 'rgba(28, 67, 84, 0.5)',
    borderRadius:'10px',
    marginBottom: '2%',

  }
  return (
    <div className="App">
    
  <Router>
         <Navigation/>
         <Switch>
           <Route path='/dailychecklists' >
               <DailyChecklist />
           </Route>
           <Route path='/food'>
               <Food h5Styles={h5Styles}/>
           </Route>
           <Route path='/spreadsheets'>
             <Spreadsheets/> 
           </Route>
           <Route path='/contacts'>
             <Contacts/>
           </Route>
           <Route path='/taxexempt'>
             <TaxExempt/>
           </Route>
           <Route path='/timestation'>
            <Timestation/>
          </Route>
          <Route path='/'>
          <Welcome/>
          </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;

// <Router>
//         <Navigation/>
//         <Switch>
//           <Route path='/dailychecklists' >
//               <DailyChecklist/>
//           </Route>
//           <Route path='/food'>
//               <Food h5Styles={h5Styles}/>
//           </Route>
//           <Route path='/spreadsheets'>
//             <Spreadsheets/> 
//           </Route>
//           <Route path='/contacts'>
//             <Contacts/>
//           </Route>
//           <Route path='/taxexempt'>
//             <TaxExempt/>
//           </Route>
//           <Route path='/timestation'>
//             <Timestation/>
//           </Route>
//           <Route path='/'>
//             <Welcome/>
//           </Route>
//         </Switch>
//       </Router>