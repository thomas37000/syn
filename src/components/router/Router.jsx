import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Burger_Menu/NavBar';
import InstaGrid from '../Insta';
import Grid from '../Grid';

export default function Routter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/admin" component={Grid} />
          <Route path="/instagram" component={InstaGrid} />
        </Switch>
      </Router>
    </div>
  );
}
