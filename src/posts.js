import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/posts-actions';
import Post from './post';
import Swiper from 'swiper';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate() {
    new Swiper('.wrap', {
      direction: 'horizontal',
      loop: true,
      autoplay: 7000,
      slidesPerView: 1,
      grabCursor: true,
      longSwipes: false
    });
  }

  render() {
    return (
      <div>
        <div className="all-posts">
          <div className="swiper-container wrap">
            <div className="swiper-wrapper">
              {this.props.posts.map((post, i) => {
                return (
                  <div key={i} className="swiper-slide">
                    <Post title={post.get('name')} videoUrl={post.get('videoUrl')} quote={post.get('quote')} quoteUrl={post.get('quoteUrl')}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.postsStore.get('posts') };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
