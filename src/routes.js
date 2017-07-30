import React from 'react';
import Categories from './home.js';
import Collages from './collages/index.js';
import Ceramics from './ceramics/index.js';
import Fabric from './fabric/index.js';
import PostDetail from './posts/detail.js';
import {Route, IndexRoute} from 'react-router';
import app from './app';
export default (
  <Route path="/" component={app}>
    <IndexRoute component={Categories}/>
    <Route path="fabric" component={Fabric} />
    <Route path="collages" component={Collages} />
    <Route path="ceramics" component={Ceramics} />
    <Route path="posts/:id" component={PostDetail} />
  </Route>
);
