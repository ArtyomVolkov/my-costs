import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
// Components
import Header from './layout/header/Header';
import Main from './layout/main/Main';
import Footer from './layout/footer/Footer';

function AppRoot ({store}) {
  return (
    <Provider store={store}>
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>
    </Provider>
  );
}

export default AppRoot;
