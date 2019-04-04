import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Contribute from './components/Contribute';
import Generator from './components/Generator';

export default (
  <Switch>
    <Route path='/' exact component={Generator} />
    <Route path='/contribute' exact component={Contribute} />
  </Switch>
)