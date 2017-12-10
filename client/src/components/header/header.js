import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
//import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //user: props.SuperUser.user
    }
  }

  render() {
    return (<div>
      <Navbar fluid  collapseOnSelect  >
        <Navbar.Header className="pull-left nopadding">

        </Navbar.Header>

        <Navbar.Collapse className="pull-left">
          <Navbar.Text>
              Welcome! {"  " + this.state.user}
          </Navbar.Text>
        </Navbar.Collapse>
        <Nav className="pull-right" bsStyle="pills" >

          <NavDropdown eventKey={3} title="My Work" id="basic-nav-dropdown">

              <MenuItem eventKey={3.2}>Pokemon Api</MenuItem>
              <MenuItem eventKey={3.3}>Future</MenuItem>
          </NavDropdown>
        </Nav>
    </Navbar>
      </div>);
  }
}

export default Header;
