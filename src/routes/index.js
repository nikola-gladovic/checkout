import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Checkout from "../pages/Checkout";

import { history } from '../store';

const AppRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/checkout' />
      </Route>
      <Route exact path='/checkout' component={Checkout}/>
    </Switch>
  </Router>
);

export default AppRoutes;
