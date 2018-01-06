import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../API/API';
import APIKey from '../../apiKey/ApiKey';
import { addLocation } from '../../actions/Actions';
import './search.css';

export class Search extends Component {
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
  
      let coordinates =  {
        address: place.address_components[1].short_name,
        coordinates: place.geometry.location
      }
      console.log(coordinates)
      this.props.addLocation(coordinates)
      this.setState({search: this.props.coords})
    })
  }
      // send the address to the store  
      // that has access to your data and the filter string in the store 
      // filter through the data by the search adddress 
      // once you have that single address object check to see if the address is within the address range || included in the full address array. 

      // if thats true that is your precinct 
   


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

export const mapStateToProps = (store) => {
  return {
    coords: store.coords
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addLocation: (coords) => {
      dispatch(addLocation(coords))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
