import React, { Component } from 'react';
import { connect } from 'react-redux';
import './data-area.css';
import PropTypes from 'prop-types';


export const DataArea = (props) => {
  let foundAddress = props.address.find(address => {
    const street = new RegExp('\\s*'+props.coords.address+'\\s*', 'i');
    const houseRegex = new RegExp(/\d+/);
    const getHouse = props.coords.fullAddress.match(houseRegex);
    let houseNumber;

    if(getHouse) {
      houseNumber = parseInt(getHouse[0]);
    }
   
    if (
      street.test(address.baseAddress) && 
      houseNumber >= address.HouseFrom &&
      houseNumber <= address.houseTo
    ) {
      return true;
    }

    return false;
  });

let splitInfo;
if(foundAddress) {
  splitInfo = foundAddress.splitData.map(thing => {
    if(thing.splitNumber === foundAddress.splitCode) {
      
      return thing.split 
    }
  })
}
  
    if(!foundAddress) {
      return <div className="data-area">Please search for home address</div>
    }

  return (
      <div className="data-area">
        <h2>Home Address Precinct Information</h2>
        <table>
          <tbody>
            <tr>
              <td className="key">Address:</td>
              <td className="value">{props.coords.fullAddress}</td>
            </tr>
            <tr>
              <td className="key">Precinct:</td>
              <td className="value">{foundAddress.precinct.toString().slice(-2)}</td>
            </tr>
            <tr>
              <td className="key"></td>
              <span className="value">{splitInfo}</span>
            </tr>
            
          </tbody>
        </table>
      </div>
    )
}

export const mapStateToProps = (store) => {
  return {
    address: store.address,
    coords: store.coords
  }
}

export default connect(mapStateToProps, null)(DataArea);

DataArea.propTypes = {
  address: PropTypes.array,
  coords: PropTypes.object
};
           
