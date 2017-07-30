import React, {Component} from 'react';

class Category extends Component {
  render() {
    return (
      <a href={`/${this.props.title}`}className="post">
        <h2>{this.props.title}</h2>
        <img alt="" src={this.props.image} />
      </a>
    );
  }
}

export default Category;
