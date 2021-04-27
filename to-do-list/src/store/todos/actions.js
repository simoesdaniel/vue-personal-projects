import axios from "axios";
export default {
  async addNewTask({ commit }, payload) {
    const task = { ...payload, status: "TO DO" };
    //request api to store in firebase
    await axios.post(
      "https://todo-sandbox-99320-default-rtdb.firebaseio.com/todos.json",
      task
    );
    commit("new", task);
  },
  async changeState({ commit, state }, taskId) {
    console.log(taskId);
    const todoToUpdate = state.todoList.find((todo) => todo.id === taskId);
    todoToUpdate.status = todoToUpdate.status !== "DONE" ? "DONE" : "TO DO";
    await axios.put(
      "https://todo-sandbox-99320-default-rtdb.firebaseio.com/todos/" +
        taskId +
        ".json",
      todoToUpdate
    );
    //send request to update specific task in firebase to with spefic status, if DONE send UNDONE else DONE
    commit("update", todoToUpdate);
  },
  async deleteTask({ commit }, taskId) {
    await axios.delete(
      "https://todo-sandbox-99320-default-rtdb.firebaseio.com/todos/" +
        taskId +
        ".json"
    );
    //request api to store in firebase
    commit("delete", taskId);
  },
  async loadTasks({ commit }, userId) {
    await axios
      .get("https://todo-sandbox-99320-default-rtdb.firebaseio.com/todos.json")
      .then((res) => {
        const userTasks = [];
        const loadedTask = res.data;
        for (const key in loadedTask) {
          if (loadedTask[key].userId === userId) {
            userTasks.push({ ...loadedTask[key], id: key });
          }
        }
        commit("load", userTasks);
      })
      .catch((e) => console.error(e));
  },
  searchTask({ commit }, searchTerms) {
    commit("setSearchTerms", searchTerms);
  },
};
