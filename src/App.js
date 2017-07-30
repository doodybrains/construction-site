import React, {Component} from 'react';
require('./app.scss');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>stoodio website (content only)</h2>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default App;
