<template>
  <div>
    <div>
      <form @submit.prevent="searchTask">
        <input type="text" v-model="searchTerm" />
        <button>Search</button>
      </form>
    </div>
    <div>
      <button @click="showDialog">Add +</button>
    </div>
    <base-dialog @close="hideDialog" :open="dialogIsVisible">
      <todo-new-item />
    </base-dialog>
  </div>
</template>

<script>
import BaseDialog from "../base/BaseDialog";
import TodoNewItem from "./TodoNewItem.vue";
export default {
  components: { BaseDialog, TodoNewItem },
  data() {
    return {
      searchTerm: "",
      dialogIsVisible: false,
    };
  },
  methods: {
    searchTask() {},
    addNewTask() {},
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style></style>
