import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/posts-actions';
import Post from './post';
import Swiper from 'swiper';
import ReactDriveIn from "react-drive-in";
let playlist = [
  [
    "https://github.com/doodybrains/construction-site/blob/master/public/marcy.mp4?raw=true"
  ],
  [
    "https://github.com/doodybrains/construction-site/blob/master/public/bridge.mp4?raw=true"
  ],
  [
    "https://github.com/doodybrains/construction-site/blob/master/public/quincy.mp4?raw=true"
  ],
  [
    "https://github.com/doodybrains/construction-site/blob/master/public/tribeca.mp4?raw=true"
  ],
  [
    "https://github.com/doodybrains/construction-site/blob/master/public/les.mp4?raw=true"
  ]
];

const onPlaying = function(itemNum) {};
const onPause = function() {};

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate() {
    new Swiper('.wrap', {
      preloadImages: false,
      lazy: true,
      direction: 'horizontal',
      loop: true,
      autoplay: 7000,
      slidesPerView: 1
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
                    <Post title={post.get('name')} quote={post.get('quote')} quoteUrl={post.get('quoteUrl')}/>
                  </div>
                );
              })}
            </div>
          </div>

          <ReactDriveIn
            showPlaylist={playlist}
            onPlaying={onPlaying}
            onPause={onPause}
            loop
            mute
          />

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.postsStore.get('posts') };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
