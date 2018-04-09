import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withGoogleMap, GoogleMap, Marker, InfoBox } from "react-google-maps";
import PropTypes from 'prop-types';

export class MapWithAMarker extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 11
    }
  }


  render() {
    console.log(this.state.zoom)
    return (
      <GoogleMap
        zoom={this.state.zoom++}
        center={{ lat: this.props.coords.lat, lng: this.props.coords.lng }}
        options={{ streetViewControl: false, myTypeControl: false, fullscreenControl: false }}
      >
      <Marker position={{lat: this.props.coords.lat, lng: this.props.coords.lng }} />
      </GoogleMap>
    ) 
  }
}

export const mapStateToProps = (store) => {
  return {
    coords: store.coords 
  }
}

const WithMap = withGoogleMap(MapWithAMarker);

export default connect(mapStateToProps, null)(WithMap);

MapWithAMarker.propTypes = {
  coords: PropTypes.object
};


