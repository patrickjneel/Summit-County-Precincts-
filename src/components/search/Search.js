import React, { Component } from 'react';
import APIKey from '../../apiKey/ApiKey';
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
    const fetchedLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}&key=${APIKey}`)
    const locationData = await fetchedLocation.json();
    const mappedLocation = locationData.results.map(place => {
      console.log(place.geometry.location)
      return place.geometry.location
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
      <button onClick={this.findLocation}>
      Search
      </button>
    </div>
  )
  }
}

export default Search;
