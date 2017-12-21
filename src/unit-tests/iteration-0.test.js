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

  it('county data should have a key of county', () => {
    console.log(testHelper.data)
    expect.objectContaining({
      county: expect.any('SUMMIT')
      
    })
  })

  it('should have a keys of house to and house from', () => {
    expect.objectContaining({
      houseNumFrm: expect.any(''),
      houseNumTo: expect.any('')
    })
  })

  it('should have a street Code, street Name, and street Type Code', () => {
    expect.objectContaining({
      stDisCode: expect.any(''),
      stName: expect.any(''),
      stTypeCode: expect.any(''),
      split: expect.any(null)
    })
  })



});
