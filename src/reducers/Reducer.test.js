import * as actions from '../actions/Actions';
import { addDataReducer, addLocationReducer } from './Reducers';

describe('AddData Reducer Test', () => {
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

describe('AddLocation Reducer Test', () => {
  it.only('should return the store', () => {
    const expected = {lat: 39.59, lng: -106.06, fullAddress: ''}

    expect(addLocationReducer(undefined, {})).toEqual(expected);
  });
});
