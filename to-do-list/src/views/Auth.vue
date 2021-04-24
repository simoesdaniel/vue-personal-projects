<template>
  <the-login-form v-if="!loggedIn" />
  <component :is="isLoggedIn" />
</template>

<script>
import TheLoginForm from "../components/auth/TheLoginForm";
import TheRegisterForm from "../components/auth/TheRegisterForm";
import Profile from "../components/Profile";
import { mapGetters } from "vuex";
export default {
  components: {
    TheLoginForm,
    TheRegisterForm,
    Profile,
  },
  computed: {
    ...mapGetters({
      loggedIn: "auth/isLoggedIn",
    }),
    isLoggedIn() {
      return this.loggedIn ? Profile : TheRegisterForm;
    },
  },
};
</script>

<style></style>
