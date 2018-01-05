import React from 'react';
import { connect } from 'react-redux';
import {withGoogleMap, GoogleMap, Marker, InfoBox } from "react-google-maps";
import './map-area.css';
import { addLocation } from '../../actions/Actions';

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 39.59, lng: -106.06 }}
  >
    <Marker
      position={{ lat: 39.59, lng: -106.06 }}
    />
  </GoogleMap>
);



const MapArea = () => { 
    return (
      <div className="map-area">
      <MapWithAMarker
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
    );
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


export default connect(mapStateToProps, null)(MapArea);

