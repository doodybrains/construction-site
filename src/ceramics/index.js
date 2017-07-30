import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts-actions';
import Post from './post';
class Ceramics extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h2>all posts</h2>
        <div className="all-posts">
          {this.props.posts.map((post, i) => {
            if (post.get('category') === 'ceramics') {
              return (
                <Post key={i} id={post.get('id')} title={post.get('title')} images={post.get('images')}/>
              );
            } else {
              return null;
            }
          })}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.postsStore.get('posts') };
}

export default connect(mapStateToProps, { fetchPosts })(Ceramics);
