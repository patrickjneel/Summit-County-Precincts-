import React, { Component } from 'react';
import Search from '../search/Search';
import MapArea from '../../containers/map-area/MapArea';
import './app.css';

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
