<template>
  <div
    class="grid grid-flow-row auto-rows-fr border border-gray-300 p-4 rounded"
  >
    <div class="flex flex-row justify-start space-x-1 py-2">
      <div class="flex-1 text-left">{{ task.title }}</div>
      <div class="flex-initial">
        <span
          class="bg-blue-500 text-white font-semibold p-1 rounded text-xs"
          >{{ task.label }}</span
        >
      </div>
      <div class="flex-initial">
        <span
          class="text-white font-semibold p-1 rounded text-xs"
          :class="taskStatusBg"
          >{{ task.status }}</span
        >
      </div>
    </div>
    <div class="flex flex-row justify-start text-left">
      <p>{{ task.description }}</p>
    </div>

    <div class="flex flex-row justify-start mt-2">
      <div class="flex-1 text-left">
        <span class="font-semibold">Due date</span>
      </div>
      <div class="flex-initial">{{ task.date }}</div>
    </div>
    <div class="flex flex-col mt-2">
      <div class="flex-1">
        <div class="flex flex-row space-x-2">
          <div class="flex-1">
            <button
              class="bg-green-500 text-white mr-2 p-2 rounded w-full"
              @click="$emit('markTask')"
            >
              {{ markTask }}
            </button>
          </div>
          <div class="flex-1">
            <button
              class="bg-red-500 text-white p-2 rounded w-full"
              @click="$emit('dismiss')"
            >
              DISMISS
            </button>
          </div>
        </div>
      </div>
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
