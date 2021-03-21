import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { CssBaseline, withStyles } from '@material-ui/core';

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
      <Home />
    </main>
  </Provider>
);

export default withStyles(styles)(App);
