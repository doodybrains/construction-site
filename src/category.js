import React, {Component} from 'react';
import TweenMax from "gsap";
import Draggable from "gsap/Draggable";
import hand from '../static/media/hand.d4ee38c6.fb0fa075.ico';
class Category extends Component {
  constructor(props) {
    super(props);
    this.drage = this.drage.bind(this);
  }

  componentDidMount() {
    this._window = window;
    this.drage();
  }
  render() {

    return (
      <div className="post category">
        <div className={`image ${this.props.title}`}>
          <div>
            <img alt="" src={this.props.image} />
          </div>
        </div>
        <a className="link" href={`/${this.props.title}`}>
          <h2>{this.props.title}</h2>
        </a>
      </div>
    );
  }

  drage() {
    const name = `.${this.props.title}`;
    TweenMax.set(name,{x:0,y:0});
    Draggable.create(name, {type:"x,y", edgeResistance:0.65, bounds:"#container", throwProps:true, cursor: `url(${hand}),move`});
  }
}

export default Category;
