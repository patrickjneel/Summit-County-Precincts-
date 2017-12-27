// import React, { Component } from 'react';
import  range  from 'lodash/range';
import mockData from './mockData';

class Helper {
  constructor(data) {
    this.data = data
  }

 countyData() {
  const cleaned = this.data.map(dataObj => {
    let { houseFrom, houseTo, splitCode } = dataObj
    return {
      startAddress: houseFrom,
      endAddress: houseTo,
      address: this.createAddress(dataObj),
      splitCode: splitCode
    }
  })

  return cleaned
  
 }

createAddress(dataObj) {
  const { stDistrictCode ,stName ,stTypeCode } = dataObj
  const addressRange = this.findRange(dataObj.houseFrom, dataObj.houseTo)
  const baseAddress = `${stDistrictCode} ${stName} ${stTypeCode}`
  const fullAddresses = addressRange.map(address => {
    return {
      house: `${address} ${baseAddress}`
    }
  })
  return fullAddresses 
}

findRange(houseFrom, houseTo) {
  return range(houseFrom, houseTo + 1)   
  }


csvHandler(req, res) {
var fs = require('fs');
var http = require('http');
var url = require('url');
var args = process.argv;
var type = args[2] || 'text';
var arr = [];
var bufferString;
  fs.readFile('src/unit-tests/precinct8.csv', function(err, data) {

    if(err) {
      return console.log(err)
    }

    bufferString = data.toString();
    arr = bufferString.split('\n');
    // console.log(arr);

        var jsonObj = [];
    var headers = arr[0].split(',');
    for(var i = 1; i < arr.length; i++) {
      var data = arr[i].split(',');
      var obj = {};
      for(var j = 0; j < data.length; j++) {
         obj[headers[j].trim()] = data[j].trim();
      }
      jsonObj.push(obj);
    }
    JSON.stringify(jsonObj);
  console.log(jsonObj)
  });
 }

}

export default Helper;



