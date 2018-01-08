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
})
