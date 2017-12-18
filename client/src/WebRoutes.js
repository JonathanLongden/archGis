import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

class WebRoute extends Component {
	constructor(Prop) {
		super(Prop);
		this.state = {
      clickedLat: "",
      clickedLong: "",
      BaseMap:""
		}
    this.locationCallBack = this.locationCallBack.bind(this);
    this.setBaseMap = this.setBaseMap.bind(this);
	}

	locationCallBack(clickedOnMap) {
    this.setState({
      clickedLat: clickedOnMap.clickedLat,
      clickedLong: clickedOnMap.clickedLong
    })
    // console.log(this.state)
  }

	setBaseMap(newBaseMap) {
		this.setState({
      BaseMap: newBaseMap
    })
  }

	render() {
    console.log(this.state.BaseMap)
      return (
        <BrowserRouter>
        <Switch>
          {/*

         */}
          <Route exact path="/" render={ ({ match, history }) => <App match={ match } history={ history } SuperSetBaseMap = {this.setBaseMap}/>} />

        </Switch>
      </BrowserRouter>
      );
    }
}
export default WebRoute;
