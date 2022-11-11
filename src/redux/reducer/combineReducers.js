import { combineReducers } from 'redux';

import signReducer from './user';

// combination of reducers
export default combineReducers({
  signReducer,
});
