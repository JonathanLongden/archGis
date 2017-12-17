import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import Logo from '../img/logo.PNG';
import ListOfLayers from './modal/listoflayers';
import About from './modal/about';
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
    return (
      <div className="Header">
        <Navbar collapseOnSelect  >
          <Navbar.Header className="pull-left">
            <Navbar.Brand>
              <div >
                <Image className="Logo"src={Logo} />
              </div>
            </Navbar.Brand>
          </Navbar.Header>

          <Navbar.Collapse className="pull-left">
            <Navbar.Text style={{ 'font-size': '30px' }}>
              Geospaitial Database Viewer
            </Navbar.Text>
            <br/>
            <Navbar.Text style={{ 'font-size': '15px' }}>
              Natural Resources Department, Kalispel Tribe of Indians
            </Navbar.Text>

          </Navbar.Collapse>

          <Nav className="pull-right" bsStyle="pills" >
            <NavDropdown eventKey={3} title="Tools" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}><ListOfLayers /></MenuItem>
                <MenuItem eventKey={3.2}>Spatial Search</MenuItem>
                <MenuItem eventKey={3.3}>Query Data</MenuItem>
                <MenuItem eventKey={3.4}>Draw and Measure</MenuItem>
                <MenuItem eventKey={3.5}>Save/Print</MenuItem>
                <MenuItem eventKey={3.6}>Identify Features</MenuItem>
                <MenuItem eventKey={3.7}><About/></MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
