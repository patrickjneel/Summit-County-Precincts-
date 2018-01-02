import * as actions from '../actions/Actions';
import { addDataReducer } from './Reducers';

describe('Reducers Test', () => {
  it.only('should return the default store', () => {
    const expected = []
    expect(addDataReducer(undefined, {})).toEqual(expected)
  })
})
