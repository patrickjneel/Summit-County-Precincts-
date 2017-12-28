import React, { Component } from 'react';
import Helper from '../../helper/HelperFunctions';
import parsedData from '../../helper/precinct8';
import Search from '../search/Search';
import MapArea from '../../containers/map-area/MapArea';
import './app.css';

const helper = new Helper(parsedData)

class App extends Component {

  componentDidMount() {
    console.log(helper.countyData(parsedData))
  }

  render() {

    return (
      <div className="app">
        <Search />
        <MapArea />
      </div>
    );
  }
}

export default App;
