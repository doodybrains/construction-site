import {fromJS, Map} from 'immutable';
import {RECEIVED_POSTS, RECEIVED_POST} from '../actions/posts-actions';

const initialState = fromJS({
  posts: new Map(),
  post: null
});

export default function(state = initialState, action) {
  let posts;
  let post;

  switch (action.type) {
    case RECEIVED_POSTS:
    posts = fromJS(action.posts);

    return state
      .set('posts', posts);

    case RECEIVED_POST:
    post = fromJS(action.post);

    return state
      .set('post', post);
    default:
      return state;
  }
}
