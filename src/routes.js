import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Contribute from './components/Contribute';
import Dashbaord from './components/Dashboard';

export default (
  <Switch>
    <Route path='/' exact component={Dashbaord} />
    <Route path='/contribute' exact component={Contribute} />
  </Switch>
)