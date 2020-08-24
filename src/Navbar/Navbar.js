import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed='top'>
        <Link to='/'>
      <NavbarBrand href="/">
        Welcome
        </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink  href="/dailychecklists">
                  <Link to='/dailychecklists'>
                    Checklists
                  </Link>
                </NavLink>
                </NavItem>
                <Link to='/contact'>
                    <NavLink href="/contact">
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Timestation Info
              </DropdownToggle>
              <DropdownMenu right>
                <Link to='/timestation'>
                    <a href="#landing_page">
                    <DropdownItem href="/timestation">
                    Welcome to Timestation
                    </DropdownItem>
                    </a>
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
           </Nav>
        </Collapse>
      </Navbar>
        <br>
        </br>
    </div>
  );
}

export default Navigation;