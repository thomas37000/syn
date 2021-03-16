import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SliderFacebook from '../SliderFacebook';
import SliderTwitter from '../SliderTwitter';
import Navbar from '../Burger_Menu/NavBar';
import Connexion from '../Connexion';
// import TodoList from '../TodoList';

export default function Routter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Connexion} />
          <Route path="/twitter" component={SliderTwitter} />
          <Route path="/facebook" component={SliderFacebook} />
          {/* <Route path="/todolist" component={TodoList} /> */}
        </Switch>
      </Router>
    </div>
  );
}
