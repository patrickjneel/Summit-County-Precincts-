import React from 'react';
import { connect } from 'react-redux';
import './map-area.css';
import { addLocation } from '../../actions/Actions';
import MapWithAMarker from './MapWithAMarker';


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

