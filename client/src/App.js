import React, { Component } from 'react';
import LMap from './components/map/Map';
import Header from './components/header/header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickedFapLat: "",
      clickedFapLong: ""
    }
    this.latLongCallback = this.latLongCallback.bind(this);
  }
  latLongCallback(clickedFap) {
    this.setState({
      clickedFapLat: clickedFap.clickedFapLat,
      clickedFapLong: clickedFap.clickedFapLong
    })
    // console.log(this.state)
  }

  render() {
        return (
        <div>
          <div>
            <Header />
          </div>
          <div className="container-fluid">
            <LMap callbackFromApp={this.latLongCallback}/>
            <br />
          </div>
        </div>
      );
    }
  }
export default App;

