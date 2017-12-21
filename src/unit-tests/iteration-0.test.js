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
    // console.log(helper.data)
    expect(typeof testHelper.data).toBe('object')

  })

});
