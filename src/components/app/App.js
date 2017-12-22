import React, { Component } from 'react';
import Search from '../search/Search';
import './app.css';
import Papa from 'papaparse'

class App extends Component {

  componentDidMount() {

  }


  render() {

    return (
      <div className="app">
        <Search />
      </div>
    );
  }
}

export default App;
