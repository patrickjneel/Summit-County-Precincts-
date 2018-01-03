import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Tests', () => {

  it('should be defined', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  });

});
