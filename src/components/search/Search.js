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

  findLocation = async () => {
    const fetchedLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}&key=AIzaSyD6W5APnwmrFDwNo8XQ-W5NXHgq6lpvbEg`)
    const locationData = await fetchedLocation.json();
    console.log(locationData)
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
      <button onClick={this.findLocation}>
      Search
      </button>
    </div>
  )
  }
}

export default Search;
