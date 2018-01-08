import * as actions from './Actions';

describe('Actions', () => {

  it('has a type of add data', () => {
    const address = {
      county: "SUMMIT",
      HouseFrom: 701,
      houseTo: 889,
      ruleType: 0,
      fullAddress: [{house: '123 W Annemone TRL'}],
      precinct: 2086159008,
      splitCode: 26
    };
    const expected = {
      type: 'ADD_DATA',
      address
    };
    expect(actions.addData(address)).toEqual(expected);
  });

  it('has a type of add location', () => {
    const coords = { 
      address: '',
      lat: 39.59, 
      lng: -106.06, 
      fullAddress: ''
    };
    const expected = {
      type: 'ADD_LOCATION',
      coords
    };
    expect(actions.addLocation(coords)).toEqual(expected)
  });
});

