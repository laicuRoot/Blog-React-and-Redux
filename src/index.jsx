import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

// Reducers
import postReducer from './reducers/postReducer';

// Component
import PostsIndex from './containers/postIndex';
import PostShow from './containers/postShow';
import PostNew from './containers/postNew';

const reducers = combineReducers({
  posts: postReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostNew} />
          <Route path="/posts/:id" component={PostShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
