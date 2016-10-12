import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import work from './reducers/work';

export default combineReducers({
  flashMessages,
  work,
  auth
});
