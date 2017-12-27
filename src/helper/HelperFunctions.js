import  range  from 'lodash/range';
import csvCleaner from './CSVCleaner';

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




}

export default Helper;



