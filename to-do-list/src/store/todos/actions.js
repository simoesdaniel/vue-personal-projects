import axios from "axios";
export default {
  addNewTask({ commit }, payload) {
    //request api to store in firebase
    commit("new", payload);
  },
  changeState({ commit, state }, payload) {
    const todoToUpdate = state.todoList.find((todo) => todo.id === payload.id);
    console.log(todoToUpdate);
    //send request to update specific task in firebase to with spefic status, if DONE send UNDONE else DONE
    commit("update", payload.id);
  },
  deleteTask({ commit }, payload) {
    //request api to store in firebase
    commit("delete", payload.id);
  },
  async loadTasks({ commit }) {
    const tasksLoaded = await axios.get(
      "https://todo-sandbox-99320-default-rtdb.firebaseio.com/tasks.json"
    );
    commit("load", tasksLoaded);
  },
};
