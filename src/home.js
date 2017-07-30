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
        <div className="category-posts" id="container">
          {this.props.cats.map((post, i) => {
            return (
              <Category key={i} id={post.get('id')} title={post.get('title')} image={post.get('image')}/>
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
