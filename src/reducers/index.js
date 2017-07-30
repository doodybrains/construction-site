import { combineReducers } from 'redux';
import postsStore from './posts-reducers';
import catsStore from './cats-reducers';
const app = combineReducers({
  postsStore,
  catsStore
});

export default app;
