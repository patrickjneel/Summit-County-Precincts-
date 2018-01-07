import * as actions from '../actions/Actions';
import { addDataReducer } from './Reducers';

describe('Reducers Test', () => {
  it('should return the default store', () => {

    const expected = [];
    expect(addDataReducer(undefined, {})).toEqual(expected);
  });

  it('should return a new state with the data', () => {
    const address = [{county: 'SUMMIT', splitCode: 26, stType: 0}];
    const expected = [...address];

    expect(addDataReducer(undefined, actions.addData(address))).toEqual(expected);
  });
});
