import React from 'react';
import { shallow } from 'enzyme';
import MapArea from './MapArea';

describe('MapArea Test', () => {

  it('should be defined', () => {
    const renderedMap = shallow(<MapArea />);

    expect(renderedMap).toBeDefined();
  })

  it('should match snap shot', () => {
    const renderedMap = shallow(<MapArea />);

    expect(renderedMap).toMatchSnapshot();
  })
})
