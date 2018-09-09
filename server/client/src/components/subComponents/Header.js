import React from 'react';
import {Nav,
        Navbar,
        NavItem,
        MenuItem,
        NavDropdown,
        }  from 'react-bootstrap';
import './Header.css';
import { connect } from 'react-redux;'

class Header extends React.Component {
    render(){
      console.log(this.props);
         return(
            <div>
                <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">React Project</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Login with Google
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        )
    }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect()(Header);