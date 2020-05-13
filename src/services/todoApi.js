export const postTodo = todo => {
  return fetch(`${process.env.API_URL}/api/v1/todos`, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body:JSON.stringify(todo)
  })
    .then(res => res.json());
};

export const fetchTodos = () => {
  return fetch(`${process.env.API_URL}/api/v1/todos`)
    .then(res => res.json());
};
