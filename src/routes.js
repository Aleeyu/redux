import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Mobile from './page/Mobile'
const Routes = (
    <Switch>
      <Route path="/mobile" component={Mobile} />
    </Switch>
  );
  
  export default Routes;