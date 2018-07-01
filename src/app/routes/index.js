import React from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
// Pages
import Page404 from '../pages/404/Page404';
import Costs from '../pages/costs';

const IndexRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Costs}/>
        <Route path="/costs" component={Costs}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
};

export default IndexRoute;
