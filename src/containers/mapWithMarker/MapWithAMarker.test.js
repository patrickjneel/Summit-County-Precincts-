import React from 'react';
import { shallow } from 'enzyme';
import { MapWithAMarker, mapStateToProps } from './MapWithAMarker';


describe('MapWithAMarker Test', () => {
  it.skip('should be defined', () => {
    const mockLat = 49.05;
    const mockLng = -106.06;
    const renderedMap = shallow(<MapWithAMarker lat={mockLat}/>);
    expect(renderedMap).toBeDefined();
  });

  it.skip('should match snap shot', () => {
    const renderedMap = shallow(<MapWithAMarker />);
    expect(renderedMap).toMatchSnapshot();
  })
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
  })
});
