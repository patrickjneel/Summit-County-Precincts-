import React from 'react';
import { shallow } from 'enzyme';
import { DataArea, mapStateToProps, mapDispatchToProps } from './DataArea';


describe('Data Area Test', () => {
  it.skip('should be defined', () => {
    const mockFunc = jest.fn();
    const renderedData = shallow(<DataArea address={mockFunc}/>);
    expect(renderedData).toBeDefined();
  });

  it.skip('should match the snap shot', () => {
    const mockFunc = jest.fn();
    const renderedData = shallow(<DataArea address={mockFunc}/>);

    expect(renderedData).toMatchSnapshot();
  });
});

describe('Map State To Props Test', () => {
  it('should receive location data from the store', () => {
    const mockStore = {
      coords: {
        address: "Buffalo St",
        lat: 39.05,
        lng: -106.06,
        fullAddress: '200 Buffalo St Dillon, CO'
      }
    };
    const expected = mapStateToProps(mockStore);
    expect(expected.coords).toEqual(mockStore.coords)
  });

  it('should receive address data from the store', () => {
    const mockStore = {
      address: [
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
    expect(expected.address).toEqual(mockStore.address)
  });
});
