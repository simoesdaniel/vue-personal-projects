<template>
  <form @submit.prevent="addNewTask">
    <div class="flex flex-col py-4">
      <div class="flex flex-col mr-4">
        <label class="text-light-blue-500" for="title"> Title </label>
        <input
          class="flex-1 border-b-1 border-gray-400 py-3 outline-transparent"
          type="text"
          name="title"
          v-model="task.title"
          placeholder="Your task title"
        />
      </div>
      <div class="flex flex-col mt-4">
        <label class="text-light-blue-500" for="description">
          Details about your task
        </label>
        <textarea
          class="flex-1 border-b-1 border-gray-400 py-3 min-h-20 outline-transparent text-gray-600"
          name="description"
          v-model="task.description"
          placeholder="Your Task description here"
        />
      </div>
      <div class="flex flex-col mt-4">
        <label class="text-light-blue-500" for="label"> Label </label>
        <input
          class="flex-1 border-b-1 border-gray-400 py-3 outline-transparent"
          type="text"
          name="label"
          v-model="task.label"
        />
      </div>
      <div class="flex flex-col mt-4">
        <label class="text-light-blue-500" for="date"> Due date </label>
        <input
          class="flex-1 border-b-1 border-gray-400 py-3 outline-transparent"
          type="date"
          name="date"
          v-model="task.date"
        />
      </div>
      <div class="flex flex-1 mt-4 justify-end">
        <button class="bg-green-500 text-white font-semibold px-5 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        label: "",
        date: "",
        title: "",
        description: "",
      },
    };
  },
  methods: {
    addNewTask() {
      const userData = this.$store.getters["auth/getProfileData"];

      this.$store.dispatch("todos/addNewTask", {
        ...this.task,
        userId: userData.userId,
      });
      this.task.title = "";
      this.task.label = "";
      this.task.date = "";
      this.task.description = "";
    },
  },
};
</script>

<style></style>
