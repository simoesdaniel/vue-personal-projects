<template>
  <div>
    <div>{{ todoItem.title }}</div>
    <div>This will be the task description</div>
    <div>This will be the task label</div>
    <div>This will be the due date</div>
    <div>This will be the task actions</div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {},
  computed: {
    todoItem() {
      const todoItem = this.$store.getters["todos/getTask"](this.id);
      return todoItem;
    },
  },
};
</script>

<style></style>
