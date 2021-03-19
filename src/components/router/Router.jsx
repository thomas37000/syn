import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SliderFacebook from '../Slider/SliderFacebook';
import SliderTwitter from '../Slider/SliderTwitter';
import Navbar from '../Burger_Menu/NavBar';
import Connexion from '../Connexion';

export default function Routter() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Connexion} />
          <Route path="/twitter" component={SliderTwitter} />
          <Route path="/facebook" component={SliderFacebook} />
        </Switch>
      </Router>
    </div>
  );
}
