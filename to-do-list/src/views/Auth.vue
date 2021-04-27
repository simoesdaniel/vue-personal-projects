<template>
  <div>
    <the-login-form v-if="!loggedIn" />
    <component :is="isLoggedIn" />
  </div>
</template>

<script>
import TheLoginForm from "../components/auth/TheLoginForm.vue";
import TheRegisterForm from "../components/auth/TheRegisterForm.vue";
import Profile from "../components/Profile.vue";
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
