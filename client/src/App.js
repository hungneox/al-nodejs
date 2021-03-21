import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { CssBaseline, withStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';

import mySaga from './sagas.js';
import rootReducer from './reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const styles = (theme) => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Provider store={store}>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </main>
  </Provider>
);

export default withStyles(styles)(App);
