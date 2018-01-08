import { combineReducers } from 'redux';
import { addDataReducer, addLocationReducer } from './Reducers';

const rootReducer = combineReducers({
  address: addDataReducer,
  coords: addLocationReducer
});

export default rootReducer;
