import { combineReducers } from 'redux';
import { addDataReducer, filterAddressReducer, addLocationReducer } from './Reducers';

const rootReducer = combineReducers({
  address: addDataReducer,
  coords: addLocationReducer,
  foundAddress: filterAddressReducer
});

export default rootReducer;
