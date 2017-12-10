import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, Image,Row, Col } from 'react-bootstrap';
import Logo from '../img/logo.PNG';
//import { LinkContainer } from 'react-router-bootstrap';
//import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //user: props.SuperUser.user
    }
  }
//   <div style={{ width: 660, height: 'auto' }}>
//   <ResponsiveEmbed a16by9>
//     <embed type="image/svg+xml" src="/assets/TheresaKnott_castle.svg" />
//   </ResponsiveEmbed>
// </div>
// <Image className="Logo" src={Logo} responsive/>
  render() {
    return (
      <div className="container-fluid">
        <Navbar fluid  collapseOnSelect  >
          <Navbar.Header className="pull-left nopadding">
            <Navbar.Brand>
              <div style={{ width: 100, height: 'auto' }}>
                <Image src={Logo} responsive/>
              </div>
            </Navbar.Brand>
          </Navbar.Header>

          <Navbar.Collapse className="pull-left">
            <Navbar.Text>
              <h1>Geospaitial Database Viewer</h1>
              <p>Natural Resources Department, Kalispel Tribe of Indians</p>
            </Navbar.Text>
          </Navbar.Collapse>


          <Nav className="pull-right" bsStyle="pills" >
            <NavDropdown eventKey={3} title="My Work" id="basic-nav-dropdown">
                <MenuItem eventKey={3.2}>Pokemon Api</MenuItem>
                <MenuItem eventKey={3.3}>Future</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
  );
  }
}

export default Header;
