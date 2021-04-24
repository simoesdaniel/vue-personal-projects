<template>
  <div v-if="!loggedIn">
    <h1>Please login in order to check your ToDos</h1>
  </div>
  <todo-list v-else />
</template>

<script>
import TodoList from "../components/todoComponents/TodoList";
import { mapGetters } from "vuex";
export default {
  components: { TodoList },
  computed: {
    ...mapGetters({ loggedIn: "auth/isLoggedIn" }),
  },
};
</script>

<style></style>
