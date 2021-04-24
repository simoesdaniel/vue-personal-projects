export default {
  new(state, payload) {
    state.todoList.push(payload);
  },
  delete(state, id) {
    const newTodoList = state.todoList.filter((todo) => todo.id !== id);
    state.todoList = newTodoList;
  },
  update(state, id) {
    const todoItemIndex = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList[todoItemIndex] =
      state.todoList[todoItemIndex].status === "DONE" ? "TODO" : "DONE";
  },
  load(state, payload) {
    state.todoList = payload;
  },
};
