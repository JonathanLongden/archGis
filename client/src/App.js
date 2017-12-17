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
        <div className="LandingPage">
          <Header />
          <LMap callbackFromApp={this.latLongCallback}/>
        </div>
      );
    }
  }
export default App;

// <div>
// <LMap callbackFromApp={this.latLongCallback}/>
// </div>

// <div >
//    <Header />
//  </div>
