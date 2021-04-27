export default {
  getAllTasks(state) {
    const todoList = state.todoList.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      return -1;
    });
    const regex = new RegExp(/state.searchTerms/i);
    const wordInString = (s, word) =>
      new RegExp("\\b" + word + "\\b", "i").test(s);
    return state.searchTerms
      ? todoList.filter((task) => {
          let found = false;
          found = wordInString(task.title, state.searchTerms);
          return found ? found : wordInString(task.label, state.searchTerms);
        })
      : todoList;
  },
  getTask(state, id) {
    const todoItem = state.todoList.find((todo) => todo.id === id);
    return todoItem;
  },
};
