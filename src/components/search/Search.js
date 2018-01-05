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

  // findLocation = async () => {
  //   const fetchedLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}&key=${APIKey}`)
  //   const locationData = await fetchedLocation.json();
  //   const mappedLocation = locationData.results.map(place => {
  //     console.log(place)
  //     console.log(place.address_components[1].short_name)
  //     console.log(place.geometry.location)
  //     debugger;
  //     return place.address_components[1].short_name && place.geometry.location

      // this needs to be a conected compoent 
      // send the address to the store 
      // make a some sort of card list component 
      // that has access to your data and the filter string in the store 
      // filter through the data by the search adddress 
      // once you have that single address object check to see if the address is within the address range || included in the full address array. 

      // if thats true that is your precinct 
  //   })
  //   this.setState({search: ''})

  // }

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
