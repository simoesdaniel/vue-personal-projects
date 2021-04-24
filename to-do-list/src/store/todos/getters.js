export default {
  getAllTasks(state) {
    return state.todoList;
  },
  getTask(state, id) {
    const todoItem = state.todoList.find((todo) => todo.id === id);
    return todoItem;
  },
};
