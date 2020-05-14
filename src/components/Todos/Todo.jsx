import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ title, target, completed }) => (
  <section>
    <h3>{title}</h3>
    <p>{target}</p>
    <p>{completed}</p>
  </section>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo;
