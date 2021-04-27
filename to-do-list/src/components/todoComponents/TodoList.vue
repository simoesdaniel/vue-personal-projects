<template>
  <div>
    <div class="w-250 mx-auto"><todo-header /></div>

    <div class="mt-16">
      <div
        class="flex flex-row justify-start w-250 mx-auto text-gray-500 space-x-1"
      >
        <div
          class="flex-initial cursor-pointer"
          @click="changeListView('list')"
        >
          <span class="material-icons"> view_list </span>
        </div>
        <div
          class="flex-initial cursor-pointer"
          @click="changeListView('grid')"
        >
          <span class="material-icons"> view_module </span>
        </div>
      </div>
      <transition name="fade">
        <div
          v-if="displayType === 'list' && tasks.length > 0"
          class="flex flex-row justify-start items-center space-x-5 border border-gray-300 w-250 mx-auto p-4 rounded-t font-bold bg-gray-100"
        >
          <div class="flex-1">TITLE</div>
          <div class="flex-1">DESCRIPTION</div>
          <div class="flex-initial">LABEL</div>
          <div class="flex-initial">STATUS</div>
          <div class="flex-1">DUE DATE</div>
          <div class="flex-1 justify-self-end">ACTIONS</div>
        </div>
      </transition>
      <div :class="gridSystem">
        <transition-group name="todo--items">
          <todo-item
            v-for="(task, index) in tasks"
            :todoItem="task"
            :displayType="displayType"
            :key="index"
          />
        </transition-group>
      </div>
      <div v-if="tasks <= 0">
        <h1 class="p-5 text-xl">
          <span class="text-3xl">☹</span> <br />No tasks yet! <br />Start
          planning your agenda click button Add + up there ☝!
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader.vue";
import TodoItem from "./TodoItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { TodoItem, TodoHeader },
  computed: {
    ...mapGetters({
      tasks: "todos/getAllTasks",
    }),
    gridSystem() {
      return this.displayType === "list"
        ? ""
        : "grid grid-cols-3 justify-start items-stretch w-250 mx-auto gap-2";
    },
  },
  data() {
    return {
      displayType: "",
    };
  },
  methods: {
    changeListView(view) {
      localStorage.setItem("displayType", view);
      this.displayType = view;
    },
  },
  created() {
    const userData = this.$store.getters["auth/getProfileData"];
    const currentDisplayType = localStorage.getItem("displayType");
    this.$store.dispatch("todos/loadTasks", userData.userId);
    if (currentDisplayType) {
      this.displayType = currentDisplayType;
    } else {
      this.changeListView("list");
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.todo--items-enter-active {
  /* transition: all .5s ease-out; */
  animation: slideIn 0.5s ease-out;
}
.todo--items-leave-active {
  /* transition: all .5s ease-out; */
  animation: slideOut 0.5s ease-out;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-500px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0px) scale(1);
  }
}
@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0px) scale(0.9);
  }
  to {
    opacity: 0;
    transform: translateX(-500px) scale(1);
  }
}
</style>
