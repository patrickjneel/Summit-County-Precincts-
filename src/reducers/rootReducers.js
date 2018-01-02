import { combineReducers } from 'redux';
import { addDataReducer } from './Reducers';

const rootReducer = combineReducers({
  data: addDataReducer
})

export default rootReducer;
