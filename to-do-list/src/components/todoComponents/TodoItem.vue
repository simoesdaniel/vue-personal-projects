<template>
  <component
    :task="todoItem"
    :is="displayAs"
    @dismiss="deleteTask(todoItem.id)"
    @markTask="markAsDone(todoItem.id)"
  >
  </component>
</template>

<script>
import { mapActions } from "vuex";
import BaseHorizontalListVue from "../base/BaseHorizontalList.vue";
import BaseGridListVue from "../base/BaseGridList.vue";
export default {
  components: {
    BaseHorizontalListVue,
    BaseGridListVue,
  },
  props: {
    todoItem: {
      type: Object,
      required: true,
    },
    displayType: {
      type: String,
      required: true,
    },
  },
  computed: {
    displayAs() {
      return this.displayType === "list"
        ? BaseHorizontalListVue
        : BaseGridListVue;
    },
  },
  methods: {
    ...mapActions({
      markAsDone: "todos/changeState",
      deleteTask: "todos/deleteTask",
    }),
  },
};
</script>

<style scoped></style>
