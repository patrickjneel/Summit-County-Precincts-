import React, { Component } from 'react';
import { connect } from 'react-redux';
import './data-area.css';
import PropTypes from 'prop-types';


const DataArea = (props) => {
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
      
      return <div className="split">
              <span className="value">{thing.split[0]}</span> 
              <span className="value">{thing.split[1]}</span> 
              <span className="value">{thing.split[2]}</span> 
              <span className="value">{thing.split[3]}</span> 
              <span className="value">{thing.split[4]}</span> 
              <span className="value">{thing.split[5]}</span> 
              <span className="value">{thing.split[6]}</span> 
              <span className="value">{thing.split[7]}</span> 
              <span className="value">{thing.split[8]}</span> 
              <span className="value">{thing.split[9]}</span> 
              <span className="value">{thing.split[10]}</span> 
            </div>
    }
  })
}
  
    if(!foundAddress) {
      return <div className="data-area">
                <img src={require("../../assets/sclogo.png")} />
                <h3>Please search for home address</h3>
             </div>
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
          </tbody>
        </table>
        <span>
          {splitInfo}
        </span>
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
           
