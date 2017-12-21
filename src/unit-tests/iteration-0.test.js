import Helper from '../helper/HelperFunctions';
import mockData from './mockData';

// const { countyObject } = helper;

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

  it.only('should have a key of county and id', () => {
    const mockCounty = {county: 'SUMMIT'}
    expect(testHelper.countyObject).objectContaining({
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
