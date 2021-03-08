import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Burger_Menu/NavBar';
import Grid from '../Grid';

export default function Routter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/admin" component={Grid} />
        </Switch>
      </Router>
    </div>
  );
}
