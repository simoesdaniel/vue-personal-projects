export default {
  new(state, payload) {
    state.todoList.push(payload);
  },
  delete(state, id) {
    const newTodoList = state.todoList.filter((todo) => todo.id !== id);
    state.todoList = newTodoList;
  },
  update(state, task) {
    const todoItemIndex = state.todoList.findIndex(
      (todo) => todo.id === task.id
    );
    state.todoList[todoItemIndex] = task;
  },
  load(state, payload) {
    state.loaded = payload.length > 0;
    state.todoList = payload;
  },
  setSearchTerms(state, searchTerms) {
    state.searchTerms = searchTerms;
  },
};
