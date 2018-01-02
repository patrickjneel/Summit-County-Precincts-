import React, { Component } from 'react';
import Search from '../search/Search';
import MapArea from '../map-area/MapArea';
import Data from '../../containers/data/Data';
import './App.css';

class App extends Component {


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
