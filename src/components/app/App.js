import React, { Component } from 'react';
import Search from '../search/Search';
import MapArea from '../../containers/map-area/MapArea';
import './app.css';
import Papa from 'papaparse'

class App extends Component {

  

  componentDidMount() {
   
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
