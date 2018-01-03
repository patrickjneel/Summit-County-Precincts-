import { combineReducers } from 'redux';
import { addDataReducer, filterAddressReducer } from './Reducers';

const rootReducer = combineReducers({
  data: addDataReducer,
  data: filterAddressReducer
})

export default rootReducer;
