import React from 'react';
import { shallow } from 'enzyme';
import { DataArea, mapStateToProps, mapDispatchToProps } from './DataArea';

describe('Data Area Test', () => {

  it.skip('should be defined', () => { 
  const mockFunc = jest.fn(); 
  const renderedDataArea = shallow(<DataArea data={mockFunc}/>);
  console.log(renderedDataArea)

  expect(renderedDataArea).toBeDefined();
  });
});
