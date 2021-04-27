<template>
  <div class="border rounded mb-4 pb-4 w-96 mx-auto">
    <h2 class="text-light-blue-500 font-bold py-4 text-lg">Sign up form</h2>
    <form @submit.prevent="register">
      <div class="grid grid-cols-2">
        <div>
          <label for="name"> Your name </label>
        </div>
        <div>
          <input
            class="border border-border-gray-500 rounded-sm"
            type="text"
            name="name"
            v-model="name"
          />
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div>
          <label for="email"> Email </label>
        </div>
        <div>
          <input
            class="border border-border-gray-500 rounded-sm"
            type="email"
            name="email"
            v-model="email"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 pt-2">
        <div>
          <label for="password"> Password </label>
        </div>
        <div>
          <input
            class="border border-border-gray-500 rounded-sm"
            type="password"
            name="password"
            v-model="password"
          />
        </div>
      </div>
      <div class="mt-3">
        <button class="bg-light-blue-500 text-white px-5 py-2 rounded">
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const name = ref("");
    const email = ref("");
    const password = ref("");

    const register = async () => {
      let signUpResponse = null;
      const userData = {
        mode: "SIGNUP",
        name: name.value,
        email: email.value,
        password: password.value,
      };
      await store
        .dispatch("auth/authenticate", userData)
        .then((data) => (signUpResponse = data))
        .catch((e) => {
          alert("UPS! Cannot Signup");
          console.log(e);
        });
      await store
        .dispatch("auth/registerUser", {
          userData,
          auth: signUpResponse,
        })
        .then(() => {
          store.dispatch("auth/login", { userData, auth: signUpResponse.data });
          router.replace("/my-todos/");
        })
        .catch((e) => console.error(e));
    };
    return { name, email, password, register };
  },
};
</script>

<style></style>
