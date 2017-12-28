import  range  from 'lodash/range';
import precinct from './precinct8';

    const stingData = JSON.stringify(precinct)
    const parsedData = JSON.parse(stingData)


class Helper {
  constructor(parsedData) {
    this.parsedData = parsedData
    // console.log(parsedData)
    
  }


 countyData() {
  const cleaned = parsedData.map(dataObj => {
    console.log(parsedData)
    console.log(dataObj)
    console.log(dataObj)
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

}

export default Helper;



