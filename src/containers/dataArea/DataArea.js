import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helper from '../../helper/HelperFunctions';
import { addData } from '../../actions/Actions';
import './data-area.css';
import PropTypes from 'prop-types';


class DataArea extends Component {

  componentDidMount() {
  const helper = new Helper();
  const cleaned = helper.countyData()
  this.props.addData(cleaned);
}

findAddress() {
  let foundAddress = this.props.address.find(address => {
    const street = new RegExp('\\s*'+this.props.coords.address+'\\s*', 'i');
    const houseRegex = new RegExp(/\d+/);
    const getHouse = this.props.coords.fullAddress.match(houseRegex);
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
  });
  return foundAddress;
}

splitInfo(foundAddress) {
let splitInfo;
if(foundAddress) {
  return foundAddress.splitData.map(thing => {
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
}
  render() {
    
  if(this.props.address.length) { 
  let foundAddress = this.findAddress();
  let infoData = this.splitInfo(foundAddress);

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
              <td className="value">{this.props.coords.fullAddress}</td>
            </tr>
            <tr>
              <td className="key">Precinct:</td>
              <td className="value">{foundAddress.precinct.toString().slice(-2)}</td>
            </tr>
          </tbody>
        </table>
        <span>
          {infoData}
        </span>
      </div>
    )
  } else {
    return null;
    }
  }
}
export const mapStateToProps = (store) => {
  return {
    address: store.address,
    coords: store.coords
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addData: (data) => {  
      dispatch(addData(data))

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataArea);

DataArea.propTypes = {
  address: PropTypes.array,
  coords: PropTypes.object
};
           
