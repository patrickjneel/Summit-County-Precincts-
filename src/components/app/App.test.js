import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it.only('should be defined', () => {
  const renderedApp = shallow(<App />);

  expect(renderedApp).toBeDefined();
});
