export default {
  setToken(state, token) {
    state.authToken = token;
  },
  setProfileData(state, payload) {
    state.userData = payload;
  },
};
