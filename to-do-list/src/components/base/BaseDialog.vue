<template>
  <teleport to="body">
    <div v-if="open" class="backdrop" @click="$emit('close')"></div>
    <transition name="modal">
      <dialog v-if="open" open>
        <div class="flex flex-row pt-5 pb-2 border-b-1 border-gray-300">
          <span class="flex-1 text-lg text-light-blue-500 font-bold"
            >Add a new task</span
          >
          <div>
            <button class="focus:outline-none" @click="$emit('close')">
              <span class="material-icons"> close </span>
            </button>
          </div>
        </div>

        <div>
          <slot></slot>
        </div>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
  props: ["open"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}
dialog {
  position: fixed;
  top: 10vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal .5s ease-out forwards; */
}
.modal-enter-active {
  /* transition: all .5s ease-out; */
  animation: modal 0.5s ease-out;
}
.modal-leave-active {
  /* transition: all .5s ease-out; */
  animation: modal 0.5s ease-in reverse;
}
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
