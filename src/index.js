import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var apiKey = 'vqt6xzgau4jhux79xrc69g89gbg73uqx';
//  STORE METHODS
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING METHODS
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// CONTAINERS
import App from './app/app';
import Home from './components/HomePage';
//REDUCERS
import rootReducer from './reducers/RootReducer';
// Store with middleware.
const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path="wow" component={Wow} />
        <Route path="diablo3" component={Diablo} />
        <Route path="hearthstone" component={Hearthstone} />
        <Route path="overwatch" component={Overwatch} />
        <Route path="starcraft2" component={Starcraft} />
        <Route path="hots" component={Heroes} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
