import React from 'react';
import './map-area.css';
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

