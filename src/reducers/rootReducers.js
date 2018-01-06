import { combineReducers } from 'redux';
import { addDataReducer, filterAddressReducer, addLocationReducer } from './Reducers';

const rootReducer = combineReducers({
  data: addDataReducer,
  coords: addLocationReducer
});

export default rootReducer;
