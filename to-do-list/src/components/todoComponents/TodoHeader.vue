<template>
  <div class="flex justify-center">
    <div
      class="mr-2 flex justify-start flex-grow border border-gray-300 rounded pl-2 px-5 py-2 relative"
    >
      <span class="text-gray-300 material-icons absolute"> search </span>
      <input
        class="outline-transparent ml-8 w-full"
        type="text"
        v-model="searchTerm"
        placeholder="Search here for title or label. i.e. Laundry, XPAND"
      />
    </div>
    <div>
      <button
        class="bg-green-500 text-white px-5 py-2 rounded"
        @click="showDialog"
      >
        Add +
      </button>
    </div>
    <base-dialog @close="hideDialog" :open="dialogIsVisible">
      <todo-new-item />
    </base-dialog>
  </div>
</template>

<script>
import BaseDialog from "../base/BaseDialog.vue";
import TodoNewItem from "./TodoNewItem.vue";
export default {
  components: { BaseDialog, TodoNewItem },
  data() {
    return {
      searchTerm: "",
      dialogIsVisible: false,
    };
  },
  watch: {
    searchTerm() {
      if (this.searchTerm.length > 2) {
        this.$store.dispatch("todos/searchTask", this.searchTerm);
      } else if (this.searchTerm.length === 2) {
        this.$store.dispatch("todos/searchTask", "");
      }
    },
  },
  methods: {
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
