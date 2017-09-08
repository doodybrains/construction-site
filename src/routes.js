import React from 'react';
import Posts from './posts.js';
import {Route, IndexRoute} from 'react-router';
import App from './App';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Posts}/>
  </Route>
);
