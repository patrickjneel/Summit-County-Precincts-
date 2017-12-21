import React, { Component } from 'react';
import { range } from 'lodash';
import Papa from 'papaparse';


const _ = require('lodash/range');

class Helper extends Component {
  constructor(data) {
    super(data);
    this.data = this.countyObject();
  }

 countyObject() {
  return {
    county: '',
    id: '',
    houseNumFrm: '',
    houseNumTo: '',
    stDisCode: '',
    stName: '',
    stTypeCode: ''
  }
 }


}

export default Helper;



// cleanData() {
// const mapped = precient8.map(pre => {
//   let homeFrom = pre.houseFrom
//   let homeTo = pre.houseTo
//   return _.range(homeFrom, homeTo + 1)   
//   })
// }
