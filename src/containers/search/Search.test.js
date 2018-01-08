import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps, mapDispatchToProps } from './Search';

describe('Search Tests', () => {

  it('should be defined', () => {
  const renderedSearch = shallow(<Search />);

  expect(renderedSearch).toBeDefined();
  });

  it('should match the snapshot', () => {
    const renderedSearch = shallow(<Search />);

    expect(renderedSearch).toMatchSnapshot();
  });
});

describe('Map State To Props Test', () => {
  it('should receive location data from the store', () => {
    const mockStore = {
      coords: {
        address: 'Buffalo St',
        lat: 39.06,
        lng: -106.06,
        fullAddress: '200 Buffalo St Dillon, CO'
      }
    };
    const expected = mapStateToProps(mockStore)
    expect(expected.coords).toEqual(mockStore.coords)
  });
});

describe('Map Dispatch To Props Test', () => {
  it('should dispatch addLocation is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);
    result.addLocation();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
