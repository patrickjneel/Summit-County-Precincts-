import React, { Component } from 'react';
import { connect } from 'react-redux';
import './data-area.css';


const DataArea = (props) => {
console.log(props.coords)
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

  let splitInfo = props.address.map(place => {
    place.splitData.map(local => {
      // console.log(local)
    })
  })

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
