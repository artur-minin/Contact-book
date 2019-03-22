import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contacts from './contacts/Contacts';
import NotFoundPage from './shared/NotFoundPage';

const Main = () => {
  return (
    <Switch>
      <Route path='/' exact component={Contacts} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Main;