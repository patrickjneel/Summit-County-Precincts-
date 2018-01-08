import React from 'react';
import { connect } from 'react-redux';
import {withGoogleMap, GoogleMap, Marker, InfoBox } from "react-google-maps";
import PropTypes from 'prop-types';

export const MapWithAMarker = (props) => {
  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: props.coords.lat, lng: props.coords.lng }}
    >
    <Marker position={{lat: props.coords.lat, lng: props.coords.lng }} />
    </GoogleMap>
  )
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


