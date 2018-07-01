import {combineReducers} from 'redux';
// reducers
import app from './app';
import costs from './costs';
import notifications from './notifications';

const ROOT = combineReducers({
  app,
  costs,
  notifications
});

export default ROOT;
