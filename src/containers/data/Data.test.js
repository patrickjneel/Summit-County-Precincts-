import React from 'react';
import { shallow } from 'enzyme';
import { Data, mapStateToProps, mapDispatchToProps } from './Data';


describe('Data Test', () => {

  it('should be defined', () => {
      const data = shallow(<Data />, {disableLifecycleMethods: true});

    expect(data).toBeDefined();
  })
})



describe('MapStateToProps Test', () => {
  it('should receive data from the store', () => {
    const mockStore = {
      data: [
      {
        county:"SUMMIT",
        HouseFrom: 701,
        houseTo: 889,
        ruleType: 0,
        fullAddress: [{house: '701 e annemone trl'}],
        precinct: 2086159008,
        splitCode: 26
      }
      ]
    }
    const expected = mapStateToProps(mockStore)
    expect(expected.data).toEqual(mockStore.data)
  });
});

describe('MapDispatchToProps Test', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });
  it('should dispatch when addData is called', () => {
    result.addData();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
