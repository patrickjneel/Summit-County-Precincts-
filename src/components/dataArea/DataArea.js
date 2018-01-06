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
            </tr> <tr>
              <td className="key"></td>
              <td className="value">Lake Dillon Fire Protection</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default DataArea;
