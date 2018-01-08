import Helper from '../helper/HelperFunctions';
import mockData from './mockData';


describe('County Object', () => {
  let testHelper;
  beforeEach(() => {
    testHelper = new Helper(mockData);

  });

  it('should be defined', () => {
    expect(typeof testHelper).toBe('object');
    
  });

  it('should return an object', () => {
    expect(typeof testHelper.parsedData).toBe('object');

  });

  it('should have a keys of house to and house from', () => {
    const expectationStart = mockData[0].houseFrom;
    const expectationEnd   = mockData[0].houseTo;
    const results          = testHelper.countyData()[0];

    expect(results.startAddress).toEqual(expectationStart);
    expect(results.endAddress).toEqual(expectationEnd);
  });

  it('should have a key of base address that only has street name', () => {
    const expectedKey = mockData[0].baseAddress;
    const results = testHelper.countyData()[0].baseAddress;

    expect(results.baseAddress).toEqual(expectedKey);
  });

  it('should find the range of house numbers', () => {
    const houseFrom = 1;
    const houseTo = 10;
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(testHelper.findRange(houseFrom, houseTo)).toEqual(expected);
  });

  it('county data should return an array of objects', () => {
    expect(Array.isArray(testHelper.countyData()));
    expect(typeof testHelper.countyData()[0] === 'object');
  });

  it('should allow us to create an array of Addresses based off of the range', () => {

    const theDream = [{"house": "736 W ANEMONE TRL"}, {"house": "737 W ANEMONE TRL"}, {"house": "738 W ANEMONE TRL"}, {"house": "739 W ANEMONE TRL"}, {"house": "740 W ANEMONE TRL"}, {"house": "741 W ANEMONE TRL"}, {"house": "742 W ANEMONE TRL"}, {"house": "743 W ANEMONE TRL"}, {"house": "744 W ANEMONE TRL"}, {"house": "745 W ANEMONE TRL"}, {"house": "746 W ANEMONE TRL"}, {"house": "747 W ANEMONE TRL"}, {"house": "748 W ANEMONE TRL"}, {"house": "749 W ANEMONE TRL"}, {"house": "750 W ANEMONE TRL"}, {"house": "751 W ANEMONE TRL"}];

    expect(testHelper.countyData()[1].fullAddress).toEqual(theDream);    

  });

  it('should have a split code that helps correspond to actual precints', () => {

    const expectedData =  [{"split": ["Congressional 2", " State Senate 8", " State House 61", " Judical 5", " Dillon", " Summit School RE 1", " Colorado Mountain College", " Lake Dillon Fire Protection"], "splitNumber": 26}, {"split": ["Congressional 2", " State Senate 8", " State House 61", " Judical 5", " Dillon Out", " Summit School RE 1Colorado Mountain College", " Lake Dillon Fire Protection", " East Dillon Water District"], "splitNumber": 33}, {"split": ["Congressional 2", " State Senate 8", " State House 61", " Judical 5", " Silverthorne", " Summit School RE 1", " Colorado Mountain College", " Lake Dillon Fire Protection"], "splitNumber": 98}, {"split": ["Congressional 2", " State Senate 8", " State House 61", " Judicial 5", " Dillon Out", " Summit School RE-1", " Colorado Mountain College", " Lake Dillon Fire Protection", " East Dillon Water District"], "splitNumber": 86}];

    expect(testHelper.countyData()[0].splitData).toEqual(expectedData);
  });

});
