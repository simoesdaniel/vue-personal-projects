import axios from "axios";
let timer;

export default {
  login({ commit, dispatch }, payload) {
    // +sign before variable forces a number
    const expiresIn = +payload.auth.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", payload.auth.idToken);
    localStorage.setItem("userId", payload.auth.localId);
    localStorage.setItem("tokenExpiration", expirationDate);
    localStorage.setItem("name", payload.userData.name);
    localStorage.setItem("email", payload.userData.email);

    timer = setTimeout(() => {
      dispatch("autoLogout");
    }, expiresIn);

    commit("setToken", payload.auth.idToken);
    commit("setProfileData", {
      name: payload.userData.name,
      email: payload.userData.email,
      userId: payload.auth.localId,
    });
  },
  logout({ commit }) {
    console.log("logging out...");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("displayTypeSelected");

    clearTimeout(timer);

    commit("setToken", "");
    commit("setProfileData", null);
  },
  authenticate(_, payload) {
    const apiURL =
      payload.mode === "LOGIN"
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6I7oHqj5exchxsXQxQnCnHsWmJYRu1Ao"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6I7oHqj5exchxsXQxQnCnHsWmJYRu1Ao";
    return axios.post(apiURL, {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    });
  },
  registerUser(_, payload) {
    return axios.post(
      "https://todo-sandbox-99320-default-rtdb.firebaseio.com/users.json",
      {
        id: payload.auth.localId,
        email: payload.userData.email,
        fullName: payload.userData.name,
      }
    );
  },
  autoLogin({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      dispatch("autoLogout");
    }, expiresIn);

    if (token && userId && name && email) {
      commit("setToken", token);
      commit("setProfileData", { name, email, userId });
    }
  },
  autoLogout({ dispatch }) {
    dispatch("logout");
  },
};
