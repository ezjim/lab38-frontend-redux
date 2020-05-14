import React, { useState } from 'react';
import { postTodo } from '../../services/todoApi';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

const TodoForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTodo({ title, description, target, completed }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} placeholder="Todo list" />
      <textarea value={description} onChange={({ target }) => setDescription(target.value)} placeholder="Todo Description"></textarea>
      <textarea value={target} onChange={({ target }) => setTarget(target.value)} placeholder="Target"></textarea>
      <input type="checkbox" value={completed} onChange={({ target }) => setCompleted(target.value)} />
      <button>add Todo</button>
    </form>
  );
};

export default TodoForm;
