import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../API/API';
import APIKey from '../../apiKey/ApiKey';
import { addLocation } from '../../actions/Actions';
import './search.css';
import PropTypes from 'prop-types';


export class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      // zoom: 11
    }
  }
  
  handleInput = (event) => {
    this.setState({
      search: event.target.value
    })
  }

   findLocationData = async () => {
    const coordinatesData = await api.fetchLocation(this.state.search);
    const mappedData = coordinatesData.results.map(place => {
      
      let coordinates =  {
        address: place.address_components[1].short_name,
        coordinates: place.geometry.location,
        fullAddress: this.state.search
      } 
     return this.props.addLocation(coordinates)      
     });
    this.setState({search: ''})
  };

  // zoomOut() {
  //   this.setState({zoom: 11})
  // }
       
  render() {
    return (
    <div className="search-area">
      <h2 className="title">Precinct-Pro</h2>
      <div className="search-bottom">
        <input 
            className="search-bar"
            value = {this.state.search}
            onChange={this.handleInput}
            placeholder="Search for Address"
            // onMouseEnter={this.zoomOut}
        />
        <button onClick={() => this.findLocationData()}>
          Search
        </button>
      </div>
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

Search.propTypes = {
  coords: PropTypes.object,
  addLocation: PropTypes.func
};
