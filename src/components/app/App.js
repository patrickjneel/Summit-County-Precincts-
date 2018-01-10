import React, { Component } from 'react';
import Search from '../../containers/search/Search';
import MapArea from '../map-area/MapArea';
import Data from '../../containers/data/Data';
import DataArea from '../../containers/dataArea/DataArea';
import './App.css';

class App extends Component {


  render() {

    return (
      <div className="app">
        <Search />
        <div className="bottom">
          <MapArea />
          <DataArea />
        </div>
      </div>
    );
  }
}

export default App;
