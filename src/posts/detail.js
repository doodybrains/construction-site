import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/posts-actions';

class Post extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    return (
      <div>
        <h2>detail</h2>
        <div className="all-posts">
          {this.props.post &&
            <div>
              <h1>{this.props.post.get('title')}</h1>
              <p>{this.props.post.get('category')}</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.postsStore.get('post') };
}

export default connect(mapStateToProps, { fetchPost })(Post);
