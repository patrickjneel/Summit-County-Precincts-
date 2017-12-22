import React, { Component } from 'react';
import  range  from 'lodash/range';
import mockData from './mockData';



// var _ = require('lodash/range');

class Helper extends Component {
  constructor(data) {
    super(data);
    this.data = this.countyData();
  }

 countyData() {
  return {
    county: 'SUMMIT',
    id: '',
    houseNumFrm: '',
    houseNumTo: '',
    stDisCode: '',
    stName: '',
    stTypeCode: '',
    precient: '',
    split: null
  }
 }

findRange(houseFrom, houseTo) {
  return range(houseFrom, houseTo + 1)   

}

}

export default Helper;



