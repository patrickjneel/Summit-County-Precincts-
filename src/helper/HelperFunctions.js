import  range  from 'lodash/range';
import precinct from './precinct8';
import splitData from './precinct8split';

const stingData = JSON.stringify(precinct);
const parsedData = JSON.parse(stingData);

const stringSplit = JSON.stringify(splitData);
const parsedSplit = JSON.parse(stringSplit);

class Helper {
  constructor(parsedData, parsedSplit) {
    this.parsedData = parsedData
    this.parsedSplit = parsedSplit
  }


 countyData() {
  const cleaned = parsedData.map(dataObj => {
    // console.log(dataObj)
    
    let { COUNTY, HS_NUM_FRM, HS_NUM_TO, RULE_TYPE, PRECINCT, SPLIT_CODE } = dataObj

    return {
      county: COUNTY,
      HouseFrom: HS_NUM_FRM,
      houseTo: HS_NUM_TO,
      ruleType: RULE_TYPE,
      fullAddress: this.createAddress(dataObj),
      precinct: PRECINCT,
      splitCode: SPLIT_CODE,  
      splitData: this.dataForSplits()
    }
  })
  return cleaned
 }

createAddress(dataObj) {
  const { STDIR_CODE, STREET_NAME, STYP_CODE } = dataObj
  const addressRange = this.findRange(dataObj.HS_NUM_FRM, dataObj.HS_NUM_TO)
  const baseAddress = `${STDIR_CODE} ${STREET_NAME} ${STYP_CODE}`
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

dataForSplits() {
  const splitResults = parsedSplit.map(split => {
    let { Split, Data } = split
    // console.log(split.Data.split(','))
    return {
      splitNumber: Split,
      split: Data.split(',')
    }
    })
    return splitResults
  }

}


export default Helper;
