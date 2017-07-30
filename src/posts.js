import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/posts-actions';
import Post from './post';
class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h2>all posts</h2>
        <div className="all-posts">
          {this.props.posts.map((post, i) => {
            return (
              <Post key={i} title={post.get('title')} images={post.get('images')}/>
            );
          })}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.postsStore.get('posts') };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
