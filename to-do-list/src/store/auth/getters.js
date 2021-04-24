export default {
  getProfileData(state) {
    return state.userData;
  },
  isLoggedIn(state) {
    return state.authToken !== "";
  },
};
