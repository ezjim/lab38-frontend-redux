import { addTodo } from '../actions/todoActions';
import reducer from './todoReducer';


// describe('todos reducer', () => {
//   it('handles the ADD_TODO action', () => {
//     const action = addTodo();
//     const initialState = [{ todos: 1 }];
//     const newState = reducer(initialState, action);
//     expect(newState).toEqual([{ todos: 1 }]);
//   });
// });

describe('todos reducer', () => {
  it('handles the ADD_TODO action', () => {
    const action = addTodo({});
    const initialState = [{ 
      _id: '1',
      title: '1',
      description: '1',
      target: '1',
      completed: true }];
    const newState = reducer(initialState, action);
    expect(newState).toEqual([{
      _id: '1',
      title: '1',
      description: '1',
      target: '1',
      completed: true
    }]);
  });
});
