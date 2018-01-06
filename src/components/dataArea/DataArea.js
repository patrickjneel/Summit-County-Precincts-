import React, { Component } from 'react';
import './data-area.css';


const DataArea = () => {

  return (
      <div className="data-area">
        <h2>Home Address Precinct Information</h2>
        <table>
          <tbody>
            <tr>
              <td className="key">Address:</td>
              <td className="value">Expected Location</td>
            </tr>
            <tr>
              <td className="key">Precinct:</td>
              <td className="value">Expected Precinct</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default DataArea;
 
