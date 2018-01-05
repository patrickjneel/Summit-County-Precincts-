import { combineReducers } from 'redux';
import { addDataReducer, filterAddressReducer, addLocationReducer } from './Reducers';

const rootReducer = combineReducers({
  data: addDataReducer,
  // data: filterAddressReducer,
  coords: addLocationReducer
});

export default rootReducer;
