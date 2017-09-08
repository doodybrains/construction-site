import React, {Component} from 'react';
require('./app.scss');

class app extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="header">
          <a className="home-link" href="/"><h2>construction site</h2></a>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default app;
