import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from 'routers/AppRouter';
import RootReducer from 'reducers/RootReducer';


// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(RootReducer, {}, compose(
  applyMiddleware(),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

// we now wrap AppRouter in a Provider for Redux
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById('main'),
);
