import { addTodo, ADD_TODO, postTodo } from './todoActions';

describe('todo actions', () => {
  it('creates a todo', () => {
    const action = addTodo();
    expect(action).toEqual({
      type: ADD_TODO,
      payload: {
        title: 'finish your labs',
        description: 'lab29/34',
        target: 'are you close?'
      }
    });
  });
});
