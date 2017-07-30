import React, {Component} from 'react';

class Post extends Component {
  render() {
    const images = this.props.images.map(image => {
      const sys = image.get('sys');
      const fields = image.get('fields');
      const file = fields.get('file');
      const url = file.get('url');
      return (
        <img key={sys.get('id')} alt="" src={`http:${url}`} />
      );

    })
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        {images}
        <a href={`posts/${this.props.id}`}>link</a>
      </div>
    );
  }
}

export default Post;
