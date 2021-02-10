import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropertyListings } from '../PropertyListings';
import { SavedListings } from '../SavedListings';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PropertyListings} />
      <Route exact path="/saved-listings" component={SavedListings} />
    </Switch>
  );
};
