<template>
  <div class="flex py-6">
    <form @submit.prevent="addNewTask">
      <div class="">
        <label for="title">
          Title
          <input
            class="border border-border-gray-500 rounded-sm"
            type="text"
            name="title"
            v-model="title"
          />
        </label>
      </div>
      <div class="">
        <label for="description">
          Details about your task
          <textarea
            class="border border-border-gray-500 rounded-sm"
            name="description"
            v-model="description"
          />
        </label>
      </div>
      <div class="">
        <label for="label">
          Label
          <input
            class="border border-border-gray-500 rounded-sm"
            type="text"
            name="label"
            v-model="label"
          />
        </label>
      </div>
      <div>
        <label for="date">
          Due date
          <input
            class="border border-border-gray-500 rounded-sm"
            type="text"
            name="date"
            v-model="date"
          />
        </label>
      </div>
      <div class="justify-end">
        <button class="bg-light-blue-500 text-gray-800 px-5 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
