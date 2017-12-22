import React, { Component } from 'react';
import Search from '../search/Search';
import './App.css';
import Papa from 'papaparse'

class App extends Component {

  componentDidMount() {

  }


  render() {

    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
