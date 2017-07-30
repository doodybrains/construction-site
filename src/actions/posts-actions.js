import PostsApi from '../api/posts-api.js';
export const RECEIVED_POSTS = 'RECEIVED_POSTS';
export const RECEIVED_POST = 'RECEIVED_POST';

export function receivedPosts(posts) {
  return {
    type: RECEIVED_POSTS,
    posts
  };
}

export function fetchPosts() {
  return function(dispatch, state) {
    PostsApi.getPosts(posts => {
      dispatch(receivedPosts(posts));
    });
  };
}

export function receivedPost(post) {
  return {
    type: RECEIVED_POST,
    post
  };
}

export function fetchPost(id) {
  return function(dispatch, state) {
    PostsApi.getPost(id, post => {
      dispatch(receivedPost(post));
    });
  };
}
