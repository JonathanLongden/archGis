import React, { Component } from 'react';
import LMap from './components/map/Map';
import Header from './components/header/header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BaseMap: props.SuperSetBaseMap
    }
    console.log(props)
  }

  render() {
        return (
        <div className="LandingPage">
          <Header SuperSetBaseMap = {this.state.BaseMap}/>}/>
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
