import { ADD_TODO, SET_TODOS } from '../actions/todoActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case SET_TODOS:
      return action.payload;
    default:
      return state;
  }
}
