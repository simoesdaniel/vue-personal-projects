import { createStore } from "vuex";
import AuthModule from "./auth/index";
import TodosModule from "./todos/index";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth: AuthModule, todos: TodosModule },
});
