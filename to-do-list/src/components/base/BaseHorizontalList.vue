<template>
  <div
    class="flex flex-row justify-start items-center space-x-5 border border-gray-300 w-250 mx-auto p-4 rounded"
  >
    <div class="flex-1">{{ task.title }}</div>
    <div class="flex-1">{{ task.description }}</div>
    <div class="flex-initial">
      <span class="bg-blue-500 text-white font-semibold p-1 rounded">{{
        task.label
      }}</span>
    </div>
    <div class="flex-initial">
      <span
        class="text-white font-semibold p-1 rounded"
        :class="taskStatusBg"
        >{{ task.status }}</span
      >
    </div>
    <div class="flex-1">{{ task.date }}</div>
    <div class="flex-none justify-self-end">
      <button
        class="bg-green-500 text-white mr-2 w-22 p-2 rounded"
        @click="$emit('markTask')"
      >
        {{ markTask }}
      </button>
      <button
        class="bg-red-500 text-white w-22 p-2 rounded"
        @click="$emit('dismiss')"
      >
        DISMISS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: { task: { type: Object } },
  emits: ["dismiss", "markTask"],
  computed: {
    markTask() {
      return this.task.status === "DONE" ? "UNDO" : "FINISH";
    },
    taskStatusBg() {
      return this.task.status === "DONE" ? "bg-green-500" : "bg-gray-300";
    },
  },
};
</script>

<style scoped></style>
