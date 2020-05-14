import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../../selectors/todoSelector';

export default function App() {
  const todos = useSelector(getTodos);
  return (
    <>
      <h1> The Next Todo - {todos[todos.length - 1]?.title}</h1>
      <Home />
    </>
  );
}
