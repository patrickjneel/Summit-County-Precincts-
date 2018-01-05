import React, { Component } from 'react';
import { connect } from 'react-redux';
import './data-area.css';


class DataArea extends Component {

render() {
  return (
      <div className="data-area">
        <h2>Home Address Precinct Information</h2>
        <table>
          <tr>
            <td className="key">Address:</td>
            <td className="value">Expected Location</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default DataArea;
 
 //add table to display the information
