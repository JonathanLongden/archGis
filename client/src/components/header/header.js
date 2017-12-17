import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, Image, Tabs, Tab } from 'react-bootstrap';
import Logo from '../img/logo.PNG';
import ListOfLayers from './modal/listoflayers';
import About from './modal/about';
//import { LinkContainer } from 'react-router-bootstrap';
//import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key:  "",
      keylist:['Streets','Aerial','Topo']
      //user: props.SuperUser.user
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    // alert(`selected ${key}`);
    this.setState({ key });
  }
  render() {
    let number = this.state.key;
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
          <Navbar.Collapse className="pull-left" >
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
              <Tab eventKey={0} title="Streets">Streets</Tab>
              <Tab eventKey={1} title="Aerial">Aerial</Tab>
              <Tab eventKey={2} title="Topo">Topo</Tab>

            </Tabs>
            <p style={{'color':'white'}}>{this.state.keylist[number]}</p>
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
