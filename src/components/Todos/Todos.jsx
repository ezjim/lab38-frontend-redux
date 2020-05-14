import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../selectors/todoSelector';
import { setTodos } from '../../actions/todoActions';
import Todo from './Todo';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  
  useEffect(() => {
    dispatch(setTodos());
  }, []);

  const todoElements = todos.map(todo => (
    <li key={todo._id}>
      <Todo {...todo} />
    </li>
  ));

  return (
    <ul>
      {todoElements}
    </ul>
  );
};

export default Todos;
