<template>
  <form @submit.prevent="addNewTask">
    <div class="">
      <label for="title">
        Title
        <input type="text" name="title" v-model="title" />
      </label>
    </div>
    <div class="">
      <label for="description">
        Details about your task
        <textarea name="description" v-model="description" />
      </label>
    </div>
    <div class="">
      <label for="label">
        Label
        <input type="text" name="label" v-model="label" />
      </label>
    </div>
    <div class="">
      <label for="date">
        Due date
        <input type="text" name="date" v-model="date" />
      </label>
    </div>

    <button>Submit</button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
