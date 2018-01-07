import React from 'react';
// import { connect } from 'react-redux';
import './map-area.css';
// import { addLocation } from '../../actions/Actions';
import MapWithAMarker from '../../containers/mapWithMarker/MapWithAMarker';


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


export default MapArea;

