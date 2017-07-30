import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/cats-actions';
import Category from './category';

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div>
        <h2>all categories</h2>
        <div className="all-posts">
          {this.props.cats.map((post, i) => {
            console.log(post.toJS());
            return (
              <Category key={i} title={post.get('title')} image={post.get('image')}/>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cats: state.catsStore.get('cats') };
}

export default connect(mapStateToProps, { fetchCats })(Categories);
