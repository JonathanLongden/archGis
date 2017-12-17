import React, { Component } from 'react';
import LMap from './components/map/Map';
import Header from './components/header/header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickedFapLat: "",
      clickedFapLong: "",
      BaseMap:""
    }
    this.latLongCallback = this.latLongCallback.bind(this);
    this.setAccessToken = this.setAccessToken.bind(this);
  }
  latLongCallback(clickedFap) {
    this.setState({
      clickedFapLat: clickedFap.clickedFapLat,
      clickedFapLong: clickedFap.clickedFapLong
    })
    // console.log(this.state)
  }

	setAccessToken(newAccessToken, userFound, userId) {
		this.setState({
      accessToken: newAccessToken,
      user: userFound,
      userId: userId
    })
  }
  render() {
        return (
        <div className="LandingPage">
          <Header SuperBaseMap = {this.state.BaseMap}/>
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
