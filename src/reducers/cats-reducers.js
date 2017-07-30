import {fromJS, Map} from 'immutable';
import {RECEIVED_CATS} from '../actions/cats-actions';

const initialState = fromJS({
  cats: new Map()
});

export default function(state = initialState, action) {
  let cats;

  switch (action.type) {
    case RECEIVED_CATS:
    cats = fromJS(action.cats);

    return state
      .set('cats', cats);
    default:
      return state;
  }
}
