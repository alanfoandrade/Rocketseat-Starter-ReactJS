import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './pages/product';
import Main from './pages/main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products/:id" component={Product} />
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
