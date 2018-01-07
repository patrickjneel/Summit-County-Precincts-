import React, { Component } from 'react';
import { connect } from 'react-redux';
import './data-area.css';


const DataArea = (props) => {

  console.log(props);
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
      console.log('found correct house');
      return true;
    }

    return false;
  });

  console.log(foundAddress);
  // console.log(props.coords);
//if found house return a bunch og jsx
//else return same side panel, but return new address

  return (
      <div className="data-area">
        <h2>Home Address Precinct Information</h2>
        <table>
          <tbody>
            <tr>
              <td className="key">Address:</td>
              <td className="value">{props.coords.address}</td>
            </tr>
            <tr>
              <td className="key">Precinct:</td>
              <td className="value">{'08'}</td>
            </tr>
            <tr>
              <td className="key"></td>
              <td className="value">Congressional 2</td>
            </tr><tr>
              <td className="key"></td>
              <td className="value">State Senate 8</td>
            </tr>
            <tr>
              <td className="key"></td>
              <td className="value">State House 61</td>
            </tr>
            <tr>
              <td className="key"></td>
              <td className="value">Judical 5</td>
            </tr>
            <tr>
              <td className="key"></td>
              <td className="value">Dillon</td>
            </tr>
            <tr>
              <td className="key"></td>
              <td className="value">Summit School RE 1</td>
            </tr>
            <tr>
              <td className="key"></td>
              <td className="value">Colorado Mountain College</td>
            </tr> 
            <tr>
              <td className="key"></td>
              <td className="value">Lake Dillon Fire Protection</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

// foundAddress.precinct.toString().slice(-2)

export const mapStateToProps = (store) => {
  return {
    address: store.address,
    coords: store.coords
  }
}

export default connect(mapStateToProps, null)(DataArea);
