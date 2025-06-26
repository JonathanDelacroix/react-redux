export const selectTodos = (state) =>
  state.todos.filter((todo) => !todo.completed);

export const selectCompletedTodos = (state) =>
  state.todos.filter((todo) => todo.completed
);