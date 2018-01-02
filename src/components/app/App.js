import React, { Component } from 'react';
import Helper from '../../helper/HelperFunctions';
import parsedData from '../../helper/precinct8';
import Search from '../search/Search';
import MapArea from '../map-area/MapArea';
import Data from '../../containers/data/Data';
import './app.css';

// const helper = new Helper(parsedData)

class App extends Component {

  componentDidMount() {
    // console.log('ok?') 
  }

  render() {

    return (
      <div className="app">
        <Search />
        <Data />
        <MapArea />
      </div>
    );
  }
}

export default App;
