import { combineReducers } from 'redux';
import postsStore from './posts-reducers';

const app = combineReducers({
  postsStore
});

export default app;
