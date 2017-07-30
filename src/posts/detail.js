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
        {this.props.post &&
          <div>
            <h2 className="primary-title">{this.props.post.get('title')}</h2>
            <div className="post-detail-wrapper">
              <div>
                <p>category: {this.props.post.get('category')}</p>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.postsStore.get('post') };
}

export default connect(mapStateToProps, { fetchPost })(Post);
