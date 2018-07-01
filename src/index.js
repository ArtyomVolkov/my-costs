import React from 'react';
import ReactDOM from 'react-dom';

import STORE from './redux-store/index';
// entry point
import AppRoot from './app/index';

ReactDOM.render(
  <AppRoot store={STORE}/>,
  document.getElementById('app')
);
