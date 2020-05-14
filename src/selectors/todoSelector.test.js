import { getTodos } from './todoSelector';

describe('todos selectors', () => {
  it('selects all todos from state', ()=> {
    const state = {
      todos: [
        { title: '1st todo', description: 'first todo' },
        { title: '2nd todo', description: 'second todo' }
      ]
    };
    const todos = getTodos(state);
    expect(todos).toEqual([
      { title: '1st todo', description: 'first todo' },
      { title: '2nd todo', description: 'second todo' }
    ]);
  });
});
