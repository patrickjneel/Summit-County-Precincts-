import { range } from 'lodash';
import Papaparse from 'papaparse';


var _ = require('lodash/range');

//lodash is always _.methodName
const findRange = (num1, num2) => {
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

//function that takes in data and and also uses findRange to get the full list of addresses.






