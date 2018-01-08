import React from 'react';
import { shallow } from 'enzyme';
import { MapWithAMarker, mapStateToProps } from './MapWithAMarker';



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
