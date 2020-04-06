import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Welcome from '../pages/Welcome';
import NavBar from '../components/NavBar';
import Error404 from '../pages/Error404';
import '../style.scss';

const App = props => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
      <Route component={Error404} />
    </Switch>
  </React.Fragment>
);


export default App;
