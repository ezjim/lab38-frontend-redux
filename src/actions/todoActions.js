import { fetchTodos, postTodo } from '../services/todoApi';

export const ADD_TODO = 'ADD_TODO';
export const addTodo = todo => dispatch => {
  return postTodo(todo)
    .then(newTodo => {
      dispatch({
        type: ADD_TODO,
        payload: newTodo
      });
    });
};
