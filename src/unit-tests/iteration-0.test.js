import Helper from '../helper/HelperFunctions';
import mockData from './mockData';

// const { countyData } = helper;

describe('County Object', () => {
  let testHelper;
  beforeEach(() => {
    testHelper = new Helper();

  })

  it('should be defined', () => {
    expect(typeof testHelper).toBe('object')
    
  });

  it('should return an object', () => {
    expect(typeof testHelper.data).toBe('object')

  })

  it.only('county data should have a key of county', () => {
    const mockCounty = {county: 'SUMMIT'}
    console.log(testHelper.data)

    expect(testHelper.countyData).objectContaining({
      mockCounty
      
    })
  })

  it.skip('should have a keys of house to and house from', () => {
    expect(testHelper.data).objectContaining({
      houseNumFrm: expect.any(123434),
      houseNumTo: expect.any(54545)
    })
  })

  it.skip('should have a street Code, street Name, and street Type Code', () => {
    expect(testHelper.data).objectContaining({
      stDisCode: expect.any(''),
      stName: expect.any(''),
      stTypeCode: expect.any('')
    })
  })



});
