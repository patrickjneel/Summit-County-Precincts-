import  range  from 'lodash/range';
import precinct from './precinct8';
import splitData from './precinct8split';


      // console.log(splitData)
      // console.log('-------------------------')


    const stingData = JSON.stringify(precinct)
    const parsedData = JSON.parse(stingData);



class Helper {
  constructor(parsedData) {
    this.parsedData = parsedData
  }


 countyData() {
  const cleaned = parsedData.map(dataObj => {
    let { COUNTY, RULE_TYPE, PRECINCT, SPLIT_CODE } = dataObj

    return {
      county: COUNTY,
      ruleType: RULE_TYPE,
      fullAddress: this.createAddress(dataObj),
      precinct: PRECINCT,
      splitCode: SPLIT_CODE

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
  console.log(fullAddresses)
  return fullAddresses 
}

findRange(houseFrom, houseTo) {
    return range(houseFrom, houseTo + 1)   
  }

}

export default Helper;



