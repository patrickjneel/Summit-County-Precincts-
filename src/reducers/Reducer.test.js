import * as actions from '../actions/Actions';
import { addDataReducer } from './Reducers';

describe('Reducers Test', () => {
  it('should return the default store', () => {

    const expected = []
    expect(addDataReducer(undefined, {})).toEqual(expected)
  })

  it('should return a new state with the data', () => {
    const data = [{county: 'SUMMIT', splitCode: 26, stType: 0}]
    const expected = [...data]

    expect(addDataReducer(undefined, actions.addData(data))).toEqual(expected)
  })
})
