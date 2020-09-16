import React, { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import EFA from '../assets/EFA.png'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed='top' >
        <Link to='/'>
      <NavbarBrand href="/">
        <img src={EFA} style={{height:'6vh', marginLeft: '-60%', marginTop: '-20%', marginRight: '-20%', marginBottom: '-20%' }} alt="Eleven fifty Academy logo"/>
        </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink  href="/dailychecklists">
                  <Link to='/dailychecklists' >
                    Checklists
                  </Link>
                </NavLink>
                </NavItem>
                <Link to='/covidchecklist'>
                    <NavLink href="/covidchecklist">
                       Covid Checklist
                    </NavLink>
                </Link>
            <NavItem>
            <NavLink href="/food">
                <Link to='/food'>
                    Catering Options
                </Link>
                </NavLink>
              
            </NavItem>
            <Link to='/taxexempt'>
                    <NavLink href="/taxexempt">
                    Tax Exempt Form
                    </NavLink>
                </Link>
                <Link to='/spreadsheets'>
                    <NavLink href="/spreadsheets">
                       Spreadsheets and Files
                    </NavLink>
                </Link>
            <UncontrolledDropdown nav inNavbar style={{marginRight: '25vw'}}>
              <DropdownToggle nav caret>
                Timestation Info
              </DropdownToggle>
              <DropdownMenu right>
                <Link to='/timestation'>
                   
                    <DropdownItem href="/timestation">
                    Welcome to Timestation
                    </DropdownItem>
                 
                    <DropdownItem href='#adding_students'>
                        Adding Students
                    </DropdownItem>
                    <a href='#adding_cohorts'>
                    <DropdownItem >
                        Adding Cohorts
                    </DropdownItem>
                    </a>
                    <a href='#edit_students'>
                    <DropdownItem >
                        Edit Students
                    </DropdownItem>
                    </a>
                    <a href='#edit_cohorts'>
                    <DropdownItem >
                       Edit Cohorts
                    </DropdownItem>
                    </a>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink onClick={props.clearToken} >
              Logout
            </NavLink>
          <Link to='/signup'>
            <NavLink href='/signup'>
                <SettingsIcon/>
            </NavLink>
            </Link>
           </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;