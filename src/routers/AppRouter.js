import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from 'pages/Error404';
import NavBar from 'components/NavBar';
import About from 'pages/About';
import Welcome from 'pages/Welcome';
import Styleguide from 'pages/Styleguide';

const AppRouter = props => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
      <Route exact path="/styleguide" component={Styleguide} />
      <Route component={Error404} />
    </Switch>
  </React.Fragment>
);


export default AppRouter;
