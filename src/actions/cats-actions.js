import PostsApi from '../api/posts-api.js';
export const RECEIVED_CATS = 'RECEIVED_CATS';

export function receivedCats(cats) {
  return {
    type: RECEIVED_CATS,
    cats
  };
}

export function fetchCats() {
  return function(dispatch, state) {
    PostsApi.getCats(cats => {
      dispatch(receivedCats(cats));
    });
  };
}
