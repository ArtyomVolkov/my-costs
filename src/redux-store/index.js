import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import ROOT from './reducers/index';

const STORE = createStore(
  ROOT,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default STORE;
