import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
  
  handleInput = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
    <div className="search-area">
      <h2 className="title">Precinct-Pro</h2>
      <input 
          className="search-bar"
          value = {this.state.search}
          onChange={this.handleInput}
          placeholder="Search for Address"/>
    </div>
  )
  }
}

export default Search;
