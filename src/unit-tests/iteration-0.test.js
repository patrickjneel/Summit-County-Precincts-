import Helper from '../helper/HelperFunctions';
import mockData from './mockData';

// const { countyData } = helper;

describe('County Object', () => {
  let testHelper;
  beforeEach(() => {
    testHelper = new Helper(mockData);

  })

  it('should be defined', () => {
    expect(typeof testHelper).toBe('object')
    
  });

  it('should return an object', () => {
    expect(typeof testHelper.data).toBe('object')

  })



  it('should have a keys of house to and house from', () => {
    const expectationStart = mockData[0].houseFrom
    const expectationEnd   = mockData[0].houseTo
    const results          = testHelper.countyData()[0]

    expect(results.startAddress).toEqual(expectationStart)
    expect(results.endAddress).toEqual(expectationEnd)
  })

  it('should find the range of house numbers', () => {
    const houseFrom = 1;
    const houseTo = 10;
    const expected = [1,2,3,4,5,6,7,8,9,10]
    // console.log(testHelper.findRange(houseFrom, houseTo))
    expect(testHelper.findRange(1, 10)).toEqual(expected)
  })

  it('county data should return an array of objects', () => {
    expect(Array.isArray(testHelper.countyData()))
    expect(typeof testHelper.countyData()[0] === 'object')
  })

  it.only('should allow us to create an array of Addresses based off of the range', () => {

    const theDream = [ { house:'736 W Anemone TRL'}, { house:'737 W Anemone TRL'}, 
                       { house:'738 W Anemone TRL'} ]

                       console.log(testHelper.countyData()[1])
    expect(testHelper.countyData()[1].address).toEqual(theDream)    

  })
});
