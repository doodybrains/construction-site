import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/posts-actions';
import Post from './post';
import Swiper from 'swiper';
import ReactDriveIn from "react-drive-in";
let playlist = [
  [
    "https://github.com/ronik-design/react-drive-in/blob/master/example/kaledo.mp4?raw=true"
  ],
  [
    "https://www.dropbox.com/s/345ammdjhz8z1oa/Untitled.mp4"
  ],
  [
    "http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4"
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
      autoplay: 12000,
      slidesPerView: 1
    });

    this.props.posts.map((post, i) => {
      return (
        playlist.push("https://www.dropbox.com/s/345ammdjhz8z1oa/Untitled.mp4?dl=0")
      );
    });


    console.log(playlist);
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
