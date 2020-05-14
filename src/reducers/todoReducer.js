import { ADD_TODO } from '../actions/todoActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
