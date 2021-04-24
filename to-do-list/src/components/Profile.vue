<template>
  <div>
    <h1>Hello {{ user.name }}</h1>
    <p>Your email: {{ user.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ user: "auth/getProfileData" }),
  },
};
</script>

<style></style>
