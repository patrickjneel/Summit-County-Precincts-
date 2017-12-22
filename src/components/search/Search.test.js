import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search Tests', () => {

  it.only('should be defined', () => {
  const renderedSearch = shallow(<Search />);
  expect(renderedSearch).toBeDefined();
  })
})
