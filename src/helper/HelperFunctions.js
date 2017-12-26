import React, { Component } from 'react';
import  range  from 'lodash/range';
import mockData from './mockData';


//make all addresses toupperCase.
//concat indexes [5] [6] [7]
//get rid of the empty spaces.

class Helper {
  constructor(data) {
    this.data = data
  }

//possibly pass findRange() and make countyObject a higher order function
 countyData() {
  //might need to be a reduce to create the big county object with all the data I need.
  //street would look like ex. E Anemone TRL

  const cleaned = this.data.map(dataObj => {
    let { houseFrom, houseTo } = dataObj
    return {
      startAddress: houseFrom,
      endAddress: houseTo,
      address: this.createAddress(dataObj) 
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
  // map through array and return the array of addresses 
}

findRange(houseFrom, houseTo) {
  return range(houseFrom, houseTo + 1)   

}

}

export default Helper;



