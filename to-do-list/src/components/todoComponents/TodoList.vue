<template>
  <div>
    <todo-header />
    <todo-item v-for="task in tasks" :id="task.id" :key="task.id" />
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader.vue";
import TodoItem from "./TodoItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { TodoItem, TodoHeader },
  computed: {
    ...mapGetters({ tasks: "todos/getAllTasks" }),
  },
};
</script>

<style></style>
