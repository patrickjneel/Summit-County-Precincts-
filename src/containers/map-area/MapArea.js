import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import './map-area.css';


class MapArea extends Component {
  

  render() {
    return (
      <div className="map-area">
      <GoogleMapReact
        defaultCenter={{lat: 39.5, lng: -106.06}}
        defaultZoom={12}
      />
      </div>
    );
  }
}

export default MapArea;
