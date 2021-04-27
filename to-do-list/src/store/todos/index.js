import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      todoList: [],
      loaded: false,
      searchTerms: "",
    };
  },
  getters,
  mutations,
  actions,
};
