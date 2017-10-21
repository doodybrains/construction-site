import React, {Component} from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoHeight: 0,
      videoWidth: 0
    };
  }

  componentDidMount() {
    this._window = window;
    this.onResize();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('load', this.onResize);
  }

  render() {
    return (
      <div className="post">
        <a className="quote" href={this.props.quoteUrl} target="_blank">{this.props.quote}</a>
      </div>
    );
  }

  onResize = () => {
    const windowWidth = window.innerWidth * 1.25;
    const windowHeight = window.innerHeight * 1.25;
    this.setState({
      videoHeight: windowHeight,
      videoWidth: windowWidth
    });
  }
}

export default Post;
