import React, { Component } from 'react';
import { range } from 'lodash';
import Papa from 'papaparse';



class Helper extends Component {


var _ = require('lodash/range');

//lodash is always _.methodName
const findRange = (houseFrom, houseTo) => {
 return _.range(num1, num2);
};

const parsed = Papa.parse(file, {
  header: true,
  dynamicTyping: true,
  complete: function(results) {
    data = results;
    console.log(data);
  }
})

}
const precient8 = [
    {
      county: 'Summit',
      id: 902642,
      houseFrom: 701,
      houseTo: 889,
      stDistrictCode: 'E',
      stName: 'Anemone',
      stTypeCode: 'TRL',
      precinct: 2086159008
  },
    {
      county: 'Summit',
      id: 600917718,
      houseFrom: 736,
      houseTo: 751,
      stateDistrictCode: 'W'
      stName: 'Anemone',
      stTypeCode: 'TRL',
      precinct: 2086159008
    },
];


export default Helper;



