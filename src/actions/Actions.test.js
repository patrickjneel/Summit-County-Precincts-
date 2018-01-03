import * as actions from './Actions';

describe('Actions', () => {

  it('has a type of add data', () => {
    const data = {
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
      data
    };
    expect(actions.addData(data)).toEqual(expected)
  })
})

