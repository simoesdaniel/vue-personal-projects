<template>
  <section>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span v-if="isLoggedIn"
        ><router-link to="/my-todos/">Todo List</router-link> |</span
      >
      <router-link to="/auth">Auth</router-link>
    </div>
    <router-view />
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ isLoggedIn: "auth/isLoggedIn" }),
  },
  created() {
    this.$store.dispatch("auth/autoLogin");
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 16px 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
