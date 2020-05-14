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

export const SET_TODOS = 'SET_TODOS';
export const setTodos = () => dispatch => {
  return fetchTodos()
    .then(todos => {
      dispatch({
        type: SET_TODOS,
        payload: todos
      });
    });
};
